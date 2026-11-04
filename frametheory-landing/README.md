# Frame Theory Socials — Animated Landing Page

A responsive, custom-designed landing page in plain HTML, CSS and JavaScript.
No build tools, installation or paid libraries required.

## Folder structure

- `index.html` — semantic page sections, content, navigation and enquiry form
- `assets/css/styles.css` — design tokens, layouts, animations and responsive rules
- `assets/js/main.js` — mobile navigation, scroll reveals and enquiry handoff
- `assets/images/` — optimised local portfolio photos and an SVG favicon

## Preview

Open `index.html` in a browser. For a local server, run `python3 -m http.server 8080`
from this folder, then open http://localhost:8080.

## Upload to Hostinger / cPanel

1. Extract this ZIP on your computer.
2. Back up your existing website before replacing any files.
3. Upload the CONTENTS of `frametheory-landing/` into `public_html/`.
4. Make sure `index.html` is directly inside `public_html/`, alongside `assets/`.
5. Open your domain and clear the hosting/browser cache if needed.

For a preview alongside an existing site, upload into `public_html/landing/`
and visit `https://yourdomain.com/landing/`. Relative asset paths support subfolders.

## What is included

- Cream, yellow and brown art direction inspired by the existing brand
- Floating hero photo cards, rotating accent and moving marquee
- Scroll entrance animations and interactive hover states
- Mobile navigation with keyboard Escape support
- Services, actual portfolio imagery, process, FAQ and contact sections
- Accessible labels, native form validation and reduced-motion support
- Local optimised WebP images; no remote image dependency

## Enquiries

The enquiry form opens WhatsApp addressed to the public business number
`+91 9711376997`, with the visitor's brief filled in. Visitors review and send
it themselves. There is no backend, email delivery, CRM or stored enquiry database.
The public email/phone links provide alternative contact routes.
To change the destination, edit `WHATSAPP_NUMBER` in `assets/js/main.js`.

## Customisation

- Colours, fonts: CSS variables at the start of `assets/css/styles.css`
- Text, links and contact details: `index.html`
- Photos: replace the matching files in `assets/images/`
- Logo: the current compact typographic treatment is a custom landing-page
  wordmark, not a claim to reproduce the official logo artwork. Replace it
  with your approved logo asset if preferred.

## Sources and assets

Business name, public contact information, service categories and portfolio
photographs were sourced from https://frametheorysocials.in/ on 4 November 2026.
Portfolio captions describe images rather than asserting client names or results.
Only use the supplied photographs for Frame Theory Socials or with rights-holder
permission. No invented testimonials, client metrics or growth guarantees.
Bricolage Grotesque and DM Sans are loaded from Google Fonts. System fallbacks
are provided so the page remains usable without an internet connection.
The favicon is a custom SVG typographic monogram.

## Technical notes

No API keys, tracking scripts, cookies or third-party JS packages are included.
Links to portfolio and social profiles open their original public destinations.
The page runs on ordinary static hosting and uses no server-side routes.
