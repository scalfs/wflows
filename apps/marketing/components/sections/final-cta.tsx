"use client"

import { useTranslations } from "next-intl"

import { cn } from "@/lib/utils"
import { Heading } from "@/components/ui/typography"
import SvgRippleEffect from "@/components/ui/svg-ripple-effect"

/* -------------------------------------------------------------------------- */
/*  FinalCtaSection                                                           */
/* -------------------------------------------------------------------------- */

export function FinalCtaSection({ className }: { className?: string }) {
  const t = useTranslations("home.finalCta")

  return (
    <section className={cn("relative overflow-hidden bg-muted py-20", className)}>
      {/* Background ripple decoration */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-20">
        <SvgRippleEffect
          transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
          fade={["top", "bottom"]}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Heading as="h2" className="mb-6">
            {t("title")}
          </Heading>

          <p className="mb-10 text-lg text-muted-foreground">
            {t("description")}
          </p>

          <a
            href="#contact"
            className="inline-block rounded-lg bg-primary px-8 py-4 text-lg font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            {t("cta")}
          </a>

          <p className="mt-6 text-sm text-muted-foreground">
            {t("emailFallback")}{" "}
            <a
              href="mailto:contact@wflows.com"
              className="underline underline-offset-4 transition-colors hover:text-foreground"
            >
              contact@wflows.com
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
