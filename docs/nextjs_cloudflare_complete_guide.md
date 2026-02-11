# Complete Guide: Next.js Static Monorepo on Cloudflare Pages

## 🎯 Your Stack
- **Monorepo Tool:** Turborepo
- **Framework:** Next.js (static export only)
- **Package Manager:** pnpm
- **Hosting:** Cloudflare Pages
- **Domains:** Separate domain/subdomain per app

---

## 📁 Project Structure

```
my-monorepo/
├── apps/
│   ├── marketing/              # marketing.com
│   ├── blog/                   # blog.com or marketing.com/blog
│   ├── docs/                   # docs.com
│   └── landing/                # landing.com
│
├── packages/
│   ├── ui/                     # Shared UI components
│   ├── config/                 # Shared configs (Tailwind, ESLint, TS)
│   ├── types/                  # Shared TypeScript types
│   └── utils/                  # Shared utilities
│
├── turbo.json
├── pnpm-workspace.yaml
├── package.json
└── tsconfig.base.json
```

---

## 🚀 Step 1: Initial Setup (15 minutes)

### 1.1 Create Turborepo

```bash
# Install pnpm if not installed
npm install -g pnpm

# Create new turborepo
npx create-turbo@latest my-monorepo

# Choose:
# - Package manager: pnpm
# - Include example apps: No (we'll create our own)

cd my-monorepo
```

### 1.2 Configure pnpm Workspaces

**Create `pnpm-workspace.yaml` in root:**
```yaml
packages:
  - 'apps/*'
  - 'packages/*'
```

### 1.3 Root Package.json

**Update `package.json` in root:**
```json
{
  "name": "my-monorepo",
  "private": true,
  "scripts": {
    "dev": "turbo run dev",
    "build": "turbo run build",
    "lint": "turbo run lint",
    "clean": "turbo run clean && rm -rf node_modules"
  },
  "devDependencies": {
    "turbo": "latest",
    "typescript": "^5.3.3"
  },
  "engines": {
    "node": ">=18"
  },
  "packageManager": "pnpm@8.15.0"
}
```

---

## 📦 Step 2: Create Next.js Apps (20 minutes)

### 2.1 Create Marketing Site

```bash
cd apps
pnpm create next-app marketing --typescript --tailwind --app --no-src-dir
cd marketing
```

**Configure `apps/marketing/next.config.js`:**
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',           // Enable static export

  images: {
    unoptimized: true,       // Disable Image Optimization API
    // Alternative: Use Cloudflare Images loader
    // loader: 'custom',
    // loaderFile: './cloudflare-loader.js'
  },

  compiler: {
    removeConsole: process.env.NODE_ENV === 'production'  // Remove console.log
  },

  // Optional: Custom export directory
  distDir: 'out',

  // Optional: Add trailing slashes
  trailingSlash: true,
}

module.exports = nextConfig
```

**Update `apps/marketing/package.json`:**
```json
{
  "name": "@monorepo/marketing",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "clean": "rm -rf .next out"
  },
  "dependencies": {
    "next": "^14.1.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "@monorepo/ui": "workspace:*",
    "@monorepo/types": "workspace:*"
  },
  "devDependencies": {
    "@types/node": "^20",
    "@types/react": "^18",
    "@types/react-dom": "^18",
    "typescript": "^5",
    "tailwindcss": "^3.4.0",
    "postcss": "^8",
    "autoprefixer": "^10"
  }
}
```

### 2.2 Create Blog App

```bash
cd apps
pnpm create next-app blog --typescript --tailwind --app --no-src-dir
cd blog
```

**Same configuration as marketing site** (copy `next.config.js` and update `package.json`)

### 2.3 Repeat for Other Apps

Create as many apps as needed following the same pattern.

---

## 🎨 Step 3: Create Shared Packages (15 minutes)

### 3.1 Shared UI Components

```bash
mkdir -p packages/ui/src
cd packages/ui
```

**Create `packages/ui/package.json`:**
```json
{
  "name": "@monorepo/ui",
  "version": "0.0.0",
  "private": true,
  "main": "./src/index.tsx",
  "types": "./src/index.tsx",
  "exports": {
    ".": "./src/index.tsx",
    "./button": "./src/Button.tsx",
    "./card": "./src/Card.tsx"
  },
  "scripts": {
    "lint": "eslint src/",
    "clean": "rm -rf .turbo node_modules"
  },
  "devDependencies": {
    "@types/react": "^18.2.0",
    "@types/react-dom": "^18.2.0",
    "react": "^18.2.0",
    "typescript": "^5.3.3"
  },
  "peerDependencies": {
    "react": "^18.2.0"
  }
}
```

**Create `packages/ui/src/Button.tsx`:**
```typescript
import { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: 'primary' | 'secondary'
}

