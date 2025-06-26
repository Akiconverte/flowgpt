import axios from "axios";
import AppError from "../errors/AppError";

interface GeminiResponse {
  candidates: {
    content: {
      parts: {
        text: string;
      }[];
    };
  }[];
}

export const handleGemini = async (apiKey: string, prompt: string): Promise<string> => {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`;
  const data = {
    contents: [
      {
        parts: [
          {
            text: prompt,
          },
        ],
      },
    ],
  };

  try {
    const response = await axios.post<GeminiResponse>(url, data);
    if (response.data.candidates && response.data.candidates.length > 0) {
        return response.data.candidates[0].content.parts[0].text;
    }
    throw new Error("Invalid response structure from Gemini API.");
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    throw new AppError("Failed to get response from Gemini API.");
  }
};

interface OllamaResponse {
    model: string;
    created_at: string;
    response: string;
    done: boolean;
}

export const handleOllama = async (
  ollamaUrl: string,
  ollamaModel: string,
  prompt: string
): Promise<string> => {
    const url = `${ollamaUrl}/api/generate`;
    const data = {
        model: ollamaModel,
        prompt: prompt,
        stream: false
    };

    try {
        const response = await axios.post<OllamaResponse>(url, data);
        return response.data.response;
    } catch (error) {
        console.error("Error calling Ollama API:", error);
        throw new AppError("Failed to get response from Ollama API.");
    }
};
