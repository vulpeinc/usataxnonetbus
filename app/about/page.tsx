import type { Metadata } from "next";
import { PageHero, CtaBand, Check } from "@/components/Blocks";

export const metadata: Metadata = {
  title: "About",
  description: "USA Tax provides tax preparation, planning and consultation with clear communication and personal attention.",
  alternates: { canonical: "/about" },
};

const values = [
  { title: "Clarity", text: "We explain things in plain language and make sure you understand your return and your options." },
  { title: "Integrity", text: "We work from your documents and the rules that apply. We do not promise outcomes we cannot control." },
  { title: "Attention", text: "Each client's situation is reviewed individually, with time set aside for questions." },
  { title: "Confidentiality", text: "Your information is handled with care and shared only as needed to provide the service." },
];

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About USA Tax"
        title="Professional Guidance. Clear Solutions. A Commitment to Excellence."
        lead="We help individuals and small businesses meet their tax responsibilities with less uncertainty and more understanding."
      />

      <section className="bg-white">
        <div className="container-site grid gap-14 py-24 md:grid-cols-2 md:gap-20">
          <div className="reveal">
            <p className="eyebrow">Our mission</p>
            <h2 className="h-display mt-3 text-[1.9rem] text-navy md:text-[2.2rem]">Make taxes understandable and well handled.</h2>
            <p className="mt-5 text-[1.05rem] text-ink-soft">
              Our mission is to provide careful tax preparation, planning and consultation, and to explain each step so our clients make decisions with a clear view of their situation.
            </p>
          </div>
          <div className="reveal">
            <p className="eyebrow">Our vision</p>
            <h2 className="h-display mt-3 text-[1.9rem] text-navy md:text-[2.2rem]">A long-term relationship, not a once-a-year task.</h2>
            <p className="mt-5 text-[1.05rem] text-ink-soft">
              We want to be the team our clients contact whenever a tax question comes up, not only during filing season.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-mist">
        <div className="container-site py-24">
          <p className="eyebrow">Our values</p>
          <h2 className="h-display mt-3 max-w-[22ch] text-[2.1rem] text-navy md:text-[2.6rem]">The principles behind our work.</h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {values.map((v) => (
              <div key={v.title} className="card reveal flex gap-4">
                <Check />
                <div>
                  <h3 className="text-[1.15rem] font-semibold text-navy">{v.title}</h3>
                  <p className="mt-2 text-ink-soft">{v.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
