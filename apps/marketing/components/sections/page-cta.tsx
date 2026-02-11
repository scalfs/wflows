"use client"

import { cn } from "@/lib/utils"
import { Heading } from "@/components/ui/typography"

interface PageCtaProps {
  title: string
  description?: string
  ctaLabel: string
  ctaHref?: string
  emailFallback?: string
  className?: string
}

export function PageCta({
  title,
  description,
  ctaLabel,
  ctaHref = "https://cal.com",
  emailFallback,
  className,
}: PageCtaProps) {
  return (
    <section className={cn("bg-muted py-20", className)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Heading as="h2" className="mb-6">
            {title}
          </Heading>

          {description && (
            <p className="mb-10 text-lg text-muted-foreground">{description}</p>
          )}

          <a
            href={ctaHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-lg bg-primary px-8 py-4 text-lg font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            {ctaLabel}
          </a>

          {emailFallback && (
            <p className="mt-6 text-sm text-muted-foreground">
              {emailFallback}
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
