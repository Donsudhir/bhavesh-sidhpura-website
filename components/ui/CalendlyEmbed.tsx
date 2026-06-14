"use client";

import { useEffect, useRef } from "react";
import { CalendarBlank } from "@phosphor-icons/react";

const PLACEHOLDER = "your-handle";

export function CalendlyEmbed({ url }: { url: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isPlaceholder = url.includes(PLACEHOLDER);

  useEffect(() => {
    if (isPlaceholder || !ref.current) return;

    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      script.remove();
    };
  }, [isPlaceholder]);

  if (isPlaceholder) {
    return (
      <div className="grid min-h-[460px] place-items-center rounded-card border border-dashed border-border-strong bg-bg-elevated p-10 text-center">
        <div className="max-w-xs">
          <CalendarBlank
            size={32}
            weight="regular"
            className="mx-auto text-accent"
          />
          <p className="mt-4 font-display text-xl text-text">
            Calendly booking widget
          </p>
          <p className="mt-2 text-[0.92rem] leading-relaxed text-text-muted">
            Live scheduling appears here once the Calendly account is connected.
            Pune in-person slots and travel-city dates.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={ref}
      className="calendly-inline-widget min-h-[680px] overflow-hidden rounded-card border border-border"
      data-url={url}
    />
  );
}
