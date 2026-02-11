"use client"

import { useTranslations } from "next-intl"

import { cn } from "@/lib/utils"
import { Heading, Lead } from "@/components/ui/typography"

interface Step {
  week: string
  title: string
  description: string
}

export function Timeline() {
  const t = useTranslations("home.timeline")
  const steps = t.raw("steps") as Step[]

  return (
    <section className="px-4 py-20">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <Heading as="h2">{t("title")}</Heading>
          <Lead className="mt-4">{t("subtitle")}</Lead>
        </div>

        {/* Timeline */}
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
