# Personal Studio — Design Brief

> **STATUS (2026-03-26): NEEDS REWRITE.** This brief was built from OFF+BRAND + Lando Norris + Shopify Editions as a test of the reference library system, not as a true taste expression. Kevin's actual references are Frank Chimero (identity compression, warmth), Nabiu Studio (time-awareness, alive feeling), and Thesephist Stream (public thinking, process). v2 brief should synthesize from these three sources instead.

A single text-editable document that controls every design decision on the site.
Change any value here → Claude rebuilds from spec.
All values trace to a source in the reference library.

---

## Direction

**Register:** Dimensional authority. The site communicates craft before a word is read.
**Feeling at 50ms:** "This person builds things that feel different."
**Feeling at scroll end:** "I want to work with this person / hire this person / follow this person."
**Emotional arc:** `Visceral depth → earned respect → specific desire → low-friction contact`
**Psychological lever:** Aspiration + exclusivity. Assumes interest; never pitches.
**Voice token:** `sovereign minimalism` (speaks from authority, never explains itself)

**Source composition:**
| System | Source |
|--------|--------|
| Color + copy voice + token architecture | OFF+BRAND |
| Motion + interaction + depth | Lando Norris |
| Section architecture + navigation | Shopify Editions |

---

## 1. Color System

All colors implemented as CSS custom properties at `:root`. Dark mode is the default; swap values for light.

| Token | Value (Dark) | Value (Light) | Role |
|-------|-------------|--------------|------|
| `--color-bg` | `#0A0A0A` | `#F5F5F2` | Page background |
| `--color-surface` | `#141414` | `#EDEDE8` | Cards, elevated surfaces |
| `--color-surface-2` | `#1E1E1E` | `#E0E0DA` | Second elevation (modals, hovers) |
| `--color-text-primary` | `#F2F2F0` | `#0A0A0A` | Body text, primary content |
| `--color-text-secondary` | `#999994` | `#555550` | Subheads, captions, labels |
| `--color-text-muted` | `#555550` | `#999994` | Placeholder, disabled, timestamps |
| `--color-accent` | `#E8E8E0` | `#141414` | Hover states, active indicators |
| `--color-accent-warm` | `#C8B89A` | `#8B7355` | Optional warm accent (project highlights) |
| `--color-border-subtle` | `rgba(255,255,255,0.08)` | `rgba(0,0,0,0.08)` | Dividers, card borders |
| `--color-border-prominent` | `rgba(255,255,255,0.20)` | `rgba(0,0,0,0.20)` | Active focus rings, hover borders |
| `--color-overlay` | `rgba(0,0,0,0.60)` | `rgba(0,0,0,0.40)` | Modal backdrops, media overlays |
| `--color-curtain` | `#0A0A0A` | `#0A0A0A` | Page transition curtain (always dark) |

**Source:** OFF+BRAND CSS variable token system — the contract model. Swap values, keep contracts; site repaints.

---

## 2. Typography

### Font Families

| Token | Value | Role |
|-------|-------|------|
| `--font-display` | `"[Display font]", serif` | Headlines, hero, display text |
| `--font-body` | `"[Body font]", sans-serif` | All body copy, UI text |
| `--font-mono` | `"[Mono font]", monospace` | Code, technical labels |

> **To swap fonts:** Change the value here. All type inherits.

### Base & Scale

| Token | Value | Note |
|-------|-------|------|
| `--font-base` | `1.058vw` | Fluid — scales with viewport continuously (no snap) |
| `--type-scale` | `1.333` | Perfect fourth. Change to 1.25 (gentler) or 1.5 (dramatic) |

**Source:** OFF+BRAND fluid vw typography — type scales proportionally at any screen width.

### Type Hierarchy — Per Level

All sizes in `rem` (relative to fluid base). Change `--type-scale` to shift all ratios.

