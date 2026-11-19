import Link from "next/link";
import { faqs } from "@/lib/site";

export function PageHero({ eyebrow, title, lead }: { eyebrow: string; title: string; lead?: string }) {
  return (
    <section className="on-dark relative overflow-hidden bg-navy text-white">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_80%_at_85%_0%,rgba(201,164,92,.16),transparent_60%)]" />
      <div className="container-site relative py-20 md:py-24">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="h-display mt-4 max-w-[30ch] text-[2.1rem] sm:text-[2.8rem] md:text-[3.25rem]">{title}</h1>
        {lead && <p className="mt-6 max-w-[60ch] text-[1.1rem] text-white/80">{lead}</p>}
      </div>
    </section>
  );
}

export function CtaBand({ title = "Ready to talk about your tax needs?", text = "Send us a short message about your situation. We will reply with the next steps." }: { title?: string; text?: string }) {
  return (
    <section className="bg-mist">
      <div className="container-site py-20">
        <div className="on-dark reveal flex flex-col items-start gap-8 rounded-xl bg-navy-800 px-8 py-12 text-white md:flex-row md:items-center md:justify-between md:px-14">
          <div className="max-w-[46ch]">
            <h2 className="h-display text-[2rem] md:text-[2.4rem]">{title}</h2>
            <p className="mt-3 text-white/80">{text}</p>
          </div>
          <Link href="/contact" className="btn-gold shrink-0">Request a Consultation</Link>
        </div>
      </div>
    </section>
  );
}

export function Faq() {
  return (
    <div className="divide-y divide-line border-y border-line">
      {faqs.map((f) => (
        <details key={f.q} className="group py-2">
          <summary className="flex min-h-[56px] cursor-pointer list-none items-center justify-between gap-6 text-[1.08rem] font-semibold text-navy [&::-webkit-details-marker]:hidden">
            {f.q}
            <span aria-hidden="true" className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-line text-gold-dark transition-transform group-open:rotate-45">+</span>
          </summary>
          <p className="max-w-[70ch] pb-5 text-ink-soft">{f.a}</p>
        </details>
      ))}
    </div>
  );
}

export function Check() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true" className="mt-[3px] shrink-0 text-gold-dark">
      <path d="M4.5 10.5l3.5 3.5 7.5-8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
