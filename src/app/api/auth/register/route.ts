import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import bcrypt from "bcryptjs";
import { nanoid } from "nanoid";
import { sendVerificationEmail } from "@/utils/email";

export async function POST(req: Request) {
  const body = await req.json();
  const {
    fullName,
    email,
    password,
    phone,
    location,
    propertyName,
    role,
  } = body;

  if (!fullName || !email || !password || !phone || !role) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  try {
    // Check if user already exists
    const { data: existing } = await supabase
      .from("users")
      .select("id")
      .eq("email", email)
      .single();

    if (existing) {
      return NextResponse.json({ error: "Email is already registered." }, { status: 400 });
    }

    const passwordHash = await bcrypt.hash(password, 10);
    const token = nanoid(32);

    const { error: insertError } = await supabase.from("users").insert({
      full_name: fullName,
      email,
      password_hash: passwordHash,
      phone,
      location: role === "seeker" ? location : null,
      property_name: role === "houseowner" ? propertyName : null,
      role,
      verification_token: token,
      is_verified: false,
    });

    if (insertError) {
      return NextResponse.json({ error: "Failed to create account." }, { status: 500 });
    }

    await sendVerificationEmail(email, fullName, token);

    return NextResponse.json({ message: "Registration successful. Please check your email to verify." });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Server error during registration." }, { status: 500 });
  }
}
