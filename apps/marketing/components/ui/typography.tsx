import * as React from "react"

import { cn } from "@/lib/utils"

/* -------------------------------------------------------------------------- */
/*  Heading                                                                   */
/* -------------------------------------------------------------------------- */

const headingSizes = {
  h1: "text-5xl",
  h2: "text-4xl",
  h3: "text-3xl",
  h4: "text-2xl",
  h5: "text-xl",
  h6: "text-lg",
} as const

type HeadingLevel = keyof typeof headingSizes

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: HeadingLevel
}

function Heading({ as: Tag = "h2", className, children, ...props }: HeadingProps) {
  return (
    <Tag
      className={cn(
        "font-heading font-bold tracking-tight",
        headingSizes[Tag],
        className,
      )}
      {...props}
    >
      {children}
    </Tag>
  )
}

/* -------------------------------------------------------------------------- */
/*  Lead                                                                      */
/* -------------------------------------------------------------------------- */

interface LeadProps extends React.HTMLAttributes<HTMLParagraphElement> {}

function Lead({ className, children, ...props }: LeadProps) {
  return (
    <p
      className={cn("font-body text-xl text-muted-foreground", className)}
      {...props}
    >
      {children}
    </p>
  )
}

/* -------------------------------------------------------------------------- */
/*  Body                                                                      */
/* -------------------------------------------------------------------------- */

interface BodyProps extends React.HTMLAttributes<HTMLParagraphElement> {}

function Body({ className, children, ...props }: BodyProps) {
  return (
    <p className={cn("font-body text-base", className)} {...props}>
      {children}
    </p>
  )
}

/* -------------------------------------------------------------------------- */
/*  Caption                                                                   */
/* -------------------------------------------------------------------------- */

interface CaptionProps extends React.HTMLAttributes<HTMLParagraphElement> {}

function Caption({ className, children, ...props }: CaptionProps) {
  return (
    <p
      className={cn("font-body text-sm text-muted-foreground", className)}
      {...props}
    >
      {children}
    </p>
  )
}

export { Heading, Lead, Body, Caption }
export type { HeadingProps, HeadingLevel }
