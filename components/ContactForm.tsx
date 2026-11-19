"use client";

import { useRef, useState } from "react";
import { services, site } from "@/lib/site";

type Status = "idle" | "sending" | "success" | "error" | "unavailable";
type Errors = Partial<Record<"name" | "email" | "phone" | "service" | "message" | "consent", string>>;

const field = "mt-2 block w-full rounded-md border border-line bg-white px-4 py-3 text-ink placeholder:text-ink-soft/70 focus:border-navy focus:outline-none focus:ring-2 focus:ring-gold/60 aria-[invalid=true]:border-red-700";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Errors>({});
  const startedAt = useRef<number>(Date.now());
  const statusRef = useRef<HTMLDivElement>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    const payload = { ...data, consent: data.consent === "on", elapsed: Date.now() - startedAt.current };

    setStatus("sending");
    setErrors({});
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json().catch(() => ({}));
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else if (res.status === 422 && json.errors) {
        setErrors(json.errors);
        setStatus("idle");
        const first = Object.keys(json.errors)[0];
        (form.elements.namedItem(first) as HTMLElement | null)?.focus();
        return;
      } else if (res.status === 503) {
        setStatus("unavailable");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
    requestAnimationFrame(() => statusRef.current?.focus());
  }

  if (status === "success") {
    return (
      <div ref={statusRef} tabIndex={-1} role="status" className="rounded-xl border border-line bg-mist p-10">
        <h2 className="h-display text-[1.9rem] text-navy">Thank you. Your message was sent.</h2>
        <p className="mt-3 text-ink-soft">We will reply by email with the next steps. Please do not send documents until we explain how to share them safely.</p>
        <button type="button" className="btn-ghost-dark mt-8" onClick={() => setStatus("idle")}>Send another message</button>
      </div>
    );
  }

  const err = (k: keyof Errors) =>
    errors[k] ? (
      <p id={`${k}-error`} className="mt-2 text-[0.92rem] font-medium text-red-700">{errors[k]}</p>
    ) : null;
  const a11y = (k: keyof Errors) => ({ "aria-invalid": errors[k] ? true : undefined, "aria-describedby": errors[k] ? `${k}-error` : undefined });

  return (
    <form noValidate onSubmit={onSubmit} className="space-y-6" aria-busy={status === "sending"}>
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="font-semibold text-navy">Full Name <span aria-hidden="true" className="text-gold-dark">*</span></label>
          <input id="name" name="name" type="text" autoComplete="name" required maxLength={100} className={field} {...a11y("name")} />
          {err("name")}
        </div>
        <div>
          <label htmlFor="email" className="font-semibold text-navy">Email <span aria-hidden="true" className="text-gold-dark">*</span></label>
          <input id="email" name="email" type="email" autoComplete="email" required maxLength={150} spellCheck={false} className={field} {...a11y("email")} />
          {err("email")}
        </div>
        <div>
          <label htmlFor="phone" className="font-semibold text-navy">Phone <span className="font-normal text-ink-soft">(optional)</span></label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" maxLength={30} className={field} {...a11y("phone")} />
          {err("phone")}
        </div>
        <div>
          <label htmlFor="service" className="font-semibold text-navy">Service of Interest <span aria-hidden="true" className="text-gold-dark">*</span></label>
          <select id="service" name="service" required defaultValue="" className={field} {...a11y("service")}>
            <option value="" disabled>Select a service</option>
            {services.map((s) => (
              <option key={s.slug} value={s.title}>{s.title}</option>
            ))}
            <option value="Not sure yet">Not sure yet</option>
          </select>
          {err("service")}
        </div>
      </div>
      <div>
        <label htmlFor="message" className="font-semibold text-navy">Message <span aria-hidden="true" className="text-gold-dark">*</span></label>
        <p id="message-hint" className="mt-1 text-[0.92rem] text-ink-soft">Briefly describe your situation. Do not include your SSN, account numbers or financial documents.</p>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          minLength={10}
          maxLength={3000}
          className={field}
          aria-invalid={errors.message ? true : undefined}
          aria-describedby={errors.message ? "message-hint message-error" : "message-hint"}
        />
        {err("message")}
      </div>

      {/* Honeypot: hidden from people and assistive technology */}
      <div aria-hidden="true" className="absolute left-[-9999px] h-px w-px overflow-hidden">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div>
        <div className="flex items-start gap-3">
          <input id="consent" name="consent" type="checkbox" required className="mt-1 h-5 w-5 shrink-0 accent-navy" {...a11y("consent")} />
          <label htmlFor="consent" className="text-ink-soft">
            I agree that USA Tax may use the information in this form to reply to my request, as described in the{" "}
            <a href="/privacy" className="font-semibold text-gold-dark underline">Privacy Policy</a>.
          </label>
        </div>
        {err("consent")}
      </div>

      <div ref={statusRef} tabIndex={-1} aria-live="polite">
        {status === "error" && (
          <p className="rounded-md border border-red-200 bg-red-50 px-4 py-3 text-red-800">
            Something went wrong and your message was not sent. Please try again, or email us at{" "}
            <a href={`mailto:${site.email}`} className="font-semibold underline">{site.email}</a>.
          </p>
        )}
        {status === "unavailable" && (
          <p className="rounded-md border border-line bg-mist px-4 py-3 text-ink">
            The form is temporarily unavailable. Please email us directly at{" "}
            <a href={`mailto:${site.email}`} className="font-semibold text-gold-dark underline">{site.email}</a>.
          </p>
        )}
      </div>

      <button type="submit" className="btn-navy w-full sm:w-auto" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
