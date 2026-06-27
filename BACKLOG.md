# Personal Studio — Backlog

## Vision-Level Concepts

### AI-Native Knowledge Spectacle
The website as a living, interactive visualization of Kevin's second brain — not a static portfolio but a forward-thinking AI-native experience. The knowledge system itself IS the spectacle.

**What this looks like:**
- Atoms rendered as navigable visual objects with formation levels visible
- Connections between atoms shown as animated, interactable edges
- Person DNA fingerprints (star glyphs) as visual elements
- The knowledge graph as explorable data art — motion, depth, interactivity
- Visitors experience Kevin's thinking as a living system, not a list of posts

**Why this matters:**
- Nobody is doing this — AI-native websites that visualize a living knowledge system
- The site IS the content creation vehicle — every new atom, connection, or person entry updates the visual
- Positions Kevin as the person who doesn't just talk about AI-native creation but builds the exemplar
- Connects to: "AI Book / Living Second Brain as Product" (ideas.md 2026-02-24), Second Brain Reader (ideas.md 2026-03-17), knowledge graph project (`~/projects/knowledge-graph/`)

**Dependencies:**
- Knowledge graph data layer (Stage 1 done in `~/projects/knowledge-graph/`)
- Design brief motion/interaction DNA already specifies the right register (Lando Norris depth + authority)
- Three.js already in build stack for depth-map parallax — extend for data visualization

**Tech stack clarified (2026-04-09):**
- **Next.js** reads atom markdown files at build time → auto-generates nodes
- **D3.js** renders the force-directed node graph (works alongside React)
- **React** manages selectedNode state across NodeGraph + DetailPanel components
- **Three.js / p5.js** for the character/space interactive canvas (separate from React — canvas is a different rendering system)
- **Vercel** deploys from GitHub repo (same repo as second brain)
- The state problem: click node → 6 things update simultaneously → this is why React earns its complexity here
- Phase order: static studio sections first → node graph Phase 2

### Website Vision — Ideation Cluster (2026-03-19)
*All items below are sketches from an ideation session, not specifications. Hold loosely.*

**Architectural concepts:**
- **Three-frequency design** — surface (clean portfolio, 3-second read), graph (knowledge system visible), hidden layer (temporal layering, foreshadowing across posts). Nested, not parallel.
- **Dual navigation** — exploratory graph (nodes, edges, hover isolation) + conventional sidebar (Work, Writing, About). Both present, neither forced.
- **Content engine** — each atom produces: hook post + deep article + series arc + graph node. 111 atoms = years of content already formed.

**Interactive experiences (exploratory):**
- **Father's sculptures → living space** — images of dad's figurines come alive on hover. The interaction IS the dimensionality ladder performed. Emotional anchor.
- **Professional timeline as paradigm curve** — Industrial Design → Software → VR/XR → AI. Interactive, minimal line graphics. Hover/click expands into projects per era.
- **Claude character** — cute, stylized presence with agency in the site. Pops up serendipitously. Technical spectrum: scripted (v1) → contextual (v2) → conversational API (v3).
- **2D with depth, not 3D** — parallax layers, breathing elements, gentle node drift. "Alive" is the dimension, not 3D navigation.

**Content/story:**
- **Human-AI relationship as content** — show the collaboration (Bible studies, atoms co-created, research produced). The relationship IS the proof of #110-#111.
- **Stakes as story engine** — baby coming, paradigm shifting, four transitions navigated. "The kind of person people want to root for."
- **Home, not data center** — warmth, personality, the feeling of entering someone's workshop. Hand-drawn elements as warmth signal.

**Reference sites:** nitinsangwan.com (graph interaction, click sounds, floating nodes), nabiu.studio (atmosphere, intimacy, real-time personal greeting)

**Source:** `ideas.md` (2026-03-18 section — 8 entries) + `content/session-narratives/2026-03-19-intelligent-dimension-analysis-website-vision.md`

### Second Brain Reader (Private, v0)
Frictionless markdown reader for Kevin's own use — renders second brain docs beautifully, accessible on phone. This is the private prototype that proves the rendering before the public spectacle version.

---

## Prototype Index

### Built (in `prototypes/`)

