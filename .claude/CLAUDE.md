# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Vue 3 + TypeScript + Tailwind CSS v4 site for AC Schlecksl, a German amateur football club, built
with Vite and routed with vue-router. All copy is German. Package manager is **pnpm**
(`pnpm-lock.yaml` is the lockfile in use).

## Commands

```bash
pnpm dev              # start the Vite dev server
pnpm build             # type-check, then production build (runs both in parallel via run-p)
pnpm build-only        # production build without type-check
pnpm preview           # preview a production build locally
pnpm type-check        # vue-tsc --build (no emit)
pnpm lint              # run-s: oxlint --fix, then eslint --fix --cache
pnpm format            # prettier --write --experimental-cli src/
```

There is no test runner configured in this repo (no test script, no Vitest/Jest/Playwright
dependency) — don't assume one exists.

Linting is two-stage: **oxlint** (`.oxlintrc.json`, correctness-category rules only, plugins
`eslint`/`typescript`/`unicorn`/`oxc`/`vue`) runs first and fast, then **eslint**
(`eslint.config.ts`, Vue + `@vue/eslint-config-typescript` recommended rules, via
`eslint-plugin-oxlint` so it skips rules oxlint already covers, and `eslint-config-prettier` to
avoid formatting conflicts). Prettier config (`.prettierrc.json`): no semicolons, single quotes,
100-char print width.

`tsconfig.app.json` has `noUncheckedIndexedAccess: true` — indexing an array or `Record` (e.g.
`someArray[i]`, `record[key]`) types as `T | undefined`, not `T`. Expect to need a non-null
assertion or an explicit guard whenever you index into a collection.

## Architecture

### Routing & pages

`src/router/index.ts` declares every route flatly (no nested/lazy routes, no route guards) against
components in `src/pages/`. Route **paths are German** (`/spiele`, `/mannschaft`,
`/mitgliedschaft`, `/termine`, `/galerie`, `/fotos`, `/datenschutz`, `/impressum`, ...) while
**page component filenames are English** (`MatchesPage.vue`, `TeamPage.vue`, `EventsPage.vue`,
`PrivacyPage.vue`, `ImprintPage.vue`, ...) — keep that split when adding a route.
`src/pages/matches/MatchesPageYYYY.vue` (one file per historical season, 2005–2011) exist but are
**not currently wired into the router** — they're orphaned leftovers from the original scaffold,
not linked from `MatchesPage.vue` or anywhere else. Don't assume they're reachable.

There are two page-shell layout components, both in `src/components/layout/`:

- `DefaultPageLayout.vue` — `NavigationBar` + `FooterMain` around a `max-w-5xl` slot on a
  `bg-chalk` background. Used by every page except the landing page. New pages should use this
  rather than re-implementing the header/footer shell.
- `LandingPageLayout.vue` — used only by `LandingPage.vue` (`/`): full-bleed hero with a
  background image and its own inline copyright bar, no `FooterMain`.

Navigation and footer link structure are data-driven, not hardcoded in the components:
`src/data/navigation.data.ts` (typed against `NavItem`/`NavLink` in `src/models/shared/`) feeds
the two-level nav (top-level items, some with a `children` dropdown) rendered by
`src/components/layout/NavigationBar/` (`NavigationBar.vue` orchestrates `NavDesktopMenu`,
`NavMobileMenu`, `NavBurgerButton`, `NavChevronIcon`). `src/data/footer.data.ts` feeds
`src/components/layout/Footer/FooterMain.vue` similarly. Add a new page's link to
`navigation.data.ts` (and `footer.data.ts` if it belongs there) rather than editing the nav
components directly.

Two distinct "gallery" features exist and are not duplicates:

- `/galerie` (`GalleryPage.vue`) — narrative write-ups grouped and filterable by year, one photo
  per event, backed by `gallery.data.ts` / `src/models/gallery/`.
- `/fotos` (`PhotosPage.vue`) — a flat justified photo grid with a fullscreen lightbox, using the
  generic `src/components/shared/PhotoGallery/` component and `photos.data.ts` (images are bulk
  imported via `import.meta.glob` over `src/assets/images/*.jpg`, paired with hand-measured
  width/height per file for layout).

### Component organization

