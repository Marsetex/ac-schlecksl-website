---
name: model-data-guidelines
description: Defines architecture and path rules for typing (TypeScript interfaces) and managing models as well as static/mock data in the frontend project (`src/models/` and `src/data/`). Use this skill when new data structures, interfaces, or test data are created.
version: 1.0.0
author: Marcel Grüßinger
tags:
  - typescript
  - models
  - data
  - architecture
---

# Data & Model Architecture Guidelines Skill

## Purpose

This skill defines how data structures (models) are typed and structurally stored in the project. It guarantees a clean separation between the type system and data, as well as a clear use-case-based folder hierarchy.

---

## Rule Set

### 1. Defining Models

- **Exclusively `interface`:** All data models MUST be defined as a TypeScript `interface` (no `type` aliases for objects, no classes).
- **One file per model:** Each model gets its own file (e.g. `nav-item.model.ts`).

### 2. Storage Locations for Models (`src/models/`)

The root folder for all models is `src/models/`. Placement follows the intended use:

- **Use-case-specific:** If a model is only used in one specific use case or area (e.g. navigation bar, user profile), it goes into a corresponding subfolder:
  `src/models/<use-case-name>/<model-name>.model.ts`
- **Shared / Reusable:** If a model is needed in **multiple** different use cases, it MUST go into the shared folder:
  `src/models/shared/<model-name>.model.ts`

### 3. Storage Locations for Data (`src/data/`)

- Actual data (e.g. mock data, initial values, static navigation lists) MUST be stored in the `src/data/` folder.
- Each data set lives in its **own file**, named specifically after the use case:
  `src/data/<use-case-name>.data.ts`
- All data sets MUST be strictly typed with the matching interfaces from `src/models/`.

---

## Folder Structure Example

```text
src/
├── models/
│   ├── shared/
│   │   ├── user.model.ts             # Used in multiple use cases
│   │   └── pagination.model.ts       # Shared utility model
│   └── navigation-bar/
│       ├── nav-item.model.ts         # Only for the navigation bar
│       └── nav-section.model.ts      # Only for the navigation bar
└── data/
    ├── navigation-bar.data.ts        # Static data for the navigation bar
    └── user-profile.data.ts          # Mock data for the profile
```
