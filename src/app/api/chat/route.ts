import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextRequest, NextResponse } from "next/server";

// Force dynamic rendering for this API route
export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  try {
    // Parse request body
    const { message, messages = [] } = await req.json();

    // Validate message
    if (
      !message ||
      typeof message !== "string" ||
      message.trim().length === 0
    ) {
      return NextResponse.json(
        { error: "Message is required and must be a non-empty string" },
        { status: 400 }
      );
    }

    // Check for API key
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      console.error("GEMINI_API_KEY is not set in environment variables");
      console.error(
        "Available env vars:",
        Object.keys(process.env).filter((key) => key.includes("API"))
      );
      return NextResponse.json(
        {
          error:
            "API configuration error. Please set GEMINI_API_KEY environment variable.",
        },
        { status: 500 }
      );
    }

    console.log("Attempting to connect to Gemini API...");

    // Initialize Gemini AI
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({
      model: "gemini-2.0-flash",
      systemInstruction: `You are a AI health assistant 

  Guidelines:
  - Always give clear, structured, step-by-step explanations.
  - Write in simple language suitable for a general audience with limited medical background.
  - Use clean formatting without markdown asterisks (*) or unnecessary symbols. Use plain text with line breaks for clarity.
  - Provide preventive advice, lifestyle suggestions, vaccination timelines, and basic symptom awareness.
  - Do not repeatedly tell users to "consult a doctor" unless the symptoms are life-threatening or very serious (e.g., chest pain, difficulty breathing, seizures, unconsciousness).
  - Instead of saying "see a doctor," focus on self-care guidance, home remedies, and awareness while still encouraging professional help in serious cases.
  - Never output raw asterisks for bold text. If emphasis is needed, use CAPITALIZATION or simple clear words.
  - if user asks about anything other than health, gently remind them that you are a health assistant designed to only provide health-related information. Politely decline to answer non-health questions.

  Output Format:
  - Title line (topic in short words)
  - Short explanation (2–3 sentences)
  Rules for answers:
  - Respond only to the specific question asked. Do not add irrelevant information.
  - Give answers in clean bullet points or numbered lists with proper spacing and alignment.  
  - Keep answers concise (short sentences, no long paragraphs).  
  - Do not include extra disclaimers such as “for emergencies” or “consult a doctor.”  
  - Do not include safety warnings unless the user specifically asks about side effects or risks.  
  - Do not use markdown symbols like *asterisks*. Use plain text only.  
  - Do not repeat the same information.  
  - Always stay factual and practical.`,
    });

    // Prepare conversation history for context
    let conversationContext = "";
    if (messages && messages.length > 0) {
      conversationContext = messages
        .filter(
          (msg: any) =>
            msg.role !== "assistant" ||
            msg.content !==
              "Hi! I'm your Vital AI health assistant. How can I help you today?"
        )
        .map((msg: any) => `${msg.role}: ${msg.content}`)
        .join("\n");
    }

    // Create the full prompt with context
    const fullPrompt = conversationContext
      ? `Previous conversation:\n${conversationContext}\n\nCurrent message: ${message.trim()}`
      : message.trim();

    // Generate content
    const result = await model.generateContent(fullPrompt);
    const response = await result.response;
    const text = response.text();

    // Validate response
    if (!text) {
      throw new Error("Empty response from AI model");
    }

    console.log("Successfully generated response");

    return NextResponse.json({
      text,
      success: true,
    });
  } catch (error: any) {
    // Log detailed error for debugging
    console.error("Chat API Error:", {
      message: error.message,
      stack: error.stack,
      name: error.name,
      timestamp: new Date().toISOString(),
      errorCode: error.code,
      status: error.status,
    });

    // Return user-friendly error message based on error type
    if (
      error.message?.includes("API_KEY") ||
      error.message?.includes("authentication")
    ) {
      return NextResponse.json(
        {
          error: "API configuration error. Please set up your GEMINI_API_KEY.",
        },
        { status: 500 }
      );
    }

    if (
      error.message?.includes("quota") ||
      error.message?.includes("limit") ||
      error.status === 429
    ) {
      return NextResponse.json(
        {
          error:
            "Service temporarily unavailable due to high demand. Please try again in a few minutes.",
        },
        { status: 429 }
      );
    }

    if (
      error.message?.includes("network") ||
      error.message?.includes("fetch") ||
      error.code === "NETWORK_ERROR"
    ) {
      return NextResponse.json(
        {
          error:
            "Network connection issue. Please check your internet and try again.",
        },
        { status: 503 }
      );
    }

    if (error.status === 403) {
      return NextResponse.json(
        { error: "API access denied. Please check your API key permissions." },
        { status: 403 }
      );
    }

    if (error.status === 400) {
      return NextResponse.json(
        { error: "Invalid request. Please try rephrasing your question." },
        { status: 400 }
      );
    }

    // Generic error
    return NextResponse.json(
      {
        error:
          "Unable to process your request right now. Please try again later.",
      },
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