export function Button({ 
  children, 
  variant = 'primary', 
  className = '',
  ...props 
}: ButtonProps) {
  const baseStyles = 'px-4 py-2 rounded-lg font-medium transition-colors'
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300'
  }

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
```

**Create `packages/ui/src/index.tsx`:**
```typescript
export { Button } from './Button'
export { Card } from './Card'
// Export all components
```

**Create `packages/ui/tsconfig.json`:**
```json
{
  "extends": "../../tsconfig.base.json",
  "compilerOptions": {
    "jsx": "react-jsx",
    "lib": ["ES2015", "DOM"],
    "module": "ESNext",
    "target": "ES2015"
  },
  "include": ["src"]
}
```

### 3.2 Shared Types

```bash
mkdir -p packages/types/src
```

**Create `packages/types/package.json`:**
```json
{
  "name": "@monorepo/types",
  "version": "0.0.0",
  "private": true,
  "main": "./src/index.ts",
  "types": "./src/index.ts",
  "exports": {
    ".": "./src/index.ts"
  }
}
```

**Create `packages/types/src/index.ts`:**
```typescript
export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  publishedAt: string
  author: Author
}

export interface Author {
  name: string
  avatar: string
  bio: string
}

export interface SEOMetadata {
  title: string
  description: string
  image?: string
  url: string
}
```

### 3.3 Shared Config

**Create `packages/config/tailwind.config.js`:**
```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          // ... your brand colors
        }
      }
    }
  },
  plugins: []
}
```

---

## ⚙️ Step 4: Configure TypeScript (10 minutes)

**Create `tsconfig.base.json` in root:**
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,

    "baseUrl": ".",
    "paths": {
      "@monorepo/ui": ["./packages/ui/src"],
      "@monorepo/ui/*": ["./packages/ui/src/*"],
      "@monorepo/types": ["./packages/types/src"],
      "@monorepo/types/*": ["./packages/types/src/*"],
      "@monorepo/utils": ["./packages/utils/src"],
      "@monorepo/utils/*": ["./packages/utils/src/*"]
    },

    "plugins": [
      {
        "name": "next"
      }
    ]
  },
  "exclude": ["node_modules"]
}
```

**Update each app's `tsconfig.json`:**
```json
{
  "extends": "../../tsconfig.base.json",
  "compilerOptions": {
    "plugins": [
      {
        "name": "next"
      }
    ]
  },
  "include": [
    "next-env.d.ts",
    "**/*.ts",
    "**/*.tsx",
    ".next/types/**/*.ts"
  ],
  "exclude": ["node_modules"]
}
```

---

## 🔧 Step 5: Configure Turborepo (10 minutes)

**Create `turbo.json` in root:**
```json
{
  "$schema": "https://turbo.build/schema.json",
  "globalDependencies": ["**/.env.*local"],

  "tasks": {
    "build": {
      "dependsOn": ["^build"],
      "outputs": ["out/**", ".next/**", "!.next/cache/**"],
      "cache": true
    },

    "dev": {
      "cache": false,
      "persistent": true
    },

    "lint": {
      "dependsOn": ["^lint"],
      "outputs": []
    },

    "clean": {
      "cache": false
    }
  }
}
```

---

## 🎯 Step 6: Performance Optimization (20 minutes)

### 6.1 Optimize Images for Cloudflare

**Option A: Use unoptimized images (simplest)**
Already configured in `next.config.js` with `images.unoptimized: true`

**Option B: Custom Cloudflare Images Loader**

