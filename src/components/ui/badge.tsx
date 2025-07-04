import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 font-primary text-sm font-bold uppercase transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80 font-primary text-sm font-bold uppercase",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 font-primary text-sm font-bold uppercase",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80 font-primary text-sm font-bold uppercase",
        outline: "text-foreground font-primary text-sm font-bold uppercase",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
