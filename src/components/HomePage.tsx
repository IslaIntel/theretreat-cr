import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import {
  ClipReveal,
  Faq,
  Reveal,
  SisterProperty,
} from "@bluemountain/brand";
import { almanacCopy, terroirCopy } from "../lib/concept-copy";
import { chinampasFaqGroups } from "../lib/chinampas-faq";
import { HC_EMAIL, HC_PHONE, HC_PHONE_TEL } from "../lib/chinampas-contact";
import { img, imgByFile, siteContent } from "../lib/content";
import { ChinampasAvailability } from "./ChinampasAvailability";

const villaBed: Record<string, { wash: string; accent: string }> = {
  ledge: { wash: "color-mix(in srgb, var(--accent-ledge) 12%, var(--cream))", accent: "var(--accent-ledge)" },
  "retreat-house": {
    wash: "color-mix(in srgb, var(--accent-retreat-house) 12%, var(--cream))",
    accent: "var(--accent-retreat-house)",
  },
  "mountain-house": {
    wash: "color-mix(in srgb, var(--accent-mountain-house) 10%, var(--cream))",
    accent: "var(--accent-mountain-house)",
  },
  coffee: { wash: "color-mix(in srgb, var(--coffee) 10%, var(--cream))", accent: "var(--coffee)" },
};

const introSlides = [
  { main: "Wine-sunset", corner: "Retreat-527", slug: "villa-1" },
  { main: "Retreat-top-lot", corner: "TheRetreat.47", slug: "villa-3" },
  { main: "Retreat.16", corner: "Retreat.22", slug: "villa-4" },
  { main: "Hibiscus", corner: "Retreat.30", slug: "villa-5" },
];

const villaCollage: Record<string, [string, string]> = {
  "villa-1": ["Retreat-527", "Retreat.22"],
  "villa-2": ["Retreat-top-lot", "Retreat.1"],
  "villa-3": ["TheRetreat.47", "Retreat.30"],
  "villa-4": ["Retreat.16", "Retreat.40"],
  "villa-5": ["Hibiscus", "Retreat.21"],
};

