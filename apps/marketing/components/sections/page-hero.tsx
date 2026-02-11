"use client"

import { cn } from "@/lib/utils"
import { Ripple } from "@/components/ui/ripple"

interface PageHeroProps {
  title: string
  subtitle: string
  ctaLabel: string
  ctaHref?: string
  secondaryCtaLabel?: string
  secondaryCtaHref?: string
  className?: string
}

export function PageHero({
  title,
  subtitle,
  ctaLabel,
  ctaHref = "https://cal.com",
  secondaryCtaLabel,
  secondaryCtaHref,
  className,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative flex min-h-[70vh] items-center justify-center overflow-hidden px-4",
        className,
      )}
    >
      <Ripple className="opacity-20" />

      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center text-center">
        <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          {title}
        </h1>

        <p className="font-body mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
          {subtitle}
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <a
            href={ctaHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            {ctaLabel}
          </a>

          {secondaryCtaLabel && secondaryCtaHref && (
            <a
              href={secondaryCtaHref}
              className="group inline-flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {secondaryCtaLabel}
              <span className="transition-transform group-hover:translate-x-0.5">
                &rarr;
              </span>
            </a>
          )}
        </div>
      </div>
    </section>
  )
}
