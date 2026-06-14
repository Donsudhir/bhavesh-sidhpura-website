import type { ReactNode } from "react";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-[1200px] px-6 sm:px-8 ${className}`}>
      {children}
    </div>
  );
}

/* Small uppercase section label. Used sparingly (max 1 per ~3 sections). */
export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-3 text-[0.72rem] font-medium uppercase tracking-[0.2em] text-text-muted">
      <span className="h-px w-7 bg-accent" aria-hidden />
      {children}
    </span>
  );
}