**Create `apps/marketing/cloudflare-loader.js`:**
```javascript
export default function cloudflareLoader({ src, width, quality }) {
  const params = [`width=${width}`]

  if (quality) {
    params.push(`quality=${quality}`)
  }

  const paramsString = params.join(',')

  // If using Cloudflare Images
  return `https://your-account.cloudflareimages.com/${src}?${paramsString}`

  // Or for Image Resizing
  // return `/cdn-cgi/image/${paramsString}/${src}`
}
```

**Update `next.config.js`:**
```javascript
const nextConfig = {
  output: 'export',
  images: {
    loader: 'custom',
    loaderFile: './cloudflare-loader.js',
  }
}
```

### 6.2 Font Optimization

**Create `apps/marketing/app/layout.tsx`:**
```typescript
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

// Optimize fonts
const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair'
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
```

### 6.3 Code Splitting & Dynamic Imports

**Example: Lazy load heavy components**
```typescript
import dynamic from 'next/dynamic'

// Lazy load map component
const Map = dynamic(() => import('@/components/Map'), {
  loading: () => <p>Loading map...</p>,
  ssr: false // Disable SSR for this component
})

export default function ContactPage() {
  return (
    <div>
      <h1>Contact Us</h1>
      <Map />
    </div>
  )
}
```

### 6.4 Optimize Bundle Size

**Create `.env.production` in each app:**
```bash
NEXT_TELEMETRY_DISABLED=1
NODE_ENV=production
```

**Analyze bundle (optional):**
```bash
# Install bundle analyzer
pnpm add -D @next/bundle-analyzer

# Update next.config.js
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer(nextConfig)

# Run analysis
ANALYZE=true pnpm run build
```

### 6.5 Static Metadata for SEO

**Create `apps/marketing/app/layout.tsx`:**
```typescript
import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://yoursite.com'),
  title: {
    default: 'Your Site Name',
    template: '%s | Your Site Name'
  },
  description: 'Your site description',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yoursite.com',
    siteName: 'Your Site Name',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@yourhandle',
  },
  robots: {
    index: true,
    follow: true,
  }
}
```

---

## ☁️ Step 7: Deploy to Cloudflare Pages (30 minutes)

### 7.1 Prepare Each App for Deployment

**Test local build:**
```bash
# From root
pnpm run build

# Verify output in apps/marketing/out/
ls apps/marketing/out/
```

### 7.2 Create GitHub Repository

```bash
# Initialize git (if not already)
git init
git add .
git commit -m "Initial commit"

# Create repo on GitHub and push
git remote add origin https://github.com/yourusername/your-monorepo.git
git branch -M main
git push -u origin main
```

### 7.3 Deploy Marketing Site to Cloudflare

**Go to Cloudflare Dashboard:**

1. Navigate to **Pages** → **Create a project**
2. Select **Connect to Git** → Choose your GitHub repo
3. Click **Begin setup**

**Configure Marketing Site:**
```
Project name: my-marketing-site
Production branch: main
Build configuration:
  - Framework preset: Next.js (Static HTML Export)
  - Build command: cd apps/marketing && npx next build
  - Build output directory: apps/marketing/out
  - Root directory: /
```

**Environment variables (if needed):**
```
NODE_VERSION=18
NEXT_PUBLIC_API_URL=https://api.yoursite.com
```

4. Click **Save and Deploy**

### 7.4 Deploy Blog Site (Separate Project)

**Create another Cloudflare Pages project:**

1. **Pages** → **Create a project** → Same repo
2. **Begin setup**

**Configure Blog:**
```
Project name: my-blog-site
Production branch: main
Build configuration:
  - Framework preset: Next.js (Static HTML Export)
  - Build command: cd apps/blog && npx next build
  - Build output directory: apps/blog/out
  - Root directory: /
