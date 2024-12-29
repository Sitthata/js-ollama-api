// api.ts
import OpenAI from "openai";
import type { ChatCompletion } from "openai/resources/index.mjs";

const openai = new OpenAI({
  baseURL: "http://localhost:11434/v1", 
  apiKey: "ollama", 
});

export async function analyzeResume(
  resumeText: string
): Promise<ChatCompletion> {
  const messages = [
    {
      role: "system",
      name: "system",
      content: `
        You are an AI assistant specialized in HR tasks.
        Your role is to analyze candidate resumes and assist HR professionals in decision-making.
        You should evaluate resumes based on the provided job description and selection criteria.
        Provide concise and actionable insights to help HR make informed decisions.
      `,
    },
    {
      role: "user",
      name: "user",
      content: `
        **Job Description:**
        - **Position:** Software Engineer
        - **Responsibilities:** Develop and maintain web applications, collaborate with cross-functional teams, participate in code reviews.
        - **Qualifications:** Bachelor's degree in Computer Science or related field, 3+ years of experience in software development, proficiency in JavaScript and Python.

        **Selection Criteria:**
        1. Relevant work experience
        2. Technical skills
        3. Educational background
        4. Cultural fit

        **Candidate Resume:**
        ${resumeText}

        **Instructions:**
        - Provide a summary of the candidate's strengths and areas for improvement.
        - Assess the candidate's fit based on the selection criteria.
        - Rate the candidate on a scale of 1 to 5 for each criterion.
        - Offer a final recommendation (e.g., Strongly Recommend, Recommend, Neutral, Do Not Recommend).
      `,
    },
  ];

  try {
    const completion = await openai.chat.completions.create({
      model: "llama3.1:latest",
      messages: messages,
      temperature: 0.7, // Adjust temperature for creativity vs. determinism
      max_tokens: 500, // Adjust based on the desired length of response
    });

    return completion;
  } catch (error) {
    console.error("Error analyzing resume:", error);
    throw error;
  }
}
