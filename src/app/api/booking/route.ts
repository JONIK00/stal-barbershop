import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try { body = await req.json(); } catch { return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 }); }
  const name = String(body.name ?? "").trim();
  const phone = String(body.phone ?? "").trim();
  const service = String(body.service ?? "").trim();
  if (!name || name.length < 2) return NextResponse.json({ ok: false, error: "Name is required" }, { status: 422 });
  if (!phone || phone.replace(/\D/g, "").length < 6) return NextResponse.json({ ok: false, error: "Valid phone is required" }, { status: 422 });
  if (!service) return NextResponse.json({ ok: false, error: "Service is required" }, { status: 422 });
  try {
    const record = await db.bookingRequest.create({ data: { name, phone, service, master: body.master ? String(body.master) : null, date: body.date ? String(body.date) : null, time: body.time ? String(body.time) : null, notes: body.notes ? String(body.notes).slice(0, 500) : null } });
    return NextResponse.json({ ok: true, id: record.id });
  } catch (err) { console.error("[api/booking] create failed", err); return NextResponse.json({ ok: false, error: "Could not save request" }, { status: 500 }); }
}

export async function GET() {
  try {
    const [count, recent] = await Promise.all([db.bookingRequest.count(), db.bookingRequest.findMany({ take: 10, orderBy: { createdAt: "desc" } })]);
    return NextResponse.json({ ok: true, count, recent });
  } catch (err) { console.error("[api/booking] list failed", err); return NextResponse.json({ ok: false, error: "Could not list requests" }, { status: 500 }); }
}
