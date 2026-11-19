# USA Tax — Website (Next.js)

Corporate website for **USA Tax** — https://www.usataxnonetbus.com

Stack: Next.js 15 (App Router) · React 19 · TypeScript · Tailwind CSS 3 · zod. Fonts self-hosted (Inter, Libre Caslon Text, OFL).

## Pages
Home · About · Services (+ 6 service pages) · How It Works · Contact · Privacy Policy · Terms of Use · 404 · `sitemap.xml` · `robots.txt`. Open Graph image, JSON-LD (ProfessionalService), security headers.

## Run locally
```bash
npm install
cp .env.example .env.local   # fill in values
npm run dev                   # http://localhost:3000
npm run build && npm start    # production check
```

## Contact form
`POST /api/contact` validates on the server (zod), blocks spam (honeypot + minimum fill time + basic rate limit), rejects messages that contain an SSN pattern, and sends the message by email through **Resend**.

Environment variables (Vercel → Project → Settings → Environment Variables):

| Variable | Value |
|---|---|
| `RESEND_API_KEY` | API key from resend.com |
| `CONTACT_TO` | `usataxnonetbus@gmail.com` |
| `CONTACT_FROM` | `USA Tax Website <contact@usataxnonetbus.com>` (after verifying the domain in Resend) — or `onboarding@resend.dev` for testing |

Without these variables the form returns 503 and shows the visitor the direct email address instead. Nothing breaks.

> With the test sender `onboarding@resend.dev`, Resend only delivers to the email that owns the Resend account. For production, verify `usataxnonetbus.com` in Resend (it adds DNS records: SPF/DKIM) and use a sender on that domain.

## Deploy on Vercel
1. Push this folder to a GitHub repository.
2. Vercel → Add New Project → import the repo. Framework preset: **Next.js** (auto). No build settings to change.
3. Add the environment variables above → Deploy.
4. Settings → Domains → add `usataxnonetbus.com` and `www.usataxnonetbus.com` (set www as primary, redirect apex → www).

## DNS (at the domain registrar)
| Type | Name | Value |
|---|---|---|
| A | `@` | `216.198.79.1` (or the value Vercel shows) |
| CNAME | `www` | the project-specific value shown by Vercel (e.g. `xxxx.vercel-dns-017.com`) |

Remove any conflicting A/CNAME records for `@` and `www` (registrar "parking" records). SSL is issued automatically after DNS propagates.

## Edit content
All business content lives in `lib/site.ts` (name, email, services, steps, FAQ, disclaimer). Pages read from there.

## Items to confirm with the owner before launch
- Final list and descriptions of services (proposed in `lib/site.ts`).
- Logo shows "TN" while the brand name is "USA Tax" — confirm the intended brand.
- Phone number and business address (intentionally omitted — not provided).
- Whether returns will be e-filed by the firm (requires an EFIN; PTIN alone does not allow e-file). Copy currently avoids claiming e-file.
- Credentials (PTIN, EA, CPA) are **not** displayed. Add only what can be verified.

## Compliance notes
- Disclaimer on every page: not affiliated with the IRS or any government agency. No government seals or imagery.
- No testimonials, ratings, client counts or guarantees.
- The form never requests SSN, tax returns or financial documents.
- No analytics/advertising cookies, so no cookie consent banner is required. If analytics is added later, add a consent banner first.