```

3. Click **Save and Deploy**

### 7.5 Repeat for Each App

Each app gets its own Cloudflare Pages project pointing to the same repo but different build directories.

---

## 🌐 Step 8: Configure Custom Domains (15 minutes)

### 8.1 Marketing Site → marketing.com

**In Cloudflare Pages project (my-marketing-site):**

1. Go to **Custom domains** → **Set up a custom domain**
2. Enter: `marketing.com`
3. Follow DNS configuration:
   - Add CNAME record: `marketing.com` → `my-marketing-site.pages.dev`
4. Wait for SSL certificate (automatic)

### 8.2 Blog → blog.com (or marketing.com/blog)

**Option A: Separate domain (blog.com)**

1. In blog Cloudflare Pages project
2. **Custom domains** → `blog.com`
3. Add CNAME: `blog.com` → `my-blog-site.pages.dev`

**Option B: Subdomain (blog.marketing.com)**

1. In blog Cloudflare Pages project
2. **Custom domains** → `blog.marketing.com`
3. Add CNAME: `blog.marketing.com` → `my-blog-site.pages.dev`

### 8.3 Docs → docs.marketing.com

Same process:
1. Cloudflare Pages project for docs
2. Custom domain: `docs.marketing.com`
3. CNAME: `docs.marketing.com` → `my-docs-site.pages.dev`

---

## 🚀 Step 9: CI/CD Configuration (10 minutes)

### 9.1 Automatic Deployments

**By default, Cloudflare Pages auto-deploys:**
- ✅ Push to `main` branch → Production deployment
- ✅ Pull requests → Preview deployments

### 9.2 Build Caching (Optional)

**Create `.github/workflows/cache.yml` (optional):**
```yaml
name: Cache Dependencies

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  cache:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - uses: pnpm/action-setup@v2
        with:
          version: 8

      - name: Cache pnpm store
        uses: actions/cache@v3
        with:
          path: ~/.pnpm-store
          key: ${{ runner.os }}-pnpm-${{ hashFiles('**/pnpm-lock.yaml') }}
          restore-keys: |
            ${{ runner.os }}-pnpm-
```

### 9.3 Build Notifications (Optional)

**Configure in Cloudflare Pages:**
1. Project Settings → **Notifications**
2. Add webhook or email for build failures

---

## 📊 Step 10: Performance Monitoring (10 minutes)

### 10.1 Add Analytics to Each App

**Create `apps/marketing/app/layout.tsx`:**
```typescript
import Script from 'next/script'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}

        {/* Cloudflare Web Analytics */}
        <Script 
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon='{"token": "YOUR_TOKEN"}'
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}
```

### 10.2 Enable Cloudflare Analytics

1. Cloudflare Dashboard → **Analytics** → **Web Analytics**
2. Create site → Get tracking token
3. Add to each app as shown above

### 10.3 Core Web Vitals Monitoring

**Create `apps/marketing/app/layout.tsx`:**
```typescript
import { SpeedInsights } from '@vercel/speed-insights/next'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <SpeedInsights />
      </body>
    </html>
  )
}
```

---

## 🔥 Performance Best Practices Summary

### ✅ Implemented Out-of-the-Box:

1. **Static Export** - Pure HTML/CSS/JS → Ultra-fast
2. **Automatic Code Splitting** - Next.js default
3. **Font Optimization** - next/font with display swap
4. **Image Optimization** - Custom loader or unoptimized
5. **Cloudflare Global CDN** - 300+ edge locations
6. **Brotli Compression** - Automatic on Cloudflare
7. **HTTP/3 & QUIC** - Enabled by default
8. **0ms Cold Starts** - Static files, no functions

### 🎯 Expected Performance:

```
Lighthouse Score: 95-100
TTFB: 30-80ms globally
FCP: <1 second
LCP: <1.5 seconds
CLS: <0.1
TTI: <2 seconds
```

### 📦 Bundle Size Targets:

```
First Load JS: <100KB
Page JS: <50KB
CSS: <10KB per page
Images: WebP format, lazy loaded
```

---

## 🛠️ Development Workflow

### Local Development

```bash
# Install dependencies
pnpm install

# Run all apps in dev mode
pnpm run dev

# Run specific app
pnpm --filter @monorepo/marketing dev

# Build all apps
pnpm run build

# Build specific app
pnpm --filter @monorepo/marketing build

# Lint
pnpm run lint

# Clean everything
pnpm run clean
```

### Adding New Pages

**Create `apps/marketing/app/about/page.tsx`:**
```typescript
import { Metadata } from 'next'
import { Button } from '@monorepo/ui'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about our company',
}

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">About Us</h1>
      <p className="text-lg mb-4">Your content here</p>
      <Button>Contact Us</Button>
    </div>
  )
}
```

### Using Shared Components

```typescript
// In any app
import { Button, Card } from '@monorepo/ui'
import { BlogPost } from '@monorepo/types'

