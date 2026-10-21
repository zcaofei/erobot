# RoboCore Supply — B2B Robotics Components Site

Next.js (App Router) + Tailwind CSS + Lucide + React Hook Form + Zod + Resend.

Project root: `E:\work\eshop\erobot`

## Develop

```bash
cd E:\work\eshop\erobot
npm install
npm run dev
```

## Product catalog

Edit **`data/products.ts`** (English specs, highlights, applications, placeholder image paths).

## Inquiry form (PRD §5)

Fields: Full Name, Business Email, Company, Target Product, Estimated Order Quantity, Message.

Success toast: *Thank you! Our technical sales team will reply within 12 hours.*

### Email (Resend → your Gmail)

1. Register at [resend.com](https://resend.com) and create an **API Key**.
2. Copy `.env.example` → **`.env.local`** in the project root.
3. Set at minimum:

| Variable | Example | Purpose |
|----------|---------|---------|
| `RESEND_API_KEY` | `re_...` | Resend API key |
| `ADMIN_EMAIL` | `you@gmail.com` | Where RFQs are delivered |
| `INQUIRY_FROM_EMAIL` | `RoboCore Supply <onboarding@resend.dev>` | Sender (test mode; see below) |

4. Restart dev server: `npm run dev`.
5. Test without the website: `npm run test:email` (requires Node 20+).
6. Test via form: submit on `/contact` — check Gmail inbox and spam.

**Resend test mode:** With `onboarding@resend.dev`, mail is only delivered to the **same email you used to sign up for Resend**. For any Gmail inbox, verify your domain in Resend and set `INQUIRY_FROM_EMAIL` to e.g. `RoboCore <noreply@yourdomain.com>`.

## Components

`Navbar`, `Footer`, `ProductCard`, `SpecsTable`, `InquiryForm` under `src/components/`.

## Languages

8 UI languages: English, 简体中文, Deutsch, Français, Español, العربية, 日本語, Português.

Switch via the globe icon in the navbar or **Settings** (`/settings`). Preference is saved in the browser. After switching, refresh once (Ctrl+F5) if the page looks stale.

If the site does not load, restart the dev server: stop with Ctrl+C, then `npm run dev`.

## Deploy (GitHub + Vercel, free HTTPS)

See **[DEPLOY.md](./DEPLOY.md)**. Quick: push code to a **private** GitHub repo → import on [vercel.com](https://vercel.com) → paste the same env vars as `.env.local` in Vercel **Environment Variables**.
