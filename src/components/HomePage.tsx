import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { Reveal, SisterProperty } from "@bluemountain/brand";
import { BookingWidget } from "./BookingWidget";
import { img, imgByFile, siteContent } from "../lib/content";

const accentVar: Record<string, string> = {
  ledge: "var(--accent-ledge)",
  "retreat-house": "var(--accent-retreat-house)",
  "mountain-house": "var(--accent-mountain-house)",
};

export function HomePage({ locale }: { locale: "en" | "es" }) {
  const t = useTranslations();
  const hero = imgByFile("Wine-sunset", img(0));
  const farmImg = imgByFile("Retreat-top-lot", img(1));
  const coffeeImg = imgByFile("Hibiscus", img(2));
  const stayImages = [
    imgByFile("Retreat-527", img(2)),
    imgByFile("TheRetreat.47", img(1)),
    imgByFile("Retreat.16", img(4)),
  ];

  return (
    <>
      <section className="relative min-h-[100svh] overflow-hidden bg-[color:var(--ink)] text-[color:var(--cream)]">
        <Image
          src={hero}
          alt="Sunset overlooking the Blue Mountains"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--ink)]/75 via-[color:var(--ink)]/25 to-[color:var(--ink)]/35" />
        <div className="relative z-10 flex min-h-[100svh] flex-col justify-end px-[var(--gutter)] pb-16 pt-28">
          <div className="container">
            <p className="eyebrow text-[color:var(--sand)]">{t("hero.eyebrow")}</p>
            <Reveal as="h1" className="display mt-4 max-w-4xl">
              {t("hero.title")}
            </Reveal>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link href={`/${locale}/book`} className="btn btn-primary">
                {t("nav.book")}
              </Link>
              <p className="rounded-full border border-white/25 px-4 py-2 text-sm text-[color:var(--sand)]">
                {t("hero.status")}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container max-w-4xl text-center">
          <Reveal as="h2" className="h2">
            {t("specifics.title")}
          </Reveal>
        </div>
      </section>

      <section id="farm" className="relative min-h-[180vh]">
        <div className="sticky top-0 h-[100svh] overflow-hidden">
          <Image
            src={farmImg}
            alt="Working farmland at Blue Mountain Farms"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[color:var(--ink)]/45" />
          <div className="relative z-10 flex h-full items-end">
            <div className="container pb-20 text-[color:var(--cream)]">
              <p className="eyebrow text-[color:var(--sand)]">{t("farm.eyebrow")}</p>
              <h2 className="h2 mt-4 max-w-2xl">{t("farm.title")}</h2>
              <p className="mt-6 max-w-xl text-lg text-[color:var(--sand)]">
                {t("farm.body")}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="dining" className="section section-alt">
        <div className="container grid items-center gap-12 md:grid-cols-2">
          <div>
            <p className="eyebrow">{t("coffee.eyebrow")}</p>
            <h2 className="h2 mt-4">{t("coffee.title")}</h2>
            <p className="mt-6 text-[color:var(--muted)]">{t("coffee.body")}</p>
            <dl className="mt-10 grid grid-cols-2 gap-6">
              {siteContent.coffee.specs.map((spec) => (
                <div key={spec.label}>
                  <dt className="eyebrow">{spec.label}</dt>
                  <dd className="mt-2 font-[family-name:var(--font-mono)] text-sm">
                    {spec.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src={coffeeImg}
              alt="Hibiscus and plantation flora"
              fill
              sizes="(max-width:768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section id="stay" className="section">
        <div className="container mb-16">
          <p className="eyebrow">{t("stay.eyebrow")}</p>
          <h2 className="h2 mt-4">{t("stay.title")}</h2>
        </div>
        <div className="space-y-0">
          {siteContent.accommodations.map((unit, i) => (
            <article
              key={unit.slug}
              className="grid min-h-[100svh] md:grid-cols-2"
              style={{ ["--unit-accent" as string]: accentVar[unit.accent] }}
            >
              <div
                className={`relative min-h-[50vh] md:min-h-full ${
                  i % 2 === 1 ? "md:order-2" : ""
                }`}
              >
                <Image
                  src={stayImages[i] ?? img(i)}
                  alt={unit.name}
                  fill
                  sizes="(max-width:768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div
                className={`flex flex-col justify-center px-[var(--gutter)] py-16 ${
                  i % 2 === 1 ? "md:order-1" : ""
                }`}
              >
                <div className="mx-auto w-full max-w-lg">
                  <p
                    className="eyebrow"
                    style={{ color: "var(--unit-accent)" }}
                  >
                    {unit.capacity} · {unit.bedrooms}{" "}
                    {unit.bedrooms === 1 ? "bedroom" : "bedrooms"}
                  </p>
                  <h3 className="h2 mt-4">{unit.name}</h3>
                  <p className="mt-3 text-xl text-[color:var(--muted)]">
                    {unit.tagline}
                  </p>
                  <p className="mt-6 text-[color:var(--muted)]">{unit.summary}</p>
                  <Link
                    href={`/${locale}/stay/${unit.slug}`}
                    className="btn btn-ghost mt-8"
                  >
                    {t("stay.cta")}
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="experiences" className="section section-alt">
        <div className="container">
          <p className="eyebrow">{t("experiences.eyebrow")}</p>
          <h2 className="h2 mt-4 max-w-2xl">{t("experiences.title")}</h2>
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {siteContent.experiences.map((exp, i) => (
              <article
                key={exp.slug}
                className="group overflow-hidden border border-[color:var(--sand)] bg-[color:var(--surface)]"
              >
                <div className="relative aspect-[16/10]">
                  <Image
                    src={img((i + 3) % siteContent.accommodations.length + 4)}
                    alt={exp.title}
                    fill
                    sizes="(max-width:768px) 100vw, 50vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-8">
                  <h3 className="h3">{exp.title}</h3>
                  <p className="mt-4 text-[color:var(--muted)]">{exp.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid gap-12 md:grid-cols-[1fr_1.2fr] md:items-end">
          <div>
            <p className="eyebrow">{t("people.eyebrow")}</p>
            <h2 className="h2 mt-4">{t("people.title")}</h2>
          </div>
          <p className="text-lg text-[color:var(--muted)]">{t("people.body")}</p>
        </div>
      </section>

      <section className="section section-ink">
        <div className="container">
          <p className="eyebrow">{t("testimonials.eyebrow")}</p>
          <h2 className="h2 mt-4">{t("testimonials.title")}</h2>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {siteContent.testimonials.map((item) => (
              <blockquote
                key={item.name}
                className="border border-white/15 p-8"
              >
                <p className="text-lg leading-relaxed">“{item.quote}”</p>
                <footer className="mt-8">
                  <cite className="not-italic">
                    <span className="eyebrow text-[color:var(--sand)]">
                      {item.name}
                    </span>
                    <span className="mt-1 block text-sm text-[color:var(--sand)]">
                      {item.role}
                    </span>
                  </cite>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid gap-10 md:grid-cols-2">
          <div>
            <p className="eyebrow">{t("gettingHere.eyebrow")}</p>
            <h2 className="h2 mt-4">{t("gettingHere.title")}</h2>
          </div>
          <dl className="grid gap-6">
            {siteContent.gettingHere.points.map((p) => (
              <div
                key={p.label}
                className="flex items-baseline justify-between gap-6 border-b border-[color:var(--sand)] pb-4"
              >
                <dt className="eyebrow">{p.label}</dt>
                <dd className="text-right font-[family-name:var(--font-mono)] text-sm">
                  {p.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <p className="eyebrow">{t("gallery.eyebrow")}</p>
          <h2 className="h2 mt-4 mb-12">{t("gallery.title")}</h2>
          <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
            {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div
                key={i}
                className={`mb-4 break-inside-avoid overflow-hidden ${
                  i % 3 === 0 ? "aspect-[3/4]" : "aspect-[4/3]"
                }`}
              >
                <Image
                  src={img(i)}
                  alt=""
                  width={900}
                  height={i % 3 === 0 ? 1200 : 700}
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow">{t("booking.title")}</p>
          <h2 className="h2 mt-4 mb-8">{t("nav.book")}</h2>
          <BookingWidget locale={locale} />
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href={`/${locale}/book?intent=room`} className="btn btn-ghost">
              {t("booking.bookRoom")}
            </Link>
            <Link href={`/${locale}/book?intent=house`} className="btn btn-ghost">
              {t("booking.bookHouse")}
            </Link>
            <Link href={`/${locale}/book?intent=ledge`} className="btn btn-ghost">
              {t("booking.bookLedge")}
            </Link>
            <a
              href="mailto:elizabethcannva@gmail.com"
              className="btn btn-ink"
            >
              {t("booking.enquire")}
            </a>
          </div>
        </div>
      </section>

      <SisterProperty
        from="retreat"
        locale={locale}
        imageSrc={farmImg}
      />
    </>
  );
}
