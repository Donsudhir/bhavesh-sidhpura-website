# Bhavesh Sidhpura — Access Consciousness

Marketing site for an Access Consciousness facilitator. Built with Next.js 16
(App Router, Turbopack), React 19, Tailwind v4, and Motion.

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Where the content lives

Almost all copy and configuration is in **`lib/site.ts`** (homepage) and
**`lib/classes.ts`** (classes page). Editing those updates the site without
touching markup. Anything that still needs the client is marked `PLACEHOLDER`.

## Handoff checklist — what the client provides

| Item | Where | Notes |
| --- | --- | --- |
| Real domain | `site.domain` in `lib/site.ts` | Drives SEO, sitemap, OG tags |
| Phone / WhatsApp | `site.whatsapp` | Use a public number |
| Email | `site.email` | Also the default lead inbox |
| Social profiles | `site.social` | Set a link to `""` to hide a channel |
| Calendly URL | `site.calendly` | Live booking widget appears once set |
| Session area | `site.area` | Public area; exact address shared on booking |
| Story audio (optional) | drop file in `public/audio/`, set `story.audioSrc` | Empty = player hidden |
| Photos | `images` in `lib/site.ts` | Currently grayscale placeholders |
| Class dates | `lib/classes.ts` `schedule` | Currently "announced soon" |
| Testimonials | replace Transformation composites | Only with written consent |

## Lead capture (email)

The Observatory signup and the Booking enquiry form both POST to
`app/api/lead/route.ts`, which delivers via **Resend**. See `.env.example`.
Without `RESEND_API_KEY`, submissions are accepted and logged (so the UI works
pre-launch) but no email is sent.

## Deploy (Vercel)

1. Push the repo and import it in Vercel.
2. Add the env vars from `.env.example` (Project → Settings → Environment Variables).
3. Point the client's domain at the project and set `site.domain` to match.

SEO (`sitemap`, `robots`, `opengraph-image`, `icon`, `manifest`) is generated
automatically from `lib/site.ts` — no manual files to maintain.

## Still deferred (by design)

- AI Guide — slot reserved for a future phase.
- Legal pages (privacy / terms) — to be added before collecting emails at scale.
