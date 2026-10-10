# Portfolio

Abdirrahman Mohamed’s minimal, dark one-page portfolio, built with Astro 7 and
Bun. The name, introduction, five selected projects, and top-right contact icons
render as static HTML with no client JavaScript or external font requests. Each
project has a custom grey outline SVG icon in `public/icons/`. The background
is solid `#161616`. Inter headings and Newsreader text, including the italic
tagline, are self-hosted under `public/fonts/`, with their SIL Open Font Licenses.
The career line lists Bonham & Brook followed by Sigma Labs. Company names reveal
monochrome logos on hover or keyboard focus without moving surrounding text.
The future Leyton title is commented out in `PortfolioContent.astro` and does
not appear in the published HTML or metadata.
Contact icons are inline outline SVGs with accessible labels and 44-pixel targets.

## Development

Use Bun 1.3.14 or newer and Node.js 24.

```sh
bun install --frozen-lockfile
bun run dev
```

Open http://localhost:4321. Edit `src/components/PortfolioContent.astro` for the
brief and project list, `src/components/CareerContext.astro` for career copy,
and `src/styles/globals.css` for the layout and typography. The favicon is
`public/favicon.svg`.

## Verification

```sh
bun run check
bun run test
bun run preview
```

The tests build the site and check the brief, all five repository links, icon
files, contact destinations, published career order, canonical/social metadata,
Person/ProfilePage structured data, sitemap, and the legacy route. The
[final release notes](docs/final-release.md) record current browser checks and
production asset size. Earlier checks are preserved in
[responsive verification](docs/responsive-checks.md).

## Deployment

`vercel.json` selects Astro, uses Bun 1.3.14 for installation and building, and
publishes `dist/`. `package.json` selects Node.js 24. No server adapter is needed.
Pushes to `main` deploy through the existing Vercel integration.

The canonical homepage is `https://www.abdirrahman.com/`. Its R&D tax consultant
title and description, social metadata, JSON-LD, `robots.txt` and `sitemap.xml`
are generated or served statically. No employer or location is asserted in
structured data. Fonts, icons and company logos have one-day browser caching;
HTML retains Vercel’s default revalidation. The Sigma Labs logo uses a small
transparent lossless WebP. Motion respects reduced-motion preferences.

Design concepts and career previews are local working files, excluded from the
final production commit and deployment.

`/projects` permanently redirects to `/#projects`. Astro also builds a static
redirect page for local previews and other static hosts. The existing sample
`/api/hello` JSON endpoint is preserved.

Commit `bun.lock` whenever dependencies change. The former carousel, animation
libraries, and video files are available in Git history.
