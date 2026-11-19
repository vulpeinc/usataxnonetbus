import Link from "next/link";

export default function NotFound() {
  return (
    <section className="bg-white">
      <div className="container-site py-32 text-center">
        <p className="eyebrow">Error 404</p>
        <h1 className="h-display mt-4 text-[2.6rem] text-navy">Page not found.</h1>
        <p className="mx-auto mt-4 max-w-[48ch] text-ink-soft">The page you are looking for does not exist or was moved.</p>
        <div className="mt-10 flex justify-center gap-4">
          <Link href="/" className="btn-navy">Back to home</Link>
          <Link href="/contact" className="btn-ghost-dark">Contact us</Link>
        </div>
      </div>
    </section>
  );
}
