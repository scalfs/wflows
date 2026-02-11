"use client"

import { useTranslations } from "next-intl"

import { cn } from "@/lib/utils"
import { Heading, Lead } from "@/components/ui/typography"

/* -------------------------------------------------------------------------- */
/*  Types                                                                     */
/* -------------------------------------------------------------------------- */

interface ComparisonRow {
  label: string
  values: ("yes" | "no" | "partial")[]
}

/* -------------------------------------------------------------------------- */
/*  Status Icons                                                              */
/* -------------------------------------------------------------------------- */

function CheckIcon() {
  return (
    <svg
      className="mx-auto size-5 text-green-600"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2.5}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  )
}

function XIcon() {
  return (
    <svg
      className="mx-auto size-5 text-red-500"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  )
}

function PartialIcon() {
  return (
    <svg
      className="mx-auto size-5 text-yellow-500"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2.5}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
    </svg>
  )
}

function StatusCell({ value }: { value: "yes" | "no" | "partial" }) {
  if (value === "yes") return <CheckIcon />
  if (value === "no") return <XIcon />
  return <PartialIcon />
}

/* -------------------------------------------------------------------------- */
/*  ComparisonSection                                                         */
/* -------------------------------------------------------------------------- */

export function ComparisonSection({ className }: { className?: string }) {
  const t = useTranslations("home.comparison")
  const headers = t.raw("headers") as string[]
  const rows = t.raw("rows") as ComparisonRow[]

  return (
    <section className={cn("py-20", className)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <Heading as="h2" className="mb-4">
            {t("title")}
          </Heading>
          <Lead>{t("subtitle")}</Lead>
        </div>

        {/* Scrollable wrapper for mobile */}
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden rounded-xl border">
              <table className="min-w-full divide-y divide-border">
                {/* Header */}
                <thead>
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-medium text-muted-foreground" />
                    {headers.map((header, i) => (
                      <th
                        key={i}
                        className={cn(
                          "px-6 py-4 text-center text-sm font-semibold",
                          i === 0 && "bg-primary/5 font-heading"
                        )}
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>

                {/* Body */}
                <tbody className="divide-y divide-border">
                  {rows.map((row, rowIdx) => (
                    <tr key={rowIdx}>
                      <td className="px-6 py-4 text-sm font-medium whitespace-nowrap">
                        {row.label}
                      </td>
                      {row.values.map((value, colIdx) => (
                        <td
                          key={colIdx}
                          className={cn(
                            "px-6 py-4 text-center",
                            colIdx === 0 && "bg-primary/5"
                          )}
                        >
                          <StatusCell value={value} />
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
