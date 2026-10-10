# Original layout refinement — 10 October 2026

The original dark one-column homepage remains the chosen design. The addition is
a short career context line: previously a data and software engineer, now a
Technical Consultant at Bonham & Brook. Projects, artwork, typography, and
contact destinations keep their existing placement.

## Career sources

- [Public LinkedIn profile](https://uk.linkedin.com/in/abdirrahman): the indexed
  profile matches the portfolio, Bonham & Brook, and King's College London.
  LinkedIn did not expose the full experience history, so previous employers,
  dates, or additional job titles were not inferred.
- [Bonham & Brook team biography](https://bonhamandbrook.co.uk/meet-the-team):
  confirms Technical Consultant, software/data engineering and machine learning
  experience, and an Electronic Engineering degree from King's College London.
- The user's stated former data engineering role and their original homepage
  at commit `22b5acb` support the previous data/software engineering wording.

## Design and motion references

- [shadcn](https://shadcn.com/): interpreted the concise identity statement and
  direct link treatment as a fit for this homepage; no component library added.
- [Emil Kowalski — 7 Practical Animation Tips](https://emilkowal.ski/ui/7-practical-animation-tips):
  small ease-out entrances. The introduction uses 280ms and 4px of vertical
  travel; projects follow 60ms later.
- [Emil Kowalski — You Don't Need Animations](https://emilkowal.ski/ui/you-dont-need-animations):
  motion should earn its place. The tree has a single 500ms opacity entrance,
  then stays still.
- [Rauno — Crafting the Next.js Website](https://rauno.me/craft/nextjs): quiet
  craft, clear focus treatment, and animation of opacity/transform.
- [Vercel Web Interface Guidelines](https://vercel.com/design/guidelines): CSS
  motion, explicit transition properties, keyboard access, reduced-motion
  support, and 44px contact targets.

Project arrows reveal on hover/focus; the employer link has a persistent subtle
underline. All entrances are limited to `prefers-reduced-motion: no-preference`;
reduced motion also disables transitions. No scripts or dependencies were added.

## Verification

Browser checks covered 320×740, 390×844, 768×1024, 1024×768, 1440×900, and
1920×1080: no horizontal overflow, all artwork/icons loaded, all five projects
present, and 44×44px contact targets. The phone view and keyboard focus were
inspected visually. Computed styles confirmed one-shot entrances, final opacity
of 1, and a visible project arrow on keyboard focus. Reduced-motion media rules
were checked in the browser stylesheet.

`bun run check` and `bun run test` passed. The previous concept previews remain
local review artifacts and are excluded from this deployment.
