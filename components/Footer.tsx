import Link from "next/link";
import Image from "next/image";
import { services, site } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-navy-950 text-white/70">
      <div className="container-site grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <Link href="/" className="flex items-center gap-3 text-white" aria-label="USA Tax, home">
            <Image src="/logo-tn.png" alt="" width={40} height={40} className="rounded-[6px]" />
            <span className="font-display text-[1.35rem] leading-none">USA Tax</span>
          </Link>
          <p className="mt-5 max-w-[34ch] text-[0.95rem]">Tax preparation, planning and consultation for individuals and small businesses.</p>
        </div>
        <div>
          <h2 className="mb-4 text-[0.95rem] font-semibold text-white">Services</h2>
          <ul className="space-y-2.5 text-[0.95rem]">
            {services.slice(0, 4).map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="hover:text-white hover:underline">{s.title}</Link>
              </li>
            ))}
            <li><Link href="/services" className="hover:text-white hover:underline">All services</Link></li>
          </ul>
        </div>
        <div>
          <h2 className="mb-4 text-[0.95rem] font-semibold text-white">Company</h2>
          <ul className="space-y-2.5 text-[0.95rem]">
            <li><Link href="/about" className="hover:text-white hover:underline">About</Link></li>
            <li><Link href="/how-it-works" className="hover:text-white hover:underline">How It Works</Link></li>
            <li><Link href="/contact" className="hover:text-white hover:underline">Contact</Link></li>
            <li><Link href="/privacy" className="hover:text-white hover:underline">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-white hover:underline">Terms of Use</Link></li>
          </ul>
        </div>
        <div>
          <h2 className="mb-4 text-[0.95rem] font-semibold text-white">Contact</h2>
          <ul className="space-y-2.5 text-[0.95rem]">
            <li><a href={`mailto:${site.email}`} className="break-all hover:text-white hover:underline">{site.email}</a></li>
            <li><Link href="/contact" className="hover:text-white hover:underline">Send us a message</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-site flex flex-col gap-3 py-6 text-[0.85rem] text-white/60 md:flex-row md:justify-between">
          <p>&copy; {year} USA Tax. All rights reserved.</p>
          <p className="max-w-[70ch]">{site.disclaimer}</p>
        </div>
      </div>
    </footer>
  );
}
