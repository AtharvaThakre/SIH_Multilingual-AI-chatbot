import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    // Parse request body
    const { message } = await req.json();

    // Validate message
    if (!message || typeof message !== 'string' || message.trim().length === 0) {
      return NextResponse.json(
        { error: "Message is required and must be a non-empty string" },
        { status: 400 }
      );
    }

    // Check for API key
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      console.error("GEMINI_API_KEY is not set in environment variables");
      return NextResponse.json(
        { error: "API configuration error. Please contact support." },
        { status: 500 }
      );
    }

    // Initialize Gemini AI
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
      systemInstruction:
        "You are a helpful and friendly AI assistant for health-related questions. Your goal is to provide accurate and easy-to-understand information. Do not answer any questions that are not related to health. If a question is not related to health, simply say: I am a health assistant and I cannot answer that question.",
    });

    // Generate content
    const result = await model.generateContent(message.trim());
    const response = await result.response;
    const text = response.text();

    // Validate response
    if (!text) {
      throw new Error("Empty response from AI model");
    }

    return NextResponse.json({ 
      text,
      success: true 
    });

  } catch (error: any) {
    // Log detailed error for debugging
    console.error("Chat API Error:", {
      message: error.message,
      stack: error.stack,
      name: error.name,
      timestamp: new Date().toISOString()
    });

    // Return user-friendly error message
    if (error.message?.includes('API_KEY')) {
      return NextResponse.json(
        { error: "API configuration error. Please contact support." },
        { status: 500 }
      );
    }

    if (error.message?.includes('quota') || error.message?.includes('limit')) {
      return NextResponse.json(
        { error: "Service temporarily unavailable due to high demand. Please try again in a few minutes." },
        { status: 429 }
      );
    }

    if (error.message?.includes('network') || error.message?.includes('fetch')) {
      return NextResponse.json(
        { error: "Network connection issue. Please check your internet and try again." },
        { status: 503 }
      );
    }

    // Generic error
    return NextResponse.json(
      { error: "Unable to process your request right now. Please try again later." },
      { status: 500 }
    );
  }
}

// Handle other HTTP methods
export async function GET() {
  return NextResponse.json(
    { error: "Method not allowed. Use POST to send messages." },
    { status: 405 }
  );
}