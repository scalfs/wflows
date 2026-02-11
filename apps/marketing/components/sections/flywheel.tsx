"use client"

import { useTranslations } from "next-intl"

import { cn } from "@/lib/utils"
import { Heading, Lead } from "@/components/ui/typography"
import { OrbitingCircles } from "@/components/ui/orbiting-circles"

/* -------------------------------------------------------------------------- */
/*  StepBadge                                                                 */
/* -------------------------------------------------------------------------- */

function StepBadge({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center justify-center rounded-full border bg-white px-3 py-1 text-xs font-medium whitespace-nowrap shadow-sm">
      {label}
    </span>
  )
}

/* -------------------------------------------------------------------------- */
/*  FlywheelSection                                                           */
/* -------------------------------------------------------------------------- */

export function FlywheelSection({ className }: { className?: string }) {
  const t = useTranslations("home.flywheel")
  const steps = t.raw("steps") as string[]

  const innerSteps = steps.slice(0, 5)
  const outerSteps = steps.slice(5, 10)

  return (
    <section className={cn("py-20", className)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <Heading as="h2" className="mb-4">
            {t("title")}
          </Heading>
          <Lead>{t("subtitle")}</Lead>
        </div>

        {/* Orbiting visual */}
        <div className="relative mx-auto h-[500px] w-full max-w-3xl">
          {/* Center label */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-heading text-xl font-bold">WFlows</span>
          </div>

          {/* Inner orbit — first 5 steps */}
          <OrbitingCircles
            radius={140}
            duration={40}
            iconSize={100}
            path
          >
            {innerSteps.map((step, i) => (
              <StepBadge key={i} label={step} />
            ))}
          </OrbitingCircles>

          {/* Outer orbit — last 5 steps */}
          <OrbitingCircles
            radius={220}
            duration={60}
            reverse
            iconSize={110}
            path
          >
            {outerSteps.map((step, i) => (
              <StepBadge key={i} label={step} />
            ))}
          </OrbitingCircles>
        </div>

        {/* Foundation banner */}
        <div className="mt-8 rounded-xl bg-muted p-4 text-center">
          <p className="text-sm font-medium text-muted-foreground">
            {t("foundation")}
          </p>
        </div>
      </div>
    </section>
  )
}
