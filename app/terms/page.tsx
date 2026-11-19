import type { Metadata } from "next";
import { PageHero } from "@/components/Blocks";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Terms of Use", description: "Terms that apply to the use of the USA Tax website.", alternates: { canonical: "/terms" } };

export default function Terms() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms of Use" lead="Last updated: November 2026" />
      <section className="bg-white">
        <div className="container-site prose-legal max-w-[820px] py-20">
          <p>By using {site.domain} (the &quot;Website&quot;), you agree to these Terms of Use.</p>
          <h2>Informational content</h2>
          <p>Content on the Website is general information and is not tax, legal or financial advice for your specific situation. Advice is provided only within an engagement, based on the information you provide.</p>
          <h2>No client relationship</h2>
          <p>Sending a message through the Website does not create a client relationship. An engagement begins only when both parties agree to its terms.</p>
          <h2>No guaranteed results</h2>
          <p>We do not guarantee any refund amount, tax outcome or decision by a tax authority. Results depend on your individual circumstances, the accuracy and completeness of the information you provide and applicable law.</p>
          <h2>Your responsibilities</h2>
          <p>You are responsible for the accuracy and completeness of the information and documents you provide, and for reviewing your return before it is filed.</p>
          <h2>No government affiliation</h2>
          <p>{site.disclaimer}</p>
          <h2>Acceptable use</h2>
          <p>You agree not to misuse the Website, including sending spam, attempting unauthorized access or interfering with its operation.</p>
          <h2>Intellectual property</h2>
          <p>Website content, names and logos belong to USA Tax or their respective owners and may not be copied without permission.</p>
          <h2>Limitation of liability</h2>
          <p>To the extent permitted by law, USA Tax is not liable for indirect or consequential damages arising from use of the Website or reliance on its general content.</p>
          <h2>Changes</h2>
          <p>We may update these Terms. Continued use of the Website after an update means you accept the revised Terms.</p>
          <h2>Contact</h2>
          <p>Questions: <a href={`mailto:${site.email}`}>{site.email}</a>.</p>
        </div>
      </section>
    </>
  );
}
