import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { message } = await req.json();

  if (!process.env.GEMINI_API_KEY) {
    return NextResponse.json(
      { error: "Missing Gemini API key" },
      { status: 500 }
    );
  }

  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
    systemInstruction:
      "You are a helpful and friendly AI assistant for health-related questions. Your goal is to provide accurate and easy-to-understand information. Do not answer any questions that are not related to health. If a question is not related to health, simply say: I am a health assistant and I cannot answer that question.",
  });

  try {
    const result = await model.generateContent(message);
    const response = await result.response;
    const text = response.text();
    return NextResponse.json({ text });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to generate content" },
      { status: 500 }
    );
  }
}