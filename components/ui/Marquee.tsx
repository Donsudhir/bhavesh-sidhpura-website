import type { ReactNode } from "react";

/* Pure-CSS marquee. Renders the row twice so the -50% loop is seamless.
   Pauses under prefers-reduced-motion (handled in globals.css). */
export function Marquee({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`marquee-mask overflow-hidden ${className}`}>
      <div className="marquee-track whitespace-nowrap">
        <span className="flex items-center" aria-hidden={false}>
          {children}
        </span>
        <span className="flex items-center" aria-hidden>
          {children}
        </span>
      </div>
    </div>
  );
}
