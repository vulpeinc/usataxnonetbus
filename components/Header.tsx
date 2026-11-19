"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { services } from "@/lib/site";

const links = [
  { href: "/about", label: "About" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const dropRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setOpen(false);
    setDropdown(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      if (open) {
        setOpen(false);
        toggleRef.current?.focus();
      }
      setDropdown(false);
    };
    const onClick = (e: MouseEvent) => {
      if (dropRef.current && !dropRef.current.contains(e.target as Node)) setDropdown(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("click", onClick);
    };
  }, [open]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header className={`sticky top-0 z-50 bg-navy text-white transition-shadow ${scrolled ? "shadow-[0_8px_24px_-12px_rgba(0,0,0,.5)]" : ""}`}>
      <div className="container-site flex h-[74px] items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-3" aria-label="USA Tax, home">
          <Image src="/logo-tn.png" alt="" width={40} height={40} className="rounded-[6px]" priority />
          <span className="font-display text-[1.35rem] leading-none tracking-[-0.01em]">USA Tax</span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-8 lg:flex">
          <Link href="/" aria-current={isActive("/") ? "page" : undefined} className={`nav-link ${isActive("/") ? "text-white" : "text-white/75"} hover:text-white`}>
            Home
          </Link>
          <div className="relative" ref={dropRef}>
            <button
              type="button"
              className={`flex items-center gap-1.5 ${isActive("/services") ? "text-white" : "text-white/75"} hover:text-white`}
              aria-expanded={dropdown}
              aria-controls="services-menu"
              onClick={() => setDropdown((d) => !d)}
            >
              Services
              <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true" className={`transition-transform ${dropdown ? "rotate-180" : ""}`}>
                <path d="M2 4l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <div
              id="services-menu"
              hidden={!dropdown}
              className="absolute left-1/2 top-full mt-4 w-[340px] -translate-x-1/2 rounded-lg bg-white p-2 text-ink shadow-[0_24px_48px_-16px_rgba(11,23,48,.45)]"
            >
              <Link href="/services" className="block rounded-md px-4 py-3 font-semibold text-navy hover:bg-mist">
                All services
              </Link>
              {services.map((s) => (
                <Link key={s.slug} href={`/services/${s.slug}`} className="block rounded-md px-4 py-2.5 text-[0.96rem] hover:bg-mist">
                  {s.title}
                </Link>
              ))}
            </div>
          </div>
          {links.map((l) => (
            <Link key={l.href} href={l.href} aria-current={isActive(l.href) ? "page" : undefined} className={`${isActive(l.href) ? "text-white" : "text-white/75"} hover:text-white`}>
              {l.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-gold min-h-[44px] px-5 text-[0.95rem]">
            Get Started
          </Link>
        </nav>

        <button
          ref={toggleRef}
          type="button"
          className="grid h-11 w-11 place-items-center rounded-md bg-navy-800 lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((o) => !o)}
        >
          <span className="relative block h-[14px] w-5" aria-hidden="true">
            <span className={`absolute left-0 top-0 h-0.5 w-5 bg-white transition-transform ${open ? "translate-y-[6px] rotate-45" : ""}`} />
            <span className={`absolute left-0 top-[6px] h-0.5 w-5 bg-white transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`absolute left-0 top-[12px] h-0.5 w-5 bg-white transition-transform ${open ? "-translate-y-[6px] -rotate-45" : ""}`} />
          </span>
        </button>
      </div>

      <div id="mobile-menu" hidden={!open} className="border-t border-white/10 bg-navy lg:hidden">
        <nav aria-label="Mobile" className="container-site flex flex-col py-4">
          <Link href="/" className="py-3 text-[1.05rem]">Home</Link>
          <Link href="/services" className="py-3 text-[1.05rem]">Services</Link>
          <div className="mb-2 flex flex-col border-l border-white/15 pl-4">
            {services.map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`} className="py-2 text-white/75">
                {s.title}
              </Link>
            ))}
          </div>
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="py-3 text-[1.05rem]">
              {l.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-gold mt-4">Get Started</Link>
        </nav>
      </div>
    </header>
  );
}
