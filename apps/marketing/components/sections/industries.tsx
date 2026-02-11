"use client"

import Link from "next/link"
import { useLocale, useTranslations } from "next-intl"

import { Heading, Lead } from "@/components/ui/typography"
import { MagicCard } from "@/components/ui/magic-card"

interface Industry {
  name: string
  brand: string
  slug: string
}

export function Industries() {
  const t = useTranslations("home.industries")
  const locale = useLocale()
  const items = t.raw("items") as Industry[]

  return (
    <section className="px-4 py-20">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <Heading as="h2">{t("title")}</Heading>
          <Lead className="mt-4">{t("subtitle")}</Lead>
        </div>

        {/* Industry cards */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {items.map((item) => (
            <Link
              key={item.slug}
              href={`/${locale}/${item.slug}`}
              className="group rounded-xl"
            >
              <MagicCard className="rounded-xl">
                <div className="flex flex-col p-5">
                  <h3 className="font-heading text-lg font-bold tracking-tight">
                    {item.name}
                  </h3>
                  <span className="mt-1 font-heading text-sm font-semibold text-primary">
                    {item.brand}
                  </span>
                  <span className="mt-3 inline-flex items-center text-sm text-muted-foreground transition-colors group-hover:text-foreground">
                    <span className="transition-transform group-hover:translate-x-0.5">
                      &rarr;
                    </span>
                  </span>
                </div>
              </MagicCard>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
