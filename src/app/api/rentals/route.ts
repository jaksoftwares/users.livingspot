// app/api/rentals/route.ts
import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

type Deposit = {
  type: string;
  amount: string;
  customName?: string;
};

type RentalForm = {
  user_id: string;
  apartmentName: string;
  region: string;
  address: string;
  rent: string;
  rentalType: string;
  description: string;
  status: string;
  promo: string;
  imageUrls?: string[];
  deposits?: Deposit[];
  amenities?: string[];
};

export async function POST(req: Request) {
  try {
    const form: RentalForm = await req.json();

    // Insert rental
    const { data: rental, error: rentalError } = await supabase
      .from("rentals")
      .insert({
        user_id: form.user_id,
        apartment_name: form.apartmentName,
        region: form.region,
        address: form.address,
        rent: form.rent,
        rental_type: form.rentalType,
        description: form.description,
        status: form.status,
        promo: form.promo,
      })
      .select()
      .single();

    if (rentalError) {
      return NextResponse.json({ error: rentalError.message }, { status: 500 });
    }

    // Insert images
    if (form.imageUrls?.length) {
      const imageInserts = form.imageUrls.map((url) => ({ rental_id: rental.id, url }));
      await supabase.from("images").insert(imageInserts);
    }

    // Insert deposits
    if (form.deposits?.length) {
      const depositInserts = form.deposits.map((d) => ({
        rental_id: rental.id,
        type: d.type,
        amount: d.amount,
        custom_name: d.customName || null,
      }));
      await supabase.from("deposits").insert(depositInserts);
    }

    // Insert amenities
    if (form.amenities?.length) {
      const amenityInserts = form.amenities.map((a) => ({ rental_id: rental.id, name: a }));
      await supabase.from("amenities").insert(amenityInserts);
    }

    return NextResponse.json({ success: true, rental });
  } catch (err) {
    console.error("POST /api/rentals error:", err);
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}