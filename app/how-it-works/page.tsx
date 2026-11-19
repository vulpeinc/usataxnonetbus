import type { Metadata } from "next";
import { steps } from "@/lib/site";
import { PageHero, CtaBand } from "@/components/Blocks";

export const metadata: Metadata = {
  title: "How It Works",
  description: "A clear four-step process, from your first message to ongoing support.",
  alternates: { canonical: "/how-it-works" },
};

const details = [
  "Use the contact form or email to describe what you need. A few sentences are enough. Do not include your SSN or financial documents.",
  "We read your message, may ask a few follow-up questions, and identify which service fits your situation.",
  "We explain the service, what it includes, what we need from you and how documents will be shared safely.",
  "Once you decide to move forward, we do the work and keep you informed until the engagement is complete.",
];

export default function HowItWorks() {
  return (
    <>
      <PageHero
        eyebrow="How it works"
        title="A Clear Process. A More Confident Experience."
        lead="You will always know what step you are in and what comes next."
      />
      <section className="bg-white">
        <div className="container-site py-24">
          <ol className="relative mx-auto max-w-[820px] space-y-12 border-l-2 border-line pl-10 md:pl-14">
            {steps.map((s, i) => (
              <li key={s.title} className="reveal relative">
                <span aria-hidden="true" className="absolute -left-[61px] top-0 grid h-10 w-10 place-items-center rounded-full bg-navy font-semibold text-gold md:-left-[77px]">
                  {i + 1}
                </span>
                <p className="text-[0.9rem] font-semibold text-gold-dark">Step {i + 1}</p>
                <h2 className="h-display mt-1 text-[1.8rem] text-navy">{s.title}</h2>
                <p className="mt-3 text-[1.08rem] text-ink">{s.text}</p>
                <p className="mt-2 text-ink-soft">{details[i]}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <CtaBand title="Start with step one." text="Tell us about your needs and the type of assistance you're looking for." />
    </>
  );
}
