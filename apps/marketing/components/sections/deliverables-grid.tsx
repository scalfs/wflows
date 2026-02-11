"use client"

import { cn } from "@/lib/utils"
import { Heading } from "@/components/ui/typography"

interface DeliverablesCategory {
  title: string
  items: string[]
}

interface DeliverablesGridProps {
  title?: string
  subtitle?: string
  categories: DeliverablesCategory[]
  className?: string
}

export function DeliverablesGrid({
  title,
  subtitle,
  categories,
  className,
}: DeliverablesGridProps) {
  return (
    <section className={cn("py-20", className)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {title && (
          <div className="mb-12 text-center">
            <Heading as="h2">{title}</Heading>
            {subtitle && (
              <p className="mt-4 text-lg text-muted-foreground">{subtitle}</p>
            )}
          </div>
        )}

        <div
          className={cn(
            "grid gap-8",
            categories.length === 2
              ? "md:grid-cols-2"
              : categories.length === 3
                ? "md:grid-cols-3"
                : "md:grid-cols-2 lg:grid-cols-4",
          )}
        >
          {categories.map((category) => (
            <div
              key={category.title}
              className="rounded-xl border border-border/60 bg-background p-6"
            >
              <h3 className="font-heading mb-4 text-lg font-semibold">
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