- `src/components/layout/` — site chrome: `NavigationBar/` and `Footer/` (each split into an
  orchestrator component plus subcomponents, not a single flat file), `DefaultPageLayout.vue`,
  `LandingPageLayout.vue`.
- `src/components/shared/` — components used by more than one page (e.g. `PhotoGallery/`).
- `src/components/<feature>/` (`gallery/`, `training/`, `team/`, `landing/`) — subcomponents
  extracted out of one specific page, not meant for reuse elsewhere.

Component rules (enforced by the `vue-component-creator` skill, auto-loaded when creating/editing
components): `<script lang="ts" setup>` → `<template>` → `<style scoped>` block order; Composition
API only; props/emits typed via `interface` + `defineProps<Props>()`/`defineEmits<Emits>()`;
Tailwind utility classes in the template, no `<style>` block unless Tailwind genuinely can't do it
(and then `scoped`); once a component's template passes roughly 80 lines or takes on more than one
responsibility, split it into subcomponents in a local `components/` subfolder.

### Models & data (`src/models/`, `src/data/`)

Enforced by the `model-data-guidelines` skill. Types and data are kept strictly separate:

- Every model is a TypeScript `interface` (never `type` for objects, never a class), one per file,
  named `*.model.ts`.
- A model used by only one feature lives in `src/models/<feature>/`; a model shared across
  features lives in `src/models/shared/`.
- Actual data (static content, mock data) lives in `src/data/<use-case>.data.ts`, typed against
  the matching model.

Reusable non-component logic (date/schedule formatting, etc.) lives in `src/utils/` as plain typed
functions — see `event-date.ts` and `training-schedule.ts` for the existing pattern (e.g.
`training-schedule.ts` computes the next Thursday training session while skipping a hardcoded set
of Baden-Württemberg public holidays).

### Styling & theme

Tailwind v4: there is no `tailwind.config.js`. Theme tokens are defined directly in CSS via an
`@theme` block in `src/assets/main.css`, which Tailwind turns into utilities automatically
(`--color-celtic-blue` → `bg-celtic-blue`/`text-celtic-blue`/`border-celtic-blue`, etc.). The only
custom tokens are colors: `grass`, `chalk`, `gold`, and a
`rich-black`/`oxford-blue`/`yale-blue`/`polynesian-blue`/`celtic-blue` dark-blue gradient scale
that is the site's single blue/black palette — `yale-blue` for structural chrome (nav bar),
`rich-black` for the darkest neutral surfaces and near-black text/borders, `celtic-blue` for
accent/interactive elements (links, icons, headings, CTA buttons), `oxford-blue` for darker hover
states, and `polynesian-blue` (despite the name actually being a dark green hex value — don't
repurpose it based on its name) currently unused. There are no custom font tokens or custom
breakpoints in the theme — text uses Tailwind's default font stack and default breakpoints
(`sm`/`md`/`lg`/...) only; don't reference `font-display`/`font-body`/`font-mono`/`font-sans` or a
`hero`/`mobile-lp` breakpoint, they don't exist here (anymore). When a design needs a color the
theme doesn't have, add it as a named token in this `@theme` block rather than using an arbitrary
Tailwind value inline — remove it again if it ends up unused. Never use generic Tailwind
blue/black/gray/slate/zinc scale utilities or raw hex/rgb blue or black values inline — always
route through these five tokens so the whole site stays on one consistent palette.

### Icons

Enforced by the `icon-font` skill: all icons go through the self-hosted **Remix Icon** font
(`remixicon` package, imported once in `main.css`), used as `<i class="ri-{name}-line" ...>`.
Never add inline SVGs, another icon package, or a CDN-loaded icon font. Default to the `-line`
variant; size with Tailwind text-size utilities and color with text-color utilities (icon glyphs
are text, not shapes). A handful of pre-existing inline SVGs in `NewsPage.vue`, `MatchesPage.vue`,
and the `NavChevronIcon`/`NavBurgerButton` components (under
`src/components/layout/NavigationBar/`) are grandfathered in — convert them to Remix Icon classes
only when you're already touching that code, not proactively.

### Path alias

`@/` resolves to `src/` (configured in both `vite.config.ts` and `tsconfig.app.json`).
