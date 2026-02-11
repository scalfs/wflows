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

/* -------------------------------------------------------------------------- */
/*  Types                                                                     */
/* -------------------------------------------------------------------------- */

interface FaqItem {
  question: string
  answer: string
}

/* -------------------------------------------------------------------------- */
/*  FaqSection                                                                */
/* -------------------------------------------------------------------------- */

export function FaqSection({ className }: { className?: string }) {
  const t = useTranslations("home.faq")
  const items = t.raw("items") as FaqItem[]

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
    <section className={cn("py-20", className)}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Heading as="h2" className="mb-12 text-center">
          {t("title")}
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
