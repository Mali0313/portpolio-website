import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    // Strict validation
    if (!name || typeof name !== "string" || name.trim().length === 0) {
      return NextResponse.json(
        { error: "Please provide your name." },
        { status: 400 }
      );
    }

    if (
      !email ||
      typeof email !== "string" ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
    ) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length === 0) {
      return NextResponse.json(
        { error: "Please enter your message." },
        { status: 400 }
      );
    }

    // Web3Forms Access Key
    const accessKey =
      process.env.WEB3FORMS_ACCESS_KEY ||
      "4e9a241a-42d8-407f-9a38-3b929c9fb39d";

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: accessKey,
        name: name.trim(),
        email: email.trim(),
        message: message.trim(),
        subject: `New Portfolio Message from ${name.trim()}`,
        from_name: "Muhammad Ali Portfolio",
      }),
    });

    const result = await response.json();

    if (!response.ok || !result.success) {
      return NextResponse.json(
        { error: result.message || "Failed to send message via Web3Forms." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, message: result.message });
  } catch (err: unknown) {
    console.error("Contact API Exception:", err);
    return NextResponse.json(
      { error: "An unexpected error occurred while sending your message." },
      { status: 500 }
    );
  }
}
