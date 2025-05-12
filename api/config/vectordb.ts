// // WHen using vercel: only use dotenv in dev as it calls for a local path
// import { config } from "dotenv";
// config({ path: ".env" }); // Load .env into process.env

import { DataAPIClient } from "@datastax/astra-db-ts";
import { AstraDBVectorStore } from "@langchain/community/vectorstores/astradb";
import { OpenAIEmbeddings } from "@langchain/openai";

// Load from environment
const endpoint: string = process.env.ASTRA_DB_API_ENDPOINT || "";
const token: string = process.env.ASTRA_DB_APPLICATION_TOKEN || "";
const collection: string = process.env.ASTRA_DB_COLLECTION || "";

if (!endpoint || !token || !collection) {
  throw new Error("Please set environment variables for Astra DB!");
}

export async function getVectorStore() {
  return AstraDBVectorStore.fromExistingIndex(
    new OpenAIEmbeddings({ model: "text-embedding-3-small" }),
    {
      token,
      endpoint,
      collection,
      collectionOptions: {
        vector: { dimension: 1536, metric: "cosine" },
      },
    },
  );
}

export async function getEmbeddingsCollection() {
  const client = new DataAPIClient(token);
  const db = client.db(endpoint);
  return db.collection(collection);
}
