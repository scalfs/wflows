"use client"

import { useTranslations } from "next-intl"

import { cn } from "@/lib/utils"
import { Heading } from "@/components/ui/typography"
import { PageCta } from "@/components/sections/page-cta"

/* -------------------------------------------------------------------------- */
/*  Types                                                                     */
/* -------------------------------------------------------------------------- */

interface Step {
  title: string
  description: string
}

interface Value {
  title: string
  description: string
}

/* -------------------------------------------------------------------------- */
/*  AboutContent                                                              */
/* -------------------------------------------------------------------------- */

export function AboutContent() {
  const t = useTranslations("about")

  const steps = t.raw("howWeWork.steps") as Step[]
  const values = t.raw("values.items") as Value[]

  return (
    <main>
      {/* ------------------------------------------------------------------ */}
      {/*  Hero                                                              */}
      {/* ------------------------------------------------------------------ */}
      <section className="flex min-h-[50vh] items-center justify-center px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            {t("hero.title")}
          </h1>
          <p className="font-body mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
            {t("hero.subtitle")}
          </p>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/*  Mission                                                           */}
      {/* ------------------------------------------------------------------ */}
      <section className="bg-muted py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <Heading as="h2" className="mb-6">
              {t("mission.title")}
            </Heading>
            <p className="font-body text-lg text-muted-foreground">
              {t("mission.text")}
            </p>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/*  How We Work                                                       */}
      {/* ------------------------------------------------------------------ */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <Heading as="h2" className="mb-4">
              {t("howWeWork.title")}
            </Heading>
            <p className="font-body text-lg text-muted-foreground">
              {t("howWeWork.subtitle")}
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {steps.map((step, index) => (
              <div
                key={index}
                className={cn(
                  "rounded-xl border border-border/60 p-6",
                  "flex flex-col items-start gap-4",
                )}
              >
                <span className="font-heading flex h-10 w-10 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                  {index + 1}
                </span>
                <h3 className="font-heading text-xl font-semibold">
                  {step.title}
                </h3>
                <p className="font-body text-muted-foreground">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/*  Values                                                            */}
      {/* ------------------------------------------------------------------ */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <Heading as="h2">{t("values.title")}</Heading>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            {values.map((value, index) => (
              <div
                key={index}
                className="rounded-xl border border-border/60 p-6"
              >
                <h3 className="font-heading mb-3 text-xl font-semibold">
                  {value.title}
                </h3>
                <p className="font-body text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/*  CTA                                                               */}
      {/* ------------------------------------------------------------------ */}
      <PageCta
        title={t("cta.title")}
        description={t("cta.description")}
        ctaLabel={t("cta.ctaLabel")}
      />
    </main>
  )
}
