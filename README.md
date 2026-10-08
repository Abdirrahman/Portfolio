# Portfolio

Abdirrahman Mohamed’s minimal, one-page portfolio, built with Astro 7 and Bun.
The introduction, five project links, and contact links render as static HTML
with no client JavaScript or external font requests. Each project has a custom
SVG icon in `public/icons/`.

## Development

Use Bun 1.3.14 or newer and Node.js 24.

```sh
bun install --frozen-lockfile
bun run dev
```

Open http://localhost:4321. Edit `src/pages/index.astro` for the brief and project
list, `src/components/Nav.astro` for contact links, and `src/styles/globals.css`
for the layout and typography. The favicon is `public/favicon.svg`.

## Verification

```sh
bun run check
bun run test
bun run preview
```

The tests build the site and check the brief, all five repository links, icon
files, contact links, and the legacy route. The [responsive verification
matrix](docs/responsive-checks.md) records browser checks at common screen sizes.

## Deployment

`vercel.json` selects Astro, uses Bun 1.3.14 for installation and building, and
publishes `dist/`. `package.json` selects Node.js 24. No server adapter is needed.
Pushes to `main` deploy through the existing Vercel integration.

`/projects` permanently redirects to `/#projects`. Astro also builds a static
redirect page for local previews and other static hosts. The existing sample
`/api/hello` JSON endpoint is preserved.

Commit `bun.lock` whenever dependencies change. The former carousel, animation
libraries, and video files are available in Git history.
