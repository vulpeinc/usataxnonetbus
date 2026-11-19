import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/lib/site";
import { PageHero, CtaBand } from "@/components/Blocks";

export const metadata: Metadata = {
  title: "Services",
  description: "Individual and business tax preparation, tax planning, consultation, document organization and filing assistance.",
  alternates: { canonical: "/services" },
};

export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Tax Services Designed for Your Needs."
        lead="Choose the support that fits your situation. If you are not sure which service you need, send us a message and we will help you decide."
      />
      <section className="bg-white">
        <div className="container-site py-24">
          <div className="grid gap-6 md:grid-cols-2">
            {services.map((s, i) => (
              <article key={s.slug} className="card reveal flex flex-col">
                <p className="font-display text-[1.4rem] text-gold-dark">{String(i + 1).padStart(2, "0")}</p>
                <h2 className="mt-3 text-[1.35rem] font-semibold text-navy">{s.title}</h2>
                <p className="mt-3 text-ink-soft">{s.intro}</p>
                <div className="mt-auto pt-7">
                  <Link href={`/services/${s.slug}`} className="btn-navy" aria-label={`Learn more about ${s.title}`}>
                    Learn more
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CtaBand title="Not sure which service fits?" text="Describe your situation in a few sentences and we will suggest where to start." />
    </>
  );
}
