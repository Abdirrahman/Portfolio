# Portfolio

Abdirrahman Mohamed's portfolio, built with Astro 7 and managed with Bun.
The home page and projects page render as static HTML. Swiper, Rough Notation,
and Wired Elements provide the carousel and hand-drawn details in the browser.

## Development

Install [Bun](https://bun.sh/) (1.3.14 or newer) and Node.js 22.12 or newer,
then run:

```sh
bun install
bun run dev
```

Open http://localhost:4321. Edit `src/pages/index.astro` for the introduction
and `src/pages/projects.astro` for the project list. Video demos live in `public/`.
Shared markup and styles live in `src/components/`, `src/layouts/`, and `src/styles/`.

The [responsive verification matrix](docs/responsive-checks.md) records checks
across 19 desktop, laptop, tablet, and phone viewport sizes.

## Checks and production build

```sh
bun run check
bun run test
bun run preview
```

`bun run test` builds the site and checks that its routes, project links, and
video demos are preserved. Use `bun run build` to build without running tests.
`bun run start` is an alias for the local production preview. The build writes
the site to `dist/`, including `/`, `/projects`, and the sample `/api/hello` JSON
endpoint. Deploy `dist/` with any static host. For an existing Vercel project,
select the Astro framework preset, use `bun install --frozen-lockfile` as the
install command, `bun run build` as the build command, and `dist` as the output
directory.

Commit `bun.lock` with dependency changes. For reproducible installs, run:

```sh
bun install --frozen-lockfile
```