| Level | Size | Weight | Line Height | Letter Spacing | Transform | Named Token |
|-------|------|--------|-------------|----------------|-----------|-------------|
| Display | `4.5rem` | `800` | `1.05` | `-0.04em` | — | `cinematic leading` + `compressed tracking` |
| H1 | `3rem` | `700` | `1.08` | `-0.03em` | — | `cinematic leading` |
| H2 | `2rem` | `700` | `1.15` | `-0.02em` | — | — |
| H3 | `1.333rem` | `600` | `1.25` | `-0.01em` | — | — |
| Body Large | `1.25rem` | `400` | `1.6` | `0` | — | `editorial body` |
| Body | `1rem` | `400` | `1.6` | `0` | — | `editorial body` |
| Caption | `0.875rem` | `400` | `1.5` | `0.01em` | — | — |
| Label | `0.75rem` | `500` | `1.4` | `+0.08em` | `uppercase` | `label elevation` |
| Eyebrow | `0.75rem` | `600` | `1.4` | `+0.12em` | `uppercase` | `label elevation` |

**Hierarchy ratios:** `Display : H1 : H2 : H3 : Body = 4.5 : 3 : 2 : 1.33 : 1`

---

## 3. Spacing System

**Base unit:** `8px`. All spacing is a multiple.

### Scale

| Token | Value | Named alias | Use |
|-------|-------|-------------|-----|
| `--space-1` | `4px` | `tight` | Within components (icon gap, tight lists) |
| `--space-2` | `8px` | — | Default component padding unit |
| `--space-3` | `12px` | — | Compact padding |
| `--space-4` | `16px` | `comfortable` | Between related elements |
| `--space-6` | `24px` | — | Card padding, list gap |
| `--space-8` | `32px` | — | Between components |
| `--space-12` | `48px` | `breathing-room` | Between content groups |
| `--space-16` | `64px` | — | Minor section padding |
| `--space-20` | `80px` | `theatrical` | Major section padding (mobile) |
| `--space-24` | `96px` | — | Section gap (tablet) |
| `--space-32` | `128px` | `theatrical-desktop` | Major section padding (desktop) |

### Layout Margins

| Token | Value | Note |
|-------|-------|------|
| `--margin-theater` | `6vw` | Side margins — fluid, scales with viewport |
| `--margin-theater-min` | `24px` | Floor — never collapses below this |
| `--margin-theater-max` | `120px` | Ceiling — stops growing beyond this |

**4× section rule:** Section padding = 4× element gap. Section gaps feel hierarchically distinct from component spacing.

**Source:** OFF+BRAND `theater margins` + standard 8px base unit system.

---

## 4. Grid & Layout

| Token | Value | Note |
|-------|-------|------|
| `--grid-columns` | `12` | Standard 12-column (divisible by 2, 3, 4, 6) |
| `--grid-gutter` | `24px` | Gap between columns |
| `--grid-max-width` | `1440px` | Max content container width |
| `--grid-margin` | `6vw` | = theater margins (fluid) |

### Content Containers

Named widths for different content types. All centered within the grid.

| Container | Column span | Max-width | Use |
|-----------|-------------|-----------|-----|
| `narrow` | 6 of 12 | `640px` | Long-form text, essays |
| `reading` | 8 of 12 | `800px` | Body copy with breathing room |
| `default` | 10 of 12 | `1024px` | Standard sections |
| `wide` | 12 of 12 | `1440px` | Full-width with margins |
| `full-bleed` | Viewport | None | Edge-to-edge imagery, hero backgrounds |

---

## 5. Section Architecture — Skeletal Structure

This is the proportion system. Every section on the site is described by four coordinates:
**Height Mode × Content Split × Alignment × Elements**

Change any coordinate to restructure a section.

### 5a. Height Modes

| Preset | Value | Feel |
|--------|-------|------|
| `full-viewport` | `height: 100vh` | Cinematic — the section owns the screen |
| `three-quarter` | `height: 75vh` | Dominant — almost full, lets next section peek |
| `half-viewport` | `height: 50vh` | Balanced — content and breathing room |
| `short` | `height: 33vh` | Functional — transitional sections, dividers |
| `content-sized` | `height: auto; padding: theatrical` | Flows with content — editorial sections |
| `fixed-tight` | `height: 320px` | Fixed — banners, navbars, CTA strips |
| `fixed-wide` | `height: 640px` | Fixed — specific proportion control |