| # | Name | Approach | Status |
|---|------|----------|--------|
| 01 | Force Constellation | 2D force-directed, all 111 atoms | Rejected — "Obsidian notes" |
| 02 | Concentric Rings | 2D rings by domain | Rejected |
| 03 | Phyllotaxis Spiral | 2D golden spiral | Rejected |
| 04 | Domain Galaxies | 2D clustered galaxies | Broken, rejected |
| 05 | Mycelium Network | 2D organic branching | Rejected |
| 06 | Light Minimal | 2D sparse, light | Rejected |
| 07 | Fractal Branching | 2D tree structure | Rejected |
| 08 | Seeds Network | 2D with 445 seeds | Rejected |
| 09 | Personal Nav | 2D, 12 curated nodes, serif | Superseded by 09b |
| 09b | Personal Nav Sans | 2D, 12 curated nodes, SF Pro, Drams orange, vanish-on-hover | **Current 2D direction** |
| 09c | 3D Constellation | 3D golden spiral, orbit controls, 2D toggle | **Active — has editing notes** |
| 09d | 3D Force | 3D force-directed (connected nodes cluster), 2D toggle | **Active — has editing notes** |

### Untried Concepts (queued for prototyping)

**Visual directions:**
1. **09e — Central anchor (radial)** — Kevin in the center (hand-drawn star or illustration), nodes radiate outward. Nitin Sangwan reference. Solves "floating words in space" by adding gravitational center. Tension: what IS the center element? Kevin's illustration? A shape?
2. **Crystal / Convex hull** — Same 12 nodes as vertices, but connections generate actual triangulated faces/surfaces forming a geometric solid. Rotate the crystal. Pull a node, the whole shape deforms. "My knowledge has a shape." Distinct from embedding space.
3. **Deformable object** — Visitors pull on vertices/nodes and watch the entire system respond. Every node is load-bearing. Spring physics.
4. **Atom-overlap positioning** — Nodes positioned by shared atom count (data-driven). Design and Perception share atoms #56-58, #109 so they sit close. Fatherhood (0 atoms) floats distant. Distance = actual semantic similarity.
5. **Real embeddings (Option 3)** — Run atom text through embedding model, reduce to 3D with UMAP/t-SNE. Positions reflect genuine semantic relationships. Most honest, most surprising — might reveal unexpected clusters.

**Interactive experiences:**
6. **Father's sculptures interaction** — Still images of dad's porcelain figurines. Hover brings them alive (motion, response, elements popping). The mouse IS the dimension being added. Visitor performs the dimensionality ladder.
7. **Professional timeline as paradigm curve** — Interactive line: ID → Software → VR/XR → AI. Hover/click expands into projects per era. Trail map, not trophy case. Includes personal moments (barista, Taiwan, mining job) as optional filter layer.
8. **Experiments gallery** — Interactive gallery of things built with Claude Code. Prototypes, button study, 3D work. Hover on a node → experiments fan out as clickable thumbnails. Proof of building frequency.
9. **Kevin + Claude — Two Intelligences in the Space (2026-04-01)** — The OS has two inhabitants with agency: Kevin (the person) and Claude (the AI). Both are personified, both react, both occasionally speak to each other.

   **Kevin's emotional state system (Memoji → Rive):**
   - Idle: ambient presence, not always tracking cursor — randomized attention makes it feel alive
   - Grabbed: Kevin makes a face when dragged
   - Release/recoil: reactive expression when node snaps back
   - Cursor near a node Kevin cares about: occasional gaze follow
   - Interaction tool: **Rive** (state machine for animation states). Export each emotional state, define transitions, embed as WebAssembly. Replaces single-loop video.
   - Requires multiple Memoji recordings: idle loop, grab face, release reaction, looking-left, looking-right

   **Claude's character:**
   - The blue dot is Claude's physical presence in the space
   - Claude speaks via the speech bubble (already built in 10e)
   - Claude occasionally drifts toward Kevin (not fixed at bottom center)
   - Kevin occasionally looks *toward* Claude's position
   - Speech bubble from Kevin *to* Claude: "figured it out yet?" / playful
   - Speech bubble from Claude *to* Kevin: "3 things live right now." / system-aware

   **The Kevin-Claude interaction moment:**
   - Kevin looks toward Claude's dot → Claude responds with a bubble
   - Shows two intelligences inhabiting the same space
   - Story: "I don't just use AI — we co-inhabit a space"
   - This IS the demonstration of atom #110–#111 (human-AI collaboration)

   **Build sequence:** (1) Rive state machine for Kevin's emotions, (2) Claude dot with drift physics, (3) scripted interaction moments, (4) contextual speech (v2 with API)

**Gaussian splatting (separate track):**
10. **Kevin's face as 3D splat** — Art/hero element, NOT navigation. Pipeline: Scaniverse (iPhone) → SuperSplat (cleanup) → SPZ format (~11MB) → Spark.js (WebGL). Kevin needs to capture scan first. Placement TBD (hero? about? transition element?).

