import { ComponentProps, ReactNode } from "react";

import { cn } from "../../lib/utils";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

export const Container = ({ children, className }: ContainerProps) => (
  <div className={cn("mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8", className)}>{children}</div>
);

type SectionProps = ComponentProps<"section">;

export const Section = ({ children, className, ...props }: SectionProps) => (
  <section className={cn("py-16 sm:py-20 lg:py-24", className)} {...props}>{children}</section>
);

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export const SectionHeading = ({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) => (
  <div className={cn(align === "center" && "mx-auto text-center", className)}>
    {eyebrow && (
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-signal-500 sm:text-sm">{eyebrow}</p>
    )}
    <h2 className="font-display text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">{title}</h2>
    {description && (
      <p className={cn("mt-4 max-w-3xl text-base leading-7 text-gray-300 sm:text-lg sm:leading-8", align === "center" && "mx-auto")}>{description}</p>
    )}
  </div>
);

type CardProps = {
  children: ReactNode;
  className?: string;
};

export const SurfaceCard = ({ children, className }: CardProps) => (
  <article
    className={cn(
      "h-full rounded-2xl border border-white/10 bg-marine-800/70 p-6 shadow-[0_12px_30px_rgba(8,14,27,0.35)] backdrop-blur",
      className,
    )}
  >
    {children}
  </article>
);

const buttonBase =
  "inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-semibold transition-all duration-200 sm:px-6 sm:py-3.5";

export const primaryButtonClass = cn(
  buttonBase,
  "bg-signal-500 text-marine-900 shadow-[0_10px_25px_rgba(255,173,1,0.28)] hover:-translate-y-0.5 hover:bg-signal-600",
);

export const secondaryButtonClass = cn(
  buttonBase,
  "border border-white/20 text-white hover:border-white hover:bg-white/5",
);

export const mutedPanelClass =
  "rounded-2xl border border-white/10 bg-marine-900/45 p-6 sm:p-8";
