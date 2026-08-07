import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { getAccommodation, img, imgByFile, siteContent } from "../../../../lib/content";
import { BookingWidget } from "../../../../components/BookingWidget";

const imageMap: Record<string, string[]> = {
  "the-ledge-villa": ["Retreat-527", "Retreat-500", "TheRetreat.47"],
  "the-retreat-house": ["TheRetreat.47", "Retreat.22", "Hibiscus"],
  "mountain-house": ["Retreat.16", "Retreat.1", "TheRetreat.28"],
};

export function generateStaticParams() {
  return siteContent.accommodations.flatMap((a) =>
    ["en", "es"].map((locale) => ({ locale, slug: a.slug })),
  );
}

export default async function StayPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const unit = getAccommodation(slug);
  if (!unit) notFound();
  const t = await getTranslations("accommodation");
  const keys = imageMap[slug] ?? ["TheRetreat.47"];
  const photos = keys.map((k) => imgByFile(k, img(0)));

  return (
    <>
      <section className="relative min-h-[70svh] bg-[color:var(--ink)] text-[color:var(--cream)]">
        <Image
          src={photos[0]}
          alt={unit.name}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[color:var(--ink)]/45" />
        <div className="relative z-10 flex min-h-[70svh] items-end">
          <div className="container pb-16 pt-32">
            <p className="eyebrow text-[color:var(--sand)]">
              {unit.capacity}
            </p>
            <h1 className="display mt-4">{unit.name}</h1>
            <p className="mt-4 max-w-2xl text-xl text-[color:var(--sand)]">
              {unit.tagline}
            </p>
          </div>
        </div>
      </section>

      <nav
        className="sticky top-[var(--nav-h)] z-40 border-b border-[color:var(--sand)] bg-[color:var(--cream)]/95 backdrop-blur"
        aria-label="In-page"
      >
        <div className="container flex gap-6 overflow-x-auto py-4">
          {[
            ["#overview", t("overview")],
            ["#info", t("info")],
            ["#experiences", t("experiences")],
            ["#availability", t("availability")],
          ].map(([href, label]) => (
            <a key={href} href={href} className="eyebrow whitespace-nowrap">
              {label}
            </a>
          ))}
        </div>
      </nav>

      <section id="overview" className="section">
        <div className="container grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="h2">{unit.tagline}</h2>
            <p className="mt-6 text-lg text-[color:var(--muted)]">
              {unit.summary}
            </p>
          </div>
          <div>
            <h3 className="eyebrow">{t("amenities")}</h3>
            <ul className="mt-4 space-y-3">
              {unit.amenities.map((a) => (
                <li
                  key={a}
                  className="border-b border-[color:var(--sand)] pb-3"
                >
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container grid gap-4 md:grid-cols-3">
          {photos.map((src) => (
            <div key={src} className="relative aspect-[4/5] overflow-hidden">
              <Image src={src} alt="" fill sizes="33vw" className="object-cover" />
            </div>
          ))}
        </div>
      </section>

      <section id="info" className="section">
        <div className="container max-w-3xl">
          <h2 className="h2 mb-8">{t("info")}</h2>
          <div className="divide-y divide-[color:var(--sand)] border-y border-[color:var(--sand)]">
            {[
              [t("capacity"), unit.capacity],
              [t("bedrooms"), String(unit.bedrooms)],
              [t("checkInOut"), t("checkInOutValue")],
              [t("whatToPack"), t("whatToPackValue")],
            ].map(([label, value]) => (
              <details key={label} className="group py-5" open>
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                  <span className="eyebrow">{label}</span>
                  <span aria-hidden className="text-[color:var(--stone)]">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-[color:var(--muted)]">{value}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="experiences" className="section section-alt">
        <div className="container">
          <h2 className="h2 mb-8">{t("experiences")}</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {siteContent.experiences.slice(0, 2).map((exp) => (
              <article key={exp.slug} className="border border-[color:var(--sand)] p-8">
                <h3 className="h3">{exp.title}</h3>
                <p className="mt-4 text-[color:var(--muted)]">{exp.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="availability" className="section">
        <div className="container">
          <h2 className="h2 mb-8">{t("availability")}</h2>
          <BookingWidget locale={locale as "en" | "es"} />
          <Link href={`/${locale}/book`} className="btn btn-ghost mt-6">
            {t("availability")}
          </Link>
        </div>
      </section>
    </>
  );
}
