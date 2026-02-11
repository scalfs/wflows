"use client"

import Link from "next/link"
import { useLocale, useTranslations } from "next-intl"

import { cn } from "@/lib/utils"

interface FooterProps {
  className?: string
}

export function Footer({ className }: FooterProps) {
  const t = useTranslations("footer")
  const locale = useLocale()
  const otherLocale = locale === "en" ? "pt" : "en"

  return (
    <footer
      className={cn(
        "border-t border-border/40 bg-background/80 backdrop-blur-sm",
        className,
      )}
    >
      <div className="mx-auto flex max-w-screen-lg flex-col items-center gap-4 px-6 py-8 text-center sm:flex-row sm:justify-between sm:text-left">
        {/* Copyright */}
        <p className="font-body text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} {t("copyright")}
        </p>

        {/* Links */}
        <nav className="flex items-center gap-4 text-sm text-muted-foreground">
          <Link
            href={`/${locale}/privacy`}
            className="transition-colors hover:text-foreground"
          >
            {t("privacy")}
          </Link>
          <Link
            href={`/${locale}/terms`}
            className="transition-colors hover:text-foreground"
          >
            {t("terms")}
          </Link>

          {/* Language switcher */}
          <span className="text-border">|</span>
          <Link
            href={`/${otherLocale}`}
            className="font-medium uppercase transition-colors hover:text-foreground"
          >
            {otherLocale}
          </Link>
        </nav>
      </div>
    </footer>
  )
}