export default function Page() {
  return (
    <Card>
      <Button variant="primary">Click me</Button>
    </Card>
  )
}
```

---

## 🐛 Troubleshooting Common Issues

### Issue 1: Build fails with module not found

**Solution:**
```bash
# Clear cache and reinstall
rm -rf node_modules .next out
pnpm install
pnpm run build
```

### Issue 2: Images not loading

**Check:**
- Images in `public/` folder
- Use `/image.jpg` not `./image.jpg`
- Verify `images.unoptimized: true` in config

### Issue 3: Cloudflare build fails

**Common causes:**
- Wrong build command path
- Missing environment variables
- Node version mismatch

**Fix in Cloudflare:**
```
Build command: cd apps/marketing && npx next build
Build output: apps/marketing/out
Environment: NODE_VERSION=18
```

### Issue 4: CSS not applied

**Verify Tailwind config:**
```javascript
// tailwind.config.js
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    '../../packages/ui/src/**/*.{js,ts,jsx,tsx}', // Include shared UI
  ]
}
```

### Issue 5: TypeScript path aliases not working

**Ensure tsconfig.json extends base:**
```json
{
  "extends": "../../tsconfig.base.json"
}
```

---

## 📈 Optimization Checklist

### Before Deploying:

- [ ] Run `pnpm run build` locally without errors
- [ ] Check bundle size with bundle analyzer
- [ ] Test on mobile devices (responsive)
- [ ] Verify all images load correctly
- [ ] Test Core Web Vitals with Lighthouse
- [ ] Verify metadata (title, description, OG tags)
- [ ] Check console for errors
- [ ] Test all internal links work
- [ ] Verify robots.txt and sitemap.xml
- [ ] Test 404 page exists and works

### After Deploying:

- [ ] Verify DNS propagation (can take up to 24h)
- [ ] Test HTTPS works
- [ ] Check Cloudflare Analytics setup
- [ ] Test from different geographic locations
- [ ] Verify preview deployments work
- [ ] Monitor build times
- [ ] Check bandwidth usage
- [ ] Set up error monitoring (optional)

---

## 💡 Pro Tips

### 1. Use Environment Variables Wisely

**In Cloudflare Pages dashboard:**
- Add environment variables per project
- Use `NEXT_PUBLIC_` prefix for client-side vars
- Keep secrets server-side only

### 2. Preview Deployments

Every PR gets a preview URL:
```
https://abc123.your-project.pages.dev
```

Share with team for review before merging.

### 3. Rollback if Needed

Cloudflare keeps deployment history:
1. Project → **Deployments**
2. Find previous working build
3. Click **...** → **Rollback to this deployment**

### 4. Use Incremental Adoption

Start with one app (marketing), perfect it, then add more apps incrementally.

### 5. Monitor Build Times

If builds get slow (>5 min):
- Check bundle size
- Reduce dependencies
- Optimize images before commit
- Consider static asset CDN

---

## 🎓 Next Steps

### You're Ready to Scale When:

1. **Add Dynamic Features:**
   - Remove `output: 'export'`
   - Deploy to Cloudflare Workers with OpenNext
   - Add API routes

2. **Add CMS:**
   - Integrate Contentful, Sanity, or Strapi
   - Fetch content at build time
   - Use ISR for updates

3. **Add E-commerce:**
   - Integrate Shopify, Stripe
   - Use client-side checkout
   - Keep static for performance

4. **Internationalization:**
   - Use next-intl or next-i18next
   - Deploy per-language versions
   - Use subdomains (en.site.com, pt.site.com)

---

## 📚 Resources

- **Next.js Docs:** https://nextjs.org/docs
- **Turborepo Docs:** https://turbo.build/repo/docs
- **Cloudflare Pages:** https://developers.cloudflare.com/pages
- **pnpm Workspaces:** https://pnpm.io/workspaces

---

## 🎉 You're All Set!

Your monorepo is now configured for:
- ⚡ Maximum performance (static export)
- 🚀 Easy deployment (Cloudflare Pages)
- 🔄 Shared code (Turborepo)
- 🌐 Multiple domains (per-app)
- 📦 Minimal bundle sizes
- 💰 Cost-effective ($0-5/month)

Start building and ship fast! 🚢
