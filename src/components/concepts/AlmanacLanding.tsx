"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ClipReveal,
  CountUp,
  Faq,
  SplitText,
  StaggerGroup,
} from "@bluemountain/brand";
import { BookingWidget } from "../BookingWidget";
import { ConceptLocale } from "./ConceptLocale";
import { img, imgByFile, siteContent } from "../../lib/content";
import { almanacCopy } from "../../lib/concept-copy";
import { FARMS_URL } from "../../lib/seo";

/**
 * Direction B — Almanac.
 *
 * Design principle: data over drama. Paper ground, hairline rules, a real
 * comparison table and a twelve-month dial. Motion is limited to rules drawing
 * and figures counting — nothing parallaxes, because the argument here is
 * competence, and spectacle would undercut it.
 */

const INK = "#1c2422";
const RULE = "#d8d0c0";
const FOREST = "#4a5a34";
const COFFEE = "#6b4a32";
const OCHRE = "#a97a33";

const ENTRY_ACCENT: Record<string, string> = {
  ledge: "#4d7a82",
  "retreat-house": COFFEE,
  "mountain-house": FOREST,
};

export function AlmanacLanding({ locale }: { locale: "en" | "es" }) {
  const c = almanacCopy[locale];
  /* The page is prerendered, so the current month cannot come from the initial
     render: the server's clock would be baked into the HTML and would disagree
     with the visitor's. Open on January and jump to today's month on mount. */
  const [month, setMonth] = useState(0);
  const [activeRow, setActiveRow] = useState<string | null>(null);

  useEffect(() => {
    setMonth(new Date().getMonth());
  }, []);

  const plate = imgByFile("Retreat-top-lot", img(1));
  const entryImages = [
    imgByFile("Retreat-527", img(2)),
    imgByFile("TheRetreat.47", img(1)),
    imgByFile("Retreat.16", img(4)),
  ];
  const rowThumb: Record<string, string> = {
    "the-ledge-villa": entryImages[0],
    "the-retreat-house": entryImages[1],
    "mountain-house": entryImages[2],
  };
  const selected = c.season.months[month];

  return (
    <div
      className="bg-[#f7f4ec] text-[#1c2422] [font-family:var(--font-newsreader),Georgia,serif]"
      style={{ ["--rule" as string]: RULE }}
    >
      {/* ---------------------------------------------------------- nav ---- */}
      <header className="sticky top-0 z-[70] border-b border-[color:var(--rule)] bg-[#f7f4ec]/95 backdrop-blur">
        <div className="mx-auto flex h-14 w-full max-w-[1360px] items-center justify-between gap-6 px-5 lg:px-8">
          <Link href={`/${locale}`} className="text-lg tracking-tight">
            The Retreat
            <span className="ml-2 text-[0.58rem] tracking-[0.2em] uppercase opacity-45 [font-family:var(--font-jetbrains),monospace]">
              {c.masthead.volume}
            </span>
          </Link>
          <nav
            className="hidden items-center gap-6 text-[0.6rem] tracking-[0.16em] uppercase lg:flex [font-family:var(--font-jetbrains),monospace]"
            aria-label={c.nav.index}
          >
            <a href="#numbers" className="opacity-60 hover:opacity-100">{c.nav.numbers}</a>
            <a href="#index" className="opacity-60 hover:opacity-100">{c.nav.index}</a>
            <a href="#season" className="opacity-60 hover:opacity-100">{c.nav.season}</a>
            <a href="#coffee" className="opacity-60 hover:opacity-100">{c.nav.coffee}</a>
            <a href="#route" className="opacity-60 hover:opacity-100">{c.nav.route}</a>
          </nav>
          <div className="flex items-center gap-5">
            <ConceptLocale
              locale={locale}
              className="text-[0.6rem] tracking-[0.14em] uppercase [font-family:var(--font-jetbrains),monospace]"
              idleClassName="opacity-40"
            />
            <a
              href="#correspondence"
              className="border border-[#1c2422] px-4 py-2 text-[0.6rem] tracking-[0.16em] uppercase transition hover:bg-[#1c2422] hover:text-[#f7f4ec] [font-family:var(--font-jetbrains),monospace]"
            >
              {c.nav.book}
            </a>
          </div>
        </div>
      </header>

      {/* ----------------------------------------------------- masthead ---- */}
      <section className="border-b border-[color:var(--rule)] px-5 pt-14 pb-0 lg:px-8">
        <div className="mx-auto max-w-[1360px]">
          <div className="flex flex-wrap items-baseline justify-between gap-3 border-b border-[color:var(--rule)] pb-3 text-[0.6rem] tracking-[0.18em] uppercase [font-family:var(--font-jetbrains),monospace]">
            <span>{c.masthead.eyebrow}</span>
            <span className="opacity-55">{c.masthead.dateline}</span>
          </div>

          <div className="grid gap-10 py-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
            <div>
              <SplitText
                as="h1"
                mode="line"
                wrapAt={24}
                immediate
                rise={1.08}
                className="text-[clamp(2.4rem,5.6vw,4.6rem)] leading-[1.02] font-normal tracking-[-0.015em]"
              >
                {c.masthead.title}
              </SplitText>
              <p className="mt-8 max-w-xl text-[1.08rem] leading-[1.75] text-[#1c2422]/75">
                {c.masthead.standfirst}
              </p>
              <dl className="mt-10 grid grid-cols-2 gap-x-8 gap-y-5 border-t border-[color:var(--rule)] pt-6 sm:grid-cols-4">
                {c.masthead.facts.map((fact) => (
                  <div key={fact.label}>
                    <dt className="text-[0.58rem] tracking-[0.16em] uppercase opacity-50 [font-family:var(--font-jetbrains),monospace]">
                      {fact.label}
                    </dt>
                    <dd className="mt-1.5 text-sm">{fact.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <figure>
              <ClipReveal className="relative aspect-[4/5]">
                <Image
                  src={plate}
                  alt="First light across the top lot at Blue Mountain Farms, Chinampas, Guanacaste"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </ClipReveal>
              <figcaption className="mt-3 border-t border-[color:var(--rule)] pt-2 text-[0.62rem] tracking-[0.1em] uppercase opacity-50 [font-family:var(--font-jetbrains),monospace]">
                {c.masthead.plate}
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* --------------------------------------------- one · the numbers ---- */}
      <section id="numbers" className="border-b border-[color:var(--rule)] px-5 py-16 lg:px-8">
        <div className="mx-auto max-w-[1360px]">
          <SectionHead eyebrow={c.numbers.eyebrow} title={c.numbers.title} note={c.numbers.note} />
          <StaggerGroup className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {c.numbers.stats.map((stat) => (
              <div key={stat.label} className="border-t-2 border-[#1c2422] pt-5">
                <p className="text-[clamp(2.6rem,4.6vw,3.8rem)] leading-none">
                  <CountUp
                    to={stat.value}
                    suffix={stat.suffix}
                    locale={locale === "es" ? "es-CR" : "en-US"}
                  />
                </p>
                <p className="mt-3 text-[0.62rem] tracking-[0.14em] uppercase [font-family:var(--font-jetbrains),monospace]">
                  {stat.label}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-[#1c2422]/60">{stat.detail}</p>
              </div>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* ------------------------------------------ two · the villa index ---- */}
      <section id="index" className="border-b border-[color:var(--rule)] px-5 py-16 lg:px-8">
        <div className="mx-auto max-w-[1360px]">
          <SectionHead eyebrow={c.index.eyebrow} title={c.index.title} note={c.index.note} />

          <div className="mt-12 grid gap-10 lg:grid-cols-[1.55fr_0.45fr]">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[36rem] border-collapse text-left">
                <caption className="sr-only">{c.index.title}</caption>
                <thead>
                  <tr className="border-y-2 border-[#1c2422] text-[0.58rem] tracking-[0.16em] uppercase [font-family:var(--font-jetbrains),monospace]">
                    <th scope="col" className="py-3 pr-4 font-medium">{c.index.columns.name}</th>
                    <th scope="col" className="py-3 pr-4 font-medium">{c.index.columns.capacity}</th>
                    <th scope="col" className="py-3 pr-4 font-medium">{c.index.columns.bedrooms}</th>
                    <th scope="col" className="py-3 pr-4 font-medium">{c.index.columns.best}</th>
                    <th scope="col" className="py-3 font-medium">{c.index.columns.link}</th>
                  </tr>
                </thead>
                <StaggerGroup as="tbody" select="tr" y={14}>
                  {siteContent.accommodations.map((unit) => (
                    <tr
                      key={unit.slug}
                      onMouseEnter={() => setActiveRow(unit.slug)}
                      onFocus={() => setActiveRow(unit.slug)}
                      className="border-b border-[color:var(--rule)] align-top transition-colors hover:bg-[#efe9dc]"
                    >
                      <th scope="row" className="py-5 pr-4 text-left font-normal">
                        <span
                          aria-hidden
                          className="mr-3 inline-block h-2 w-2 align-middle"
                          style={{ background: ENTRY_ACCENT[unit.accent] }}
                        />
                        <span className="text-lg">{unit.name}</span>
                        <span className="mt-1 block max-w-[24ch] text-sm text-[#1c2422]/55">
                          {unit.tagline}
                        </span>
                      </th>
                      <td className="py-5 pr-4 text-sm [font-family:var(--font-jetbrains),monospace]">
                        {unit.capacity}
                      </td>
                      <td className="py-5 pr-4 text-sm [font-family:var(--font-jetbrains),monospace]">
                        {unit.bedrooms}
                      </td>
                      <td className="py-5 pr-4 text-sm text-[#1c2422]/70">
                        {c.index.best[unit.slug as keyof typeof c.index.best]}
                      </td>
                      <td className="py-5">
                        <Link
                          href={`/${locale}/stay/${unit.slug}`}
                          className="border-b border-[#1c2422]/40 pb-0.5 text-[0.62rem] tracking-[0.14em] uppercase transition hover:border-[#1c2422] [font-family:var(--font-jetbrains),monospace]"
                        >
                          {c.index.view}
                        </Link>
                      </td>
                    </tr>
                  ))}
                </StaggerGroup>
              </table>
            </div>

            {/* Marginalia: the hovered row's plate. */}
            <aside className="hidden lg:block">
              <div className="relative aspect-[3/4] overflow-hidden border border-[color:var(--rule)] bg-[#efe9dc]">
                {siteContent.accommodations.map((unit) => (
                  <Image
                    key={unit.slug}
                    src={rowThumb[unit.slug]}
                    alt={unit.name}
                    fill
                    sizes="20vw"
                    className={`object-cover transition-opacity duration-500 ${
                      (activeRow ?? siteContent.accommodations[0].slug) === unit.slug
                        ? "opacity-100"
                        : "opacity-0"
                    }`}
                  />
                ))}
              </div>
              <p className="mt-3 border-t border-[color:var(--rule)] pt-2 text-[0.58rem] tracking-[0.12em] uppercase opacity-50 [font-family:var(--font-jetbrains),monospace]">
                {activeRow
                  ? siteContent.accommodations.find((u) => u.slug === activeRow)?.name
                  : siteContent.accommodations[0].name}
              </p>
            </aside>
          </div>
        </div>
      </section>

      {/* ------------------------------------------ three · the residences ---- */}
      <section className="border-b border-[color:var(--rule)] px-5 py-16 lg:px-8">
        <div className="mx-auto max-w-[1360px]">
          <SectionHead eyebrow={c.entries.eyebrow} title={c.entries.title} />

          <div className="mt-14 space-y-16">
            {siteContent.accommodations.map((unit, i) => {
              const accent = ENTRY_ACCENT[unit.accent] ?? OCHRE;
              return (
                <article
                  key={unit.slug}
                  className="grid gap-8 border-t-2 border-[#1c2422] pt-8 lg:grid-cols-[0.42fr_0.58fr] lg:gap-12"
                >
                  <figure className={i % 2 === 1 ? "lg:order-2" : ""}>
                    <ClipReveal
                      from={i % 2 === 1 ? "right" : "left"}
                      className="relative aspect-[4/3]"
                    >
                      <Image
                        src={entryImages[i] ?? img(i)}
                        alt={`${unit.name} at The Retreat at Blue Mountain Farms — ${unit.tagline}`}
                        fill
                        sizes="(max-width: 1024px) 100vw, 42vw"
                        className="object-cover"
                      />
                    </ClipReveal>
                    <figcaption className="mt-3 border-t border-[color:var(--rule)] pt-2 text-[0.58rem] tracking-[0.12em] uppercase opacity-50 [font-family:var(--font-jetbrains),monospace]">
                      {c.entries.plateLabel} {["II", "III", "IV"][i]} — {unit.name}
                    </figcaption>
                  </figure>

                  <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                    <p
                      className="text-[0.6rem] tracking-[0.18em] uppercase [font-family:var(--font-jetbrains),monospace]"
                      style={{ color: accent }}
                    >
                      {String(i + 1).padStart(2, "0")} · {unit.capacity} ·{" "}
                      {unit.bedrooms}{" "}
                      {locale === "es"
                        ? unit.bedrooms === 1
                          ? "habitación"
                          : "habitaciones"
                        : unit.bedrooms === 1
                          ? "bedroom"
                          : "bedrooms"}
                    </p>
                    <h3 className="mt-3 text-[clamp(1.7rem,3.2vw,2.6rem)] leading-[1.05]">
                      {unit.name}
                    </h3>
                    <p className="mt-4 max-w-xl leading-[1.75] text-[#1c2422]/75">
                      {unit.summary}
                    </p>

                    <p className="mt-8 text-[0.58rem] tracking-[0.16em] uppercase opacity-50 [font-family:var(--font-jetbrains),monospace]">
                      {c.entries.amenitiesLabel}
                    </p>
                    <ul className="mt-3 grid gap-x-8 sm:grid-cols-2">
                      {unit.amenities.map((amenity) => (
                        <li
                          key={amenity}
                          className="flex gap-3 border-b border-[color:var(--rule)] py-2.5 text-sm"
                        >
                          <span aria-hidden style={{ color: accent }}>
                            —
                          </span>
                          {amenity}
                        </li>
                      ))}
                    </ul>

                    <Link
                      href={`/${locale}/stay/${unit.slug}`}
                      className="mt-8 inline-block border-b-2 pb-1 text-[0.62rem] tracking-[0.16em] uppercase [font-family:var(--font-jetbrains),monospace]"
                      style={{ borderColor: accent }}
                    >
                      {c.entries.cta}
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ------------------------------------------- four · the growing year ---- */}
      <section id="season" className="border-b border-[color:var(--rule)] bg-[#efe9dc] px-5 py-16 lg:px-8">
        <div className="mx-auto max-w-[1360px]">
          <SectionHead eyebrow={c.season.eyebrow} title={c.season.title} note={c.season.note} />

          <div className="mt-12 grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <MonthDial
              months={c.season.months.map((m) => m.month)}
              value={month}
              onChange={setMonth}
            />

            <div className="border-t-2 border-[#1c2422] pt-6">
              <p className="text-[0.6rem] tracking-[0.18em] uppercase opacity-50 [font-family:var(--font-jetbrains),monospace]">
                {selected.month}
              </p>
              <dl className="mt-6 space-y-7">
                <div>
                  <dt
                    className="text-[0.58rem] tracking-[0.16em] uppercase [font-family:var(--font-jetbrains),monospace]"
                    style={{ color: FOREST }}
                  >
                    {c.season.growingLabel}
                  </dt>
                  <dd className="mt-2 text-[clamp(1.2rem,2.2vw,1.7rem)] leading-[1.35]">
                    {selected.growing}
                  </dd>
                </div>
                <div className="border-t border-[color:var(--rule)] pt-6">
                  <dt
                    className="text-[0.58rem] tracking-[0.16em] uppercase [font-family:var(--font-jetbrains),monospace]"
                    style={{ color: COFFEE }}
                  >
                    {c.season.propertyLabel}
                  </dt>
                  <dd className="mt-2 leading-[1.7] text-[#1c2422]/75">
                    {selected.onProperty}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------- five · coffee ---- */}
      <section id="coffee" className="border-b border-[color:var(--rule)] px-5 py-16 lg:px-8">
        <div className="mx-auto max-w-[1360px]">
          <SectionHead eyebrow={c.coffee.eyebrow} title={c.coffee.title} />
          <StaggerGroup as="ol" className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {c.coffee.steps.map((step) => (
              <li key={step.step} className="border-t-2 border-[#1c2422] pt-5">
                <p
                  className="text-[0.62rem] tracking-[0.18em] [font-family:var(--font-jetbrains),monospace]"
                  style={{ color: COFFEE }}
                >
                  {step.step}
                </p>
                <h3 className="mt-3 text-[1.35rem] leading-tight">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#1c2422]/70">{step.body}</p>
              </li>
            ))}
          </StaggerGroup>

          <dl className="mt-14 grid gap-x-10 gap-y-6 border-t border-[color:var(--rule)] pt-8 sm:grid-cols-2 lg:grid-cols-4">
            {siteContent.coffee.specs.map((spec) => (
              <div key={spec.label}>
                <dt className="text-[0.58rem] tracking-[0.16em] uppercase opacity-50 [font-family:var(--font-jetbrains),monospace]">
                  {spec.label}
                </dt>
                <dd className="mt-1.5 text-sm">{spec.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ------------------------------------------- six · the guest ledger ---- */}
      <section className="border-b border-[color:var(--rule)] px-5 py-16 lg:px-8">
        <div className="mx-auto max-w-[1360px]">
          <SectionHead eyebrow={c.ledger.eyebrow} title={c.ledger.title} note={c.ledger.note} />
          <StaggerGroup className="mt-12 divide-y divide-[color:var(--rule)] border-y border-[color:var(--rule)]">
            {siteContent.testimonials.map((item, i) => (
              <figure key={item.name} className="grid gap-6 py-8 lg:grid-cols-[7rem_1fr]">
                <figcaption className="text-[0.6rem] tracking-[0.14em] uppercase [font-family:var(--font-jetbrains),monospace]">
                  <span className="block opacity-45">
                    {String(i + 1).padStart(3, "0")}
                  </span>
                  <span className="mt-2 block">{item.name}</span>
                  <span className="mt-1 block opacity-55">{item.role}</span>
                </figcaption>
                <blockquote className="max-w-3xl text-[clamp(1.05rem,1.9vw,1.35rem)] leading-[1.6] italic">
                  “{item.quote}”
                </blockquote>
              </figure>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* -------------------------------------------- seven · getting here ---- */}
      <section id="route" className="border-b border-[color:var(--rule)] bg-[#efe9dc] px-5 py-16 lg:px-8">
        <div className="mx-auto max-w-[1360px]">
          <SectionHead eyebrow={c.route.eyebrow} title={c.route.title} note={c.route.note} />
          <div className="mt-12 overflow-x-auto">
            <table className="w-full min-w-[24rem] border-collapse text-left">
              <caption className="sr-only">{c.route.title}</caption>
              <thead>
                <tr className="border-y-2 border-[#1c2422] text-[0.58rem] tracking-[0.16em] uppercase [font-family:var(--font-jetbrains),monospace]">
                  <th scope="col" className="py-3 pr-4 font-medium">{c.route.columns.from}</th>
                  <th scope="col" className="py-3 font-medium">{c.route.columns.time}</th>
                </tr>
              </thead>
              <StaggerGroup as="tbody" select="tr" y={12}>
                {siteContent.gettingHere.points.map((point) => (
                  <tr key={point.label} className="border-b border-[color:var(--rule)]">
                    <th scope="row" className="py-4 pr-4 text-left font-normal">
                      {point.label}
                    </th>
                    <td className="py-4 text-sm [font-family:var(--font-jetbrains),monospace]">
                      {point.value}
                    </td>
                  </tr>
                ))}
              </StaggerGroup>
            </table>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------- eight · faq ---- */}
      <section className="border-b border-[color:var(--rule)] px-5 py-16 lg:px-8">
        <div className="mx-auto grid max-w-[1360px] gap-12 lg:grid-cols-[0.7fr_1.3fr]">
          <SectionHead eyebrow={c.faq.eyebrow} title={c.faq.title} />
          <Faq
            items={c.faq.items}
            className="border-t-2 border-[#1c2422]"
            itemClassName="border-b border-[color:var(--rule)]"
            questionClassName="py-6 text-[clamp(1.05rem,1.8vw,1.3rem)] leading-snug"
            answerClassName="max-w-2xl pb-7 leading-[1.75] text-[#1c2422]/70"
          />
        </div>
      </section>

      {/* --------------------------------------- nine · correspondence ---- */}
      <section id="correspondence" className="border-b border-[color:var(--rule)] px-5 py-16 lg:px-8">
        <div className="mx-auto max-w-[1360px]">
          <SectionHead eyebrow={c.correspondence.eyebrow} title={c.correspondence.title} />
          <p className="mt-6 max-w-xl leading-[1.75] text-[#1c2422]/75">
            {c.correspondence.body}
          </p>
          <div className="mt-10 border-t-2 border-[#1c2422] pt-8">
            <BookingWidget locale={locale} variant="inline" />
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={`/${locale}/book`}
              className="bg-[#1c2422] px-6 py-3.5 text-[0.62rem] tracking-[0.16em] text-[#f7f4ec] uppercase [font-family:var(--font-jetbrains),monospace]"
            >
              {c.nav.book}
            </Link>
            <a
              href="mailto:elizabethcannva@gmail.com"
              className="border border-[#1c2422] px-6 py-3.5 text-[0.62rem] tracking-[0.16em] uppercase transition hover:bg-[#1c2422] hover:text-[#f7f4ec] [font-family:var(--font-jetbrains),monospace]"
            >
              {c.correspondence.ctaEnquire}
            </a>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- colophon ---- */}
      <footer className="px-5 py-12 lg:px-8">
        <div className="mx-auto max-w-[1360px]">
          <div className="grid gap-8 border-t-2 border-[#1c2422] pt-8 md:grid-cols-3">
            <div>
              <p className="text-[0.58rem] tracking-[0.16em] uppercase opacity-50 [font-family:var(--font-jetbrains),monospace]">
                {locale === "es" ? "Propiedad hermana" : "Sister property"}
              </p>
              <a href={FARMS_URL} className="mt-2 block text-lg underline decoration-[color:var(--rule)] underline-offset-4">
                Blue Mountain Farms
              </a>
            </div>
            <p className="text-sm text-[#1c2422]/60">{c.colophon.tagline}</p>
            <p className="text-[0.58rem] tracking-[0.14em] uppercase opacity-50 md:text-right [font-family:var(--font-jetbrains),monospace]">
              {c.colophon.set}
              <span className="mt-1 block">{c.colophon.concept}</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function SectionHead({
  eyebrow,
  title,
  note,
}: {
  eyebrow: string;
  title: string;
  note?: string;
}) {
  return (
    <div>
      <p className="text-[0.58rem] tracking-[0.2em] uppercase opacity-50 [font-family:var(--font-jetbrains),monospace]">
        {eyebrow}
      </p>
      <h2 className="mt-3 max-w-[22ch] text-[clamp(1.8rem,3.4vw,2.9rem)] leading-[1.06]">
        {title}
      </h2>
      {note ? (
        <p className="mt-4 max-w-md text-sm leading-relaxed text-[#1c2422]/60">{note}</p>
      ) : null}
    </div>
  );
}

/** Twelve-month dial. The pointer rotates to whichever month is selected. */
function MonthDial({
  months,
  value,
  onChange,
}: {
  months: readonly string[];
  value: number;
  onChange: (index: number) => void;
}) {
  const size = 360;
  const centre = size / 2;
  const radius = 138;

  return (
    <div className="relative mx-auto w-full max-w-[360px]">
      <svg
        viewBox={`0 0 ${size} ${size}`}
        className="h-auto w-full"
        role="group"
        aria-label="Growing year dial"
      >
        <circle cx={centre} cy={centre} r={radius} fill="none" stroke={RULE} strokeWidth="1" />
        <circle cx={centre} cy={centre} r={radius - 26} fill="none" stroke={RULE} strokeWidth="1" />

        {/* Pointer to the selected month. */}
        <line
          x1={centre}
          y1={centre}
          x2={centre}
          y2={centre - radius + 30}
          stroke={INK}
          strokeWidth="1.5"
          transform={`rotate(${value * 30} ${centre} ${centre})`}
          style={{ transition: "transform 600ms cubic-bezier(0.16,1,0.3,1)" }}
        />
        <circle cx={centre} cy={centre} r="4" fill={INK} />

        {months.map((label, i) => {
          const angle = ((i * 30 - 90) * Math.PI) / 180;
          const x = centre + Math.cos(angle) * radius;
          const y = centre + Math.sin(angle) * radius;
          const active = i === value;
          return (
            <g key={label}>
              <circle
                cx={x}
                cy={y}
                r={active ? 15 : 12}
                fill={active ? INK : "#f7f4ec"}
                stroke={active ? INK : RULE}
                style={{ transition: "all 300ms ease" }}
              />
              <text
                x={x}
                y={y + 3.5}
                textAnchor="middle"
                fontSize="10"
                fill={active ? "#f7f4ec" : INK}
                style={{ fontFamily: "var(--font-jetbrains), monospace", letterSpacing: "0.02em" }}
              >
                {String(i + 1).padStart(2, "0")}
              </text>
            </g>
          );
        })}
      </svg>

      {/* Real buttons carry the interaction; the SVG is the visual. */}
      <div className="mt-8 grid grid-cols-3 gap-2 sm:grid-cols-4">
        {months.map((label, i) => (
          <button
            key={label}
            type="button"
            onClick={() => onChange(i)}
            aria-pressed={i === value}
            className={`border px-2 py-2 text-[0.6rem] tracking-[0.1em] uppercase transition [font-family:var(--font-jetbrains),monospace] ${
              i === value
                ? "border-[#1c2422] bg-[#1c2422] text-[#f7f4ec]"
                : "border-[color:var(--rule)] hover:border-[#1c2422]"
            }`}
          >
            {label.slice(0, 3)}
          </button>
        ))}
      </div>
    </div>
  );
}
