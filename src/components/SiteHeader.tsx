"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { LocaleSwitcher, cn } from "@bluemountain/brand";

export function SiteHeader({ locale }: { locale: "en" | "es" }) {
  const t = useTranslations("nav");
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: `#stay`, label: t("stay") },
    { href: `#farm`, label: t("farm") },
    { href: `#experiences`, label: t("experiences") },
    { href: `#dining`, label: t("dining") },
  ];

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 h-[var(--nav-h)] transition-colors duration-500",
        solid || open
          ? "bg-[color:var(--cream)]/95 text-[color:var(--ink)] backdrop-blur-md"
          : "bg-transparent text-[color:var(--cream)]",
      )}
    >
      <div className="container flex h-full items-center justify-between gap-6">
        <button
          type="button"
          className="eyebrow flex items-center gap-3"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative block h-3 w-5" aria-hidden>
            <span
              className={cn(
                "absolute left-0 h-px w-full bg-current transition",
                open ? "top-1.5 rotate-45" : "top-0",
              )}
            />
            <span
              className={cn(
                "absolute left-0 top-1.5 h-px w-full bg-current transition",
                open && "opacity-0",
              )}
            />
            <span
              className={cn(
                "absolute left-0 h-px w-full bg-current transition",
                open ? "top-1.5 -rotate-45" : "top-3",
              )}
            />
          </span>
          <span className="hidden sm:inline">Menu</span>
        </button>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="eyebrow hover:opacity-70">
              {l.label}
            </a>
          ))}
        </nav>

        <Link
          href={`/${locale}`}
          className="absolute left-1/2 -translate-x-1/2 font-[family-name:var(--font-display)] text-xl tracking-tight md:static md:translate-x-0"
        >
          The Retreat
        </Link>

        <div className="flex items-center gap-4">
          <LocaleSwitcher locale={locale} className="hidden sm:inline-flex" />
          <a href={`/${locale}/book`} className="btn btn-primary !min-h-10 !px-4 !py-2">
            {t("book")}
          </a>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={cn(
          "border-t border-[color:var(--sand)] bg-[color:var(--cream)] text-[color:var(--ink)] md:hidden",
          open ? "block" : "hidden",
        )}
      >
        <div className="container flex flex-col gap-4 py-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="h3"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <LocaleSwitcher locale={locale} />
        </div>
      </div>
    </header>
  );
}
