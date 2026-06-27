# Kevin's OS — Design Concept
**Status:** Concept phase — not yet designed or built
**Last updated:** 2026-03-30
**Arc:** personal-studio / personal-os-lab (converged)

---

## The Core Idea

Two surfaces. One entity.

**Surface 1 — The Front Page**
Traditional text-based page. Black on white. Kevin's marketing message stated simply. Deliberately plain — the plainness is intentional, not a lack of effort. At the corner: a peel effect. Something underneath wants to be revealed.

**Surface 2 — The OS**
Peel the corner → enter Kevin's OS. A node-based environment. His second brain, his work, his thinking — as an explorable space rather than a scrollable page.

The philosophical move: most websites push content at you and assume what you want to see. This one lets you navigate by intent — with your mouse, or with your voice.

---

## Navigation Architecture

### Level 0 — The Map (entry state)
- Kevin at center as the focal node
- Major themes orbit as high-level nodes (TBD what these are)
- Faint connection lines between nodes — not just Kevin ↔ node, but node ↔ node where relevant
- Monochromatic. Everything visible at a glance.

### Level 1 — Node selected
- Click a node → that node moves to center
- Kevin icon fades out
- All unrelated nodes fade back (still present but dimmed)
- The selected node's connections come into focus
- Edge labels become readable — what does this connection mean?
- Hover on an edge label → brief explanation appears

### Level 2 — Content (zooming in)
- Click into a specific connected node → Z-axis transition
- Surrounding context blurs and scales back, implying depth
- Deeper nodes come into focus
- Transition communicates: we are going *inside* something

### Content Frame (Nitin's solution)
When you land on actual content (an atom, a case study, writing):
- A Mac-style browser frame appears — minimal, floating
- Three dots top-left (red dot = close, functional; middle + right = decorative, conventional signal only)
- Title + category label at top
- Content scrolls inside the frame
- Closing the frame returns you to the node view at the level you were on

---

## Shape Language

### Two separate uses of shape — different rules for each

**Shape as intro animation (philosophical statement)**
Plays at page load or OS entry. Sequence:

`dot → triangle → square → pentagon → hexagon → (approaching circle)`

The mathematical truth underlying this: a polygon with infinite sides *is* a circle. So the animation is: unity → differentiation → increasing complexity → return toward wholeness. This structurally embodies Kevin's formation thesis before a word appears. Nobody needs to "read" it — they feel it.

**Shape as categorical system (navigation language)**
Maximum 4–5 shapes. Must be maximally distinct from each other at a glance:
- **Circle** — the self, the whole, Kevin as center node
- **Triangle** — ? (formation triad? input → formation → output?)
- **Square** — ? (work, craft, made things?)
- **Hexagon** — ? (system, structure, the second brain?)

*These assignments are open.* The number behind each shape carries meaning — derive assignments from what 3, 4, 6 mean in Kevin's actual faith/formation framework. Don't assign arbitrarily.

**Rule:** The intro animation can use all polygons. The category system only uses these 4–5 maximally distinct shapes. Two different jobs.

---

## Color Language

**Base state:** Monochromatic. Black, white, grey. The site is "unactivated."

**Interaction reveals color:**
- Hover a node → its color appears
- Enter a node's territory → that color becomes the single accent on screen
- Rule: never two accent colors visible simultaneously
- The color is the "fingerprint" of that domain

**Why this works:** The site comes alive through attention. You activate it by looking. This is a metaphor for formation — things become vivid when you engage with them.

*Color assignments TBD — depends on what the top-level nodes are.*

---

## Voice / AI Layer

**Input field at bottom center** — text and voice, always accessible

**Two modes of interaction:**

| Mouse/click mode | Voice/AI mode |
|-----------------|---------------|
| Visual exploration | Intent declaration |
| You follow curiosity | You state what you want |
| Non-linear browsing | Directed surfacing |

**Voice navigation examples:**
- "Go back home" → returns to Level 0
- "Show me Kevin's past work" → surfaces the work frame
- "How does formation connect to design?" → zooms to that edge/connection

**Cost-controlled implementation:**
- Pre-coded responses for predictable questions (no API cost)
- API-connected version optional, behind password
- The AI doesn't replace the visual navigation — it's an alternate input modality

**The AI as contextual commentator (ambient layer):**
When you're looking at a specific node or piece of content, the AI can offer brief commentary — unprompted. "This atom connects to something in your writing section." Like a guide, not a chatbot.

---

## What's Still Unresolved

1. **Top-level nodes** — what are the 6–8 things that orbit Kevin at Level 0? This is the most important design decision. Everything else is navigation mechanics.
2. **Shape assignments** — which shape maps to which category? Needs to come from Kevin's numerological/formation framework.
3. **Color assignments** — which accent color per node? Depends on what the nodes are.
4. **The frame for content** — Nitin's Mac-frame approach is the current best candidate. Confirm or find something more Kevin.
5. **Data source** — what actually loads when you click into content? Atoms? Case studies? Essays? Which ones are public-facing vs. private?
6. **Lab vs. Personal Studio** — is this the Personal Studio website, or a separate lab OS that lives alongside it?

---

## What Already Exists (assets ready to use)

- 122 atoms with levels, types, domains, connections
- 106-node knowledge graph data layer (Three.js prototypes 09b, 09c, 09d)
- Hand-drawn illustration signature
- Copy skeleton (locked — don't rewrite)
- Astro + Tailwind + Vercel pipeline working
- 13 Three.js prototypes already built

---

## Tech Stack (proposed)

- **Next.js + TypeScript + Tailwind** — file-based routing (each node can have a URL), API routes for AI layer, Vercel deploy
- **Three.js or D3** — node graph rendering (existing prototypes already in Three.js)
- **Web Speech API** — voice input (browser-native, no cost)
- **Tauri** (optional, later) — if downloadable desktop version makes sense

---

## Reference

- Ryo Lu's site (ryo.lu) — two-surface peel, OS as portfolio
- Nitin Sagwan — geometric shapes as navigation, Mac-frame for content
- Three.js prototypes (09b, 09c, 09d) — existing node graph work
- `content/session-transcripts/2026-03-29-personal-os-lab-transcript.md`
- `ideas.md` — 2026-03-30 entry (shape language concept)
