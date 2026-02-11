"use client"

import { useTranslations } from "next-intl"

import { cn } from "@/lib/utils"
import { Heading } from "@/components/ui/typography"
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"
import { PageHero } from "@/components/sections/page-hero"
import { PageCta } from "@/components/sections/page-cta"
import { DeliverablesGrid } from "@/components/sections/deliverables-grid"

/* -------------------------------------------------------------------------- */
/*  Types                                                                     */
/* -------------------------------------------------------------------------- */

interface TimelineStep {
  week: string
  title: string
  description: string
}

interface ComparisonRow {
  label: string
  values: string[]
}

interface FaqItem {
  question: string
  answer: string
}

/* -------------------------------------------------------------------------- */
/*  Status Icons (for comparison table)                                       */
/* -------------------------------------------------------------------------- */

function CheckIcon() {
  return (
    <svg
      className="mx-auto size-5 text-green-600"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2.5}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  )
}

function XIcon() {
  return (
    <svg
      className="mx-auto size-5 text-red-500"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  )
}

function PartialIcon() {
  return (
    <svg
      className="mx-auto size-5 text-yellow-500"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2.5}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
    </svg>
  )
}

function StatusCell({ value }: { value: string }) {
  if (value === "yes") return <CheckIcon />
  if (value === "no") return <XIcon />
  if (value === "partial") return <PartialIcon />
  return <span className="text-sm text-muted-foreground">{value}</span>
}

/* -------------------------------------------------------------------------- */
/*  ProblemSection                                                            */
/* -------------------------------------------------------------------------- */

function ProblemSection({ t }: { t: ReturnType<typeof useTranslations> }) {
  const items = t.raw("problem.items") as string[]

  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Heading as="h2" className="mb-12 text-center">
          {t("problem.title")}
        </Heading>

        <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-3 rounded-lg border border-border/60 bg-background p-5"
            >
              <span className="mt-0.5 text-red-500">
                <svg
                  className="size-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                  />
                </svg>
              </span>
              <p className="text-sm text-muted-foreground">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* -------------------------------------------------------------------------- */
/*  TimelineSection                                                           */
/* -------------------------------------------------------------------------- */

function TimelineSection({ t }: { t: ReturnType<typeof useTranslations> }) {
  const steps = t.raw("timeline.steps") as TimelineStep[]

  return (
    <section className="px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <Heading as="h2">{t("timeline.title")}</Heading>
        </div>

        <div className="relative">
          {/* Connector line - horizontal on lg, vertical on mobile */}
          <div className="absolute left-5 top-0 hidden h-full w-px bg-border max-lg:block" />
          <div className="absolute left-0 right-0 top-5 hidden h-px bg-border lg:block" />

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-4 lg:gap-6">
            {steps.map((step, index) => (
              <div key={index} className="relative pl-12 lg:pl-0 lg:pt-12">
                {/* Numbered dot */}
                <div
                  className={cn(
                    "absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary bg-background font-heading text-sm font-bold text-primary",
                    "lg:left-1/2 lg:-translate-x-1/2",
                    "max-lg:top-0",
                  )}
                >
                  {index + 1}
                </div>

                {/* Card */}
                <div className="rounded-lg border bg-background p-5">
                  <span className="font-heading text-xs font-semibold uppercase tracking-wider text-primary">
                    {step.week}
                  </span>
                  <h3 className="mt-2 font-heading text-lg font-bold tracking-tight">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* -------------------------------------------------------------------------- */
/*  ComparisonSection                                                         */
/* -------------------------------------------------------------------------- */

function ComparisonSection({ t }: { t: ReturnType<typeof useTranslations> }) {
  const headers = t.raw("comparison.headers") as string[]
  const rows = t.raw("comparison.rows") as ComparisonRow[]

  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <Heading as="h2">{t("comparison.title")}</Heading>
        </div>

        {/* Scrollable wrapper for mobile */}
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden rounded-xl border">
              <table className="min-w-full divide-y divide-border">
                {/* Header */}
                <thead>
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-medium text-muted-foreground" />
                    {headers.map((header, i) => (
                      <th
                        key={i}
                        className={cn(
                          "px-6 py-4 text-center text-sm font-semibold",
                          i === 0 && "bg-primary/5 font-heading",
                        )}
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>

                {/* Body */}
                <tbody className="divide-y divide-border">
                  {rows.map((row, rowIdx) => (
                    <tr key={rowIdx}>
                      <td className="px-6 py-4 text-sm font-medium whitespace-nowrap">
                        {row.label}
                      </td>
                      {row.values.map((value, colIdx) => (
                        <td
                          key={colIdx}
                          className={cn(
                            "px-6 py-4 text-center",
                            colIdx === 0 && "bg-primary/5",
                          )}
                        >
                          <StatusCell value={value} />
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* -------------------------------------------------------------------------- */
/*  FaqSection                                                                */
/* -------------------------------------------------------------------------- */

function FaqSection({ t }: { t: ReturnType<typeof useTranslations> }) {
  const items = t.raw("faq.items") as FaqItem[]

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  }

  return (
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
            {items.map((item, index) => (
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
  )
}

/* -------------------------------------------------------------------------- */
/*  OutboundContent (main export)                                             */
/* -------------------------------------------------------------------------- */

export function OutboundContent() {
  const t = useTranslations("outbound")

  return (
    <main>
      {/* 1. Hero */}
      <PageHero
        title={t("hero.title")}
        subtitle={t("hero.subtitle")}
        ctaLabel={t("hero.cta")}
      />

      {/* 2. Problem */}
      <ProblemSection t={t} />

      {/* 3. Deliverables */}
      <DeliverablesGrid
        title={t("deliverables.title")}
        categories={
          t.raw("deliverables.categories") as {
            title: string
            items: string[]
          }[]
        }
      />

      {/* 4. Timeline */}
      <TimelineSection t={t} />

      {/* 5. Comparison */}
      <ComparisonSection t={t} />

      {/* 6. FAQ */}
      <FaqSection t={t} />

      {/* 7. CTA */}
      <PageCta
        title={t("cta.title")}
        description={t("cta.description")}
        ctaLabel={t("cta.ctaLabel")}
      />
    </main>
  )
}
