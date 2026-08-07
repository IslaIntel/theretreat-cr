import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import { BookingWidget } from "../../../components/BookingWidget";

export default async function BookPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ intent?: string }>;
}) {
  const { locale } = await params;
  const { intent } = await searchParams;
  setRequestLocale(locale);
  const t = await getTranslations("booking");

  const intentLabel =
    intent === "house"
      ? t("bookHouse")
      : intent === "ledge"
        ? t("bookLedge")
        : intent === "enquire"
          ? t("enquire")
          : t("bookRoom");

  return (
    <section className="section pt-36">
      <div className="container max-w-4xl">
        <p className="eyebrow">{intentLabel}</p>
        <h1 className="h2 mt-4">{t("title")}</h1>
        <p className="mt-4 max-w-2xl text-[color:var(--muted)]">
          Choose your dates — we&apos;ll take you to our secure Orbe booking
          engine with live availability for property Ksta2.
        </p>
        <div className="mt-10">
          <BookingWidget locale={locale as "en" | "es"} />
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href={`/${locale}/stay/the-ledge-villa`} className="btn btn-ghost">
            {t("bookLedge")}
          </a>
          <a href={`/${locale}/stay/mountain-house`} className="btn btn-ghost">
            {t("bookHouse")}
          </a>
          <a
            href="mailto:elizabethcannva@gmail.com?subject=Enquiry%20-%20The%20Retreat"
            className="btn btn-ink"
          >
            {t("enquire")}
          </a>
        </div>
      </div>
    </section>
  );
}
