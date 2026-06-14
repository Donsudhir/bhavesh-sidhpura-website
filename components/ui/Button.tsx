import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full text-[0.95rem] font-medium leading-none whitespace-nowrap transition-[transform,background-color,border-color,color] duration-200 active:scale-[0.98] focus-visible:outline-none";

const sizes = "px-6 py-3.5";

const variants: Record<Variant, string> = {
  // High-contrast neutral CTA (one primary intent across the page)
  primary: "bg-btn-bg text-btn-fg hover:opacity-90",
  secondary:
    "border border-border-strong text-text hover:border-accent hover:text-accent",
  ghost: "text-text-muted hover:text-text",
};

export function ButtonLink({
  href,
  variant = "primary",
  children,
  className = "",
  ...rest
}: {
  href: string;
  variant?: Variant;
  children: ReactNode;
  className?: string;
} & Omit<ComponentProps<typeof Link>, "href" | "className">) {
  const external = href.startsWith("http");
  const cls = `${base} ${sizes} ${variants[variant]} ${className}`;

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cls}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={cls} {...rest}>
      {children}
    </Link>
  );
}
