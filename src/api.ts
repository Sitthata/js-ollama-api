import OpenAI from "openai";
import type { ChatCompletion } from "openai/resources/index.mjs";

const openai = new OpenAI({
  baseURL: "http://localhost:11434/v1",
  apiKey: "ollama",
});

export async function getCompletion(messages: string): Promise<ChatCompletion> {
  return await openai.chat.completions.create({
    model: "llama3.1:latest",
    messages: [
      {
        role: "system",
        content:
          "You are an AI assistant helping a teacher interact with their student named Pegent. Keep responses friendly, concise, and appropriate for a student-teacher interaction. Also the course instructor of this course named First",
      },
      {
        role: "user",
        content: messages,
      },
    ],
  });
}
