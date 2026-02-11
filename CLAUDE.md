# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Development Commands

```bash
# Install dependencies
pnpm install

# Development
pnpm dev                # All apps in parallel
pnpm dev:marketing      # Marketing app (port 3000)
pnpm dev:web            # Web app (port 3002)

# Build
pnpm build              # All apps and packages
pnpm build --filter=marketing  # Single app via Turbo filter

# Quality
pnpm lint               # ESLint across all workspaces
pnpm check-types        # TypeScript type checking across all workspaces
pnpm format             # Prettier formatting
```

No test infrastructure is configured yet.

## Architecture

Turborepo monorepo with pnpm workspaces. Internal packages use `workspace:*` protocol.

### Apps

- **`marketing`** — Primary app. Next.js 16 (App Router) + React 19 + Tailwind CSS v4 + shadcn/ui. Contains its own inline UI components in `apps/marketing/components/ui/` (Button, Card, Input, Select, etc.). Uses Outfit as primary font.
- **`web`** — Secondary Next.js app using shared `@repo/ui` package. Turborepo starter template.
- **`nextjs-template`** — Minimal standalone Next.js template.
- **`blog`** — Empty placeholder.

### Shared Packages

- **`@repo/ui`** — Shared React component library (`packages/ui/src/`). Used by `web` app. Exports via `./src/*.tsx` pattern.
- **`@repo/eslint-config`** — ESLint v9 flat config with TypeScript, Prettier, Turbo, and React plugins. All errors converted to warnings via `eslint-plugin-only-warn`.
- **`@repo/typescript-config`** — Shared tsconfig bases: `base.json` (strict, ES2022), `nextjs.json`, `react-library.json`.
- **`config`**, **`types`**, **`utils`**, **`seo`** — Empty placeholders for future use.

### Key Patterns

- **Tailwind CSS v4** with `@theme inline` configuration (not tailwind.config.js)
- **shadcn/ui** components in marketing app use `class-variance-authority` for variants, `clsx`/`tailwind-merge` for class merging
- **Next.js App Router** — all apps use the `app/` directory convention
- ESLint configs are extended per-app, referencing `@repo/eslint-config/next.js` or `@repo/eslint-config/react-internal.js`

## Documentation

Brand guidelines, SEO strategy, deployment guides, and website blueprint are in `docs/`. Brand assets (fonts, icons) are in `assets/`.
