"use client"

import { useTranslations } from "next-intl"

import { cn } from "@/lib/utils"
import { Heading } from "@/components/ui/typography"

/* -------------------------------------------------------------------------- */
/*  Types                                                                     */
/* -------------------------------------------------------------------------- */

interface ProblemItem {
  title: string
  description: string
}

/* -------------------------------------------------------------------------- */
/*  ProblemSection                                                            */
/* -------------------------------------------------------------------------- */

export function ProblemSection({ className }: { className?: string }) {
  const t = useTranslations("home.problem")
  const items = t.raw("items") as ProblemItem[]

  return (
    <section className={cn("py-20", className)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Heading as="h2" className="mb-12 text-center">
          {t("title")}
        </Heading>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {items.map((item, index) => (
            <div
              key={index}
              className="rounded-xl border p-6 transition-shadow hover:shadow-md"
            >
              <h3 className="font-heading text-lg font-semibold">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
