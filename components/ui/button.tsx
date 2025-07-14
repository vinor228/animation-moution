import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        destructive:
          "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary:
          "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
        gradient: " bg-gradient-to-r from-[#963488] via-[#FC6F32] to-[#FF4A59] group relative overflow-hidden rounded-[91px] p-[2px]",
      },
      // has-[>svg]:px-3
      size: {
        sm: "h-8 p-[2px] text-base",     // 16px текст
        default: "h-9 p-[2px] text-lg",  // 18px текст
        large: "h-12 p-[2px] text-2xl",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
                  className,
                  variant,
                  size,
                  children,
                  asChild = false,
                  ...props
                }: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
  asChild?: boolean
}) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      <span className="flex w-full h-full items-center justify-center rounded-[89px] bg-black text-white group-hover:bg-gradient-to-r group-hover:from-[#963488] group-hover:via-[#FC6F32] group-hover:to-[#FF4A59] transition-colors">
        {children}
      </span>
    </Comp>
  )
}

export { Button, buttonVariants }
