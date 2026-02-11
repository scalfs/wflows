"use client"

import { useState } from "react"
import { useTranslations } from "next-intl"

import { cn } from "@/lib/utils"
import { Ripple } from "@/components/ui/ripple"

const pillKeys = ["outbound", "inbound", "revops", "operations"] as const

export function Hero() {
  const t = useTranslations("home.hero")
  const [activePill, setActivePill] = useState<string | null>(null)

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-4">
      <Ripple className="opacity-30" />

      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center text-center">
        <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          {t("title")}
        </h1>

        <p className="mt-4 max-w-2xl text-lg text-muted-foreground sm:text-xl">
          {t("subtitle")}
        </p>

        <p className="font-body mt-6 max-w-2xl text-base text-muted-foreground">
          {t("description")}
        </p>

        {/* Service pills */}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {pillKeys.map((key) => (
            <button
              key={key}
              type="button"
              onClick={() =>
                setActivePill((prev) => (prev === key ? null : key))
              }
              className={cn(
                "rounded-full px-5 py-2 text-sm font-medium transition-colors",
                activePill === key
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground",
              )}
            >
              {t(`pills.${key}`)}
            </button>
          ))}
        </div>

        {/* CTAs */}
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <a
            href="https://cal.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            {t("cta")}
          </a>

          <a
            href="#services"
            className="group inline-flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            {t("secondaryCta")}
            <span className="transition-transform group-hover:translate-x-0.5">
              &rarr;
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}
