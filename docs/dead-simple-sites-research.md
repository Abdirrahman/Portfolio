# What the portfolios on Dead Simple Sites actually use

Research date: 10 October 2026. This is research for the existing dark portfolio;
no website changes were made for this investigation.

## Scope and method

[Dead Simple Sites](https://deadsimplesites.com/) rejects overly animated
content, scroll jacking, and excessive storytelling. It is a curated gallery,
not a single design system.

We selected 14 personal websites linked by the gallery: its first six personal
entries, plus eight older entries that cover developer, designer, and writer
homepages. This is a purposeful comparison sample, not a random sample or a
claim about every entry in the gallery. Gallery thumbnails can be older than
the linked websites, so the measurements refer to the current live pages.

Sources are first-party HTML/CSS and read-only browser inspection at
**1440 × 900 desktop**, plus six sites at **390 × 844 mobile**. Values are
labelled **declared CSS** or **computed**; the latter describe this browser and
viewport. A font-family stack does not prove every visitor sees its first font.

Widths refer to reading blocks, not full-page wrappers. Padding is explicitly
separated where relevant. CSS margins refer to named elements; adjoining
vertical margins can collapse and should not be added blindly.

## What repeats in this sample

Across the 13 sites with prose, selected desktop reading blocks measure about
**400–688px** wide; nine are between 500px and 700px. Their surrounding layouts
can be much wider. Frank Chimero’s remaining homepage is a small link index.

For primary visible copy, **9 of 14 request sans-serif, 3 serif, and 2
monospace**. Median desktop text size is **16px**, range 12–19px. Twelve use
14–19px; the 12px and 13px examples are dense monospace treatments. These are
sample counts, not a gallery-wide ranking.

**12 of 14 line-height ratios are 1.5–1.8**. Thomas is tighter at 1.25; Bobby’s
introduction is looser at ≈1.86. Many names are modest, but Jared uses 48px,
Lee 42.4px, and Jenny 96px. There is no compulsory title size.

### Typography and layout comparison

Sizes and prose widths here are **computed desktop measurements at
1440 × 900**. Font names come from the live family declarations and, where
necessary, first-party font metadata. `Size / line` means font size followed
by line height, both in pixels. A `†` marks a name size read from declared CSS
because the name is a link, span, or paragraph rather than a heading in the
initial heading sample. All copy sizes and prose widths were verified in the
browser. Values rounded to one decimal place are shown with `≈`.

| Site | Primary homepage font | Copy size / line | Name size | Reading width and composition |
| --- | --- | --- | --- | --- |
| [Jared Palmer](https://jaredpalmer.com/) | Geist Sans; Geist Mono for navigation | 18 / 32 | 48 | 672px centered prose; navigation above |
| [Thorsten Ball](https://thorstenball.com/) | Inter | 14 / 23.8 | 22.4† | 476px prose beside a narrow navigation rail |
| [Szymon Kaliski](https://szymonkaliski.com/) | System-first sans stack | 16 / 24 | 20 | 544px prose aligned left inside a 1024px outer wrapper |
| [Karri Saarinen](https://karrisaarinen.com/) | System-first sans stack, then Inter | 14 / 23.8 | 14 | 432px usable text inside a centered 480px box |
| [Thomas Byttebier](https://thomasbyttebier.be/) | Georgia in the inspected page | 19 / 23.75 | 19 | ≈539.4px prose anchored near the left edge |
| [Bobby Giangeruso](https://www.bobby.so/) | Inter | 14 / 26 introduction | 14 | 580px centered column; small avatar and timeline |
| [Emil Kowalski](https://emilkowal.ski/) | Inter Variable, CSS alias `Sans` | 16 / 26.4 | 16† | 644px usable text inside a centered 692px box |
| [Paco Coursey](https://paco.me/) | Söhne for copy; Inter for name | 16 / 28 | 16 | 640px introduction; three small columns for building/projects/writing |
| [Lee Robinson](https://leerob.com/) | Iowan Old Style / Palatino / Georgia stack | 17 / 27.2 | 42.4 | 600px prose in an expanded desktop grid, illustration on the right |
| [Steph Ango](https://stephango.com/) | System-first sans stack | 18.6 / 27.9 | 18.6† | ≈688.2px centered reading column and writing index |
| [Manuel Moreale](https://manuelmoreale.dev/) | Geist Mono, CSS alias `GM` | 12 / 20 | 12 | 414px prose in a 475px panel; full-page grid and project imagery |
| [Frank Chimero](https://frankchimero.com/) | Courier | 13 / 19.5 homepage links | 13 | Left-anchored index; 339px link columns in the left half of the page |
| [Jenny Wen](https://jennywen.ca/) | Neue Haas Grotesk Text; Swear Text Cilati for name | 18 / 29.25 | 96 | ≈549.3px prose inside a ≈789.3px image/timeline column |
| [Jonny Belton](https://jonnybelton.co/) | Newsreader; GT Standard Mono for dates | 19 / 33 | 19† | 400px article text; 720px overall rows including date/tool columns |

Karri, Szymon, and Steph put operating-system fonts first; an Inter fallback
does not guarantee Inter. Lee’s stack also varies by platform. Thomas has a
conditional Tisa declaration, but the inspected page computes to Georgia.

Emil’s [CSS alias `Sans`](https://emilkowal.ski/_next/static/css/d54e455ee7d8468f.css)
resolves to [Inter Variable font metadata](https://emilkowal.ski/_next/static/media/0336a89fb4e7fc1d-s.p.woff2),
verified with `fc-scan`. His additional font faces do not prove homepage use.
Jonny’s `body` is monospace while the main reading element is Newsreader;
measuring only `body` would be misleading.

### Four layout families

These are interpretive groupings of the measured sites, not categories defined
by the gallery.

1. **The quiet personal column.** A centered box, left-aligned text, small
   identity statement, and plain sections. Empty outer margins supply calm.
   [Karri](https://karrisaarinen.com/),
   [Bobby](https://www.bobby.so/), [Emil](https://emilkowal.ski/).
2. **The reading notebook.** Navigation, dates, or tools sit around a stable
   reading width. [Thorsten](https://thorstenball.com/),
   [Steph](https://stephango.com/), [Jonny](https://jonnybelton.co/).
3. **The spare index or letter.** Frank’s uniform link index and Thomas’s
   left-anchored serif letter create character with little hierarchy. Szymon’s
   initial prose also sits left inside a wider wrapper.
   [Frank](https://frankchimero.com/),
   [Thomas](https://thomasbyttebier.be/), [Szymon](https://szymonkaliski.com/).
4. **The restrained visual portfolio.** Lee’s split page, Manuel’s project
   grid/video, and Jenny’s large name/image timeline show that the gallery
   also accepts broad, visual layouts.
   [Lee](https://leerob.com/), [Manuel](https://manuelmoreale.dev/),
   [Jenny](https://jennywen.ca/).

Paco combines a quiet introduction with a three-column index; Jared pairs a
constrained column with a larger name. [Paco](https://paco.me/),
[Jared](https://jaredpalmer.com/).

### Spacing: a small local rhythm inside generous outer space

These **declared CSS values**, mapped to named elements, show different
spacing rhythms. Pixel conversions use each site’s actual root font size.

| Site / CSS source | Outer positioning | Nearby text spacing | Larger separation |
| --- | --- | --- | --- |
| [Karri](https://karrisaarinen.com/assets/site.38ecc17dae58.css) | 72px top; 24px side padding inside the centered box | 20px paragraph bottom margin; 10px below section titles | 46px after header; 32px before ordinary headings; 48px before writing |
| [Bobby](https://www.bobby.so/styles.css?v=avatar-link-15) | 60px top; 40px page padding; column capped at 580px | 16px between introduction paragraphs; 12px between timeline rows | 32px before introduction; 48px before timeline and studio |
| [Thorsten](https://thorstenball.com/css/main.css) | 70px top; sidebar/prose grid gap 49px | 14px paragraph margins; 8.4px below section headings | 33.6px above ordinary section headings |
| [Szymon](https://szymonkaliski.com/style.css?v=8cb0204e) | 32px wrapper top margin; 16px wrapper side padding | 16px after paragraphs; 8px below section headings | 64px before main content and major headings |
| [Emil](https://emilkowal.ski/_next/static/css/4691d38b7dfb2187.css) | 64px wrapper top padding at this desktop breakpoint; 24px sides | 16px between introduction paragraphs | 128px after header and before sections at desktop sizes |
| [Paco](https://paco.me/_next/static/chunks/6f8cd1f2e1c78e16.css) | 128px above the main grid | 28px prose paragraph bottom margin; 32px between index columns | Prose-heading token uses 56px above and 28px below; index labels use tighter overrides |
| [Jonny](https://jonnybelton.co/_next/static/chunks/fb8af0772adc7d79.css?dpl=dpl_AdtGyeso6yBY4FUSiQHgPDMiHnaJ) | 120px desktop top padding | 20px before biography | 80px after header; 58px between entry boxes, plus an internal 80px offset before article content |

Ordinary paragraph spacing here is **14–28px**; larger separation is
**32–128px**. These properties serve different jobs. My interpretation: keep
related text close, then give larger groups clear boundaries and outer space.
An entry-box gap is not necessarily the visible prose gap; internal padding
and margins also contribute, as Jonny’s row illustrates.

### Color: neutral surfaces, a few deliberate exceptions

The recurring roles are background, primary text, secondary text, and
occasionally a rule/accent. Neutrals vary in temperature. These **declared CSS
colors** are not a light/dark-site count; browser preferences or a saved theme
can change the displayed palette.

| Example | Background | Main text | Muted or accent detail |
| --- | --- | --- | --- |
| [Karri](https://karrisaarinen.com/assets/site.38ecc17dae58.css), dark | `#121213` | `#deddd8` | Muted `#9d9b96`; rules `#303030` |
| [Emil](https://emilkowal.ski/_next/static/css/4691d38b7dfb2187.css), dark | `#111110` | `#eeeeec` | Prose `#b5b3ad`; subtle hover surface `#191918` |
| [Paco](https://paco.me/_next/static/chunks/6f8cd1f2e1c78e16.css), dark | `#1a1a1a` | `#e5e5e5` prose | Primary foreground `#f2f2f2`; muted `#a0a0a0` |
| [Lee](https://leerob.com/_next/static/chunks/5856c06b82696be0.css?dpl=dpl_Azx4KN6eqoBot8NoL9bxnhG72Y7G), dark | `#1b1a19` | `#e8e5df` | Muted `#aaa59e`; warm heading `#f4f1eb` |
| [Steph](https://stephango.com/styles.css), light | `#fffcf0` | `#100f0f` | Muted `#6f6e69`; teal links `#24837b` |
| [Jonny](https://jonnybelton.co/_next/static/chunks/fb8af0772adc7d79.css?dpl=dpl_AdtGyeso6yBY4FUSiQHgPDMiHnaJ) | `#fffdf7` | `#2b2b2b` | Secondary text uses that ink at 50% alpha |
| [Frank](https://frankchimero.com/styles.css?1786574354361031153), homepage | `#3d4340` | `#eeeeee` | Muted gray-green `#717d78` |
| [Manuel](https://manuelmoreale.dev/assets/css/main.css?v=1.0.1) | `#111111` | `#cccccc` | Muted `#666666`; aqua link hover is a brighter exception |

Thorsten’s yellow link underline is another restrained accent, while Szymon
largely keeps links monll.com/css/main.css),
[Szymon’s CSS](https://szymonkaliski.com/style.css?v=8cb0204e).

### Mobile behavior

Six examples were inspected at **390 × 844**. Copy values are **computed
mobile**; gutters/top spacing are **declared CSS**. This browser reserves
10–15px for scrollbars, so column widths are not simply 390px minus padding.

| Site | Copy size / line | CSS side space | CSS top space and layout change |
| --- | --- | --- | --- |
| [Karri](https://karrisaarinen.com/) | 14 / 23.8 | 22px | 36px top; retains one text column |
| [Emil](https://emilkowal.ski/) | 16 / 26.4 | 24px | 48px wrapper top padding; rows adapt below the banner/header |
| [Paco](https://paco.me/) | 16 / 28 | 24px | 64px top; introduction becomes fluid, project index remains a horizontal scroller |
| [Thorsten](https://thorstenball.com/) | 15 / 25.5 | 18.75px | 30px wrapper top; sidebar becomes horizontal navigation above prose |
| [Steph](https://stephango.com/) | ≈16 / ≈24 | Centered `88vw` wrapper | Scales type slightly with viewport; wrapper measured ≈343.2px |
| [Jonny](https://jonnybelton.co/) | 19 / 33 | 24px outer + 16px inner article padding | 60px top; removes desktop side columns; article text measured 295px |

Outer space reduces and side columns restructure while type stays readable.
Paco’s index is an exception to the usual mobile vertical stacking.

## What this means for the current portfolio

The original layout already sits comfortably inside the observed range. Its
declared CSS uses a **512px maximum column**, **15px introduction text with
26.25px line height**, a **26px serif name**, **24px mobile side space**, and
**48px before Selected Projects**. Project names are 15px, descriptions 13px,
and icons 32px. Its background `#161616`, heading `#e8e7e3`, main text
`#c8c8c3`, and muted text `#a0a09b` have the same kind of restrained role
separation seen in the dark examples.
Source: [current portfolio CSS](/home/am/pf/src/styles/globals.css).

My advisory recommendation is to retain that column and palette. A consistent
type pair, stable paragraph/row rhythm, and restrained secondary text are the
useful refinements. The existing serif name can supply personality; the tree
should remain subordinate to reading. These are design inferences, not gallery
requirements. No portfolio styles were changed.

## Additional first-party source references

The live-page links in the comparison table are the sources of the browser
measurements. These additional stylesheets verify declarations not linked
elsewhere in the report:

- [Jared — typography, responsive sizes, and container rules](https://jaredpalmer.com/_next/static/immutable/chunks/3rvujzle5s0ef.css).
- [Thomas — Georgia/Tisa condition, prose cap, and root scaling](https://thomasbyttebier.be/assets/css/style.css).
- [Jenny — layout and type-size rules](https://jennywen.ca/_next/static/css/83a1084376d24fb9.css)
  and [Adobe font-family declarations](https://use.typekit.net/rku4zxn.css).

Generated stylesheet URLs can change after a deployment. Values here record
what was inspected on the research date, rather than a promise that the sites
will retain these designs indefinitely.
