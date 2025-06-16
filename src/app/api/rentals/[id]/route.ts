import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

// Validation schema for updates
const RentalUpdateSchema = z.object({
  apartment_name: z.string(),
  region: z.string(),
  address: z.string(),
  rent: z.number(),
  rental_type: z.string(),
  description: z.string(),
  status: z.enum(["Vacant", "Booked", "Occupied"]),
  promo: z.string().optional().nullable(),
  images: z.array(z.string()).optional(), // Cloudinary URLs
  deposits: z
    .array(
      z.object({
        type: z.string(),
        amount: z.number(),
        custom_name: z.string().optional().nullable(),
      })
    )
    .optional(),
  amenities: z.array(z.string()).optional(),
});

// ---------- GET rental by ID ----------
export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const supabase = createRouteHandlerClient({ cookies });

  const { data, error } = await supabase
    .from("rentals")
    .select(`
      *,
      rental_images(image_url),
      rental_deposits(*),
      rental_amenities(amenity)
    `)
    .eq("id", params.id)
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data);
}

// ---------- UPDATE rental ----------
export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const supabase = createRouteHandlerClient({ cookies });
  const json = await req.json();

  const parsed = RentalUpdateSchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.format() }, { status: 400 });
  }

  const {
    apartment_name,
    region,
    address,
    rent,
    rental_type,
    description,
    status,
    promo,
    images = [],
    deposits = [],
    amenities = [],
  } = parsed.data;

  // 1. Update main rental record
  const { error: rentalErr } = await supabase
    .from("rentals")
    .update({
      apartment_name,
      region,
      address,
      rent,
      rental_type,
      description,
      status,
      promo,
    })
    .eq("id", params.id);

  if (rentalErr) {
    return NextResponse.json({ error: rentalErr.message }, { status: 500 });
  }

  // 2. Replace rental_deposits
  await supabase.from("rental_deposits").delete().eq("rental_id", params.id);
  if (deposits.length > 0) {
    const depositPayload = deposits.map((d) => ({
      ...d,
      rental_id: params.id,
    }));
    await supabase.from("rental_deposits").insert(depositPayload);
  }

  // 3. Replace rental_amenities
  await supabase.from("rental_amenities").delete().eq("rental_id", params.id);
  if (amenities.length > 0) {
    const amenityPayload = amenities.map((a) => ({
      amenity: a,
      rental_id: params.id,
    }));
    await supabase.from("rental_amenities").insert(amenityPayload);
  }

  // 4. Replace rental_images
  await supabase.from("rental_images").delete().eq("rental_id", params.id);
  if (images.length > 0) {
    const imagePayload = images.map((url) => ({
      image_url: url,
      rental_id: params.id,
    }));
    await supabase.from("rental_images").insert(imagePayload);
  }

  return NextResponse.json({ success: true });
}

// ---------- DELETE rental ----------
export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const supabase = createRouteHandlerClient({ cookies });

  // 1. Delete related data first
  await supabase.from("rental_images").delete().eq("rental_id", params.id);
  await supabase.from("rental_deposits").delete().eq("rental_id", params.id);
  await supabase.from("rental_amenities").delete().eq("rental_id", params.id);

  // 2. Delete rental itself
  const { error } = await supabase.from("rentals").delete().eq("id", params.id);
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
