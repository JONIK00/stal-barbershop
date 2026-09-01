import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET(req: Request) {
  const adminKey = req.headers.get("x-admin-key");
  const expected = process.env.ADMIN_KEY || "dev-admin-key";
  if (adminKey !== expected) return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
  const url = new URL(req.url);
  const status = url.searchParams.get("status") || "pending";
  try {
    const list = await db.review.findMany({ where: { status }, orderBy: { createdAt: "desc" } });
    return NextResponse.json({ ok: true, reviews: list });
  } catch (err) { console.error("[api/reviews/moderate] list failed", err); return NextResponse.json({ ok: false, error: "Could not list reviews" }, { status: 500 }); }
}

export async function PATCH(req: Request) {
  const adminKey = req.headers.get("x-admin-key");
  const expected = process.env.ADMIN_KEY || "dev-admin-key";
  if (adminKey !== expected) return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
  let body: Record<string, unknown>;
  try { body = await req.json(); } catch { return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 }); }
  const id = String(body.id ?? "");
  const status = String(body.status ?? "");
  const allowed = ["approved", "rejected", "pending"];
  if (!id) return NextResponse.json({ ok: false, error: "id is required" }, { status: 422 });
  if (!allowed.includes(status)) return NextResponse.json({ ok: false, error: `status must be one of ${allowed.join(", ")}` }, { status: 422 });
  try {
    const updated = await db.review.update({ where: { id }, data: { status } });
    return NextResponse.json({ ok: true, review: updated });
  } catch (err) { console.error("[api/reviews/moderate] failed", err); return NextResponse.json({ ok: false, error: "Could not update review" }, { status: 500 }); }
}
