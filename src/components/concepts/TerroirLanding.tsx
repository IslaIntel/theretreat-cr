"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ClipReveal,
  Faq,
  Marquee,
  Parallax,
  SplitText,
  ScrollThemer,
  StaggerGroup,
} from "@bluemountain/brand";
import { ConceptLocale } from "./ConceptLocale";
import { img, imgByFile, siteContent } from "../../lib/content";
import { terroirCopy } from "../../lib/concept-copy";
import { FARMS_URL } from "../../lib/seo";

/**
 * Direction C — Terroir.
 *
 * Design principle: colour over photography. Each villa owns an accent that
 * takes the whole page bed as it scrolls past, so navigating the property feels
 * like moving between three distinct places rather than three cards. Type is
 * oversized and uppercase; photography is cropped hard and used as texture.
 */

const BED = "#12140f";

const FIELD: Record<string, { bed: string; accent: string; ink: string }> = {
  ledge: { bed: "#1d3b41", accent: "#7fd4c1", ink: "#eefaf6" },
  "retreat-house": { bed: "#40251a", accent: "#e8a25d", ink: "#fdf1e6" },
  "mountain-house": { bed: "#26331c", accent: "#b8d46a", ink: "#f2f7e6" },
};

export function TerroirLanding({ locale }: { locale: "en" | "es" }) {
  const c = terroirCopy[locale];
  const [quote, setQuote] = useState(0);

  const hero = imgByFile("TheRetreat.47", img(1));
  const farm = imgByFile("Retreat-top-lot", img(1));
  const coffee = imgByFile("Hibiscus", img(2));
  const villaImages = [
    [imgByFile("Retreat-527", img(2)), imgByFile("Retreat.22", img(5))],
    [imgByFile("TheRetreat.28", img(3)), imgByFile("Retreat.30", img(7))],
    [imgByFile("Retreat.16", img(4)), imgByFile("Retreat.40", img(9))],
  ];
  const active = siteContent.testimonials[quote];

  return (
    <div className="text-[#f4f1e8] [font-family:var(--font-dm),ui-sans-serif,system-ui]">
      <ScrollThemer base={BED}>
        {/* -------------------------------------------------------- nav ---- */}
        <header className="fixed inset-x-0 top-0 z-[70] mx-auto flex max-w-[1600px] items-center justify-between gap-4 px-4 py-4 lg:px-8">
          <Link
            href={`/${locale}`}
            className="rounded-full bg-[#12140f]/70 px-5 py-2.5 text-[0.7rem] font-extrabold tracking-[0.06em] uppercase backdrop-blur-md [font-family:var(--font-syne),sans-serif]"
          >
            The Retreat
          </Link>
          <nav
            className="hidden items-center gap-1 rounded-full bg-[#12140f]/70 p-1 backdrop-blur-md lg:flex"
            aria-label={c.nav.villas}
          >
            {[
              { href: "#villas", label: c.nav.villas },
              { href: "#farm", label: c.nav.farm },
              { href: "#coffee", label: c.nav.coffee },
              { href: "#nearby", label: c.nav.nearby },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full px-4 py-2 text-[0.66rem] font-semibold tracking-[0.08em] uppercase opacity-70 transition hover:bg-white/10 hover:opacity-100"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3 rounded-full bg-[#12140f]/70 py-1.5 pr-1.5 pl-4 backdrop-blur-md">
            <ConceptLocale
              locale={locale}
              className="text-[0.64rem] font-semibold tracking-[0.08em] uppercase"
            />
            <a
              href="#book"
              className="rounded-full bg-[#f4f1e8] px-4 py-2 text-[0.66rem] font-extrabold tracking-[0.06em] text-[#12140f] uppercase [font-family:var(--font-syne),sans-serif]"
            >
              {c.nav.book}
            </a>
          </div>
        </header>

        {/* ------------------------------------------------------- hero ---- */}
        <section className="grid min-h-[100svh] items-stretch lg:grid-cols-[1.05fr_0.95fr]">
          <div className="flex flex-col justify-end px-5 pt-32 pb-10 lg:px-10 lg:pt-24">
            <p className="text-[0.68rem] font-bold tracking-[0.22em] uppercase opacity-60">
              {c.hero.eyebrow}
            </p>
            <SplitText
              as="h1"
              mode="word"
              immediate
              stagger={0.05}
              rise={1.1}
              className="mt-6 text-[clamp(3rem,7.6vw,7.5rem)] leading-[0.86] font-extrabold tracking-[-0.035em] uppercase [font-family:var(--font-syne),sans-serif]"
            >
              {`${c.hero.titleA} ${c.hero.titleB}`}
            </SplitText>
            <p className="mt-8 max-w-md leading-relaxed opacity-70">{c.hero.body}</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#book"
                className="rounded-full bg-[#f4f1e8] px-7 py-4 text-[0.7rem] font-extrabold tracking-[0.06em] text-[#12140f] uppercase transition hover:bg-white [font-family:var(--font-syne),sans-serif]"
              >
                {c.hero.cta1}
              </a>
              <a
                href="#villas"
                className="rounded-full border-2 border-[#f4f1e8]/40 px-7 py-4 text-[0.7rem] font-extrabold tracking-[0.06em] uppercase transition hover:border-[#f4f1e8] [font-family:var(--font-syne),sans-serif]"
              >
                {c.hero.cta2}
              </a>
            </div>
          </div>

          <div className="relative min-h-[60svh] overflow-hidden lg:min-h-full">
            <Parallax className="absolute inset-0" y={12} fromScale={1.12} toScale={1}>
              <Image
                src={hero}
                alt="A private villa terrace and infinity pool overlooking the coffee plantations at The Retreat at Blue Mountain Farms"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 48vw"
                className="object-cover"
              />
            </Parallax>
          </div>
        </section>

        {/* ----------------------------------------------------- ticker ---- */}
        <Marquee
          items={[...c.ticker]}
          speed={34}
          className="border-y-2 border-[#f4f1e8]/20 py-4"
          itemClassName="text-[clamp(0.9rem,1.6vw,1.25rem)] font-extrabold tracking-[0.06em] uppercase [font-family:var(--font-syne),sans-serif]"
        />

        {/* ---------------------------------------------------- pillars ---- */}
        <section id="farm" className="px-5 py-[clamp(4rem,10vh,7rem)] lg:px-10">
          <div className="mx-auto max-w-[1600px]">
            <p className="text-[0.68rem] font-bold tracking-[0.22em] uppercase opacity-55">
              {c.pillars.eyebrow}
            </p>
            <h2 className="mt-4 text-[clamp(2.2rem,5vw,4.5rem)] leading-[0.9] font-extrabold tracking-[-0.03em] uppercase [font-family:var(--font-syne),sans-serif]">
              {c.pillars.title}
            </h2>

            <StaggerGroup className="mt-14 grid gap-4 md:grid-cols-3">
              {c.pillars.items.map((item) => (
                <article
                  key={item.index}
                  className="group rounded-3xl border-2 border-[#f4f1e8]/20 p-8 transition duration-500 hover:border-[#f4f1e8]/60 hover:bg-[#f4f1e8]/5"
                >
                  <p className="text-[clamp(2.4rem,4vw,3.4rem)] leading-none font-extrabold opacity-25 transition group-hover:opacity-60 [font-family:var(--font-syne),sans-serif]">
                    {item.index}
                  </p>
                  <h3 className="mt-6 text-[clamp(1.5rem,2.4vw,2rem)] font-extrabold tracking-[-0.02em] uppercase [font-family:var(--font-syne),sans-serif]">
                    {item.title}
                  </h3>
                  <p className="mt-4 leading-relaxed opacity-70">{item.body}</p>
                </article>
              ))}
            </StaggerGroup>
          </div>
        </section>

        {/* ----------------------------------------------------- villas ---- */}
        <section id="villas" aria-labelledby="terroir-villas-title">
          <div className="mx-auto max-w-[1600px] px-5 pb-8 lg:px-10">
            <p className="text-[0.68rem] font-bold tracking-[0.22em] uppercase opacity-55">
              {c.villas.eyebrow}
            </p>
            <h2
              id="terroir-villas-title"
              className="mt-4 text-[clamp(2.2rem,5vw,4.5rem)] leading-[0.9] font-extrabold tracking-[-0.03em] uppercase [font-family:var(--font-syne),sans-serif]"
            >
              {c.villas.title}
            </h2>
          </div>

          {siteContent.accommodations.map((unit, i) => {
            const field = FIELD[unit.accent];
            return (
              <article
                key={unit.slug}
                data-field-color={field.bed}
                className="px-5 py-[clamp(3.5rem,9vh,6.5rem)] lg:px-10"
                style={{ color: field.ink }}
              >
                <div className="mx-auto grid max-w-[1600px] items-center gap-10 lg:grid-cols-[0.85fr_1.15fr]">
                  <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                    <p
                      className="text-[clamp(4rem,9vw,8rem)] leading-none font-extrabold tracking-[-0.05em] [font-family:var(--font-syne),sans-serif]"
                      style={{ color: field.accent }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-2 text-[clamp(1.9rem,3.6vw,3.2rem)] leading-[0.95] font-extrabold tracking-[-0.03em] uppercase [font-family:var(--font-syne),sans-serif]">
                      {unit.name}
                    </h3>
                    <p className="mt-4 text-lg opacity-75">{unit.tagline}</p>
                    <p className="mt-5 max-w-lg leading-relaxed opacity-65">{unit.summary}</p>

                    <ul className="mt-8 flex flex-wrap gap-2">
                      {[
                        `${c.villas.sleeps} ${unit.capacity}`,
                        `${unit.bedrooms} ${c.villas.bedrooms}`,
                        c.villas.pool,
                      ].map((pill) => (
                        <li
                          key={pill}
                          className="rounded-full border px-4 py-2 text-[0.68rem] font-semibold tracking-[0.06em] uppercase"
                          style={{ borderColor: `${field.accent}66` }}
                        >
                          {pill}
                        </li>
                      ))}
                    </ul>

                    <Link
                      href={`/${locale}/stay/${unit.slug}`}
                      className="mt-9 inline-block rounded-full px-7 py-4 text-[0.7rem] font-extrabold tracking-[0.06em] uppercase transition hover:opacity-85 [font-family:var(--font-syne),sans-serif]"
                      style={{ background: field.accent, color: field.bed }}
                    >
                      {c.villas.cta}
                    </Link>
                  </div>

                  {/* Offset collage rather than a single flat frame. */}
                  <div className={`relative ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                    <ClipReveal
                      from={i % 2 === 1 ? "right" : "left"}
                      className="relative aspect-[4/3] w-[85%] rounded-3xl"
                    >
                      <Image
                        src={villaImages[i][0]}
                        alt={`${unit.name} — ${unit.tagline}`}
                        fill
                        sizes="(max-width: 1024px) 100vw, 45vw"
                        className="object-cover"
                      />
                    </ClipReveal>
                    <ClipReveal
                      from="up"
                      delay={0.15}
                      className="relative -mt-[22%] ml-auto aspect-square w-[46%] rounded-3xl border-4"
                    >
                      <Image
                        src={villaImages[i][1]}
                        alt={`Detail at ${unit.name}`}
                        fill
                        sizes="25vw"
                        className="object-cover"
                      />
                    </ClipReveal>
                  </div>
                </div>
              </article>
            );
          })}
        </section>

        {/* ------------------------------------------------ experiences ---- */}
        <section
          data-field-color={BED}
          className="px-5 py-[clamp(4rem,10vh,7rem)] lg:px-10"
        >
          <div className="mx-auto max-w-[1600px]">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <p className="text-[0.68rem] font-bold tracking-[0.22em] uppercase opacity-55">
                  {c.experiences.eyebrow}
                </p>
                <h2 className="mt-4 text-[clamp(2.2rem,5vw,4.5rem)] leading-[0.9] font-extrabold tracking-[-0.03em] uppercase [font-family:var(--font-syne),sans-serif]">
                  {c.experiences.title}
                </h2>
              </div>
              <p className="text-[0.66rem] font-bold tracking-[0.16em] uppercase opacity-45">
                {c.experiences.note}
              </p>
            </div>
          </div>

          <div className="mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4">
            {siteContent.experiences.map((exp, i) => (
              <article
                key={exp.slug}
                className="w-[80vw] shrink-0 snap-start overflow-hidden rounded-3xl border-2 border-[#f4f1e8]/20 sm:w-[52vw] lg:w-[30vw]"
              >
                <div className="relative aspect-[16/11]">
                  <Image
                    src={img(i + 5)}
                    alt={exp.title}
                    fill
                    sizes="(max-width: 640px) 80vw, 30vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-7">
                  <h3 className="text-[1.35rem] font-extrabold tracking-[-0.02em] uppercase [font-family:var(--font-syne),sans-serif]">
                    {exp.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed opacity-70">{exp.body}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ----------------------------------------------------- coffee ---- */}
        <section
          id="coffee"
          data-field-color="#3a2a17"
          className="px-5 py-[clamp(4rem,10vh,7rem)] lg:px-10"
        >
          <div className="mx-auto grid max-w-[1600px] items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-[0.68rem] font-bold tracking-[0.22em] uppercase" style={{ color: "#e8a25d" }}>
                {c.coffee.eyebrow}
              </p>
              <h2 className="mt-4 max-w-[18ch] text-[clamp(2rem,4.4vw,3.8rem)] leading-[0.92] font-extrabold tracking-[-0.03em] uppercase [font-family:var(--font-syne),sans-serif]">
                {c.coffee.title}
              </h2>
              <blockquote className="mt-10 max-w-xl border-l-4 pl-6 text-[clamp(1.2rem,2.2vw,1.8rem)] leading-[1.35]" style={{ borderColor: "#e8a25d" }}>
                “{c.coffee.quote}”
                <footer className="mt-4 text-[0.68rem] font-bold tracking-[0.16em] uppercase opacity-60">
                  {c.coffee.attrib}
                </footer>
              </blockquote>
              <ul className="mt-10 flex flex-wrap gap-2">
                {siteContent.coffee.specs.map((spec) => (
                  <li
                    key={spec.label}
                    className="rounded-full border border-[#e8a25d]/45 px-4 py-2 text-[0.68rem] font-semibold tracking-[0.05em] uppercase"
                  >
                    <span className="opacity-55">{spec.label}:</span> {spec.value}
                  </li>
                ))}
              </ul>
            </div>
            <ClipReveal from="up" className="relative aspect-[4/5] rounded-3xl">
              <Image
                src={coffee}
                alt="Coffee cherries and plantation flora on the slopes at Blue Mountain Farms"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </ClipReveal>
          </div>
        </section>

        {/* ----------------------------------------------------- guests ---- */}
        <section data-field-color={BED} className="px-5 py-[clamp(4rem,10vh,7rem)] lg:px-10">
          <div className="mx-auto max-w-[1600px]">
            <p className="text-[0.68rem] font-bold tracking-[0.22em] uppercase opacity-55">
              {c.guests.eyebrow}
            </p>
            <h2 className="mt-4 text-[clamp(2.2rem,5vw,4.5rem)] leading-[0.9] font-extrabold tracking-[-0.03em] uppercase [font-family:var(--font-syne),sans-serif]">
              {c.guests.title}
            </h2>

            <figure className="mt-14 min-h-[13rem]">
              <blockquote className="max-w-4xl text-[clamp(1.3rem,3vw,2.4rem)] leading-[1.3] font-medium">
                “{active.quote}”
              </blockquote>
              <figcaption className="mt-7 text-[0.7rem] font-bold tracking-[0.16em] uppercase opacity-60">
                {active.name} · {active.role}
              </figcaption>
            </figure>

            <div className="mt-10 flex gap-2" role="tablist" aria-label={c.guests.title}>
              {siteContent.testimonials.map((item, i) => (
                <button
                  key={item.name}
                  type="button"
                  role="tab"
                  aria-selected={i === quote}
                  aria-label={item.name}
                  onClick={() => setQuote(i)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    i === quote ? "w-12 bg-[#f4f1e8]" : "w-2.5 bg-[#f4f1e8]/30"
                  }`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ----------------------------------------------------- nearby ---- */}
        <section
          id="nearby"
          data-field-color="#1d3b41"
          className="px-5 py-[clamp(4rem,10vh,7rem)] lg:px-10"
        >
          <div className="mx-auto max-w-[1600px]">
            <p className="text-[0.68rem] font-bold tracking-[0.22em] uppercase" style={{ color: "#7fd4c1" }}>
              {c.nearby.eyebrow}
            </p>
            <h2 className="mt-4 text-[clamp(2.2rem,5vw,4.5rem)] leading-[0.9] font-extrabold tracking-[-0.03em] uppercase [font-family:var(--font-syne),sans-serif]">
              {c.nearby.title}
            </h2>
            <p className="mt-6 max-w-2xl leading-relaxed opacity-70">{c.nearby.body}</p>

            <StaggerGroup as="ul" className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {c.nearby.places.map((place) => (
                <li
                  key={place.name}
                  className="rounded-2xl border-2 border-[#7fd4c1]/25 p-6 transition hover:border-[#7fd4c1]/70"
                >
                  <h3 className="text-[1.15rem] font-extrabold tracking-[-0.01em] uppercase [font-family:var(--font-syne),sans-serif]">
                    {place.name}
                  </h3>
                  <p className="mt-2 text-sm opacity-65">{place.detail}</p>
                </li>
              ))}
            </StaggerGroup>
          </div>
        </section>

        {/* -------------------------------------------------------- faq ---- */}
        <section data-field-color={BED} className="px-5 py-[clamp(4rem,10vh,7rem)] lg:px-10">
          <div className="mx-auto grid max-w-[1600px] gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-[0.68rem] font-bold tracking-[0.22em] uppercase opacity-55">
                {c.faq.eyebrow}
              </p>
              <h2 className="mt-4 text-[clamp(2rem,4vw,3.4rem)] leading-[0.92] font-extrabold tracking-[-0.03em] uppercase [font-family:var(--font-syne),sans-serif]">
                {c.faq.title}
              </h2>
            </div>
            <Faq
              items={c.faq.items}
              className="space-y-3"
              itemClassName="rounded-2xl border-2 border-[#f4f1e8]/20 px-6 open:border-[#f4f1e8]/50"
              questionClassName="py-5 text-[1.05rem] font-bold tracking-[-0.01em]"
              answerClassName="pb-6 max-w-2xl leading-relaxed opacity-70"
            />
          </div>
        </section>

        {/* ------------------------------------------------------ close ---- */}
        <section
          id="book"
          data-field-color="#26331c"
          className="px-5 py-[clamp(5rem,12vh,8rem)] lg:px-10"
        >
          <div className="mx-auto max-w-[1600px]">
            <h2 className="max-w-[16ch] text-[clamp(2.6rem,7vw,6.5rem)] leading-[0.86] font-extrabold tracking-[-0.04em] uppercase [font-family:var(--font-syne),sans-serif]">
              {c.close.title}
            </h2>
            <p className="mt-7 max-w-lg text-lg opacity-70">{c.close.body}</p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href={`/${locale}/book`}
                className="rounded-full bg-[#b8d46a] px-8 py-4.5 text-[0.72rem] font-extrabold tracking-[0.06em] text-[#26331c] uppercase [font-family:var(--font-syne),sans-serif]"
              >
                {c.close.primary}
              </Link>
              <a
                href="mailto:elizabethcannva@gmail.com"
                className="rounded-full border-2 border-[#f4f1e8]/40 px-8 py-4.5 text-[0.72rem] font-extrabold tracking-[0.06em] uppercase transition hover:border-[#f4f1e8] [font-family:var(--font-syne),sans-serif]"
              >
                {c.close.secondary}
              </a>
            </div>

            <div className="mt-16 grid gap-8 border-t-2 border-[#f4f1e8]/20 pt-8 md:grid-cols-[1fr_auto]">
              <div className="flex flex-wrap items-center gap-4">
                <div className="relative h-16 w-24 shrink-0 overflow-hidden rounded-xl">
                  <Image src={farm} alt="Blue Mountain Farms" fill sizes="96px" className="object-cover" />
                </div>
                <div>
                  <p className="text-[0.66rem] font-bold tracking-[0.16em] uppercase opacity-55">
                    {locale === "es" ? "Propiedad hermana" : "Sister property"}
                  </p>
                  <a
                    href={FARMS_URL}
                    className="text-lg font-extrabold uppercase underline underline-offset-4 [font-family:var(--font-syne),sans-serif]"
                  >
                    Blue Mountain Farms
                  </a>
                </div>
              </div>
              <p className="text-[0.66rem] font-bold tracking-[0.14em] uppercase opacity-50 md:text-right">
                {c.footer.tagline}
                <span className="mt-1 block">{c.footer.concept}</span>
              </p>
            </div>
          </div>
        </section>
      </ScrollThemer>
    </div>
  );
}
