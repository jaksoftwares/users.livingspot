"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";


const MAX_IMAGES = 5;
const MAX_IMAGE_SIZE_KB = 200;

type Deposit = {
  type: string;
  amount: string;
  customName?: string;
};

const regions = ["Juja", "Ruiru", "Nairobi", "Thika", "Kahawa", "Gatundu", "Others"];
const rentalTypes = [
  "Single Room",
  "Bedsitter",
  "1 Bedroom",
  "2 Bedrooms",
  "3 Bedrooms",
  "4 Bedrooms",
  "5 Bedrooms",
  "Maisonette",
  "Others",
];
const depositTypes = ["Rent", "Water", "Electricity", "Garbage", "Other"];
const amenitiesList = [
  "Internal shower", "Internal toilet", "Sitting room", "Dining room",
  "Water in house", "Water in compound", "Borehole", "Off-compound water fetching",
  "Security guaranteed", "Lockable gate", "Gate entry restrictions",
];

const promoOptions = [
  { label: "Default (Up to 200 people) – Free", value: "free" },
  { label: "500–1000 people – KES 200", value: "boost_200" },
  { label: "1000–2000 people – KES 400", value: "boost_400" },
  { label: "2000+ people – KES 600", value: "boost_600" },
];

export default function AddRentalPage() {
  const [form, setForm] = useState({
    apartmentName: "",
    region: "",
    address: "",
    rent: "",
    rentalType: "",
    description: "",
    status: "Vacant",
    amenities: [] as string[],
    deposits: [] as Deposit[],
    images: [] as File[],
    promo: "free",
  });

  const [imagePreviews, setImagePreviews] = useState<string[]>([]);
  const [loading] = useState(false);

  const toggleAmenity = (amenity: string) => {
    setForm((prev) => ({
      ...prev,
      amenities: prev.amenities.includes(amenity)
        ? prev.amenities.filter((a) => a !== amenity)
        : [...prev.amenities, amenity],
    }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []).slice(0, MAX_IMAGES);
    const oversized = files.find((f) => f.size > MAX_IMAGE_SIZE_KB * 1024);

    if (oversized) {
      alert(`Each image must be under ${MAX_IMAGE_SIZE_KB}KB. Please compress it before uploading.`);
      return;
    }

    setForm((prev) => ({ ...prev, images: files }));
    setImagePreviews(files.map((file) => URL.createObjectURL(file)));
  };

  const updateDeposit = (index: number, key: keyof Deposit, value: string) => {
    const updated = [...form.deposits];
    updated[index] = {
      ...updated[index],
      [key]: value,
    };
    setForm((prev) => ({ ...prev, deposits: updated }));
  };

  const addDeposit = (type: string) => {
    if (type !== "Other" && form.deposits.some((d) => d.type === type)) return;
    if (type === "Other" && form.deposits.some((d) => d.type === "Other" && (!d.customName || !d.amount))) return;

    const newDeposit =
      type === "Other"
        ? { type, customName: "", amount: "" }
        : { type, amount: "" };

    setForm((prev) => ({
      ...prev,
      deposits: [...prev.deposits, newDeposit],
    }));
  };

  const removeDeposit = (index: number) => {
    const updated = [...form.deposits];
    updated.splice(index, 1);
    setForm({ ...form, deposits: updated });
  };

const router = useRouter();

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  const formData = new FormData();
  formData.append("apartment_name", form.apartmentName);
  formData.append("region", form.region);
  formData.append("address", form.address);
  formData.append("rent", form.rent.toString());
  formData.append("rental_type", form.rentalType);
  formData.append("description", form.description);
  formData.append("status", form.status);
  formData.append("promo", form.promo);

  form.amenities.forEach((a) => formData.append("amenities[]", a));

  form.deposits.forEach((d, i) => {
    formData.append(`deposits[${i}][type]`, d.type);
    formData.append(`deposits[${i}][amount]`, d.amount);
    if (d.customName) formData.append(`deposits[${i}][custom_name]`, d.customName);
  });

  form.images.forEach((file) => formData.append("images", file));

  try {
    const res = await fetch("/api/rentals", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    if (!res.ok) throw new Error(data.error || "Something went wrong");

    alert("Rental submitted successfully!");
    router.push("/properties");
  } catch (err: unknown) {
    if (err instanceof Error) {
      alert("Failed to submit: " + err.message);
    } else {
      alert("Failed to submit: Unknown error");
    }
  }
};

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white rounded-xl shadow-md mb-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">🏘️ Add New Rental</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Apartment Name & Region */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block font-medium">Apartment Name</label>
            <input
              type="text"
              name="apartmentName"
              value={form.apartmentName}
              onChange={(e) => setForm({ ...form, apartmentName: e.target.value })}
              placeholder="e.g., Green View Apartments, Sunrise Villas, Nyumbani Residence"
              className="w-full mt-1 p-2 border rounded-md"
              required
            />
          </div>
          <div>
            <label className="block font-medium">Region</label>
            <select
              value={form.region}
              onChange={(e) => setForm({ ...form, region: e.target.value })}
              className="w-full mt-1 p-2 border rounded-md"
              required
            >
              <option value="">Select Region</option>
              {regions.map((r) => (
                <option key={r} value={r}>
                  {r}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Address */}
        <div>
          <label className="block font-medium">Location / Address</label>
          <input
            type="text"
            value={form.address}
            onChange={(e) => setForm({ ...form, address: e.target.value })}
            placeholder="e.g., Kenyatta Road near Munyaka Stage, Juja"
            className="w-full mt-1 p-2 border rounded-md"
            required
          />
        </div>

        {/* Rent & Rental Type */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block font-medium">Rent (KES)</label>
            <input
              type="number"
              value={form.rent}
              onChange={(e) => setForm({ ...form, rent: e.target.value })}
              placeholder="e.g., 8500"
              className="w-full mt-1 p-2 border rounded-md"
              required
            />
          </div>
          <div>
            <label className="block font-medium">Rental Type</label>
            <select
              value={form.rentalType}
              onChange={(e) => setForm({ ...form, rentalType: e.target.value })}
              className="w-full mt-1 p-2 border rounded-md"
              required
            >
              <option value="">Select Type</option>
              {rentalTypes.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Deposits */}
        <div>
          <label className="block font-medium mb-2">Other Deposits (optional)</label>
          <div className="flex flex-wrap gap-2 mb-4">
            {depositTypes.map((type) => {
              const alreadyAdded = form.deposits.some((d) => d.type === type && type !== "Other");
              const otherPending = form.deposits.some((d) => d.type === "Other" && (!d.customName || !d.amount));
              const isDisabled = (type !== "Other" && alreadyAdded) || (type === "Other" && otherPending);
              return (
                <button
                  key={type}
                  type="button"
                  disabled={isDisabled}
                  onClick={() => addDeposit(type)}
                  className={`px-3 py-1 border rounded text-sm transition ${
                    isDisabled ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-100"
                  }`}
                >
                  + {type}
                </button>
              );
            })}
          </div>
          {form.deposits.map((deposit, i) => (
            <div key={i} className="grid md:grid-cols-3 gap-3 mb-2 items-center">
              {deposit.type === "Other" ? (
                <input
                  type="text"
                  placeholder="Custom name (e.g., Key Deposit, Furniture Deposit)"
                  className="p-2 border rounded"
                  value={deposit.customName}
                  onChange={(e) => updateDeposit(i, "customName", e.target.value)}
                  required
                />
              ) : (
                <input
                  disabled
                  className="p-2 border rounded bg-gray-100"
                  value={deposit.type}
                />
              )}
              <input
                type="number"
                placeholder="Amount (KES)"
                className="p-2 border rounded"
                value={deposit.amount}
                onChange={(e) => updateDeposit(i, "amount", e.target.value)}
                required
              />
              <button
                type="button"
                onClick={() => removeDeposit(i)}
                className="text-red-600 text-sm hover:underline"
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        {/* Amenities */}
        <div>
          <label className="block font-medium mb-2">Amenities (select all that apply)</label>
          <div className="grid md:grid-cols-3 gap-2">
            {amenitiesList.map((a) => (
              <label key={a} className="inline-flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={form.amenities.includes(a)}
                  onChange={() => toggleAmenity(a)}
                />
                <span>{a}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Description */}
        <div>
          <label className="block font-medium">Marketing Description</label>
          <textarea
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            className="w-full mt-1 p-2 border rounded-md min-h-[100px]"
            placeholder="Mention what makes this rental attractive. E.g., Spacious bedsitter with private balcony, high-speed WiFi, modern kitchen, 5 mins walk to JKUAT, 24/7 security, near shops and matatu stage."
            required
          ></textarea>
          <p className="text-sm text-gray-500 mt-1">
            Tip: Mention room size, unique features, nearby landmarks, and who it’s ideal for.
          </p>
        </div>

        {/* Status */}
        <div>
          <label className="block font-medium">Status</label>
          <select
            value={form.status}
            onChange={(e) => setForm({ ...form, status: e.target.value })}
            className="w-full mt-1 p-2 border rounded-md"
          >
            <option value="Vacant">Vacant</option>
            <option value="Booked">Booked</option>
            <option value="Occupied">Occupied</option>
          </select>
        </div>

        {/* Promotion */}
        <div>
          <label className="block font-medium">Boost Your Rental</label>
          <select
            value={form.promo}
            onChange={(e) => setForm({ ...form, promo: e.target.value })}
            className="w-full mt-1 p-2 border rounded-md"
          >
            {promoOptions.map((p) => (
              <option key={p.value} value={p.value}>
                {p.label}
              </option>
            ))}
          </select>
        </div>

        {/* Image Upload */}
        <div>
          <label className="block font-medium">
            Upload Images (max {MAX_IMAGES}, each under {MAX_IMAGE_SIZE_KB}KB)
          </label>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleImageChange}
            className="w-full mt-2 p-2 border rounded"
          />
          <p className="text-sm text-gray-500 mt-1">
            Upload clear, well-lit images: exterior, rooms, kitchen, bathroom, balcony, etc.
          </p>
          {imagePreviews.length > 0 && (
            <div className="flex gap-4 mt-3 flex-wrap">
              {imagePreviews.map((src, i) => (
                <div key={i} className="w-28 h-20 relative border rounded overflow-hidden">
                  <Image src={src} alt={`Preview ${i}`} fill style={{ objectFit: "cover" }} />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
        >
          {loading ? "Uploading..." : "Submit Rental"}
        </button>
      </form>
    </div>
  );
}
