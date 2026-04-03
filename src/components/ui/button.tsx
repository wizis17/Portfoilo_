import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold uppercase tracking-[0.14em] [font-family:'Share_Tech_Mono',monospace] ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [clip-path:polygon(0_8px,8px_0,calc(100%_-_8px)_0,100%_8px,100%_calc(100%_-_8px),calc(100%_-_8px)_100%,8px_100%,0_calc(100%_-_8px))] [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "border border-[#00ff88] bg-[linear-gradient(90deg,#00ff88,#2dffc5)] text-[#05110d] hover:brightness-110 hover:shadow-[0_0_14px_rgba(0,255,136,0.52)]",
        destructive:
          "border border-destructive bg-destructive text-destructive-foreground hover:bg-destructive/85",
        outline:
          "border border-[#00d4ff]/60 bg-[#081422] text-[#c7d0df] hover:text-[#00d4ff] hover:border-[#00d4ff] hover:shadow-[0_0_12px_rgba(0,212,255,0.36)]",
        secondary:
          "border border-[#65769b]/65 bg-secondary text-secondary-foreground hover:border-[#00ff88]/60 hover:text-[#00ff88]",
        ghost: "border border-transparent hover:border-[#00d4ff]/40 hover:bg-[#081422] hover:text-[#00d4ff]",
        link: "text-[#00d4ff] underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 px-3",
        lg: "h-11 px-8",
        icon: "h-10 w-10",
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
