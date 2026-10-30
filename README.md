# AndHub Engineering PLC — starter company website

A one-page, responsive portfolio and company website for **AndHub Engineering PLC**, prepared for **https://1hubengineering.com/**.

## Contents

- Company positioning, mission, and vision
- Four service areas
- Six projects: Rental OS, Studio Proof, Say Bingo, KeyForge, Afaan Oromo Bible, and Linux Setup
- Team qualifications (without inventing names or photos)
- Contact call-to-action, mobile navigation, working project filters
- Search metadata, social preview, sitemap, robots.txt, SVG favicon

## Run locally

There are **no packages, frameworks, or build steps**. Open `index.html` in a browser, or serve this directory locally:

```sh
python -m http.server 8080
```

Then open `http://localhost:8080`.

## Deploy

Upload **the contents** of this folder (not the parent folder) to a static web host or to the domain's `public_html` directory if using cPanel. `index.html` must be at the website root. Point `1hubengineering.com` and `www.1hubengineering.com` DNS records to the chosen hosting provider, activate TLS/HTTPS, and enable a redirect from `www` to the canonical domain (or vice versa, updating the canonical links if reversed).

This can also be deployed on Cloudflare Pages, Netlify, Vercel, or GitHub Pages as a plain static site with **no build command** and the site root as the publish directory. For nested GitHub Pages project paths, update absolute metadata URLs.

## Before going public — IMPORTANT

1. **Email:** `hello@1hubengineering.com` is a *proposed contact address*, **not a verified mailbox**. Create/verify it with your domain email provider, **or replace every occurrence** in `index.html` before publishing. Test incoming and outgoing mail, including SPF/DKIM/DMARC where applicable. No contact form/backend is configured, and no visitor data is stored by this website.
2. **Brand:** This site includes an original temporary AH lettermark, **not** the previously selected final monogram art. Replace `assets/favicon.svg` and the two HTML `.brand-mark` elements with your approved logo when you have its exported assets.
3. **People:** Add team member names, confirmed role titles, photographs (if desired), and consent before publication. Qualifications shown are based on information supplied by the company owner.
4. **Project status:** Several projects are under active development and are labeled accordingly. Verify statuses and whether to make any private/client work public before publishing. No private GitHub repo URL is linked.
5. **Product rights:** Ensure public descriptions and any future screenshots use content and assets you have permission to publish. In particular, Bible text and paid UI component source should not be redistributed without appropriate rights.
6. **Company details:** Confirm final legal trading name, contact details, service coverage, and any required legal/business information for the jurisdiction. This starter does not invent a physical address or phone number.
7. **Domain/SEO:** Replace `https://1hubengineering.com/` in canonical, Open Graph, structured data, sitemap and robots if the final hostname changes. Submit the sitemap to your preferred search console after deployment.

## Updating the site

- Copy and content: `index.html`
- Styles and illustrations: `assets/styles.css`
- Mobile navigation, project filters, scroll behaviors: `assets/app.js`
- Favicon: `assets/favicon.svg`
- Social preview: `assets/og-image.png`
- Search settings: HTML `<head>`, `robots.txt`, `sitemap.xml`

The public GitHub repositories reviewed for the starter were `zdevzone/keyforge`, `zdevzone/afaan_oromo_bible`, `zdevzone/linux-setup`, and `zdevzone/studio-proof-releases`. The Rental OS and Say Bingo repositories are private and not linked. **This new website has not been published to GitHub or deployed to the domain.**
