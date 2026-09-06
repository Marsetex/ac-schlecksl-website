# AC Schlecksl Website

Website des Amateurfußballvereins AC Schlecksl.

[![Build](https://github.com/Marsetex/ac-schlecksl-website/actions/workflows/build.yml/badge.svg)](https://github.com/Marsetex/ac-schlecksl-website/actions/workflows/build.yml)
[![Deploy](https://github.com/Marsetex/ac-schlecksl-website/actions/workflows/deploy.yml/badge.svg)](https://github.com/Marsetex/ac-schlecksl-website/actions/workflows/deploy.yml)

## Voraussetzungen

- Node.js `^22.18.0` oder `>=24.12.0`
- [pnpm](https://pnpm.io/) als Package Manager

## Setup

```bash
pnpm install
```

## Entwicklung

```bash
pnpm dev              # Vite-Dev-Server starten
```

## Weitere Befehle

```bash
pnpm build            # Type-Check und Produktions-Build (parallel via run-p)
pnpm build-only       # Produktions-Build ohne Type-Check
pnpm preview          # Produktions-Build lokal als Vorschau ausliefern
pnpm type-check       # vue-tsc --build (nur Typprüfung, kein Output)
pnpm lint             # oxlint --fix, danach eslint --fix --cache
pnpm format           # Prettier über src/ ausführen
pnpm test:unit        # Unit-Tests mit Vitest ausführen
```

## Tech-Stack

- **Vue 3** (Composition API, `<script setup lang="ts">`)
- **TypeScript**
- **Tailwind CSS v4** (Theme-Tokens via `@theme` in `src/assets/main.css`, kein
  `tailwind.config.js`)
- **Vite** als Build-Tool
- **vue-router** für clientseitiges Routing
- **Remix Icon** als selbst gehostete Icon-Schriftart
- **Vitest** als Unit-Test-Runner

## Projektstruktur

```
src/
├── assets/           # Statische Assets, globales CSS inkl. Tailwind-Theme
├── components/
│   ├── layout/       # Site-Chrome: NavigationBar, Footer, Page-Layouts
│   ├── shared/        # Komponenten, die von mehreren Seiten genutzt werden
│   └── <feature>/     # Subkomponenten einzelner Seiten (gallery, training, team, landing)
├── data/             # Statische/Mock-Daten, typisiert gegen src/models/
├── models/           # TypeScript-Interfaces (Models), pro Feature bzw. shared
├── pages/            # Seitenkomponenten (englische Dateinamen)
├── router/           # Routendefinitionen (deutsche Pfade)
└── utils/            # Wiederverwendbare Logik (Datums-/Trainingszeiten-Formatierung etc.)
```

Routen sind auf Deutsch (`/spiele`, `/mannschaft`, `/mitgliedschaft`, `/termine`, `/galerie`,
`/fotos`, ...), während die zugehörigen Seitenkomponenten englische Dateinamen tragen
(`MatchesPage.vue`, `TeamPage.vue`, ...).

Detaillierte Architektur- und Coding-Guidelines für dieses Projekt stehen in
[.claude/CLAUDE.md](.claude/CLAUDE.md).

## Pfad-Alias

`@/` zeigt auf `src/` (konfiguriert in `vite.config.ts` und `tsconfig.app.json`).