export function HomePage({ locale }: { locale: "en" | "es" }) {
  const t = useTranslations();
  const th = useTranslations("home");
  const tc = terroirCopy[locale];
  const correspondence = almanacCopy[locale].correspondence;
  const faq = chinampasFaqGroups(locale);
  const farmImg = imgByFile("Retreat-top-lot", img(1));
  const helena = siteContent.testimonials.find((x) => x.name === "Helena");

  return (
    <>
      <section className="relative min-h-[100svh] overflow-hidden bg-[color:var(--ink)] text-[color:var(--cream)]">
        <Image
          src={imgByFile("Wine-sunset", img(0))}
          alt="Evening light over the gardens and hills at Hacienda Chinampas"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--ink)]/80 via-[color:var(--ink)]/30 to-[color:var(--ink)]/40" />
        <div className="relative z-10 flex min-h-[100svh] flex-col justify-end px-[var(--gutter)] pb-16 pt-28">
          <div className="container">
            <p className="eyebrow text-[color:var(--sand)]">{t("hero.eyebrow")}</p>
            <Reveal as="h1" className="display mt-4 max-w-4xl">
              {th("heroTitle")}
            </Reveal>
            <p className="mt-6 max-w-xl text-lg text-[color:var(--sand)]">
              {th("heroSub")}
            </p>
            <dl className="mt-10 grid max-w-lg grid-cols-2 gap-6 sm:grid-cols-4">
              {[
                { label: th("statAcres"), value: "20" },
                { label: th("statVillas"), value: "5" },
                { label: th("statSamara"), value: "15 min" },
                { label: th("statBlueZone"), value: th("statBlueZoneVal") },
              ].map((stat) => (
                <div key={stat.label}>
                  <dt className="eyebrow text-[color:var(--sand)]">{stat.label}</dt>
                  <dd className="mt-2 font-[family-name:var(--font-mono)] text-2xl">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container max-w-3xl">
          <p className="eyebrow">{t("booking.title")}</p>
          <h2 className="h2 mt-4">{t("nav.book")}</h2>
          <ChinampasAvailability locale={locale} showEnquireRow />
        </div>
      </section>

      <section id="intro" className="section">
        <div className="container max-w-3xl text-center">
          <Reveal as="h2" className="h2">
            {th("introTitle")}
          </Reveal>
          <p className="mt-6 text-lg text-[color:var(--muted)]">{th("introBody")}</p>
        </div>
        <div className="container mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {introSlides.map((slide) => {
            const unit = siteContent.accommodations.find((a) => a.slug === slide.slug);
            return (
              <div key={slide.slug} className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={imgByFile(slide.main, img(0))}
                  alt=""
                  fill
                  sizes="(max-width:768px) 50vw, 25vw"
                  className="object-cover"
                />
                {unit && (
                  <div className="absolute bottom-3 right-3 h-[28%] w-[38%] overflow-hidden border-2 border-white/80 shadow-lg">
                    <Image
                      src={imgByFile(slide.corner, img(1))}
                      alt={unit.name}
                      fill
                      sizes="120px"
                      className="object-cover"
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      <section id="grounds" className="section section-ink text-[color:var(--cream)]">
        <div className="container">
          <p className="eyebrow text-[color:var(--sand)]">{th("groundsEyebrow")}</p>
          <h2 className="h2 mt-4 max-w-2xl">{th("groundsTitle")}</h2>
          <div className="mt-14 grid gap-10 md:grid-cols-2">
            {[
              {
                title: th("groundsVillageTitle"),
                body: th("groundsVillageBody"),
              },
              {
                title: th("groundsChinampasTitle"),
                body: th("groundsChinampasBody"),
              },
              {
                title: th("groundsTableTitle"),
                body: th("groundsTableBody"),
              },
              {
                title: th("groundsTravelerTitle"),
                body: th("groundsTravelerBody"),
              },
            ].map((block, blockIndex) => (
              <article
                key={block.title}
                className="border border-white/15 p-8 md:p-10"
              >
                <h3 className="h3">{block.title}</h3>
                <p className="mt-5 leading-relaxed text-[color:var(--sand)]">
                  {blockIndex === 3
                    ? th.rich("groundsTravelerBody", {
                        em: (chunks) => <em className="italic">{chunks}</em>,
                      })
                    : block.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="experiences" className="section section-alt">
        <div className="container">
          <p className="eyebrow">{tc.experiences.eyebrow}</p>
          <h2 className="h2 mt-4 max-w-2xl">{tc.experiences.title}</h2>
          <p className="mt-4 max-w-2xl text-[color:var(--muted)]">{th("experiencesNote")}</p>
        </div>
        <div className="mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto px-[var(--gutter)] pb-4">
          {siteContent.experiences.map((exp, i) => (
            <article
              key={exp.slug}
              className="w-[80vw] shrink-0 snap-start overflow-hidden border border-[color:var(--sand)] bg-[color:var(--surface)] sm:w-[52vw] lg:w-[30vw]"
            >
              <div className="relative aspect-[16/11]">
                <Image
                  src={img((i + 3) % 9)}
                  alt={exp.title}
                  fill
                  sizes="(max-width: 640px) 80vw, 30vw"
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="h3">{exp.title}</h3>
                <p className="mt-4 text-[color:var(--muted)]">{exp.body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="villas" className="section">
        <div className="container mb-12">
          <p className="eyebrow">{tc.villas.eyebrow}</p>
          <h2 className="h2 mt-4">{th("villasTitle")}</h2>
        </div>
        {siteContent.accommodations.map((unit, i) => {
          const bed = villaBed[unit.accent] ?? villaBed.ledge;
          const pair = villaCollage[unit.slug] ?? ["TheRetreat.47", "Retreat.16"];
          return (
            <article
              key={unit.slug}
              className="border-t border-[color:var(--sand)] py-14"
              style={{ background: bed.wash }}
            >
              <div className="container grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <p
                    className="font-[family-name:var(--font-mono)] text-sm opacity-60"
                    style={{ color: bed.accent }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="h2 mt-2">{unit.name}</h3>
                  <p className="mt-3 text-xl text-[color:var(--muted)]">{unit.tagline}</p>
                  {!("comingSoon" in unit && unit.comingSoon) && (
                    <p className="mt-2 text-sm text-[color:var(--muted)]">
                      {unit.capacity}
                      {unit.bedrooms ? ` · ${unit.bedrooms} ${unit.bedrooms === 1 ? "bedroom" : "bedrooms"}` : ""}
                    </p>
                  )}
                  <p className="mt-6 max-w-lg text-[color:var(--muted)]">{unit.summary}</p>
                  {!("comingSoon" in unit && unit.comingSoon) && (
                    <Link
                      href={`/${locale}/stay/${unit.slug}`}
                      className="btn btn-ghost mt-8"
                      style={{ borderColor: bed.accent, color: bed.accent }}
                    >
                      {t("stay.cta")}
                    </Link>
                  )}
                </div>
                <div className={`relative ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                  <ClipReveal
                    from={i % 2 === 1 ? "right" : "left"}
                    className="relative aspect-[4/3] w-[88%]"
                  >
                    <Image
                      src={imgByFile(pair[0], img(2))}
                      alt={unit.name}
                      fill
                      sizes="(max-width: 1024px) 100vw, 45vw"
                      className="object-cover"
                    />
                  </ClipReveal>
                  <ClipReveal
                    from="up"
                    delay={0.12}
                    className="relative -mt-[20%] ml-auto aspect-square w-[42%] border-4 border-[color:var(--cream)]"
                  >
                    <Image
                      src={imgByFile(pair[1], img(4))}
                      alt=""
                      fill
                      sizes="20vw"
                      className="object-cover"
                    />
                  </ClipReveal>
                </div>
              </div>
            </article>
          );
        })}
      </section>

      {helena && (
        <section id="reviews" className="section section-alt">
          <div className="container max-w-3xl text-center">
            <blockquote className="text-[clamp(1.35rem,2.5vw,1.85rem)] leading-relaxed">
              “{helena.quote}”
            </blockquote>
            <footer className="mt-8">
              <cite className="not-italic">
                <span className="eyebrow">{helena.name}</span>
                <span className="mt-1 block text-sm text-[color:var(--muted)]">
                  {helena.role}
                </span>
              </cite>
            </footer>
            <a
              href="https://www.google.com/travel/hotels"
              className="mt-8 inline-block text-sm underline decoration-[color:var(--sand)] underline-offset-4"
              rel="noreferrer"
              target="_blank"
            >
              {th("readMoreReviews")}
            </a>
          </div>
        </section>
      )}

      <section className="section">
        <div className="container space-y-20">
          {(
            [
              ["quick", faq.quickAnswers],
              ["before", faq.beforeMountain],
              ["practical", faq.practical],
              ["casa", faq.casa],
              ["almanac", faq.almanac],
            ] as const
          ).map(([key, group]) => (
            <div key={key} id={key === "almanac" ? "faq" : undefined}>
              <p className="eyebrow">{group.eyebrow}</p>
              <h2 className="h2 mt-4 max-w-xl">{group.title}</h2>
              <Faq
                items={group.items}
                openFirst={false}
                className="mt-10 border-t border-[color:var(--sand)]"
                itemClassName="border-b border-[color:var(--sand)]"
                questionClassName="py-5 text-lg"
                answerClassName="max-w-2xl pb-6 text-[color:var(--muted)]"
              />
            </div>
          ))}
        </div>
      </section>

      <section id="correspondence" className="section section-alt">
        <div className="container max-w-3xl">
          <p className="eyebrow">{correspondence.eyebrow}</p>
          <h2 className="h2 mt-4">{correspondence.title}</h2>
          <p className="mt-6 text-lg text-[color:var(--muted)]">{correspondence.body}</p>
          <ChinampasAvailability locale={locale} />
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href={`/${locale}/book`} className="btn btn-primary">
              {t("booking.enquire")}
            </Link>
            <a href={`mailto:${HC_EMAIL}`} className="btn btn-ink">
              {correspondence.ctaEnquire}
            </a>
          </div>
          <ul className="mt-10 space-y-2 text-sm text-[color:var(--muted)]">
            <li>
              <a href={`tel:${HC_PHONE_TEL}`} className="underline underline-offset-4">
                {HC_PHONE}
              </a>
            </li>
            <li>
              <a href={`mailto:${HC_EMAIL}`} className="underline underline-offset-4">
                {HC_EMAIL}
              </a>
            </li>
          </ul>
        </div>
      </section>

      <SisterProperty from="retreat" locale={locale} imageSrc={farmImg} />
    </>
  );
}
