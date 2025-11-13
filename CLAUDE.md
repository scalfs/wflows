# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

**Development:**
- `pnpm dev` - Start development server (usually at localhost:4321 or 4322)
- `pnpm build` - Build production site to ./dist/
- `pnpm preview` - Preview production build locally

## Architecture

This is the WFlows landing page built with Astro and Tailwind CSS v4. It showcases AI-powered workflow automation services with voice-first technology.

### Technology Stack
- **Framework:** Astro with static site generation
- **Styling:** Tailwind CSS v4 (using @theme directive in global.css)
- **Package Manager:** pnpm preferred
- **Path Alias:** `@/` maps to `src/`
- **Site URL:** https://wflows.ai/

### WFlows Brand Identity
- **Colors:** Navy base (#0B1426), Teal accent (#5EEAD4), Electric blue (#60A5FA)
- **Typography:** Inter font family
- **Design Language:** Modern, minimalist with subtle animations
- **Voice:** Strategic advisor, calm architect approach

### Component Organization

**Landing Page Sections:**
- `Hero.astro` - Main hero with "Win More. Work Less." messaging
- `Services.astro` - Lead Flow, Voice Flow, Sales Flow services
- `HowItWorks.astro` - 3-step process (Diagnóstico, Implementação, Otimização)
- `UseCases.astro` - Specific verticals (restaurants, clinics, solar companies)
- `About.astro` - Founder background and company differentials
- `CTA.astro` - Contact form and demonstration scheduling

**Global Components:**
- `Navigation.astro` - Fixed top navigation with WFlows branding
- `Footer.astro` - Simple footer with contact info
- `BaseLayout.astro` - Main layout wrapper

### WFlows Business Focus
1. **Voice-First AI Automation** - Primary differentiator
2. **24/7 AI Receptionist** - WhatsApp and phone integration
3. **Lead Reactivation** - Automated follow-up campaigns
4. **CRM Integration** - Works with existing systems
5. **Target Verticals:** Restaurants, clinics, solar companies

### Styling Approach
- Tailwind CSS v4 with custom OKLCH color scheme
- Gradient backgrounds and subtle animations
- Dark theme with navy base and vibrant accents
- Mobile-first responsive design

### Key Features
- Portuguese language content (Brazilian market)
- SEO optimized with proper meta tags
- Calendly integration for demo scheduling
- WhatsApp contact integration
- Sitemap generation included

### Development Notes
- No external SEO library dependencies (using native meta tags)
- Custom color system using OKLCH for better color accuracy
- Animated gradient orbs and floating effects
- 7-day implementation promise highlighted throughout