# CLAUDE.md — Mukha Face Yoga Website

## Project Overview
This is the website for **Mukha Face Yoga**, a holistic facial therapy practice founded by Mona, based in Surbiton, Surrey. The site is built and maintained by Bruce Baldomero (Mona's brother) on behalf of the business.

Live site: [mukhafaceyoga.com](https://mukhafaceyoga.com)
Repo: `BruceBaldomero/mukhafaceyoga`

---

## Tech Stack
- Pure HTML, CSS, Vanilla JavaScript — no frameworks, no build tools
- Hosted on **GitHub Pages** (main branch deploys automatically)
- Custom domain via CNAME
- **Fresha** — booking platform
- **Formspree** — contact form submissions
- **Google Analytics** (GA4) — G-H3P3RFG4P5
- **Google Fonts** — Cormorant Garamond + Jost
- **Font Awesome 6** — icons

## Key Files
- `index.html` — main homepage
- `gallery.html` — full gallery page
- `policies.html` — client policies page
- `404.html` — not found page
- `style.css` — all styles
- `animations.css` — scroll/reveal animations
- `main.js` — nav, carousel, contact form logic
- `cookie.js` — GDPR cookie consent + conditional GA loading
- `images/` — all site images

---

## Git Workflow — IMPORTANT

- Always develop on branch: `claude/sisters-website-changes-EUEHL`
- **Always ask for confirmation before merging to `main`**
- Never push directly to `main` without explicit approval
- After changes are committed and pushed to the branch, ask: *"Shall I merge to go live?"*
- Wait for a "yes" before merging

---

## House Rules
- **Always ask before merging to main** — this deploys to the live website
- Do not change any real business content (prices, services, descriptions) without being explicitly told to
- When adding reviews, add them to the testimonials carousel in `index.html` and update the review count
- Keep the site's tone calm, elegant and minimal — no aggressive CTAs or pushy language
- The site serves **female clients only** — keep this reflected in any new copy

---

## Design Tokens (CSS Variables)
```
--cream:      #F7F3EE
--cream-dark: #EDE5D8
--sage:       #D8E5D0
--sage-mid:   #A8C49A
--sage-deep:  #5C7A52
--bark:       #3D2E22
--bark-mid:   #6B4E3D
--gold:       #C9A96E
--gold-light: #E8D5B0
--white:      #FFFFFF
--font-serif: 'Cormorant Garamond'
--font-sans:  'Jost'
```

---

## Known Future Improvements (not yet done)
1. Add 20+ Google reviews to build social proof
2. Add a "Why a Registered Nurse?" section to highlight Mona's credential
3. Create individual pages per treatment (big SEO win)
4. Add an FAQ section with FAQPage schema
5. Start a blog (1 post/month)
6. Add a lead magnet / email signup
7. Improve Instagram integration on the site
8. Add Person + Service schema markup
