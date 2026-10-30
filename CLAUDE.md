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
- When adding reviews, add them to the testimonials carousel in `index.html` and update the review count — **always update i18n.js too**, as it overrides the HTML for all languages
- Keep the site's tone calm, elegant and minimal — no aggressive CTAs or pushy language
- The site serves **female clients only** — keep this reflected in any new copy

## Image Handling — IMPORTANT
- **Always rename image files** to clean, descriptive names before committing (e.g. `lymphatic-01.jpg`, `ba1.jpeg`) — never leave WhatsApp, Instagram or auto-generated filenames in the repo
- **Always remove the originals** after renaming so there are no duplicates
- When adding images to the journal, use `object-fit: contain` in the modal so images are never cropped
- When users commit images directly to `main` via GitHub Desktop, pull from `main` and bring them into the working branch — don't assume filenames

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

---

## Open questions for Mona (Fresha vs website, checked 30 Oct 2026)
Nothing changed yet; waiting for her answers.
1. Combos on Fresha say "Buccal is £20 as an add-on if selected as a combo", but £75 + £20 = £95 while the combo is £90 (the note dates from the £70 base price).
2. URDVHA: the website lists it as a £40 standalone ("30 min video · 40"). On Fresha it only exists as an add-on inside Moksha/Savasana: "Gua sha tool and video tutorial", 30 mins, +£30. Price and booking route differ.
3. Post-Op Recovery is not on Fresha yet (expected; the button emails her).
4. Moksha Reset: Fresha has both options (£290, 1 hr 10; With Buccal massage £350, 1 hr 30), matching the website. Fresha's wording says "an additional 20 minutes of Buccal Massage" while the time goes up by 20 min and Antar is otherwise 30 min.
5. Name differences: Savasana is "Deep relaxation and lifting massage" on Fresha vs "Deep Rest Facial Ritual" on the site; Antar's category is "Add-on or standalone" on Fresha vs "Add-ons" on the site.
6. Description differences: Fresha has "(connective tissue)" for Moksha, "(inside-the-mouth)" and "avoid overstimulation" for Antar, "4 or more" sessions for the Reset, "my signature Moksha" for Savasana; the site adds "Best paired with ANTAR" for Moksha and uses one shared combo description.
7. The 10% weekend premium is on the site but not shown on Fresha.
8. On Fresha, Buccal release is +£20 and the gua sha add-on +£30 when added to Moksha or Savasana ("Add-on discount applies if selected with a base treatment"). So Moksha + buccal via the add-on is £95, but the Combination is £90.
9. Fresha shows 5.0 from 39 ratings (Moksha + Antar 16, Moksha 13). The website says "5.0 · 14 reviews" (the written reviews in the carousel). Ask whether to show the Fresha rating count too.

Full Fresha menu text (scraped 31 Oct 2026) is in the session notes; ask Claude to re-scrape if needed: https://www.fresha.com/en-GB/a/mukha-face-yoga-surbiton-101-ewell-road-pzogzeob/booking?pId=2886400
