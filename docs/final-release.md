# Final portfolio release — 10 October 2026

The selected homepage uses Inter for its compact Abdirrahman heading and project
names, Newsreader for body text, and a genuine italic Newsreader tagline. Its
background is solid `#161616`, with an eight-pixel name-to-tagline gap. The five
projects, bespoke outline icons, subtle CSS motion and top-right contact icons
are retained.

The career line now lists Technical Consultant at Bonham & Brook, then Data
Engineer at Sigma Labs. The Senior Technical Consultant at Leyton title is an
Astro source comment. It is omitted entirely from public HTML and metadata.
Earlier concepts, preview routes, screenshots and their fonts remain local and
are excluded from the production commit.

## Responsive and accessibility checks

Browser viewport checks: 320×568, 390×844, 768×1024, 1440×900, 1920×1080 and
844×390. All passed: no horizontal overflow, readable text wrapping, all five
project icons and two active company logos loaded, project descriptions contained
within their rows, and contact targets at least 44×44 pixels. Short screens scroll
naturally. These are Chromium viewport checks, not physical-device tests.

Both company links retain accessible text names when keyboard focus reveals
their grayscale logos. Logos occupy the existing text boxes. Reduced-motion
and forced-colors fallbacks remain in the CSS. Projects retain keyboard focus
outlines and the skip link remains available.

## Speed

The homepage renders static HTML and CSS without executable browser JavaScript,
external font calls, or background artwork. Three WOFF2 fonts are self-hosted
and preloaded with `font-display: swap`. Image dimensions are reserved. The
Sigma Labs logo is a 250×40 transparent lossless WebP, 7,578 bytes versus the
original 22,536-byte PNG. Fonts, icons and logos receive one-day browser caching
on Vercel; HTML keeps the platform's default revalidation.
The clean production homepage and all referenced local assets total 163,820
bytes (about 160 KiB before HTTP compression), including fonts. Its CSS is
6,564 bytes and HTML is 7,548 bytes. No concept images or background artwork
are emitted in the production build.

## Search metadata

The title is “Abdirrahman Mohamed | R&D Tax Consultant”. The description accurately
summarizes R&D tax expertise, software/data engineering experience and the two
former employers. The canonical URL, Open Graph URL and sitemap all use
`https://www.abdirrahman.com/`. Social metadata and ProfilePage/Person JSON-LD
are included; no current employer, location, dates or profile image is invented.
`robots.txt` permits crawling and advertises the single-URL sitemap.

Google may choose different titles/snippets. Metadata does not guarantee a
particular ranking. Reference: [Google SEO starter guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)
and [ProfilePage guidance](https://developers.google.com/search/docs/appearance/structured-data/profile-page).

## Release validation

`bun run check` and `bun run test` pass. The tests verify the exact published
career order, absence of Leyton, all project/contact destinations, metadata,
structured data, sitemap, and legacy project redirect. The only script element
is inert JSON-LD. A separate production build from the staged Git tree verifies
that no local concepts or preview assets are deployed.
