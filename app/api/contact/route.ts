import { NextResponse } from "next/server";
import { z } from "zod";

export const runtime = "nodejs";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your full name.").max(100, "Name is too long."),
  email: z.string().trim().email("Please enter a valid email address.").max(150),
  phone: z
    .string()
    .trim()
    .max(30, "Phone number is too long.")
    .regex(/^[0-9+()\-.\s]*$/, "Please use digits and + ( ) - only.")
    .optional()
    .default(""),
  service: z.string().trim().min(1, "Please select a service.").max(100),
  message: z.string().trim().min(10, "Please write at least a few words (10+ characters).").max(3000, "Message is too long."),
  consent: z.literal(true, { errorMap: () => ({ message: "Please confirm that you agree to the Privacy Policy." }) }),
  company: z.string().optional(), // honeypot
  elapsed: z.number().optional(),
});

// Basic in-memory rate limit (per server instance). Use a shared store for stricter limits.
const hits = new Map<string, number[]>();
const WINDOW = 10 * 60 * 1000;
const MAX = 5;

function limited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > MAX;
}

const esc = (s: string) => s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

// Simple pattern to flag possible SSNs in the message so they are not forwarded.
const SSN = /\b\d{3}-\d{2}-\d{4}\b/;

export async function POST(req: Request) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (limited(ip)) return NextResponse.json({ ok: false, error: "rate_limited" }, { status: 429 });

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "bad_request" }, { status: 400 });
  }

  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    const errors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const k = String(issue.path[0]);
      if (!errors[k]) errors[k] = issue.message;
    }
    return NextResponse.json({ ok: false, errors }, { status: 422 });
  }

  const d = parsed.data;
  // Spam: honeypot filled or submitted too quickly. Pretend success.
  if ((d.company && d.company.length > 0) || (typeof d.elapsed === "number" && d.elapsed < 2500)) {
    return NextResponse.json({ ok: true });
  }

  if (SSN.test(d.message)) {
    return NextResponse.json(
      { ok: false, errors: { message: "Please remove any Social Security number from your message. We will explain how to share sensitive information safely." } },
      { status: 422 }
    );
  }

  const key = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO;
  const from = process.env.CONTACT_FROM || "USA Tax Website <onboarding@resend.dev>";
  if (!key || !to) return NextResponse.json({ ok: false, error: "not_configured" }, { status: 503 });

  const html = `
    <h2>New message from the USA Tax website</h2>
    <p><strong>Name:</strong> ${esc(d.name)}</p>
    <p><strong>Email:</strong> ${esc(d.email)}</p>
    <p><strong>Phone:</strong> ${esc(d.phone || "-")}</p>
    <p><strong>Service:</strong> ${esc(d.service)}</p>
    <p><strong>Message:</strong></p>
    <p style="white-space:pre-wrap">${esc(d.message)}</p>
    <p style="color:#666;font-size:12px">Privacy consent: yes</p>`;

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from,
        to: to.split(",").map((s) => s.trim()),
        reply_to: d.email,
        subject: `Website inquiry: ${d.service} - ${d.name}`.slice(0, 150),
        html,
      }),
    });
    if (!res.ok) return NextResponse.json({ ok: false, error: "send_failed" }, { status: 502 });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: "send_failed" }, { status: 502 });
  }
}