### 5b. Content Split Ratios

Two-column sections. Expressed as `left : right` grid columns out of 12.

| Preset | Grid columns | Ratio | Use |
|--------|-------------|-------|-----|
| `split-equal` | `6 : 6` | `1:1` | Symmetric — case studies, feature pairs |
| `split-favor-text` | `7 : 5` | `~1.4:1` | Text-dominant — copy-heavy sections |
| `split-favor-media` | `5 : 7` | `~1:1.4` | Media-dominant — visual portfolio |
| `split-editorial` | `4 : 8` | `1:2` | Feature showcase — image takes stage |
| `split-narrow-aside` | `8 : 4` | `2:1` | Long text with aside (quote, stats) |
| `split-wide-media` | `3 : 9` | `1:3` | Cinematic — narrow text, wide image |
| `split-narrow-media` | `9 : 3` | `3:1` | Text leads — narrow image accent |
| `full-width` | `12` | N/A | No split — centered or edge-to-edge |

> **To swap a section layout:** Change the split preset. Content reflows within the grid.

### 5c. Vertical Alignment Within Section

| Preset | CSS | Use |
|--------|-----|-----|
| `align-center` | `align-items: center` | Default — vertically centered content |
| `align-top` | `align-items: flex-start` | Top-anchored — long copy sections |
| `align-bottom` | `align-items: flex-end` | Bottom-anchored — sections with labels or captions |
| `align-spread` | `justify-content: space-between` | Spread — headline top, CTA bottom |

### 5d. Media Aspect Ratios

| Preset | Ratio | CSS | Use |
|--------|-------|-----|-----|
| `ratio-cinema` | `21:9` | `aspect-ratio: 21/9` | Cinematic hero backgrounds |
| `ratio-widescreen` | `16:9` | `aspect-ratio: 16/9` | Video, project screenshots |
| `ratio-standard` | `4:3` | `aspect-ratio: 4/3` | Classic editorial |
| `ratio-photo` | `3:2` | `aspect-ratio: 3/2` | Photography, product shots |
| `ratio-square` | `1:1` | `aspect-ratio: 1/1` | Thumbnails, avatars |
| `ratio-portrait` | `3:4` | `aspect-ratio: 3/4` | Portrait photography |
| `ratio-tall` | `9:16` | `aspect-ratio: 9/16` | Mobile-format, story proportions |

---

## 6. Page Structure — Section Sequence

The ordered blueprint of the site. Each row = one section.
Change a section's presets to restructure the page without touching code.

| # | Section name | Height mode | Content split | Alignment | Elements |
|---|-------------|-------------|--------------|-----------|----------|
| 1 | Hero | `full-viewport` | `full-width` | `align-center` | Display headline, subhead, optional scroll cue |
| 2 | Identity | `content-sized` | `split-editorial` | `align-center` | H2 + body copy (left) + portrait/image (right) |
| 3 | Projects — Lead | `three-quarter` | `split-favor-media` | `align-center` | Featured project with case study link |
| 4 | Projects — Grid | `content-sized` | `full-width` | — | 2–3 column project card grid |
| 5 | Philosophy | `content-sized` | `split-narrow-aside` | `align-top` | Long-form text (left), pull quote (right) |
| 6 | Process / How | `content-sized` | `full-width` | — | 3-column capability cards |
| 7 | Contact / CTA | `half-viewport` | `full-width` | `align-center` | H2 + email link or form |
| Footer | — | `content-sized` | `full-width` | — | Nav links, social, copyright |

> **To reorder sections:** Change the # column.
> **To add a section:** Add a row with presets.
> **To remove:** Delete the row.

---

## 7. Component Architecture

### Navigation

| Property | Value | Note |
|----------|-------|------|
| Position | `fixed` | Stays at top on scroll |
| Height | `64px` | — |
| Background | `transparent → --color-bg` | Transitions to solid on scroll past 80px |
| Logo position | Left | — |
| Links position | Right | — |
| CTA in nav | Yes — `"Get in touch"` | Minimal, no button — text link |
| Hover behavior | Letter-stagger animation | Per Lando Norris technique |
| Mobile behavior | Hamburger at 768px | Full-screen overlay menu |

