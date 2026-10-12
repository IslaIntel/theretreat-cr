"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { BookingWidget } from "./BookingWidget";
import { HC_EMAIL } from "../lib/chinampas-contact";
import { siteContent } from "../lib/content";

export function ChinampasAvailability({
  locale,
  showEnquireRow = false,
}: {
  locale: "en" | "es";
  showEnquireRow?: boolean;
}) {
  const t = useTranslations("booking");
  const tHome = useTranslations("home");

  return (
    <div id="book" className="scroll-mt-28">
      <div className="flex flex-wrap gap-2">
        {siteContent.accommodations.map((unit) => (
          <span
            key={unit.slug}
            className="rounded-full border border-[color:var(--sand)] bg-[color:var(--surface)] px-3 py-1.5 text-xs text-[color:var(--muted)]"
          >
            {unit.name}
            {"comingSoon" in unit && unit.comingSoon
              ? ` · ${tHome("comingSoon")}`
              : ` · ${unit.capacity}`}
          </span>
        ))}
      </div>
      <div className="mt-6">
        <BookingWidget locale={locale} variant="inline" />
      </div>
      {showEnquireRow && (
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href={`/${locale}/book`} className="btn btn-primary">
            {t("enquire")}
          </Link>
          <a href={`mailto:${HC_EMAIL}`} className="btn btn-ink">
            {tHome("writeToUs")}
          </a>
        </div>
      )}
    </div>
  );
}
