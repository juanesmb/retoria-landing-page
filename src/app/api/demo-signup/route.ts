import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";

type DemoSignupBody = {
  email?: string;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as DemoSignupBody;
    const email = body.email?.trim().toLowerCase();

    if (!email) {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    // Ensure table exists: early_adopters (id uuid default uuid_generate_v4(), email text unique, created_at timestamptz)
    // Insert or detect duplicate
    const { data, error } = await supabaseAdmin
      .from("early_adopters")
      .insert({ email })
      .select("id, email, created_at")
      .single();

    if (error) {
      // Unique violation handling
      const message = String(error.message || "");
      const errorWithCode = error as { code?: string };
      const isDuplicate = message.toLowerCase().includes("duplicate") ||
        errorWithCode.code === "23505";
      if (isDuplicate) {
        return NextResponse.json(
          { code: "DUPLICATE_EMAIL", isDuplicate: true },
          { status: 409 }
        );
      }

      return NextResponse.json(
        { error: "Database error", details: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true, data }, { status: 200 });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}


