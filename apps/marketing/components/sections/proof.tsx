"use client"

import { useTranslations } from "next-intl"

import { Heading } from "@/components/ui/typography"

interface Metric {
  value: string
  label: string
}

export function Proof() {
  const t = useTranslations("home.proof")
  const metrics = t.raw("metrics") as Metric[]

  return (
    <section className="bg-muted/30 px-4 py-20">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <Heading as="h2">{t("title")}</Heading>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center">
              <p className="font-heading text-4xl font-bold text-primary md:text-5xl">
                {metric.value}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
