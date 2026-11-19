import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { services } from "@/lib/site";
import { PageHero, CtaBand, Check } from "@/components/Blocks";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  if (!s) return {};
  return { title: s.title, description: s.short, alternates: { canonical: `/services/${s.slug}` } };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  if (!s) notFound();
  const others = services.filter((x) => x.slug !== s.slug).slice(0, 3);

  const block = (title: string, items: string[]) => (
    <div className="card reveal">
      <h2 className="text-[1.2rem] font-semibold text-navy">{title}</h2>
      <ul className="mt-5 space-y-3">
        {items.map((it) => (
          <li key={it} className="flex gap-3 text-ink-soft">
            <Check />
            <span>{it}</span>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <>
      <nav aria-label="Breadcrumb" className="border-b border-white/10 bg-navy text-[0.92rem] text-white/70">
        <ol className="container-site flex flex-wrap gap-2 py-3">
          <li><Link href="/" className="hover:text-white hover:underline">Home</Link> /</li>
          <li><Link href="/services" className="hover:text-white hover:underline">Services</Link> /</li>
          <li aria-current="page" className="text-white">{s.title}</li>
        </ol>
      </nav>
      <PageHero eyebrow="Service" title={s.title} lead={s.intro} />

      <section className="bg-white">
        <div className="container-site grid gap-6 py-24 lg:grid-cols-3">
          {block("Who it is for", s.forWho)}
          {block("What is included", s.includes)}
          {block("What to prepare", s.prepare)}
        </div>
        <div className="container-site pb-20">
          <p className="max-w-[75ch] rounded-lg border border-line bg-mist px-6 py-5 text-[0.95rem] text-ink-soft">
            Please do not send your Social Security number, tax returns or financial documents through the contact form. After our first conversation, we will explain how to share documents safely. Results depend on your individual situation and the information you provide.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/contact" className="btn-gold">Request this service</Link>
            <Link href="/services" className="btn-ghost-dark">All services</Link>
          </div>
        </div>
      </section>

      <section className="bg-mist">
        <div className="container-site py-20">
          <h2 className="h-display text-[1.9rem] text-navy">Related services</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {others.map((o) => (
              <Link key={o.slug} href={`/services/${o.slug}`} className="card group">
                <h3 className="text-[1.1rem] font-semibold text-navy">{o.title}</h3>
                <p className="mt-2 text-ink-soft">{o.short}</p>
                <span className="mt-4 inline-block text-[0.95rem] font-semibold text-gold-dark group-hover:underline">Learn more</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
