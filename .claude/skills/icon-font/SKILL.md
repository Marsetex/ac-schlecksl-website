---
name: icon-font
description: Defines how icons are sourced in this project — always resolved through the self-hosted Remix Icon font, never as new inline SVGs, other icon libraries, or CDN-loaded assets. Use this skill whenever a new icon is needed anywhere in the app.
version: 1.0.0
author: Marcel Grüßinger
tags:
  - icons
  - remixicon
  - css
---

# Icon Font Skill

## Purpose

This skill defines how icons are sourced and used in this project. Every icon need MUST be
resolved through the self-hosted **Remix Icon** font — never by hand-drawing a new inline
`<svg>`, adding a different icon library or npm package, or loading icons from a CDN.

## Setup (already in place)

- Package: [`remixicon`](https://remixicon.com) — installed as a devDependency via `pnpm add -D remixicon`.
- Self-hosted: imported once in `src/assets/main.css` via `@import 'remixicon/fonts/remixicon.css';`.
  Vite bundles the font files locally at build time — no CDN request, no tracking.
- License: Remix Icon License v1.0 (see `node_modules/remixicon/License`). Free to use in this
  project; attribution is optional, not required.

## Rules

1. **Every new icon MUST use a Remix Icon class**, e.g.:

   ```html
   <i class="ri-calendar-line" aria-hidden="true"></i>
   ```

2. **Finding the right icon name:** search [remixicon.com](https://remixicon.com), or browse
   `node_modules/remixicon/icons/` locally. Class names follow the pattern
   `ri-{icon-name}-{style}`, e.g. `ri-calendar-line`, `ri-menu-line`, `ri-map-pin-line`,
   `ri-trophy-line`.

3. **Style variant:** default to the `-line` (outline) variant, matching the outline style
   already used across the site. Only use `-fill` when a filled icon is explicitly needed for
   emphasis (e.g. an active/selected state).

4. **Sizing:** icon-font glyphs scale with `font-size`. Size them with Tailwind text-size
   utilities (`text-lg`, `text-2xl`, `text-[18px]`, ...) — not `width`/`height` attributes.

5. **Color:** icon-font glyphs are text, so color them with Tailwind text-color utilities
   (`text-accent-light`, `text-white/90`, ...) — not `stroke`/`fill`.

6. **Accessibility:**
   - Decorative icon next to visible text → add `aria-hidden="true"` to the `<i>`.
   - Icon-only interactive element (e.g. icon-only button) → put an `aria-label` describing the
     action on the parent element, and keep `aria-hidden="true"` on the `<i>`.

7. **Existing inline SVGs** (chevron, hamburger/close, clock, pin, calendar, trophy, checkmark,
   etc. in `NavigationBar`, `LandingPage`, `NewsPage`, `GalleryPage`, `MatchesOverviewPage`)
   don't need to be migrated proactively — but whenever one of them is touched or replaced as
   part of other work, convert it to the matching Remix Icon class instead of keeping or
   recreating it as an inline SVG.

8. **Do not** add a second icon font, an SVG sprite system, or a per-icon package (e.g.
   `lucide-vue-next`, `@fortawesome/*`). Remix Icon is the single source for all icons in this
   project.

## Example

```vue
<template>
  <button type="button" aria-label="Menü öffnen" class="text-white">
    <i class="ri-menu-line text-2xl" aria-hidden="true"></i>
  </button>
</template>
```
