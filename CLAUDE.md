# Personal Studio — Claude Code Instructions

> **⚠️ DEPRECATED FOLDER (flagged 2026-04-24)**
> The active Personal Studio site has moved to **`~/projects/personal-studio-next/`** (Next.js + Marco design system). This folder (`~/projects/personal-studio/`) is the original Astro scaffold and is no longer the active site.
>
> **If a session opened here by accident:** close, reopen at `~/projects/personal-studio-next/`. Load that folder's `CLAUDE.md` (symlinked to `AGENTS.md`).
>
> **Untriaged strategy docs in this folder** (decide whether to migrate to -next, archive, or delete): `BACKLOG.md`, `COPY-SKELETON.md`, `DESIGN-BRIEF.md`, `GRIDS-REFERENCE.md`, `MASTER-CONTINUATION.md`, `OS-CONCEPT.md`. Do this triage when rested.
>
> Original Astro project instructions retained below for reference.

---

## ALWAYS LOAD FIRST (every session, no exceptions)
```
~/projects/personal-studio/MASTER-CONTINUATION.md
```
This is the persistent co-founder memory for this project. It contains the full arc history, what's decided, what's open, current state of all parallel tracks, and the decision gate for the next session. Read it before doing anything else.

## Stack
- **Framework:** Astro (static site generator)
- **Styling:** Tailwind CSS v4 (via `@tailwindcss/vite`, imported in `src/styles/global.css`)
- **TypeScript:** strict mode
- **Deploy:** Vercel (git push to main → auto-deploy)
- **Email/Funnel:** Systeme.io (external, linked from /connect)
- **Content:** MDX files in `src/content/`

## Project Structure

```
src/
├── components/
│   ├── Layout.astro       # base HTML shell — meta, OG, JSON-LD, Nav
│   └── Nav.astro          # top navigation
├── content/
│   ├── config.ts          # Zod schemas for all collections
│   ├── work/              # case studies (.mdx)
│   ├── projects/          # live/in-progress work (.mdx)
│   └── writing/           # essays and build logs (.mdx)
└── pages/
    ├── index.astro        # Home
    ├── work/index.astro   # Work gallery
    ├── work/[slug].astro  # Case study detail
    ├── projects/index.astro
    ├── projects/[slug].astro
    ├── writing/index.astro
    ├── writing/[slug].astro
    ├── about.astro        # The Maker
    └── connect.astro      # Front Desk
```

## Route Map
| URL | File | Purpose |
|-----|------|---------|
| `/` | `pages/index.astro` | Entrance |
| `/work` | `pages/work/index.astro` | Gallery listing |
| `/work/[slug]` | `pages/work/[slug].astro` | Case study |
| `/projects` | `pages/projects/index.astro` | Workbench listing |
| `/projects/[slug]` | `pages/projects/[slug].astro` | Project detail |
| `/writing` | `pages/writing/index.astro` | Journal listing |
| `/writing/[slug]` | `pages/writing/[slug].astro` | Essay/post |
| `/about` | `pages/about.astro` | The Maker |
| `/connect` | `pages/connect.astro` | Front Desk |

## Content Collections

### work (case studies)
Required: `title`, `description`, `date`, `status`
Optional: `tags[]`, `cover` (image path), `featured` (bool), `nda` (bool — hides from listing)

### projects (live/in-progress)
Required: `title`, `description`, `status` (active | paused | shipped), `date`
Optional: `repo` (URL), `live` (URL)

### writing (essays/build logs)
Required: `title`, `description`, `date`
Optional: `tags[]`, `draft` (bool — hides from listing)

## Adding Content
1. Create a `.mdx` file in the appropriate `src/content/` subfolder
2. Add required frontmatter fields (see schemas above)
3. Write content in MDX below the frontmatter
4. `npm run dev` to preview; Astro will hot-reload

## Commands
```bash
npm run dev      # dev server at localhost:4321
npm run build    # production build to dist/
npm run preview  # preview the production build locally
```

## Deploy
- Push to `main` → Vercel auto-deploys
- No manual deploy steps needed once Vercel is connected

## AI-Native Strategy Notes
- `Layout.astro` includes JSON-LD structured data (Schema.org Person + WebSite)
- All pages use semantic HTML (`<article>`, `<nav>`, `<header>`, `<time>`, `aria-*`)
- Content collections are Zod-typed — frontmatter errors surface at build time, not runtime
- NDA flag on work items excludes them from listing without deleting the file

## Conventions
- No CSS-in-JS, no component libraries — Tailwind utility classes only
- Prefer editing `Layout.astro` for global changes (meta, nav, footer)
- Keep `config.ts` schemas strict — add optional fields rather than widening types
- All external links: `target="_blank" rel="noopener noreferrer"`
