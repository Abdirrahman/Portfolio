# Portfolio

Abdirrahman Mohamed’s minimal, dark one-page portfolio, built with Astro 7 and
Bun. The name, introduction, five selected projects, and top-right contact icons
render as static HTML with no client JavaScript or external font requests. Each
project has a custom grey outline SVG icon in `public/icons/`. The background
preserves the original `#161616` dark theme, with an original grayscale tree
canopy photograph. The source is `src/assets/canopy-study.webp`; Astro generates
responsive WebP assets. The photograph fades into the page and becomes quieter
on smaller screens. Inter headings and Newsreader text are self-hosted under
`public/fonts/`, with their SIL Open Font Licenses. See the
[artwork generation prompt](docs/artwork.md) for its creative direction.
Contact icons are inline outline SVGs with accessible labels and 44-pixel targets.

## Development

Use Bun 1.3.14 or newer and Node.js 24.

```sh
bun install --frozen-lockfile
bun run dev
```

Open http://localhost:4321. Edit `src/pages/index.astro` for the brief and project
list and `src/styles/globals.css` for the layout and typography. The favicon is
`public/favicon.svg`.

## Verification

```sh
bun run check
bun run test
bun run preview
```

The tests build the site and check the brief, all five repository links, icon
files, contact destinations, dark theme metadata, and the legacy route. The
[responsive verification matrix](docs/responsive-checks.md) records browser
checks at common screen sizes.

## Deployment

`vercel.json` selects Astro, uses Bun 1.3.14 for installation and building, and
publishes `dist/`. `package.json` selects Node.js 24. No server adapter is needed.
Pushes to `main` deploy through the existing Vercel integration.

`/projects` permanently redirects to `/#projects`. Astro also builds a static
redirect page for local previews and other static hosts. The existing sample
`/api/hello` JSON endpoint is preserved.

Commit `bun.lock` whenever dependencies change. The former carousel, animation
libraries, and video files are available in Git history.
