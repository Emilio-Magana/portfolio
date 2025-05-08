import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import cors from "cors";

import { getVectorStore } from "../../config/vectordb";
import { UpstashRedisCache } from "@langchain/community/caches/upstash_redis";
import { AIMessage, HumanMessage } from "@langchain/core/messages";
import {
  ChatPromptTemplate,
  MessagesPlaceholder,
  PromptTemplate,
} from "@langchain/core/prompts";
import { ChatOpenAI } from "@langchain/openai";
import { Redis } from "@upstash/redis";
import { LangChainStream, Message } from "ai";
import { createStuffDocumentsChain } from "langchain/chains/combine_documents";
import { createHistoryAwareRetriever } from "langchain/chains/history_aware_retriever";
import { createRetrievalChain } from "langchain/chains/retrieval";
import { Readable } from "node:stream";

const app = express();
// const PORT = 3000;

app.use(
  cors({
    origin: "https://portfolio-two-rust-85.vercel.app/",
    methods: ["POST"],
  })
);
app.use(bodyParser.json());

app.post("/api/chat", async (req: Request, res: Response) => {
  try {
    const messages: Message[] = req.body.messages;
    const latestMessage = messages[messages.length - 1].content;

    // Initialize LangChain stream
    const { stream, handlers } = LangChainStream();

    // Redis caching
    const cache = new UpstashRedisCache({
      client: Redis.fromEnv(),
    });

    console.log(Redis.fromEnv());

    // Streaming chat model
    const chatModel = new ChatOpenAI({
      model: "gpt-3.5-turbo-0125",
      streaming: true,
      callbacks: [handlers],
      verbose: true,
      cache,
      temperature: 0,
    });

    // Rephrase model (non-streaming)
    const rephraseModel = new ChatOpenAI({
      model: "gpt-3.5-turbo-0125",
      verbose: true,
      cache,
    });

    // Load vector store retriever
    const retriever = (await getVectorStore()).asRetriever();

    // Format chat history
    const chatHistory = messages
      .slice(0, -1)
      .map((msg) =>
        msg.role === "user"
          ? new HumanMessage(msg.content)
          : new AIMessage(msg.content)
      );

    // Prompt to rephrase into search query
    const rephrasePrompt = ChatPromptTemplate.fromMessages([
      new MessagesPlaceholder("chat_history"),
      ["user", "{input}"],
      [
        "user",
        "Given the above conversation history, generate a search query to look up information relevant to the current question. " +
          "Do not leave out any relevant keywords. Only return the query and no other text.",
      ],
    ]);

    // Use history-aware retriever

    const historyAwareRetrievalChain = await createHistoryAwareRetriever({
      llm: rephraseModel,
      retriever,
      rephrasePrompt,
    });

    // Final system prompt
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

    // Build chain that combines retrieved docs
    const combineDocsChain = await createStuffDocumentsChain({
      llm: chatModel,
      prompt,
      documentPrompt: PromptTemplate.fromTemplate(
        "Page content:\n{page_content}"
      ),
      documentSeparator: "\n------\n",
    });

    // Create retrieval + answer chain
    const retrievalChain = await createRetrievalChain({
      combineDocsChain,
      retriever: historyAwareRetrievalChain,
    });

    await retrievalChain.invoke({
      input: latestMessage,
      chat_history: chatHistory,
    });

    res.setHeader("Content-Type", "text/event-stream");
    res.setHeader("Cache-Control", "no-cache");
    res.setHeader("Connection", "keep-alive");

    Readable.fromWeb(stream).pipe(res);
  } catch (error) {
    console.error("Error in /api/chat:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// app.listen(PORT, () => {
//   console.log(`🚀 Server is running at http://localhost:${PORT}`);
// });
