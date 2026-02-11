"use client"

import React, { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useLocale, useTranslations } from "next-intl"

import { cn } from "@/lib/utils"
import { Dock, DockIcon } from "@/components/ui/dock"

/* -------------------------------------------------------------------------- */
/*  Types                                                                     */
/* -------------------------------------------------------------------------- */

interface NavPopoverItem {
  label: string
  description?: string
  href: string
}

interface NavPopoverProps {
  trigger: React.ReactNode
  items: NavPopoverItem[]
  className?: string
}

/* -------------------------------------------------------------------------- */
/*  NavPopover — hover-based dropdown anchored above the dock                 */
/* -------------------------------------------------------------------------- */

function NavPopover({ trigger, items, className }: NavPopoverProps) {
  const [open, setOpen] = useState(false)

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {/* Trigger icon / label */}
      <button
        type="button"
        aria-expanded={open}
        className="flex cursor-pointer flex-col items-center gap-0.5"
      >
        {trigger}
      </button>

      {/* Popover panel — positioned above the trigger */}
      {open && (
        <div
          className={cn(
            "absolute bottom-full left-1/2 z-50 mb-3 -translate-x-1/2",
            "w-56 rounded-xl border border-border/60 bg-background/95 p-2 shadow-lg backdrop-blur-md",
            className,
          )}
        >
          <ul className="flex flex-col gap-0.5">
            {items.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block rounded-lg px-3 py-2 transition-colors hover:bg-muted"
                >
                  <span className="font-heading text-sm font-semibold">
                    {item.label}
                  </span>
                  {item.description && (
                    <span className="block text-xs text-muted-foreground">
                      {item.description}
                    </span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*  Navigation                                                                */
/* -------------------------------------------------------------------------- */

export function Navigation() {
  const t = useTranslations("nav")
  const locale = useLocale()

  /* ---- Data for popover menus ---- */

  const servicesItems: NavPopoverItem[] = [
    {
      label: t("servicesItems.outbound"),
      description: t("servicesItems.outboundDesc"),
      href: `/${locale}/outbound`,
    },
    {
      label: t("servicesItems.inbound"),
      description: t("servicesItems.inboundDesc"),
      href: `/${locale}/inbound`,
    },
    {
      label: t("servicesItems.operations"),
      description: t("servicesItems.operationsDesc"),
      href: `/${locale}/operations`,
    },
    {
      label: t("servicesItems.revops"),
      description: t("servicesItems.revopsDesc"),
      href: `/${locale}/revops`,
    },
  ]

  const industriesItems: NavPopoverItem[] = [
    {
      label: t("industriesItems.dental"),
      description: t("industriesItems.dentalDesc"),
      href: `/${locale}/dental`,
    },
    {
      label: t("industriesItems.legal"),
      description: t("industriesItems.legalDesc"),
      href: `/${locale}/legal`,
    },
    {
      label: t("industriesItems.homeServices"),
      description: t("industriesItems.homeServicesDesc"),
      href: `/${locale}/home-services`,
    },
    {
      label: t("industriesItems.logistics"),
      description: t("industriesItems.logisticsDesc"),
      href: `/${locale}/logistics`,
    },
    {
      label: t("industriesItems.construction"),
      description: t("industriesItems.constructionDesc"),
      href: `/${locale}/construction`,
    },
    {
      label: t("industriesItems.financial"),
      description: t("industriesItems.financialDesc"),
      href: `/${locale}/financial`,
    },
    {
      label: t("industriesItems.b2bSaas"),
      description: t("industriesItems.b2bSaasDesc"),
      href: `/${locale}/b2b-saas`,
    },
  ]

  const resourcesItems: NavPopoverItem[] = [
    {
      label: t("resourcesItems.blog"),
      href: `/${locale}/blog`,
    },
    {
      label: t("resourcesItems.caseStudies"),
      href: `/${locale}/case-studies`,
    },
    {
      label: t("resourcesItems.tools"),
      href: `/${locale}/tools`,
    },
  ]

  return (
    <nav
      aria-label="Main navigation"
      className="fixed inset-x-0 bottom-4 z-50 flex justify-center px-4 sm:bottom-6"
    >
      <Dock
        iconSize={40}
        iconMagnification={56}
        iconDistance={120}
        direction="bottom"
        className="border-border/60 bg-background/80 shadow-lg backdrop-blur-md"
      >
        {/* Logo */}
        <DockIcon>
          <Link href={`/${locale}`} aria-label="WFlows Home">
            <Image
              src="/icon-no-bg.svg"
              alt="WFlows"
              width={28}
              height={28}
              className="size-7"
            />
          </Link>
        </DockIcon>

        {/* Separator */}
        <div className="mx-1 h-8 w-px bg-border/50" aria-hidden="true" />

        {/* Services */}
        <DockIcon disableMagnification>
          <NavPopover
            trigger={
              <span className="font-body text-xs text-muted-foreground transition-colors hover:text-foreground sm:text-sm">
                {t("services")}
              </span>
            }
            items={servicesItems}
          />
        </DockIcon>

        {/* Industries */}
        <DockIcon disableMagnification>
          <NavPopover
            trigger={
              <span className="font-body text-xs text-muted-foreground transition-colors hover:text-foreground sm:text-sm">
                {t("industries")}
              </span>
            }
            items={industriesItems}
            className="w-60"
          />
        </DockIcon>

        {/* Resources */}
        <DockIcon disableMagnification>
          <NavPopover
            trigger={
              <span className="font-body text-xs text-muted-foreground transition-colors hover:text-foreground sm:text-sm">
                {t("resources")}
              </span>
            }
            items={resourcesItems}
          />
        </DockIcon>

        {/* About */}
        <DockIcon disableMagnification>
          <Link
            href={`/${locale}/about`}
            className="font-body text-xs text-muted-foreground transition-colors hover:text-foreground sm:text-sm"
          >
            {t("about")}
          </Link>
        </DockIcon>

        {/* Separator */}
        <div className="mx-1 h-8 w-px bg-border/50" aria-hidden="true" />

        {/* Book a Call CTA */}
        <DockIcon disableMagnification>
          <a
            href="https://cal.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground transition-colors hover:bg-primary/80 sm:text-sm"
          >
            {t("bookCall")}
          </a>
        </DockIcon>
      </Dock>
    </nav>
  )
}
