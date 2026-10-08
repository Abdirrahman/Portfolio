# Responsive layout verification

Verified on 8 October 2026 against the production Astro build of the dark
one-page redesign in the in-app Chromium browser. These are CSS viewport checks,
not physical-device tests.

All 23 sizes passed: no horizontal overflow, all five icons and the tree artwork
loaded, project copy stayed within each row, and all eight project and contact
links had at least 44 × 44 pixel targets. The original `#161616` background and
dark color scheme were preserved. The layout remains a single, centered column,
capped at 512 pixels; short screens scroll naturally to reach every link.

The detailed grayscale oak engraving sits to the right of the content on larger
screens. It fades behind the content on phones, and its containing layer clips
the artwork without adding horizontal scrolling. Astro generates three WebP
sizes from the transparent PNG. The artwork is hidden from assistive technology
and cannot intercept pointer input. Contact links stay at the top right, with
at least 20 pixels of clearance above the name at every size checked.
The final contact icons were checked again at 320 pixels wide: all three retain
44 × 44 pixel targets, accessible names, and the same destinations.

| Viewport | One-page portfolio |
| --- | --- |
| 3840 × 2160 | Pass |
| 2560 × 1440 | Pass |
| 1920 × 1080 | Pass |
| 1600 × 900 | Pass |
| 1536 × 864 | Pass |
| 1440 × 900 | Pass |
| 1366 × 768 | Pass |
| 1280 × 800 | Pass |
| 1280 × 1024 | Pass |
| 1024 × 768 | Pass |
| 901 × 900 | Pass |
| 900 × 900 | Pass |
| 820 × 1180 | Pass |
| 768 × 1024 | Pass |
| 641 × 800 | Pass |
| 640 × 800 | Pass |
| 430 × 932 | Pass |
| 414 × 896 | Pass |
| 390 × 844 | Pass |
| 375 × 667 | Pass |
| 360 × 800 | Pass |
| 320 × 568 | Pass |
| 844 × 390 | Pass |

Keyboard checks at 320 × 568 confirmed a visible focus outline on the skip link,
the GitHub, LinkedIn, and email links, then all five project links, in that order.
Tabbing to links below the fold scrolled them into view. Contact destinations
match the links on Abdirrahman.com. The old `/projects` URL reached `/#projects`.
The production page reported no console warnings or errors.
`bun run check` and `bun run test` passed with Bun 1.3.14 and Node 26.8.1.

To repeat: run `bun run test` and `bun run preview`, open `/`, and check the
sizes above. Confirm that icons load, text wraps without clipping, every link
can be reached with Tab, contacts stay at the top right without overlapping the
name, and narrow or short screens can scroll to the final project.
Open `/projects` to verify the legacy redirect.
