Awesome — I built a super-comprehensive SEO + AEO structure for wflows.ai (EN + PT-BR). It includes a URL map, hreflang template, JSON-LD schema templates, a prioritized Portuguese keyword set for the voice/automation niche, a 3-month multilingual content calendar, and a Next.js folder + i18n config. I cite the key best-practice sources used for guidance.

I kept language short and actionable. If you want, I can export this to a Markdown file or a Next.js starter repo next.

⸻

URL Map — canonical plan (recommended: subdirectories)

Use subdirectories (/pt/) to keep domain authority and make management easier. ￼

Top-level pages
• / — Home (English, default). inLanguage: en
• /about — About (EN)
• /pricing — Pricing (EN)
• /blog — Blog (EN index)
• /blog/[slug] — Blog posts (EN)

Portuguese equivalents (subdirectory)
• /pt/ — Home (Portuguese / pt-BR)
• /pt/sobre — About (PT)
• /pt/precos — Pricing (PT)
• /pt/blog — Blog (PT index)
• /pt/blog/[slug] — Blog posts (PT)

Product / Solutions / Docs
• /solutions/voice-automation → /pt/solucoes/automacao-de-voz
• /docs/ → /pt/docs/

Canonical rules
• Each localized page must have its own canonical pointing to itself (not to the other language).
• Use hreflang to map equivalents (template below).

⸻

Hreflang template (place in <head> or server header)

Use language-region codes (for Brazil use pt-BR), include x-default. Only one implementation method ideally. ￼

Add to HTML head of every language pair page:

<link rel="alternate" href="https://wflows.ai/" hreflang="en" />
<link rel="alternate" href="https://wflows.ai/pt/" hreflang="pt-BR" />
<link rel="alternate" href="https://wflows.ai/" hreflang="x-default" />

For blog post /blog/voice-workflows and its PT version:

<link rel="alternate" href="https://wflows.ai/blog/voice-workflows" hreflang="en" />
<link rel="alternate" href="https://wflows.ai/pt/blog/fluxos-de-automacao-por-voz" hreflang="pt-BR" />
<link rel="alternate" href="https://wflows.ai/" hreflang="x-default" />

Notes
• Include the full set of alternates on each variant page (EN page lists PT, PT page lists EN). ￼
• For non-HTML assets (PDF) consider HTTP header implementation. ￼

⸻

Schema markup templates (JSON-LD) — copy/paste and adapt per page

1. Organization (sitewide, in both languages)

<script type="application/ld+json">
{
  "@context":"https://schema.org",
  "@type":"Organization",
  "name":"WFlows",
  "url":"https://wflows.ai/",
  "logo":"https://wflows.ai/static/logo.png",
  "sameAs":["https://twitter.com/wflows","https://www.linkedin.com/company/wflows"]
}
</script>

Duplicate with inLanguage on language-specific pages or add @language if needed.

⸻

2. Article / Blog post (English example)

<script type="application/ld+json">
{
  "@context":"https://schema.org",
  "@type":"Article",
  "mainEntityOfPage": {
    "@type":"WebPage",
    "@id":"https://wflows.ai/blog/voice-workflows"
  },
  "headline":"How to design voice automation workflows",
  "description":"Short summary...",
  "inLanguage":"en",
  "author":{"@type":"Person","name":"Vitor Escalfoni"},
  "publisher": { "@type":"Organization","name":"WFlows","logo":{"@type":"ImageObject","url":"https://wflows.ai/static/logo.png"} },
  "datePublished":"2025-11-01",
  "dateModified":"2025-11-10"
}
</script>

Portuguese version — same structure, change headline, description, inLanguage":"pt-BR", and @id to /pt/....

⸻

3. FAQ schema (great for AEO / featured answers)

Place on pages that actually have Q&A.

<script type="application/ld+json">
{
  "@context":"https://schema.org",
  "@type":"FAQPage",
  "mainEntity":[
    {
      "@type":"Question",
      "name":"O que é automação por voz?",
      "acceptedAnswer":{
        "@type":"Answer",
        "text":"Automação por voz é ... (resposta curta e direta)"
      }
    },
    {
      "@type":"Question",
      "name":"Como funciona a integração com STT e TTS?",
      "acceptedAnswer":{
        "@type":"Answer",
        "text":"Explicação passo-a-passo..."
      }
    }
  ]
}
</script>

⸻

4. HowTo schema (use for tutorials / step-by-step blog posts — AEO gold)

