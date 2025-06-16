// ✅ 1. GET route at /api/auth/verify/route.ts
import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function GET(req: NextRequest) {
  const token = req.nextUrl.searchParams.get("token");
  if (!token) {
    return NextResponse.json({ error: "Missing token." }, { status: 400 });
  }

  // Fetch the user by token
  const { data, error } = await supabase
    .from("users")
    .select("id, is_verified")
    .eq("verification_token", token)
    .single();

  if (error || !data) {
    return NextResponse.json({ error: "Invalid or expired token." }, { status: 400 });
  }

  if (data.is_verified) {
    return NextResponse.redirect(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/verify?status=already`);
  }

  await supabase
    .from("users")
    .update({ is_verified: true, verification_token: null })
    .eq("id", data.id);

  return NextResponse.redirect(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/verify?status=success`);
}
