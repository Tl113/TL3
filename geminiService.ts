
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export async function generateCeramicStory(productName: string, artistName: string): Promise<string> {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `写一段优美、短小（50字左右）的文字，描述陶瓷作品“${productName}”的灵魂和制作它的匠人“${artistName}”之间的连接。风格要富有诗意，像是在艺术画册里的介绍。`,
      config: {
        temperature: 0.8,
        topP: 0.95,
      }
    });
    return response.text || "每一件瓷器都是土与火的歌谣。";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "指尖与泥土的对话，在火焰中化为永恒。";
  }
}