### Cards — Project

| Property | Value |
|----------|-------|
| Aspect ratio | `ratio-widescreen` (16:9) |
| Border radius | `--radius-lg` (12px) |
| Padding | `--space-6` (24px) |
| Background | `--color-surface` |
| Hover | Clip-path ellipse reveal on image + subtle scale `1.02` |
| Transition | `300ms ease-out` |

### Buttons

| Type | Background | Text | Padding | Border | Hover |
|------|-----------|------|---------|--------|-------|
| Primary | `--color-text-primary` | `--color-bg` | `12px 24px` | None | Scale `1.02` + brightness |
| Secondary | Transparent | `--color-text-primary` | `12px 24px` | `1px --color-border-prominent` | Fill `--color-surface` |
| Ghost | Transparent | `--color-text-secondary` | `8px 16px` | None | `--color-text-primary` |

### Footer

| Property | Value |
|----------|-------|
| Columns | 3 — Logo + nav links, secondary links, social |
| Padding | `--space-16` top/bottom |
| Divider | `1px solid --color-border-subtle` at top |
| Type | `label` level — small, elevated tracking |

---

## 8. Depth & Z-Space

### Elevation Tokens

| Token | Shadow | Use |
|-------|--------|-----|
| `--elevation-flat` | None | Default — no elevation illusion |
| `--elevation-raised` | `0 1px 4px rgba(0,0,0,0.3)` | Cards at rest |
| `--elevation-elevated` | `0 4px 16px rgba(0,0,0,0.4)` | Cards on hover, dropdowns |
| `--elevation-floating` | `0 8px 32px rgba(0,0,0,0.5)` | Modals, overlays |
| `--elevation-dramatic` | `0 24px 80px rgba(0,0,0,0.7)` | Hero Z-depth elements |

### Parallax Configuration

| Layer | Speed multiplier | What it is |
|-------|-----------------|-----------|
| Background | `0.3×` | Moves slowest — farthest plane |
| Midground | `0.6×` | Standard background content |
| Content | `1.0×` | Normal scroll speed |
| Foreground | `1.2×` | Moves fastest — closest plane |

**Parallax mode:** `depth-only` — background slower, foreground locked.
Change to `multi-layer` for full depth effect (requires more asset work).

**Source:** Lando Norris depth-map parallax — different layers at different scroll speeds creates pseudo-Z.

---

## 9. Border & Radius System

### Border Radius

| Token | Value | Use |
|-------|-------|-----|
| `--radius-sm` | `4px` | Tags, badges, small UI |
| `--radius-md` | `8px` | Buttons, inputs |
| `--radius-lg` | `12px` | Cards, panels |
| `--radius-xl` | `20px` | Large cards, feature blocks |
| `--radius-2xl` | `32px` | Hero cards, prominent blocks |
| `--radius-full` | `9999px` | Pills, avatars, circular elements |
| `--radius-none` | `0px` | Sharp — intentional editorial choice |

### Border Widths

| Token | Value |
|-------|-------|
| `--border-thin` | `1px` |
| `--border-medium` | `2px` |
| `--border-thick` | `4px` |

### Divider Style

| Property | Value |
|----------|-------|
| Default | `1px solid --color-border-subtle` — barely visible |
| Prominent | `1px solid --color-border-prominent` — section breaks |
| Spacer | Section gap only, no visual line |

---

## 10. Motion DNA

**Motion register:** Authoritative. No spring, no bounce, no elastic. Deliberate and directional.

### Easing Presets

| Token | cubic-bezier | Feel | Use |
|-------|-------------|------|-----|
| `--ease-out` | `cubic-bezier(0.0, 0.0, 0.2, 1)` | Decelerates into rest | Entrances |
| `--ease-in` | `cubic-bezier(0.4, 0.0, 1, 1)` | Accelerates into motion | Exits |
| `--ease-in-out` | `cubic-bezier(0.4, 0.0, 0.2, 1)` | Smooth both ends | General movement |
| `--ease-authority` | `cubic-bezier(0.16, 1, 0.3, 1)` | Starts slow, ends decisively | Premium, weighted |
| `--ease-cinematic` | `cubic-bezier(0.25, 0.46, 0.45, 0.94)` | Film-like deceleration | Cinematic reveals |

