import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-base font-semibold ring-offset-background transition-all duration-150 shadow-thai-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-thai-gold focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-60 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:shadow-lg hover:scale-[1.03] active:scale-95 border border-transparent",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 border border-thai-gold/30 hover:border-thai-gold/60 shadow-thai-soft hover:shadow-thai-strong",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 border border-red-300 hover:border-red-500 shadow-thai-soft hover:shadow-lg",
        outline:
          "border-2 border-thai-gold/40 bg-background text-foreground hover:bg-accent hover:text-accent-foreground hover:border-thai-gold/80 shadow-thai-soft hover:shadow-lg",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 border border-thai-gold/20 hover:border-thai-gold/50 shadow-thai-soft hover:shadow-lg",
        ghost: "hover:bg-accent hover:text-accent-foreground border border-thai-gold/10 hover:border-thai-gold/40 shadow-thai-soft hover:shadow-lg",
        link: "text-primary underline-offset-4 hover:underline border-none shadow-none",
      },
      size: {
        default: "h-12 px-6 py-3",
        sm: "h-10 rounded-lg px-4 py-2 text-sm",
        lg: "h-14 rounded-lg px-8 py-4 text-lg",
        icon: "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
