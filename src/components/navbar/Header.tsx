import * as React from "react"

import { cn } from "@/lib/utils"

const Header = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex justify-between h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6 backdrop-blur bg-background/95 border-border/40 sticky supports-[backdrop-filter]:bg-background/60 top-0 w-full z-50",
      className
    )}
    {...props}
  />
));
Header.displayName = "Header";

export { Header };