**Content architecture (must resolve before most of the above):**
11. **Section hierarchy session** — What are the actual website sections? What's the nav structure? What expands into what? The graph is downstream of this. Emerging sections: Work (timeline + case studies, some password-protected), Writing (atoms → articles), Products (Timely Help + future), Experiments, About (generational story), Contact.
12. **Multi-audience routing** — 5 audiences identified (employers, clients, creators, engineers/builders, faith community). How does one site serve all without feeling scattered? Dual navigation (graph + sidebar) is the current hypothesis.

---

## Study & Research Queue

### ryOS — Extraction Session (2026-04-07)
Ryo Lu's ryOS (os.ryo.lu, github.com/ryokun6/ryos) is the closest existing model of what a sophisticated, AI-built personal portfolio can look like. Before building personal studio, run an extraction session to understand:
- **How he built the apps** — Cursor workflow, multiple agents simultaneously, soundboard → full OS iteratively
- **How Infinite Mac is embedded** — he didn't build the emulator, he borrowed it as one of 24 apps. What does that iframe/embed pattern look like in the React codebase?
- **How he leverages external content** — pop songs for karaoke via YouTube, MacOS nostalgia as the aesthetic system. He didn't design his own UI language — he inherited one. What other content/platform leverage is in the codebase?
- **What the component architecture looks like** — 24 apps sharing a common shell. How does state, the file system, and the menu bar connect to each app?
- **Craft target:** the polish level is the bar. Session goal = be able to articulate what produces that feeling of "full application, not web prototype"

*Method: clone repo → read codebase with Claude → write extraction doc to `study/ideas/ryos-extraction.md`*

### Transparent Video for Personal Brand Site (2026-04-07)
Memoji/face animation without black background — for use as a living element on the personal brand site. Need to investigate whether this is technically viable before committing to the design.
- **H.265 with alpha** — export from Blender compositor via mask; or use FFmpeg black-to-alpha flag (only works if no pure black in the face)
- **WebM** — browser-native alpha support, now cross-browser (Safari support ~2022)
- **Rive** — alternative: use Rive's state machine to animate the memoji file and trigger reactions on cursor position or page scroll
- **Decision gate:** test the simplest path first (FFmpeg black-to-alpha on the existing file) → if clean, H.265 or WebM. If not clean (black pixels in face), use Blender mask. Don't design around this until the file works.

*Run as a technical spike: 30 min to test H.265/WebM output quality before adding to any design spec.*

---

## Design Exploration Queue

### Typography & Layout
- **Name treatment** — Kevin Lin as a deliberate typographic element, not just a sidebar label. Explore font pairing, weight, size, spacing. How does the name work with/against the graph?
- **Sidebar alignment** — Explore right-aligning sidebar items with the name + subtitle for a cleaner vertical rhythm. Play with spacing in Figma.
- **Font as graphic element** — More deliberate use of typography across the site. The font choices ARE the personality signal before any content loads.

### Content Presentation
- **Article/content view** — When you click into a piece of writing or case study, what does the flat reading surface look like? Needs a clean, traditional content layout that transitions smoothly from the graph/spatial view. Typography-driven, not template-looking.
- **Detail panel rethink** — Current right-panel is just titles. Needs to evolve into something that can hold real content (articles, case studies, project pages) without losing the spatial context entirely.

### Visitor Interaction
- **Guestbook / leave a mark** — Visitors can write something, leave a message, type a note. A postcard or message wall concept. Not a chatbot — more like signing a guest book at someone's home. Fits the "home, not data center" philosophy. Needs design exploration for how it integrates without cluttering the space.

### Persuasion & Structure
- **Study persuasion structure** — Traditional websites have a conversion architecture. Review Dan Koe's site structure and Justin Welsh's approach (studied in `study/business-library/entries/justin-welsh.md`) for how they balance personality with professional credibility. The site needs to persuade, not just express.
- **Professional polish threshold** — The site MUST pass the "is this serious?" test. An employer at Apple or Google needs to see this as the work of a senior professional, not a student experiment. Polish is the trust signal. Every element should look intentional.

### Asset Gathering
- **Asset list needed** — Start collecting/producing:
  - Professional photo of Kevin (for About section)
  - Application screenshots / mockups (Timely Help, VR surgery, Walmart if allowed)
  - Father's sculpture photographs
  - Sketches, drawings, artifacts from past work
  - Grad project images (pillar of salt, cross table, faith objects)
  - XR/VR project artifacts
  - YouTube channel screenshots (3 videos, sketching content)
  - Favicon / brand mark
- Track in a dedicated asset checklist once items are identified.

