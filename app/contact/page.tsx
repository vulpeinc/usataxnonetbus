import type { Metadata } from "next";
import { PageHero } from "@/components/Blocks";
import ContactForm from "@/components/ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Tell us about your tax needs. We will reply by email with the next steps.",
  alternates: { canonical: "/contact" },
};

export default function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's Talk About Your Tax Needs."
        lead="Send us a short message about your situation and the service you are interested in. We will reply by email."
      />
      <section className="bg-white">
        <div className="container-site grid gap-14 py-24 lg:grid-cols-[1.6fr_1fr]">
          <div>
            <ContactForm />
          </div>
          <aside className="space-y-6">
            <div className="card">
              <h2 className="text-[1.15rem] font-semibold text-navy">Email</h2>
              <a href={`mailto:${site.email}`} className="mt-2 block break-all font-semibold text-gold-dark underline">{site.email}</a>
            </div>
            <div className="card">
              <h2 className="text-[1.15rem] font-semibold text-navy">Protect your information</h2>
              <p className="mt-2 text-ink-soft">
                Please do not send your Social Security number, tax returns or bank details through this form or by regular email. After our first conversation, we will explain how to share documents safely.
              </p>
            </div>
            <div className="card">
              <h2 className="text-[1.15rem] font-semibold text-navy">What happens next</h2>
              <p className="mt-2 text-ink-soft">We review your message, may ask a few questions and then explain which service fits and what we will need from you.</p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