<script type="application/ld+json">
{
  "@context":"https://schema.org",
  "@type":"HowTo",
  "name":"Como criar um fluxo de automação de voz com WFlows",
  "description":"Passos para criar um fluxo...",
  "inLanguage":"pt-BR",
  "step":[
    {"@type":"HowToStep","name":"Criar projeto","text":"Crie um projeto em..."},
    {"@type":"HowToStep","name":"Configurar STT","text":"Configurar credenciais de ElevenLabs..."}
  ]
}
</script>

Tip: Keep answers in FAQ and steps short, explicit, and match user queries (helps AEO). ￼

⸻

Portuguese keyword research (voice automation niche) — prioritized list + intent

I used multilingual SEO best practices and AEO guidance to pick query-friendly, answerable keywords and intent clusters (informational, commercial, transactional). These are seed keywords you should validate with a keyword tool (Search Console, Ahrefs, SEMrush, Ubersuggest) for volumes. ￼

Core keyword clusters (pt-BR) — target and content type 1. automação por voz — Informational / Commercial
• Titles: “O que é automação por voz e como sua empresa pode usar” (pillar) 2. assistente de voz para empresas — Commercial
• Titles: “Assistente de voz para empresas: casos de uso e ROI” 3. fluxos de automação por voz / fluxos de voz — How-to / Tutorial
• Titles: “Como desenhar fluxos de automação por voz: passo a passo” 4. plataforma automação por voz — Transactional / Product
• Titles: “Comparativo: plataformas para automação por voz (WFlows vs alternatives)” 5. integração STT TTS português / STT em português — Technical / Informational
• Titles: “Melhores engines STT para português (PT-BR) em 2025” 6. atendimento ao cliente por voz automatizado — Commercial/Case study
• Titles: “Como reduzir tempo de atendimento com automação por voz” 7. chatbots por voz — Informational
• Titles: “Chatbot por voz vs chatbot texto — quando usar cada um” 8. comandos de voz para automação residencial — Niche/long-tail
• Titles: “Automação residencial com comandos de voz: tutorial prático” 9. voz IA para serviços financeiros — Industry vertical
• Titles: “Automação por voz para fintechs: casos e compliance” 10. exemplos de script de voz para atendimento — Transactional/Template
• Titles: “Modelos de script de voz para centrais de atendimento”

Long-tail and question-style keywords (good for AEO snippets)
• “o que é automação por voz?”
• “como funciona reconhecimento de fala em português?”
• “melhor engine TTS em português brasileiro”
• “custos automação por voz para call center”
• “exemplos de fluxos de atendimento por voz”

Execution advice
• Create an FAQ or short Q&A snippets on each relevant page using these exact phrases (answers ≤ 40–70 words) to maximize AEO chances. ￼

⸻

Multilingual content calendar (3 months — weekly cadence, EN + PT)

Focus on pillar → cluster → how-to → case study → product pages. Publish both languages (not machine translated) — stagger launch if resources limited. Localize, not translate.

Month 1 — Foundation
• Week 1
• EN: Pillar: “What is voice automation? Complete guide”
• PT: Pillar: “O que é automação por voz? Guia completo”
• Week 2
• EN: “How voice workflows work: architecture and integrations”
• PT: “Como funcionam fluxos de voz: arquitetura e integrações”
• Week 3
• EN: Product page: “Voice automation platform features”
• PT: Product page localized: “Funcionalidades da plataforma WFlows”
• Week 4
• EN: Case study (small org)
• PT: Case study translated and localized (use PT-specific metrics/quotes)

Month 2 — Authority & AEO
• Week 5
• EN: FAQ page for voice automation (structured FAQ schema)
• PT: FAQ page (pt-BR)
• Week 6
• EN: “Best STT/TTS for Portuguese — benchmarks”
• PT: “Melhores STT/TTS para português (benchmark)”
• Week 7
• EN: HowTo: “Design a voice workflow (step-by-step)” (HowTo schema)
• PT: HowTo localized
• Week 8
• EN: Comparison: “WFlows vs [competitor]”
• PT: Localized comparison

Month 3 — Lead capture & verticals
• Week 9
• EN: Vertical: “Voice automation for fintechs”
• PT: Localized vertical post
• Week 10
• EN: Template: “Call center voice script templates” (downloadable)
• PT: PT templates
• Week 11
• EN: “Security & compliance for voice automation”
• PT: Localized compliance notes (mention LGPD in PT)
• Week 12
• EN: Pillar update and internal linking audit (improve AEO snippets)
• PT: Pillar update and internal linking audit

