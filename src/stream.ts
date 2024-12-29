import OpenAI from "openai";

const openai = new OpenAI({
  baseURL: "http://localhost:11434/v1",
  apiKey: "ollama",
});

const completion = await openai.chat.completions.create({
  model: "phi3:latest",
  messages: [
    {
      role: "user",
      content: "Say hi in pirate accents. keep it short cool in 1 sentence",
    },
  ],
  stream: true,
});

for await (const message of completion) {
  const content = message.choices[0]?.delta?.content;

  if (content) {
    process.stdout.write(content)
  }
}
