# Portfolio

Abdirrahman Mohamed's portfolio, built with Astro 7 and managed with Bun.
The home page and projects page render as static HTML. Swiper, Rough Notation,
and Wired Elements provide the carousel and hand-drawn details in the browser.

## Development

Install [Bun](https://bun.sh/) (1.3.14 or newer) and Node.js 24,
then run:

```sh
bun install
bun run dev
```

Open http://localhost:4321. Edit `src/pages/index.astro` for the introduction
and `src/pages/projects.astro` for the project list. Video demos and preview images
live in `public/videos/`.
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
endpoint. Deploy `dist/` with any static host.

`vercel.json` explicitly selects Astro, pins Bun 1.3.14 for installation and
building, and publishes `dist/`. These settings override an existing project's
Next.js preset and build commands. `package.json` selects Node.js 24 for Vercel's
build environment. No server adapter is needed for this static site.

Vercel caches the versioned files in `public/videos/` for one year. Change each
file's hash in its URL when replacing it so visitors receive the new version.

Commit `bun.lock` with dependency changes. For reproducible installs, run:

```sh
bun install --frozen-lockfile
```

## Project videos

The five demos total 2.93 MB, down from 46.06 MB. H.264 MP4s use a maximum width
of 1280 pixels, 30 fps, and fast-start metadata so playback can begin before the
download finishes. WebP preview images total 35 KB. Only the selected carousel
video loads and plays automatically; reduced-motion visitors can use native
playback controls instead.

To encode a replacement demo with FFmpeg:

```sh
ffmpeg -i original.mov -an -map_metadata -1 \
  -vf "scale=w='min(1280,iw)':h=-2,fps=30" \
  -c:v libx264 -preset slow -crf 23 -pix_fmt yuv420p \
  -movflags +faststart demo.mp4
ffmpeg -ss 0.25 -i demo.mp4 -frames:v 1 -vf scale=640:-2 \
  -c:v libwebp -quality 75 demo.webp
```

Include the first ten characters of each file's SHA-256 hash in its filename
and update the matching video and poster paths in `src/pages/projects.astro`.
The original MOV files remain recoverable from Git history.
