"use client";

import { useEffect, useRef } from "react";

/* The "spark, fire and ash" layer.
   - A soft warm glow trails the pointer (lerped for weight).
   - Each click flings a few embers that arc out and fade to ash.
   Desktop + fine-pointer only, and fully disabled under reduced-motion. */
export function EmberCursor() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (!fine || reduce) return;

    const glow = glowRef.current;
    if (!glow) return;

    const target = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const pos = { ...target };
    let raf = 0;
    let visible = false;

    const onMove = (e: PointerEvent) => {
      target.x = e.clientX;
      target.y = e.clientY;
      if (!visible) {
        visible = true;
        glow.style.opacity = "1";
      }
      // Spotlight follow: illuminate the card border under the cursor.
      const el = e.target as HTMLElement | null;
      const card = el?.closest?.(".spotlight") as HTMLElement | null;
      if (card) {
        const r = card.getBoundingClientRect();
        card.style.setProperty("--mx", `${e.clientX - r.left}px`);
        card.style.setProperty("--my", `${e.clientY - r.top}px`);
      }
    };
    const onLeave = () => {
      visible = false;
      glow.style.opacity = "0";
    };

    const tick = () => {
      pos.x += (target.x - pos.x) * 0.12;
      pos.y += (target.y - pos.y) * 0.12;
      glow.style.setProperty("--ember-x", `${pos.x}px`);
      glow.style.setProperty("--ember-y", `${pos.y}px`);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const onClick = (e: PointerEvent) => {
      const count = 6;
      for (let i = 0; i < count; i++) {
        const s = document.createElement("span");
        s.className = "spark";
        s.style.left = `${e.clientX}px`;
        s.style.top = `${e.clientY}px`;
        const angle = (Math.PI * 2 * i) / count + Math.random() * 0.7;
        const dist = 26 + Math.random() * 46;
        s.style.setProperty("--sx", `${Math.cos(angle) * dist}px`);
        s.style.setProperty("--sy", `${Math.sin(angle) * dist - 18}px`);
        document.body.appendChild(s);
        window.setTimeout(() => s.remove(), 760);
      }
    };

    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerdown", onClick);
    document.documentElement.addEventListener("pointerleave", onLeave);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onClick);
      document.documentElement.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return <div ref={glowRef} className="ember-cursor" aria-hidden />;
}