Publishing notes
• Each PT article must be idiomatic PT-BR, include local examples, currency (BRL) where applicable, and reference local regulations (e.g., LGPD) for trust signals.
• Add short answer boxes (40–70 words) near top on question pages for AEO.

⸻

SEO / AEO on-page checklist (for each page)
• unique title & meta description per language
• <link rel="alternate" hreflang=...> for all variants. ￼
• canonical → points to itself
• JSON-LD: Organization + Article/FAQ/HowTo where applicable
• short answer (40–70 words) for probable user question near top
• Table of contents (anchor links) for long posts (improves SERP snippets)
• internal links to pillar and translations
• visible contact / trust signals (clients, logos) — helps AEO authority

⸻

Folder structure + Next.js i18n config (example)

Project folders

/app
/(lang)
/en
page.tsx --> home EN
/blog
[slug].tsx
/pt
page.tsx --> home PT
/blog
[slug].tsx
/public
/static
/images
next.config.js
i18n/
en.json
pt-BR.json
lib/
i18n.ts

Next.js (app router) approach
Use Next.js app + route groups (lang) to make language-first routing clean.

Sample next.config.js i18n snippet (if using Next.js built-in i18n for pages router)

// next.config.js
module.exports = {
i18n: {
locales: ['en', 'pt-BR'],
defaultLocale: 'en',
localeDetection: true // optional: server-side detection
},
// other Next.js config...
};

app-router example using route groups

app/
layout.tsx // common layout, detect locale and render proper headers
(lang)/
en/
layout.tsx
page.tsx
blog/
[slug]/
page.tsx
pt/
layout.tsx
page.tsx
blog/
[slug]/
page.tsx

i18n runtime helper (lib/i18n.ts)
• Use next-intl or react-intl for translations.
• Store copy in i18n/en.json and i18n/pt-BR.json.
• Serve translated metadata per route (title/meta) from locale files.

Server-side rendering / SSG
• Use SSG with incremental static regeneration for blog posts.
• Generate multilingual sitemaps (see next section).

⸻

Sitemaps & Indexing
• Generate sitemap.xml that includes both language variants:
• https://wflows.ai/blog/voice-workflows
• https://wflows.ai/pt/blog/fluxos-de-automacao-por-voz
• Add hreflang mappings in sitemap as an alternative implementation to head tags (either is fine; be consistent). ￼

⸻

Internal linking & content cluster strategy (AEO focus)
• Build pillar pages (EN + PT) that answer core queries. Link cluster articles to pillar.
• Use short, explicit answer boxes and add schema (FAQ/HowTo).
• Add “People also ask” style H2s and H3s with short answers to capture featured snippets/AEO.

⸻

Technical & legal localization notes (PT-BR)
• Use pt-BR language tag and Brazilian Portuguese copy.
• Mention LGPD where relevant (data handling for voice). Including compliance content improves trust and AEO authority in Brazil.
• Local hosting: optional — subdirectory on top-level domain is fine; local hosting not required for SEO but can improve TTFB in Brazil.

⸻

Priority implementation checklist (first 30 days) 1. Implement /pt/ structure + new routes. 2. Add hreflang tags sitewide and x-default. ￼ 3. Create PT versions for top 5 pages (home, about, product, blog pillar, FAQ). 4. Add Organization + Article + FAQ JSON-LD on respective pages. 5. Publish the first PT pillar article and 2 cluster posts. 6. Submit multilingual sitemap to Search Console. 7. Set up Search Console and Analytics filters for language traffic.

⸻

Quick examples you can copy for pages

PT meta & short answer (place top of article)

<title>O que é automação por voz? Guia para empresas | WFlows</title>
<meta name="description" content="Aprenda o que é automação por voz, exemplos de uso em atendimento e como implementar fluxos com STT e TTS em português.">
<section class="short-answer">
  <p>Automação por voz é o uso de reconhecimento e síntese de fala para automatizar tarefas e atendimentos — por exemplo, capturar solicitação do cliente, autenticar e executar ações sem operador humano.</p>
</section>

⸻

Sources / short bibliography (key guidance used)
• Google Search Central — x-default & hreflang guidance. ￼
• CXL — In-depth AEO guide (2025). ￼
• Contentful / Strapi / Matomo multilingual SEO best-practices (subdirectory favored). ￼
• hreflang implementation guides (TranslatePress / Positional). ￼
