"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useScroll, useMotionValueEvent } from "motion/react";
import { List, X } from "@phosphor-icons/react";
import { nav, site, ctas } from "@/lib/site";
import { ThemeToggle } from "./ThemeToggle";
import { ButtonLink } from "./ui/Button";

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => {
    const next = y > 12;
    setScrolled((prev) => (prev === next ? prev : next));
  });

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? "border-border bg-bg/85 backdrop-blur-md"
          : "border-transparent bg-bg/0"
      }`}
    >
      <nav className="mx-auto flex h-[72px] max-w-[1200px] items-center justify-between px-6 sm:px-8">
        <Link
          href="/"
          className="font-display text-[1.05rem] font-medium tracking-[0.04em] text-text"
          onClick={() => setOpen(false)}
        >
          {site.name.toUpperCase()}
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          <ul className="flex items-center gap-7 text-[0.95rem] text-text-muted">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="transition-colors hover:text-text"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <ButtonLink href="/#booking" className="px-5 py-2.5 text-sm">
              {ctas.primary}
            </ButtonLink>
          </div>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-full border border-border text-text"
          >
            {open ? <X size={20} /> : <List size={20} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="lg:hidden">
          <div className="border-t border-border bg-bg px-6 pb-8 pt-4 sm:px-8">
            <ul className="flex flex-col">
              {nav.map((item) => (
                <li key={item.href} className="border-b border-border">
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block py-4 font-display text-xl text-text"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <ButtonLink
              href="/#booking"
              className="mt-6 w-full"
              onClick={() => setOpen(false)}
            >
              {ctas.primary}
            </ButtonLink>
          </div>
        </div>
      )}
    </header>
  );
}
