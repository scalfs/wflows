"use client"

import { useTranslations } from "next-intl"

import { cn } from "@/lib/utils"
import { Heading } from "@/components/ui/typography"
import { PageHero } from "@/components/sections/page-hero"
import { PageCta } from "@/components/sections/page-cta"
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"

/* -------------------------------------------------------------------------- */
/*  Types                                                                     */
/* -------------------------------------------------------------------------- */

interface Step {
  step: string
  title: string
  description: string
}

interface Deliverable {
  deliverable: string
  meaning: string
}

interface FaqItem {
  question: string
  answer: string
}

/* -------------------------------------------------------------------------- */
/*  B2bSaasContent                                                            */
/* -------------------------------------------------------------------------- */

export function B2bSaasContent() {
  const t = useTranslations("b2bSaas")

  const painPoints = t.raw("problem.items") as string[]
  const steps = t.raw("howItWorks.steps") as Step[]
  const deliverables = t.raw("whatYouGet.items") as Deliverable[]
  const faqItems = t.raw("faq.items") as FaqItem[]

  /* ------------------------------ JSON-LD --------------------------------- */

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  }

  return (
    <main>
      {/* ------------------------------------------------------------------ */}
      {/*  1. Hero                                                           */}
      {/* ------------------------------------------------------------------ */}

      <PageHero
        title={t("hero.title")}
        subtitle={t("hero.subtitle")}
        ctaLabel={t("hero.cta")}
      />

      {/* ------------------------------------------------------------------ */}
      {/*  2. Problem                                                        */}
      {/* ------------------------------------------------------------------ */}

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Heading as="h2" className="mb-6 text-center">
            {t("problem.title")}
          </Heading>

          <p className="mx-auto mb-12 max-w-2xl text-center text-xl font-semibold text-foreground">
            {t("problem.heroMetric")}
          </p>

          <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-3">
            {painPoints.map((point, index) => (
              <blockquote
                key={index}
                className="rounded-lg border border-border/60 bg-muted/30 p-6"
              >
                <p className="italic text-muted-foreground">
                  &ldquo;{point}&rdquo;
                </p>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/*  3. How It Works                                                   */}
      {/* ------------------------------------------------------------------ */}

      <section className="bg-muted/30 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Heading as="h2" className="mb-12 text-center">
            {t("howItWorks.title")}
          </Heading>

          <div className="grid gap-8 md:grid-cols-3">
            {steps.map((item, index) => (
              <div
                key={index}
                className="rounded-xl border border-border/60 bg-background p-8 text-center"
              >
                <span className="font-heading mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                  {item.step}
                </span>
                <h3 className="font-heading mt-4 text-xl font-semibold">
                  {item.title}
                </h3>
                <p className="mt-3 text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-10 text-center text-sm text-muted-foreground">
            {t("howItWorks.timelineNote")}
          </p>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/*  4. What You Get                                                   */}
      {/* ------------------------------------------------------------------ */}

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Heading as="h2" className="mb-12 text-center">
            {t("whatYouGet.title")}
          </Heading>

          <div className="mx-auto max-w-4xl overflow-hidden rounded-xl border border-border/60">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-border/60 bg-muted/50">
                  <th className="px-6 py-4 font-heading font-semibold">
                    Deliverable
                  </th>
                  <th className="px-6 py-4 font-heading font-semibold">
                    What It Means
                  </th>
                </tr>
              </thead>
              <tbody>
                {deliverables.map((item, index) => (
                  <tr
                    key={index}
                    className={cn(
                      "border-b border-border/60 last:border-b-0",
                      index % 2 === 1 && "bg-muted/30",
                    )}
                  >
                    <td className="px-6 py-4 font-medium">{item.deliverable}</td>
                    <td className="px-6 py-4 text-muted-foreground">
                      {item.meaning}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/*  5. Guarantee                                                      */}
      {/* ------------------------------------------------------------------ */}

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl rounded-2xl border border-border/60 bg-muted/30 p-10 text-center">
            <Heading as="h2" className="mb-4">
              {t("guarantee.title")}
            </Heading>
            <p className="text-lg text-muted-foreground">
              {t("guarantee.text")}
            </p>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/*  6. Social Proof                                                   */}
      {/* ------------------------------------------------------------------ */}

      <section className="bg-muted/30 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Heading as="h2" className="mb-6">
              {t("socialProof.title")}
            </Heading>
            <p className="text-xl text-muted-foreground">
              {t("socialProof.text")}
            </p>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/*  7. FAQ                                                            */}
      {/* ------------------------------------------------------------------ */}

      <section className="py-20">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Heading as="h2" className="mb-12 text-center">
            {t("faq.title")}
          </Heading>

          <div className="mx-auto max-w-3xl">
            <Accordion type="single" collapsible>
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`faq-${index}`}>
                  <AccordionTrigger>{item.question}</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">{item.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/*  8. CTA                                                            */}
      {/* ------------------------------------------------------------------ */}

      <PageCta title={t("cta.title")} ctaLabel={t("cta.ctaLabel")} />
    </main>
  )
}
