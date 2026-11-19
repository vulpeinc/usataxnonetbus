import type { Metadata } from "next";
import { PageHero } from "@/components/Blocks";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Privacy Policy", description: "How USA Tax collects and uses information submitted through this website.", alternates: { canonical: "/privacy" } };

export default function Privacy() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" lead="Last updated: November 2026" />
      <section className="bg-white">
        <div className="container-site prose-legal max-w-[820px] py-20">
          <p>This Privacy Policy explains how USA Tax (&quot;we&quot;, &quot;us&quot;) collects, uses and protects information submitted through {site.domain} (the &quot;Website&quot;).</p>
          <h2>Information we collect</h2>
          <p>We collect the information you choose to send through the contact form or by email: your name, email address, phone number (optional), the service you are interested in and your message. We also receive basic technical data that web servers process automatically, such as IP address and browser type, to deliver and protect the Website.</p>
          <h2>Information you should not send</h2>
          <p>Please do not send Social Security numbers, tax returns, bank account details or other sensitive financial documents through the contact form or by regular email. If an engagement begins, we will explain how to share documents safely.</p>
          <h2>How we use information</h2>
          <ul>
            <li>To reply to your request and discuss the services you asked about;</li>
            <li>To provide services you engage us for;</li>
            <li>To protect the Website against spam and misuse;</li>
            <li>To comply with legal obligations.</li>
          </ul>
          <p>We do not sell your personal information.</p>
          <h2>Service providers</h2>
          <p>We use third-party providers to host the Website and deliver form messages by email. They process information only as needed to provide those services.</p>
          <h2>Cookies</h2>
          <p>The Website does not use advertising or analytics cookies. Only technical storage strictly necessary for the Website to function may be used.</p>
          <h2>Retention</h2>
          <p>We keep inquiry information only as long as needed to respond to you, provide services or meet legal requirements.</p>
          <h2>Security</h2>
          <p>We use reasonable measures to protect information. No method of transmission over the internet is completely secure.</p>
          <h2>Your choices</h2>
          <p>You may ask us to access, correct or delete the information you sent us by writing to <a href={`mailto:${site.email}`}>{site.email}</a>.</p>
          <h2>Children</h2>
          <p>The Website is not directed to children under 13, and we do not knowingly collect their information.</p>
          <h2>Changes</h2>
          <p>We may update this policy. The date at the top shows when it was last revised.</p>
          <h2>Contact</h2>
          <p>Questions about this policy: <a href={`mailto:${site.email}`}>{site.email}</a>.</p>
        </div>
      </section>
    </>
  );
}