### Duration Scale

| Token | Value | Feel | Use |
|-------|-------|------|-----|
| `--dur-instant` | `80ms` | Immediate | State changes, active indicators |
| `--dur-fast` | `150ms` | Snappy | UI feedback, hover micro-responses |
| `--dur-standard` | `300ms` | Deliberate | Most transitions |
| `--dur-deliberate` | `600ms` | Weighted | Section entrances |
| `--dur-cinematic` | `800ms` | Theatrical | Hero reveals, page transitions |
| `--dur-theatrical` | `1200ms` | Slow reveal | Preloader, curtain wipe |

### Stagger

| Token | Value | Use |
|-------|-------|-----|
| `--stagger-letter` | `10ms` | Letter-by-letter animation (nav, headlines) |
| `--stagger-list` | `40ms` | List items entering |
| `--stagger-cascade` | `60ms` | Section child elements in sequence |
| `--stagger-grid` | `80ms` | Card grid — left to right, top to bottom |

### Per-Context Motion

| Context | Easing | Duration | Stagger | Trigger |
|---------|--------|----------|---------|---------|
| Section entrance | `--ease-authority` | `--dur-deliberate` | `--stagger-cascade` | scroll-entry |
| Hover — text | `--ease-out` | `--dur-fast` | `--stagger-letter` | hover |
| Hover — card | `--ease-out` | `--dur-standard` | none | hover |
| Page transition | `--ease-cinematic` | `--dur-theatrical` | none | click |
| Preloader exit | `--ease-authority` | `--dur-cinematic` | none | load complete |
| Nav scroll trigger | `--ease-out` | `--dur-fast` | none | scroll past 80px |

**Source:** Lando Norris deliberate cascade + snappy feedback; OFF+BRAND controlled kinesis.

---

## 11. Interaction DNA

### Cursor

| Property | Value | Note |
|----------|-------|------|
| Type | `custom` | Native cursor hidden (`cursor: none` on body) |
| Default state | `12px circle, --color-text-primary` | Small dot, matches text color |
| Hover — link | `32px circle, border only` | Expands to outline on links |
| Hover — card | `48px circle, "View"` | Large with label |
| Hover — image | `64px circle, blend-mode: difference` | Inverts |
| Lerp factor | `0.1` | `position += (target - position) × 0.1` per frame |

**Lerp source:** Lando Norris / OFF+BRAND — the lag creates physical weight.
> **To remove custom cursor:** Change Type to `native`. Everything else ignored.

### Hover States

| Element | Hover behavior | Duration |
|---------|---------------|----------|
| Nav links | Letter-stagger — text slides up, duplicate slides in | `--dur-fast` per letter, `--stagger-letter` |
| Project cards | Clip-path ellipse reveal over image | `--dur-standard` |
| Buttons | Scale `1.02` + background shift | `--dur-fast` |
| Text links | Underline reveal from left | `--dur-fast` |
| Footer links | Opacity `0.6 → 1.0` | `--dur-fast` |

### Scroll Behavior

| Property | Value |
|----------|-------|
| Library | Lenis (smooth scroll) |
| Mode | Smooth — still responds to spacebar, Cmd+F, keyboard nav |
| Duration | `1.2` (Lenis ease duration) |
| Easing | `--ease-cinematic` |

### Page Transitions

| Property | Value |
|----------|-------|
| Style | Curtain wipe — overlay slides over screen |
| Curtain color | `--color-curtain` |
| Copy during load | `"Kevin Lin"` — minimal, branded |
| Duration | `--dur-theatrical` (1200ms) |
| Trigger | Click on internal links |

**Source:** Lando Norris screen wipe — "Load Norris" / OFF+BRAND mask reveal. Same principle: the wait is intentional.

### Focus States (Accessibility)

| Property | Value |
|----------|-------|
| Outline | `2px solid --color-accent` |
| Offset | `4px` |
| Style | Visible — never removed, never `outline: none` |

