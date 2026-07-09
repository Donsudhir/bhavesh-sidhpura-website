import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

const base =
  "group relative inline-flex items-center justify-center gap-2 rounded-full text-[0.95rem] font-medium leading-none whitespace-nowrap transition-[transform,background-color,border-color,color,box-shadow] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-bg";

const sizes = "px-6 py-3.5";

const variants: Record<Variant, string> = {
  // High-contrast neutral CTA (one primary intent across the page)
  primary: "bg-btn-bg text-btn-fg shadow-soft hover:shadow-lift hover:opacity-95",
  secondary:
    "border border-border-strong text-text hover:border-accent hover:text-accent",
  ghost: "text-text-muted hover:text-text",
};

/* Trailing icon nested inside its own circular well (button-in-button). */
const iconWell: Record<Variant, string> = {
  primary: "bg-white/15",
  secondary: "bg-accent/12 text-accent",
  ghost: "bg-accent/10 text-accent",
};

function Inner({
  children,
  icon,
  variant,
}: {
  children: ReactNode;
  icon?: ReactNode;
  variant: Variant;
}) {
  if (!icon) return <>{children}</>;
  return (
    <>
      {children}
      <span
        aria-hidden
        className={`-mr-2 ml-1 grid h-8 w-8 place-items-center rounded-full transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0.5 group-hover:-translate-y-px ${iconWell[variant]}`}
      >
        {icon}
      </span>
    </>
  );
}

export function ButtonLink({
  href,
  variant = "primary",
  children,
  icon,
  className = "",
  ...rest
}: {
  href: string;
  variant?: Variant;
  children: ReactNode;
  icon?: ReactNode;
  className?: string;
} & Omit<ComponentProps<typeof Link>, "href" | "className">) {
  const external = href.startsWith("http");
  const cls = `${base} ${sizes} ${variants[variant]} ${className}`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        <Inner icon={icon} variant={variant}>
          {children}
        </Inner>
      </a>
    );
  }

  return (
    <Link href={href} className={cls} {...rest}>
      <Inner icon={icon} variant={variant}>
        {children}
      </Inner>
    </Link>
  );
}
