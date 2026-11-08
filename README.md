# AndHub Engineering PLC

A complete React + TypeScript rebuild, powered by Vite+, Tailwind CSS 4, shadcn/ui (Radix primitives), and licensed Shadcnblocks components.

## Run locally

Requires Node.js 22.18+, 24.11+, or 26+. Dependencies are locked in `package-lock.json`.

```sh
npm ci
npm run dev
```

Open the Local URL printed by Vite+ (normally http://127.0.0.1:5173).

```sh
npm run build       # TypeScript checks and production build
npm run preview     # Serve the production build
npm run typecheck   # TypeScript only
npm test            # Build and run production browser/accessibility checks
```

For a fresh development machine, install the browser before running tests:

```sh
npx playwright install chromium
```

## Brand and themes

The site follows the [current brand guideline](https://github.com/1hubengineering/branding-guideline), including the supplied compact logo and symbol exports, “Ideas. Engineered.” tagline, Inter typography, three-service architecture, and current company/contact data. Artwork in `public/brand/` is copied from the guideline repository without redrawing the paths or wordmark. That repository labels its artwork as reconstructed; this implementation does not change its approval status.

| Token        | Dark      | Light     |
| ------------ | --------- | --------- |
| Background   | `#0b1f3b` | `#ffffff` |
| Surface/card | `#102947` | `#ffffff` |
| Text         | `#ffffff` | `#0b1f3b` |
| Action       | `#2563eb` | `#2563eb` |
| Highlight    | `#10b981` | `#047857` |
| Border       | `#2c4664` | `#e5e7eb` |

Signal Blue actions use white labels; green text uses Deep Green on light surfaces and Hub Green on navy. Required form boundaries have a separate contrast-tested token. Dark is the initial theme. The toggle persists an explicit preference locally, and the inline startup script applies it before React renders. Inter is self-hosted through the existing font package, using the Latin variable font and its bundled license. Reduced-motion preferences disable animation. Compact flat logo exports switch with the actual surface; the large gradient symbol sits on a solid navy panel without added effects.

## Website content and interactions

- Responsive navigation, section links, and keyboard-accessible mobile menu.
- Three services (Software development, Systems engineering, Consultancy), six existing projects with category filters and detail dialogs.
- Public repository/release links and explicit development labels.
- Current company positioning and leadership, four-step process, and grouped FAQ accordions.
- Project inquiry builder with input validation, an editable draft, copy action, and a `mailto:` link. Unfinished input stays in memory when the dialog closes; nothing is written to browser storage. Copy failures include a manual fallback.
- Accessible dialogs with focus management and Escape dismissal.
- Metadata, favicon, social image, sitemap, and robots file.

Linux Setup uses the project's published terminal examples and menu captures. Afaan Oromo Bible uses authentic Windows beta.8 screenshots from its published demo profile, links to the live product site and beta downloads, and appears under Products because its application source is private. Both detail dialogs have five selectable previews and full-size image links. Other project illustrations remain **concept previews**, not actual product screenshots or operating metrics. Asset sources and upstream notices are recorded in `public/projects/README.md`.

Company details and leadership use the guideline's `assets/brand.json`. Company GitHub links point to `1hubengineering`; project links use their current published destinations. No customer names, testimonials, or invented delivery statistics have been added.

## Shadcnblocks Pro

The following paid blocks were retrieved through the authenticated [Shadcnblocks registry](https://www.shadcnblocks.com/docs/shadcn-cli/overview) using the existing local API key, then adapted to AndHub's content and design:

- `feature43`: services grid
- `faq11`: categorized FAQ
- `cta26`: contact panel and supporting cards

These live in `src/components/blocks/`. Base shadcn/ui components live in `src/components/ui/`. `components.json` configures the authenticated registry for future additions. This project uses a selection from the collection; it does not bundle the entire catalog or templates.

Keep `SHADCNBLOCKS_API_KEY` in `.env` as shown in `.env.example`. Never prefix it with `VITE_`: the key is for development-time registry access and must not enter the browser bundle. `.env` and local environment variants are ignored by Git. Follow the subscription's license when sharing source code; do not redistribute the paid blocks as a standalone UI library.

## Files to edit

- `src/App.tsx`: navigation, hero, company, team, process, footer
- `src/lib/projects.ts`: project copy, links, statuses, preview metadata
- `src/components/projects.tsx`: project cards, concept illustrations, and preview galleries
- `src/components/blocks/`: services, FAQ, contact
- `src/components/project-inquiry.tsx`: inquiry flow and shared dialog wrapper
- `src/components/brand.tsx`: theme-aware supplied brand artwork
- `src/index.css`: design tokens, themes, layouts, responsive styling
- `public/`: favicon, social artwork, sitemap, robots
- `index.html`: metadata, organization schema, initial theme

Regenerate both social previews after changing the artwork or layout in the generator:

```sh
node scripts/generate-social-image.mjs
```

## Verification

Playwright covers dark/light persistence; project filters and public links; opening, dismissing, and restoring focus from dialogs; FAQ expansion; inquiry draft creation and preservation on edit; and both themes at 320, 360, 390, 768, 1024, and 1440 pixels. Project gallery checks also cover keyboard selection, all ten published images, full-size links, selection reset, and portrait/landscape layouts. Screenshots are generated in the ignored `test-results/` directory.

The test suite builds the production site and serves it at port 4173 automatically. Automated axe checks cover the page, contact dialog, and project dialog in both themes on mobile and desktop. Additional checks cover mobile dialog transitions, keyboard focus, whitespace validation, unfinished inquiries, and clipboard failure. These automated checks supplement visual review; they do not establish full accessibility conformance.

## GitHub Pages deployment

The deployment repository is [1hubengineering/website-v1](https://github.com/1hubengineering/website-v1). The `Deploy website to GitHub Pages` workflow builds and publishes `dist/` on pushes to `main`, and can also be run from the Actions tab. In Settings → Pages, the publishing source must be **GitHub Actions**. Private repositories require a GitHub plan that supports Pages.

The workflow reads the actual Pages URL and base path from GitHub. This supports the project URL `https://1hubengineering.github.io/website-v1/` and a future custom domain without hardcoding asset paths. No custom domain or DNS change is made by the deployment setup.

Local builds retain `https://1hubengineering.com/` as their canonical URL. To reproduce the project Pages build and run its browser checks in PowerShell:

```powershell
$env:BASE_PATH = "/website-v1/"
$env:SITE_URL = "https://1hubengineering.github.io/website-v1/"
npm test
Remove-Item Env:BASE_PATH, Env:SITE_URL
```

For a build without browser checks, use `npm run build` with the same variables. `BASE_PATH` controls bundled scripts, styles, logos, and the favicon; `SITE_URL` controls the canonical URL, social metadata, sitemap, and robots sitemap reference.

The deployment does not require `.env` or `SHADCNBLOCKS_API_KEY`. The blocks are already included in the source; the key is only used to retrieve additional components during development. Keep `.env` private.

The inquiry recipient is `info@1hubengineering.com`, supplied by the current brand data. The footer also includes the supplied Addis Ababa address and both phone numbers. The contact flow prepares a draft in the visitor's email client; it does not send, store, or claim to deliver messages. A server endpoint or email service is needed if direct form submission is desired.