---

## 12. Copywriting System

**Voice token:** `sovereign minimalism` — speaks from authority, never pitches, assumes interest.

| Property | Rule |
|----------|------|
| Headline structure | Fragment only — no "I help brands do X" constructions. State identity, don't describe it. |
| Subheads | Short declarative sentence or fragment. No more than 12 words. |
| Body | Full sentences, 1.6 leading. No bullet lists on the main page. Bullets only in case studies. |
| CTA language | Casual confidence — "Get in touch" not "Start a project." Verb + minimal. |
| What to avoid | Adjective stacking, "passionate about," "I help," feature lists, hedging |
| Eyebrow / label | ALL CAPS, `label elevation` tracking, used sparingly — one per section maximum |

### Per-Section Copy Strategy

| Section | Headline approach | Body role | CTA |
|---------|-----------------|-----------|-----|
| Hero | Identity declaration — who Kevin is, not what he does | None, or one-line sub | Scroll cue — no hard CTA |
| Identity | What makes Kevin different — the intersection | 2–3 sentence precision paragraph | None |
| Project lead | Project name + one-line claim | Brief — what it is, why it matters | "See the work →" |
| Philosophy | A belief, stated plainly | Supporting logic — earned, not marketed | None |
| Contact | Invitation, not ask | 1 sentence max | Email or calendly link |

**Copy token for personal studio (adapted from Shopify's merchant-first command):**
`"Design, shipped. Code, owned. Vision, executed."` — verb-first compression pattern.

---

## 13. Build Stack

| Layer | Technology | Note |
|-------|-----------|------|
| HTML | Semantic HTML5 | No framework — clean, AI-readable |
| CSS | Custom properties + modern CSS | No preprocessor needed |
| Smooth scroll | Lenis | Install before other JS |
| Animations | GSAP or CSS transitions | GSAP for scroll-scrub; CSS for hover |
| 3D (optional) | Three.js | Depth map parallax if pursuing hero depth |
| Interactive animations | Rive | If adding stateful animations |
| Fonts | Variable fonts via Google Fonts or local | Load with `font-display: swap` |
| Images | WebP + srcset | Responsive from day one |
| Schema | `schema.org Person` markup | AI-readable identity signal |
| llms.txt | `/llms.txt` at root | AI agent discoverability |

**Build order:**
1. CSS token system (color + type + spacing) — foundation for everything
2. Grid + layout containers
3. Lenis smooth scroll
4. Section architecture (html structure)
5. Typography + copywriting
6. Motion system (CSS transitions + GSAP entrances)
7. Interaction DNA (cursor + hover states)
8. Page transitions
9. Preloader
10. Schema.org + llms.txt
11. Responsive (mobile-first from step 1 ideally)

---

## 14. Replicability Map

Claude-buildable today — no external tools required:

| Technique | Difficulty | Time |
|-----------|-----------|------|
| CSS token system | Easy | 1–2 hr |
| Fluid vw typography | Easy | 1 hr |
| 12-column grid + containers | Easy | 1 hr |
| Section height modes | Easy | 30 min |
| Split ratio layouts | Easy | 1 hr |
| Lenis smooth scroll | Easy | 2 hr |
| Letter-stagger nav hover | Easy | 30 min |
| Clip-path reveal on cards | Easy | 1 hr |
| Custom cursor with lerp | Medium | 3–4 hr |
| Curtain page transition | Medium | 1–2 days |
| Preloader with mask reveal | Medium | 2–4 hr |
| Motion system (GSAP scroll-entry) | Medium | 2–4 hr |
| Dark/light mode toggle | Medium | 2–4 hr |
| Schema.org + llms.txt | Easy | 30 min |

Tool-dependent (plan for later):
| Technique | Requires |
|-----------|---------|
| Depth-map parallax hero | AI depth model + Three.js pipeline |
| Rive animations | Rive design tool |
| 3D model in browser | glTF asset + Three.js |

---

*Source references: Lando Norris entry, OFF+BRAND entry, Shopify Editions Winter '26 entry — all in `~/second-brain/study/reference-library/websites/`*
