# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

**Development:**
- `pnpm dev` - Start development server at localhost:3000
- `pnpm build` - Build production site to ./dist/
- `pnpm preview` - Preview production build locally

## Architecture

This is an Astro landing page using Tailwind CSS v4 (Alpha). The project structure follows a component-based architecture:

### Technology Stack
- **Framework:** Astro with static site generation
- **Styling:** Tailwind CSS v4 (using @theme directive in global.css)
- **Package Manager:** pnpm preferred (also supports npm)
- **Path Alias:** `@/` maps to `src/`

### Key Architectural Patterns

**Component Organization:**
- `/src/components/landing/` - Page-specific sections (Hero, Pricing, FAQ, etc.)
- `/src/components/global/` - Reusable components (Navigation, Footer, CTA)
- `/src/components/assets/` - SVG logo components
- `/src/layouts/` - Page layouts wrapping content with navigation and footer

**Page Composition:**
The main landing page (`src/pages/index.astro`) imports and composes section components in sequence. Each section is self-contained with its own data and styling.

**Styling Approach:**
Tailwind CSS v4 configuration is done directly in `src/styles/global.css` using:
- `@theme` directive for custom design tokens
- Direct plugin imports instead of config file
- Custom color scale using OKLCH color space

**Important Configuration:**
- Site URL in `astro.config.mjs` needs to be updated before deployment
- Sitemap integration is pre-configured

## Tailwind CSS v4 Notes

This template uses Tailwind CSS v4 (Alpha), which differs from v3:
- No `tailwind.config.js` file
- Configuration through CSS `@theme` directive
- Plugins imported directly in CSS file
- Custom properties defined using OKLCH color values