# Carousel Generator

**Template-driven carousel image creation tool** built with Next.js and Konva canvas. Design reusable visual templates with a drag-and-drop editor, fill in content through structured forms, and export polished carousel slides (PNG/JSON) optimized for social media platforms.

[![Next.js](https://img.shields.io/badge/Next.js-16-black.svg)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19-61DAFB.svg)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6.svg)](https://typescriptlang.org)
[![Konva](https://img.shields.io/badge/Konva-9-0D9E9E.svg)](https://konvajs.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-06B6D4.svg)](https://tailwindcss.com)
[![Status](https://img.shields.io/badge/Status-Hobby%20%2F%20Proof--of--Concept-orange.svg)](#)

> **Hobby project** — Built as an exploration of template-driven visual content generation. The canvas editor, template system, and rendering engine are fully functional. Not actively maintained but serves as a reference for Konva + Next.js integration.

## Why This Exists

Creating professional carousels for LinkedIn or Instagram typically means manual design work in Figma or Canva — repetitive, slow, and hard to keep consistent. Carousel Generator solves this with a **template-first approach**: design once, generate infinitely. Define a visual template with a canvas editor, fill content through validated forms, and export publication-ready slides in seconds.

## Features

### Canvas Template Editor
- **WYSIWYG visual editor** powered by Konva Stage/Layer architecture
- **5 element types**: Text, Image, Background, Decorator, CTA (Call-to-Action)
- **Drag & drop** element positioning with `@dnd-kit`
- **Layer panel** — reorder, lock, hide, delete elements
- **Property panel** — precise property editing for selected elements
- **Zoom & pan** controls for canvas navigation
- **Undo/redo** support for all editing actions

### Template System
- **Template library** with grid/list views, search, category filtering, and sorting
- **Content field definitions** — each template declares typed fields (text, image, color, number, boolean, select, textarea) that map directly to canvas elements
- **Template settings** — canvas dimensions, background color, responsive scaling, max slides, auto-fit content
- **Version history** — complete snapshots on every save with checksum validation, diff comparison, and rollback
- **Import/export** — share templates as JSON files with integrity checks
- **Official templates**: "Titan Arc" (10-slide story arc) and "Quick Arc" (5-slide condensed)

### Carousel Generation
- **Dynamic content forms** — auto-generated from template field definitions
- **Built-in validation** — required fields, max length, regex patterns, min/max values
- **Multi-slide support** — configurable number of slides per carousel
- **Live preview** with slide navigation and auto-play (3s interval)

### Rendering Engine
- **Konva-based rendering** via react-konva — pixel-perfect canvas output
- **Responsive scaling** — automatically fits canvas to container width
- **Content-to-element mapping** — bridges form values to canvas element properties
- **High-DPI export** — 2x pixel ratio for crisp PNG output
- **Headless rendering** — Puppeteer-based server-side rendering pipeline

### Export
- **PNG export** — single slide or all slides at 2x resolution, bundled as ZIP
- **JSON export** — full carousel data with template reference, content, and metadata
- **Shareable URLs** — copy-to-clipboard links pointing to specific templates

### Data Migration
- **DOM-to-Canvas bridge** — production-grade migration from legacy DOM-centric format to canvas templates
- **CLI migration scripts** — batch conversion with backup, validation, and reporting
- **Validation framework** — comprehensive checks for templates, elements, content fields with error/warning/info severity

## Tech Stack

| Category | Technology |
|---|---|
| **Framework** | Next.js 16 (App Router) |
| **UI** | React 19 |
| **Canvas** | Konva 9 + react-konva 19 |
| **State** | Zustand 5 (with persist middleware) |
| **Drag & Drop** | @dnd-kit/core 6 + @dnd-kit/sortable 10 |
| **Styling** | Tailwind CSS 4 + clsx + tailwind-merge |
| **Language** | TypeScript 5.7 (strict mode) |
| **Headless Rendering** | Puppeteer 24 |
| **Export** | html-to-image, JSZip, file-saver |
| **Icons** | Lucide React |
| **Testing** | Jest |

## Architecture

```
carousel-generator/
├── src/
│   ├── app/                        # Next.js App Router
│   │   ├── api/carousel/generate/  # Generation API route
│   │   └── render/                 # SSR-safe rendering route
│   │
│   ├── components/
│   │   ├── carousel/
│   │   │   ├── CarouselGenerator.tsx   # Template selection → content form → preview → export
│   │   │   └── CarouselRenderer.tsx    # Konva slide renderer with PNG/JSON export
│   │   └── template/
│   │       ├── TemplateEditor.tsx      # Full canvas editor (1329 lines)
│   │       ├── TemplateLibrary.tsx     # Browse, search, filter, import/export (923 lines)
│   │       ├── TemplateCanvas.tsx      # Konva Stage/Layer wrapper
│   │       └── ContentFieldPanel.tsx   # Dynamic field UI
│   │
│   ├── store/
│   │   └── template-store.ts       # Zustand: CRUD, versioning, import/export, stats (778 lines)
│   │
│   ├── types/
│   │   ├── canvas-templates.ts     # Core data model (570 lines)
│   │   └── canvas-elements.ts      # Element type definitions
│   │
│   ├── lib/
│   │   ├── bridge/
│   │   │   └── dom-to-canvas-bridge.ts   # Legacy DOM → Canvas migration
│   │   └── migration/
│   │       ├── carousel-migrator.ts      # Slide[] → Carousel migration engine
│   │       └── validation.ts             # Validation framework (582 lines)
│   │
│   └── canvas-editor/
│       └── constants/              # Element renderer implementations
│
├── templates/official/             # Pre-built templates (Titan Arc, Quick Arc)
├── scripts/                        # CLI migration & validation scripts
└── data/                           # Migration backups and output
```

### Data Flow

1. **Design** — Create a template in the Canvas Editor using drag-and-drop elements on a Konva Stage
2. **Store** — Templates persist in Zustand with localStorage, including full version history
3. **Generate** — Select a template, fill the auto-generated content form, validate input
4. **Render** — CarouselRenderer maps content values to canvas elements via Konva
5. **Export** — Slides export as high-res PNG (2x) or structured JSON

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

### Available Scripts

| Script | Description |
|---|---|
| `npm run dev` | Start Next.js development server |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | ESLint check |
| `npm run test` | Run Jest test suite |
| `npm run test:watch` | Jest watch mode |
| `npm run test:coverage` | Jest with coverage |
| `npm run render` | Headless carousel rendering (Puppeteer) |
| `npm run render:watch` | Watch mode for rendering |

### Migration Scripts

| Script | Description |
|---|---|
| `npx tsx scripts/migrate-carousels.ts` | Migrate legacy carousel data to canvas format |
| `npx tsx scripts/validate-phase0.ts` | Validate Phase 0 data models |
| `npx tsx scripts/validate-migration.ts` | Validate migration results |

## Development Phases

| Phase | Focus | Status |
|---|---|---|
| **Phase 0** | Foundation — Core data models, TypeScript types, Zustand store | ✅ Complete |
| **Phase 1** | Template System — Library, search, filter, import/export, versioning | ✅ Complete |
| **Phase 2** | Canvas Editor — Konva visual editor, layers, properties, zoom/pan | ✅ Complete |
| **Phase 3** | Carousel Generation — Dynamic forms, validation, multi-slide preview | ✅ Complete |
| **Phase 4** | Rendering & Migration — Konva renderer, DOM-to-Canvas bridge, CLI tools | ✅ Complete |

## Key Technical Decisions

- **Konva over DOM rendering** — Canvas provides pixel-perfect export, consistent cross-browser output, and eliminates CSS-to-image conversion issues
- **Zustand over Redux** — Simpler API, no boilerplate, built-in persist middleware for localStorage
- **Typed content fields** — Templates declare their own schema; forms generate dynamically from type definitions, eliminating manual form code
- **Version snapshots with checksums** — Every save creates a full template snapshot with SHA checksum; diffs compare added/removed/modified elements
- **Migration with backup** — All migration scripts create backups before modifying data, with validation reports on success/failure

## License

MIT
---
Developed by [Ishan Parihar](https://github.com/ishan-parihar) — If you find this useful, [consider supporting](https://rzp.io/rzp/ishan-parihar)
