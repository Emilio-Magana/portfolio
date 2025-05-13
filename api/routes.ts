import { getVectorStore } from "../src/config/vectordb.js";
import { UpstashRedisCache } from "@langchain/community/caches/upstash_redis";
import { AIMessage, HumanMessage } from "@langchain/core/messages";
import {
  ChatPromptTemplate,
  MessagesPlaceholder,
  PromptTemplate,
} from "@langchain/core/prompts";
import { ChatOpenAI } from "@langchain/openai";
import { Redis } from "@upstash/redis";
// import { VercelRequest } from "@vercel/node";
import { LangChainStream, Message, StreamingTextResponse } from "ai";
import { createStuffDocumentsChain } from "langchain/chains/combine_documents";
import { createHistoryAwareRetriever } from "langchain/chains/history_aware_retriever";
import { createRetrievalChain } from "langchain/chains/retrieval";

export const runtime = "edge";

// Function to decode the request body
async function parseRequestBody(req) {
  const text = await req.text(); // This would be available for non-Edge runtimes, so let's use the method as a fallback.
  const decoder = new TextDecoder();
  const decodedBody = decoder.decode(text);
  return JSON.parse(decodedBody);
}

export default async function handler(req: Request) {
  const t0 = Date.now();
  console.log("Start");

  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
    });
  }

  try {
    const { stream, handlers } = LangChainStream({
      onStart: () => console.log("[stream] started"),
      onFinal: () => console.log("\n[stream] ended"),
    });
    const retriever = (await getVectorStore()).asRetriever({ k: 3 });
    console.log("Got vector store:", Date.now() - t0);

    // const body = req.body;
    // const body = await req.json();
    const body = await parseRequestBody(req);
    const messages = body.messages;

    const latestMessage = messages[messages.length - 1].content;

    const cache = new UpstashRedisCache({
      client: Redis.fromEnv(),
    });

    const chatModel = new ChatOpenAI({
      model: "gpt-3.5-turbo-0125",
      streaming: true,
      callbacks: [handlers],
      verbose: true,
      temperature: 0,
    });
    const rephraseModel = new ChatOpenAI({
      model: "gpt-3.5-turbo-0125",
      verbose: true,
      cache,
    });

    // const retriever = (
    //   await getVectorStore()
    // ).asRetriever() as unknown as Runnable<string, Document[]>;

    const chatHistory = messages
      .slice(-6, -1)
      .map((msg: Message) =>
        msg.role === "user"
          ? new HumanMessage(msg.content)
          : new AIMessage(msg.content),
      );
    const rephrasePrompt = ChatPromptTemplate.fromMessages([
      new MessagesPlaceholder("chat_history"),
      ["user", "{input}"],
      [
        "user",
        "Given the above conversation history, generate a search query to look up information relevant to the current question. " +
          "Do not leave out any relevant keywords. Only return the query and no other text.",
      ],
    ]);
    const historyAwareRetrievalChain = await createHistoryAwareRetriever({
      llm: rephraseModel,
      retriever,
      rephrasePrompt,
    });
    console.log("Created retriever:", Date.now() - t0);

    const prompt = ChatPromptTemplate.fromMessages([
      [
        "system",
        "You are Emilio Support, a friendly chatbot for Emilio's personal developer portfolio website. " +
          "You are trying to convince potential employers to hire Emilio as a software developer. " +
          "Be concise and only answer the user's questions based on the provided context below. " +
          "Provide links to pages that contain relevant information about the topic from the given context. " +
          "Format your messages in markdown.\n\n" +
          "Context:\n{context}",
      ],
      new MessagesPlaceholder("chat_history"),
      ["user", "{input}"],
    ]);
    const combineDocsChain = await createStuffDocumentsChain({
      llm: chatModel,
      prompt,
      documentPrompt: PromptTemplate.fromTemplate(
        "Page content:\n{page_content}",
      ),
      documentSeparator: "\n------\n",
    });
    const retrievalChain = await createRetrievalChain({
      combineDocsChain,
      retriever: historyAwareRetrievalChain,
    });
    try {
      await retrievalChain.invoke(
        {
          input: latestMessage,
          chat_history: chatHistory,
        },
        {
          callbacks: [handlers],
        },
      );
      console.log("Chain completed:", Date.now() - t0);
    } catch (err) {
      console.error("Chain failed: oh no ", err);
    }
    console.log("stream:", stream);
    await handlers.handleLLMEnd?.({ _output: "done" }, "manual-run-id");
    return new StreamingTextResponse(stream);
  } catch (error) {
    console.error("Error in /api:", error);

    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
    });
  }
}
