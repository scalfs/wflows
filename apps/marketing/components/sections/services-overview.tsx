"use client"

import { useTranslations } from "next-intl"

import { MagicCard } from "@/components/ui/magic-card"

const serviceKeys = ["outbound", "inbound", "revops", "operations"] as const

export function ServicesOverview() {
  const t = useTranslations("home.services")

  return (
    <section id="services" className="py-20">
      <div className="mx-auto max-w-5xl px-4">
        {/* Section heading */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
            {t("title")}
          </h2>
          <p className="font-body mt-4 text-lg text-muted-foreground">
            {t("subtitle")}
          </p>
        </div>

        {/* Cards grid */}
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {serviceKeys.map((key) => {
            const deliverables = t.raw(`${key}.deliverables`) as string[]

            return (
              <MagicCard key={key} className="rounded-2xl">
                <div className="p-6 sm:p-8">
                  <h3 className="font-heading text-xl font-semibold">
                    {t(`${key}.title`)}
                  </h3>

                  <p className="font-body mt-2 text-sm text-muted-foreground">
                    {t(`${key}.description`)}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {deliverables.map((item) => (
                      <span
                        key={item}
                        className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </MagicCard>
            )
          })}
        </div>
      </div>
    </section>
  )
}
