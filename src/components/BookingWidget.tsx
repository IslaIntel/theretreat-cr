"use client";

import { useMemo, useState } from "react";
import {
  buildOrbeUrl,
  defaultStayDates,
  fromInputDate,
  toInputDate,
} from "@bluemountain/brand";
import { useTranslations } from "next-intl";

export function BookingWidget({
  locale,
  variant = "page",
}: {
  locale: "en" | "es";
  variant?: "page" | "inline";
}) {
  const t = useTranslations("booking");
  const defaults = useMemo(() => defaultStayDates(3), []);
  const [checkIn, setCheckIn] = useState(toInputDate(defaults.checkIn));
  const [checkOut, setCheckOut] = useState(toInputDate(defaults.checkOut));
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);

  const href = buildOrbeUrl({
    checkIn: fromInputDate(checkIn),
    checkOut: fromInputDate(checkOut),
    adults,
    children,
    locale,
  });

  return (
    <form
      className={
        variant === "page"
          ? "grid gap-4 rounded-2xl border border-[color:var(--sand)] bg-[color:var(--surface)] p-6 md:grid-cols-5 md:items-end"
          : "grid gap-3 md:grid-cols-5 md:items-end"
      }
      action={href}
      method="get"
      onSubmit={(e) => {
        e.preventDefault();
        window.location.href = href;
      }}
    >
      <label className="grid gap-2 text-sm">
        <span className="eyebrow">{t("checkIn")}</span>
        <input
          type="date"
          required
          value={checkIn}
          onChange={(e) => setCheckIn(e.target.value)}
          className="min-h-12 rounded-xl border border-[color:var(--sand)] bg-transparent px-3"
        />
      </label>
      <label className="grid gap-2 text-sm">
        <span className="eyebrow">{t("checkOut")}</span>
        <input
          type="date"
          required
          value={checkOut}
          min={checkIn}
          onChange={(e) => setCheckOut(e.target.value)}
          className="min-h-12 rounded-xl border border-[color:var(--sand)] bg-transparent px-3"
        />
      </label>
      <label className="grid gap-2 text-sm">
        <span className="eyebrow">{t("adults")}</span>
        <input
          type="number"
          min={1}
          max={12}
          value={adults}
          onChange={(e) => setAdults(Number(e.target.value))}
          className="min-h-12 rounded-xl border border-[color:var(--sand)] bg-transparent px-3"
        />
      </label>
      <label className="grid gap-2 text-sm">
        <span className="eyebrow">{t("children")}</span>
        <input
          type="number"
          min={0}
          max={8}
          value={children}
          onChange={(e) => setChildren(Number(e.target.value))}
          className="min-h-12 rounded-xl border border-[color:var(--sand)] bg-transparent px-3"
        />
      </label>
      <button type="submit" className="btn btn-primary w-full">
        {t("submit")}
      </button>
    </form>
  );
}
