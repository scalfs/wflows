"use client"

import { useTranslations } from "next-intl"

const tools = ["Clay", "HubSpot", "Make", "n8n", "Instantly", "Retell", "Vapi"]

export function SocialProof() {
  const t = useTranslations("home.socialProof")

  return (
    <section className="border-y border-border/40 bg-muted/5 py-10">
      <div className="mx-auto max-w-5xl px-4">
        <p className="text-center text-xs font-medium uppercase tracking-widest text-muted-foreground">
          {t("title")}
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          {tools.map((tool) => (
            <span
              key={tool}
              className="font-heading text-base font-semibold text-muted-foreground/70 select-none"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
