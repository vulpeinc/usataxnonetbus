import Link from "next/link";
import { services, steps, site } from "@/lib/site";
import { CtaBand, Faq, Check } from "@/components/Blocks";

const reasons = [
  { title: "Clear communication", text: "We explain what we need, what we are doing and what comes next, in plain language." },
  { title: "Personal attention", text: "Your situation is reviewed individually. We do not treat every return the same way." },
  { title: "Organized process", text: "A defined sequence of steps, from the first message to the end of the engagement." },
  { title: "Care with your information", text: "We tell you how to share documents safely and never ask for sensitive data through the website." },
];

const approach = [
  { n: "01", title: "Listen first", text: "We start by understanding your situation and the question behind it." },
  { n: "02", title: "Explain the options", text: "We tell you which services fit and what each one involves, before any work begins." },
  { n: "03", title: "Work from your documents", text: "Everything we prepare is based on the information you provide and the rules that apply to it." },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="on-dark relative overflow-hidden bg-navy text-white">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(55%_70%_at_90%_10%,rgba(201,164,92,.18),transparent_60%),radial-gradient(50%_60%_at_0%_100%,rgba(20,43,73,.9),transparent_70%)]" />
        <div className="container-site relative grid items-center gap-14 py-20 md:py-28 lg:grid-cols-[1.25fr_1fr]">
          <div>
            <p className="eyebrow">Tax preparation, planning and consultation</p>
            <h1 className="h-display mt-5 text-[2.3rem] sm:text-[3.2rem] lg:text-[3.5rem] xl:text-[3.75rem]">Tax Solutions Built Around Your Financial Future.</h1>
            <p className="mt-6 max-w-[52ch] text-[1.15rem] text-white/80">
              Navigate your tax responsibilities with clarity, confidence, and professional support.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/contact" className="btn-gold">Get Started</Link>
              <Link href="/services" className="btn-ghost-light">Explore Our Services</Link>
            </div>
          </div>
          <div className="rounded-xl border border-white/10 bg-navy-800/80 p-8 backdrop-blur">
            <p className="text-[0.95rem] font-semibold text-gold-light">How we can help</p>
            <ul className="mt-5 divide-y divide-white/10">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="group flex items-center justify-between gap-4 py-3.5 text-white/90 hover:text-white">
                    <span>{s.title}</span>
                    <span aria-hidden="true" className="text-gold transition-transform group-hover:translate-x-1">&rarr;</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-white">
        <div className="container-site grid gap-10 py-24 md:grid-cols-[1fr_1.4fr] md:gap-20">
          <h2 className="h-display reveal text-[2.1rem] text-navy md:text-[2.6rem]">Taxes are easier when someone explains them.</h2>
          <div className="reveal space-y-5 text-[1.08rem] text-ink-soft">
            <p>
              USA Tax works with individuals and small businesses who want their taxes handled carefully and explained clearly. We prepare returns, help you plan ahead and answer the questions that come up during the year.
            </p>
            <p>
              Every engagement starts with a conversation. We learn about your situation, tell you which services fit and what we will need from you, and then do the work.
            </p>
          </div>
        </div>
      </section>

      {/* Services overview */}
      <section className="bg-mist">
        <div className="container-site py-24">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="eyebrow">Services</p>
              <h2 className="h-display mt-3 max-w-[20ch] text-[2.1rem] text-navy md:text-[2.6rem]">Support for individuals and businesses.</h2>
            </div>
            <Link href="/services" className="btn-ghost-dark self-start md:self-auto">View all services</Link>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`} className="card reveal group flex flex-col transition-shadow hover:shadow-[0_20px_40px_-20px_rgba(11,23,48,.35)]">
                <span aria-hidden="true" className="block h-[3px] w-10 bg-gold" />
                <h3 className="mt-6 text-[1.2rem] font-semibold text-navy">{s.title}</h3>
                <p className="mt-3 flex-1 text-ink-soft">{s.short}</p>
                <span className="mt-6 text-[0.95rem] font-semibold text-gold-dark group-hover:underline">Learn more</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose */}
      <section className="bg-white">
        <div className="container-site py-24">
          <p className="eyebrow">Why choose USA Tax</p>
          <h2 className="h-display mt-3 max-w-[24ch] text-[2.1rem] text-navy md:text-[2.6rem]">What you can expect when you work with us.</h2>
          <div className="mt-14 grid gap-x-12 gap-y-10 md:grid-cols-2">
            {reasons.map((r) => (
              <div key={r.title} className="reveal flex gap-4">
                <Check />
                <div>
                  <h3 className="text-[1.15rem] font-semibold text-navy">{r.title}</h3>
                  <p className="mt-2 text-ink-soft">{r.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="on-dark bg-navy-800 text-white">
        <div className="container-site py-24">
          <p className="eyebrow">Our approach</p>
          <h2 className="h-display mt-3 max-w-[24ch] text-[2.1rem] md:text-[2.6rem]">Careful work, explained in plain language.</h2>
          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {approach.map((a) => (
              <div key={a.n} className="reveal border-t border-white/15 pt-6">
                <p className="font-display text-[1.6rem] text-gold">{a.n}</p>
                <h3 className="mt-3 text-[1.15rem] font-semibold">{a.title}</h3>
                <p className="mt-2 text-white/75">{a.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-white">
        <div className="container-site py-24">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="eyebrow">How it works</p>
              <h2 className="h-display mt-3 max-w-[22ch] text-[2.1rem] text-navy md:text-[2.6rem]">Four steps from first message to next steps.</h2>
            </div>
            <Link href="/how-it-works" className="btn-ghost-dark self-start md:self-auto">See the full process</Link>
          </div>
          <ol className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <li key={s.title} className="card reveal">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-navy font-semibold text-gold">{i + 1}</span>
                <h3 className="mt-5 text-[1.12rem] font-semibold text-navy">{s.title}</h3>
                <p className="mt-2 text-ink-soft">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white">
        <div className="container-site grid gap-10 pb-24 md:grid-cols-[1fr_1.6fr] md:gap-20">
          <div>
            <p className="eyebrow">FAQ</p>
            <h2 className="h-display mt-3 text-[2.1rem] text-navy md:text-[2.6rem]">Common questions.</h2>
            <p className="mt-4 text-ink-soft">
              Something else on your mind? Write to{" "}
              <a href={`mailto:${site.email}`} className="break-all font-semibold text-gold-dark underline">{site.email}</a>.
            </p>
          </div>
          <Faq />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
