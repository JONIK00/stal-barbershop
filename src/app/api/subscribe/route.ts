import { NextResponse } from "next/server";
import { db } from "@/lib/db";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try { body = await req.json(); } catch { return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 }); }
  const email = String(body.email ?? "").trim().toLowerCase();
  const source = String(body.source ?? "footer").trim() || "footer";
  if (!EMAIL_RE.test(email)) return NextResponse.json({ ok: false, error: "Enter a valid email" }, { status: 422 });
  try {
    const record = await db.subscriber.upsert({ where: { email }, update: { status: "active", source }, create: { email, source, status: "active" } });
    return NextResponse.json({ ok: true, id: record.id });
  } catch (err) { console.error("[api/subscribe] failed", err); return NextResponse.json({ ok: false, error: "Could not subscribe" }, { status: 500 }); }
}

export async function GET() {
  try {
    const count = await db.subscriber.count({ where: { status: "active" } });
    return NextResponse.json({ ok: true, count });
  } catch (err) { console.error("[api/subscribe] count failed", err); return NextResponse.json({ ok: false, error: "Could not count" }, { status: 500 }); }
}