### Figma Workflow
- **Export prototypes to Figma** — Send 09b (and possibly 09c/09d stills) into Figma so Kevin can manipulate typography, spacing, layout directly. Use the Figma MCP bridge. Not immediate — queue for when ready to refine.

---

## Ship List — Everything Needed to Launch

*Reverse-engineered from the finished product. Tackle bit by bit, daily.*

### 1. Infrastructure (do first — unblocks everything)
- [ ] **Vercel import** — connect GitHub repo, get live URL (15 min)
- [ ] **Domain** — decide on domain name, connect to Vercel
- [ ] **Analytics** — basic tracking from day one (Vercel Analytics or Plausible)
- [ ] **SEO foundation** — JSON-LD, Open Graph, meta descriptions (already spec'd in CLAUDE.md)

### 2. Design Decisions (must lock before building pages)
- [ ] **Node labels and descriptions — rewrite from Kevin's lived meaning** (2026-04-01): Current node quotes are distilled atom language — too abstract for visitors. Kevin's actual meaning of "The Crossing" = crossing into a new paradigm where the old mindset doesn't work (not the Masterpiece Principle fusion idea). Each node needs a description that lands in 2 seconds without prior context. Rewrite pass needed before ship.
- [ ] **Project + story pairing** — each project node links to: (1) capability demo, (2) a short piece of writing about what building it taught Kevin. Timely Help story: Brad Project → crosscut saw → Shaker → the clock → finally shipping. Lab story: making personal data visible, the feeling of the heart starting to treasure it. Pattern: wow → life lesson.
- [ ] **Messaging entry point** — don't open with formation language. Enter the visitor's frame: AI anxiety / AI excitement / don't-want-to-fall-behind. Bridge from there. Formation is the destination, not the door.
- [ ] **Final graph direction** — pick from 09b/09c/09d/09e or hybrid. Lock one.
- [ ] **Color system** — lock accent color (currently testing #6C5CE7 purple-blue). Define full palette: background, text, accent, hover, muted.
- [ ] **Typography system** — font pairing, sizes, weights. Name treatment. Heading vs body vs label hierarchy.
- [ ] **Thematic nodes** — Kevin writes his own 8-10 words (not Claude's 12). The lenses.
- [ ] **Content architecture** — finalize sidebar sections (Work, Writing, Building, About, Contact) and how graph maps to them. Two-layer model (functional sidebar + thematic graph).
- [ ] **Content view design** — what does an article/case study page look like? Typography, layout, width, reading experience.
- [ ] **Transition design** — how do you move from spatial graph → flat content → back? Animation, layout shift, or route change?

### 3. Content Production (can work in parallel with design)

**Writing (from atoms → publishable articles):**
- [ ] **Pick first 3-5 atoms** to develop into full articles
- [ ] **Write article #1** — Symbol Trap / Television hook (#109) — ready to draft
- [ ] **Write article #2** — TBD
- [ ] **Write article #3** — TBD
- [ ] **Content schedule** — strategic rollout plan, dual-audience targeting, series arcs
- [ ] **Hidden layer / easter eggs** — plan the cross-references, foreshadowing, structural encoding across articles

**Case studies (for Work section):**
- [ ] **VR surgery simulation** — write up with artifacts/screenshots
- [ ] **Walmart Walbot** — write up (password-protected). Gather allowed visuals.
- [ ] **Grad project** — pillar of salt, cross table, faith objects. Photo + short narrative.
- [ ] **Additional projects** — identify 1-2 more to show breadth

**About / Story:**
- [ ] **Generational sculptor narrative** — write the about section copy. Parents → Kevin → child arriving.
- [ ] **Professional timeline data** — list every era with dates, role, 1-line description: geology/mining, barista at Camellia, Taiwan (POS design manager), first UX job, VR/XR (Walmart, surgery sim), AI pivot, starting business
- [ ] **"Eye of the storm" positioning copy** — the calm-amidst-AI-anxiety framing
- [ ] **Design philosophy** — distill atoms into 3-5 stated beliefs for employers

**Products:**
- [ ] **Timely Help "coming soon"** — landing page link + email capture
- [ ] **Future products placeholder** — framework for adding products as they ship

### 4. Asset Production (Kevin's hands required)

**Photography:**
- [ ] Professional headshot / portrait
- [ ] Father's sculpture photographs (multiple angles, good lighting)
- [ ] Workspace / studio environment shot (optional, for atmosphere)

**Screenshots & Mockups:**
- [ ] Timely Help — Apple Watch screenshots or Figma mockups
- [ ] VR surgery simulation — whatever artifacts exist
- [ ] Walmart Walbot — whatever is allowed (check NDA)
- [ ] Grad project objects — existing photos or reshoot
- [ ] XR proof-of-concept artifacts

**Drawings & Sketches:**
- [ ] Inventory what exists from past work
- [ ] Any hand-drawn elements for the site itself (warmth signal)
- [ ] Favicon / brand mark concept

**3D / Experimental:**
- [ ] Gaussian splat capture — download Scaniverse, scan face
- [ ] Process through SuperSplat → SPZ format
- [ ] YouTube channel screenshots (3 sketching videos)

### 5. Build (page by page)

**Home / Graph:**
- [ ] Implement chosen graph direction in Astro
- [ ] Sidebar navigation (Work, Writing, Building, About, Contact)
- [ ] Graph ↔ sidebar interaction (clicking graph node filters sidebar, clicking sidebar highlights graph)
- [ ] Responsive behavior (mobile — graph may need different treatment)
- [ ] Click sounds / micro-interactions (if keeping from Nitin reference)
- [ ] Breathing / drift animation
- [ ] Auto-rotation (subtle)

**Work:**
- [ ] Timeline component — paradigm curve visualization
- [ ] Case study template — MDX layout for long-form project pages
- [ ] Password protection for Walmart case study
- [ ] Project cards / thumbnails
- [ ] Personal moments filter layer (optional — barista, mining, Taiwan as story dots)

**Writing:**
- [ ] Article template — clean reading surface, typography-driven
- [ ] Article index / list view
- [ ] "Coming soon" titles visible but not clickable
- [ ] Series grouping (articles that belong to arcs)
- [ ] Graph node tagging (each article tagged to 1+ thematic nodes)

**Building / Experiments:**
- [ ] Experiments gallery layout
- [ ] Products sub-section (Timely Help + future)
- [ ] Interactive experiment embeds (if feasible — iframe or component)

**About:**
- [ ] Generational narrative layout
- [ ] Father's sculptures interaction (hover brings alive — if ready)
- [ ] Professional timeline (interactive or static v1)
- [ ] Photo placement

**Contact:**
- [ ] Simple form or email link
- [ ] Guestbook / "leave a mark" feature (v1 — could be a simple text input that persists)
- [ ] Social links

### 6. Polish & Launch Prep
- [ ] **Cross-browser testing** — Chrome, Safari, Firefox, mobile Safari
- [ ] **Performance audit** — Three.js bundle size, lazy loading, image optimization
- [ ] **Mobile experience** — graph may need simplified mobile version
- [ ] **Taste skill test** — run Leon Lin's taste-skill against the site before launch
- [ ] **Persuasion structure review** — study Dan Koe + Justin Welsh patterns, apply
- [ ] **Accessibility basics** — keyboard navigation, alt text, contrast
- [ ] **Favicon + OG image** — social sharing preview
- [ ] **Soft launch** — share with 3-5 trusted people for feedback before public

### 7. Post-Launch (ongoing)
- [ ] Claude character v1 (scripted animations)
- [ ] Gaussian splat integration
- [ ] Content-performance tracking (`what-works.md` log)
- [ ] New articles on cadence (1/week target)
- [ ] Graph grows as content grows — new nodes light up
- [ ] Hidden layer / temporal rewards accumulate over time

---

## Prototype Editing Notes (2026-03-19)

### 09c — 3D Constellation (golden spiral positions)
- **Selected node behavior:** When a node is selected, fully HIDE all unconnected nodes — not ghost/fade, but invisible. Current behavior is ghosted at 6% opacity. Kevin wants cleaner isolation.

### 09d — 3D Force (force-directed positions)
- **Default zoom too close:** On load, camera is so close you only see a few shapes. Need to either: (a) pull camera back further, (b) shrink the constellation, or (c) auto-fit camera to bounding box of all nodes. Currently requires manual zoom-out.
- **Max zoom-out too limited:** When fully zoomed out, the constellation fills the viewport edge-to-edge with no breathing room. Increase `maxDistance` on OrbitControls (currently 25) and/or give the scene more padding so the user can pull further back for the full picture.

### Both 09c and 09d
- **Accent color:** Purplish-blue #6C5CE7 with emissive glow applied to both.
- **No scale on hover** — color change only.
- **2D flatten is rotation-dependent:** Flattening zeroes out z-axis but doesn't reset camera angle. If you're viewing the 3D from the side, the 2D view compresses into a near-line. Fix: when toggling to 2D, smoothly animate camera back to front-facing position (z-axis aligned) so the flat layout always reads cleanly. Especially bad on 09d where force-sim positions can cluster tightly on one axis.
