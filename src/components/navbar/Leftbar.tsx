import * as React from "react"

import { cn } from "@/lib/utils"

const Leftbar = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex h-full max-h-screen flex-col gap-2 sticky top-0",
      className
    )}
    {...props}
  />
));
Leftbar.displayName = "Leftbar";

const LeftbarHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex h-14 items-center border-b px-4 text-slate-700 lg:h-[60px] lg:px-6", className)}
    {...props}
  />
));
LeftbarHeader.displayName = "LeftbarHeader";

const LeftbarTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <span
    ref={ref}
    className={cn("flex items-center gap-2 font-semibold", className)}
    {...props}
  />
));
LeftbarTitle.displayName = "LeftbarTitle";

const LeftbarContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <nav
    ref={ref}
    className={cn("grid gap-2 items-start px-2 text-sm font-medium text-slate-700 lg:px-4", className)}
    {...props}
  />
));
LeftbarContent.displayName = "LeftbarContent";

export { Leftbar, LeftbarHeader, LeftbarTitle, LeftbarContent };
