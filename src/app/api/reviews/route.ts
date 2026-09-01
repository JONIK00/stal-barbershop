import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET() {
  try {
    const list = await db.review.findMany({ where: { status: "approved" }, orderBy: { createdAt: "desc" } });
    return NextResponse.json({ ok: true, reviews: list });
  } catch (err) { console.error("[api/reviews] list failed", err); return NextResponse.json({ ok: false, error: "Could not list reviews" }, { status: 500 }); }
}

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try { body = await req.json(); } catch { return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 }); }
  const name = String(body.name ?? "").trim();
  const text = String(body.text ?? "").trim();
  const rating = Number(body.rating ?? 0);
  const role = String(body.role ?? "Guest").trim() || "Guest";
  if (!name || name.length < 2) return NextResponse.json({ ok: false, error: "Name is required" }, { status: 422 });
  if (!text || text.length < 10) return NextResponse.json({ ok: false, error: "Tell us a bit more" }, { status: 422 });
  if (!Number.isInteger(rating) || rating < 1 || rating > 5) return NextResponse.json({ ok: false, error: "Rating must be 1–5" }, { status: 422 });
  try {
    const record = await db.review.create({ data: { name: name.slice(0, 80), text: text.slice(0, 800), rating, role: role.slice(0, 60), status: "pending" } });
    return NextResponse.json({ ok: true, id: record.id });
  } catch (err) { console.error("[api/reviews] create failed", err); return NextResponse.json({ ok: false, error: "Could not save review" }, { status: 500 }); }
}
