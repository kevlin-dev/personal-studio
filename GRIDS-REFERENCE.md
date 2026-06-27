# Grids.obys.agency — Design System Reference

Source: https://grids.obys.agency/
Extracted: 2026-04-09
Purpose: Visual DNA reference for personal studio site build

---

## Typography

| Style | Font | Size | Weight | Line-Height | Letter-Spacing | Transform |
|-------|------|------|--------|-------------|-----------------|-----------|
| H1 | Nobel | 48px | 700 | 60px | -10px desktop / -3.11px mobile | Uppercase |
| H2 | Georgia | 24px | 400 | 30px | 0 | — |
| Body | Georgia | 18px | 400 | 23px | 0 | — |
| Caption | Georgia | 14px | 400 italic | 18px | 0 | — |

**Font pairing principle:** Two fonts only. One display (custom sans, bold, uppercase). One body (classic serif, regular). No middle weights (300, 500, 600) — only 400 and 700.

**Nobel alternatives (free/open):**
- Space Grotesk (Google Fonts) — geometric, clean
- Barlow Condensed (Google Fonts) — works at large display sizes
- DM Sans (Google Fonts) — clean at weight 700

---

## Color Palette

| Token | Value | Usage |
|-------|-------|-------|
| --color-text | #222222 | All headings and body |
| --color-text-secondary | rgba(34,34,34,0.5) | Captions, metadata |
| --color-bg | #FFFFFF | Page background |
| --color-accent | #0078FF | Links only — used sparingly |
| --color-black | #000000 | Shapes, interactive triggers |

**Color philosophy:** Strictly monochromatic. One accent color (blue) used only for links. No gradients, no color complexity, no dark mode.

---

## Spacing & Layout

| Token | Value |
|-------|-------|
| Container max-width | 1024px |
| Mobile container | 320px |
| Border radius | 0px everywhere (sharp corners) |
| Section vertical gap | ~120px minimum (implied by page height ratio) |
| Vertical rhythm | Line-height driven, not padding units |

**Whitespace philosophy:** Page heights 6,901–11,720px for a 1024px-wide site. Sections breathe. Negative space is content.

---

## Motion & Animation

| Type | Duration | Delay | Easing |
|------|----------|-------|--------|
| Load animation | 0.6s | 3.8s | ease-both |
| Click interaction | 0.1s | 0s | — |
| Scroll parallax | — | pixel-delay | ease-in / ease-out |

**Parallax values:** dy: -241px typical vertical displacement at full desktop scale. Scale down to -40 to -80px for subtler application.

**What the 3.8s delay communicates:** Patience. Intentionality. The site doesn't rush to greet you — it waits, then reveals. This is the single biggest signal of premium craft.

---

## Components & Interaction

- **No traditional buttons** — interactive elements are shape-based triggers (rectangles, triangles) at 0% opacity that respond to click
- **Navigation:** Fixed-position header across full scroll depth
- **Cards:** 0px border-radius, transparent backgrounds, no borders
- **Links:** #0078FF default → #000000 on hover, solid underline on hover
- **Custom cursor:** Used (PNG-based), adds tactile premium feel

---

## What Creates the Luxury Feel (Transferable Principles)

1. **Two fonts, two weights** — Nobel 700 + Georgia 400. Nothing else.
2. **#222222 does all the work** — no color used for hierarchy, only opacity
3. **Sharp corners everywhere** — zero border-radius is a design choice, not an oversight
4. **Pages breathe** — content-to-whitespace ratio heavily favors whitespace
5. **Delayed reveal** — 3.8s load delay signals the site is composed, not anxious
6. **Measured parallax** — scroll interactions are subtle, not acrobatic
7. **Editorial pacing** — the site reads like a book, not a dashboard

---

## Platform Note

Site is built on **ReadyMag** (proprietary digital publication platform). HTML extraction will yield platform-specific markup — not reusable components. Extract the **visual logic and editorial principles**, not the code.

---

## Assets on Site

- Custom cursor: PNG-based, applied via CSS cursor property
- Fonts: Nobel (custom), Georgia (system), Mr Bedfort (Google Fonts)
- Images: Served via CDN (rmcdn.net), LQIP optimization, scalewidth 3600px
- No videos detected
- No external icon library — custom SVG shapes only
