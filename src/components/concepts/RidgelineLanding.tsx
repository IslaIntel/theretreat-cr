"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ClipReveal,
  CountUp,
  Faq,
  HorizontalReel,
  Parallax,
  ScrollProgress,
  SplitText,
} from "@bluemountain/brand";
import { BookingWidget } from "../BookingWidget";
import { ConceptLocale } from "./ConceptLocale";
import { img, imgByFile, siteContent } from "../../lib/content";
import { ridgelineCopy } from "../../lib/concept-copy";
import { FARMS_URL } from "../../lib/seo";

/**
 * Direction A — Ridgeline.
 *
 * Design principle: sequence over grid. The page behaves like a reel of shots
 * rather than a stack of cards — letterboxed dark stage, chapter numerals,
 * scroll-scrubbed parallax, and a pinned horizontal pass across the villas. All
 * spectacle is scroll-linked so nothing moves unless the guest is driving it.
 */

const ACCENT: Record<string, string> = {
  ledge: "#7fa0a6",
  "retreat-house": "#b1805a",
  "mountain-house": "#4d8391",
};

const OCHRE = "#c8933c";

export function RidgelineLanding({ locale }: { locale: "en" | "es" }) {
  const c = ridgelineCopy[locale];
  const hero = imgByFile("Wine-sunset", img(0));
  const land = imgByFile("Retreat-top-lot", img(1));
  const coffee = imgByFile("Hibiscus", img(2));
  const ritual = [imgByFile("Retreat.36", img(5)), imgByFile("TheRetreat.39", img(6))];
  const quoteBg = imgByFile("TheRetreat.44", img(8));
  const villaImages = [
    imgByFile("Retreat-527", img(2)),
    imgByFile("TheRetreat.47", img(1)),
    imgByFile("Retreat.16", img(4)),
  ];

  return (
    <div className="bg-[#0b0f10] text-[#efe9dd] [font-family:var(--font-archivo),ui-sans-serif,system-ui]">
      <ScrollProgress color={OCHRE} height={2} />

      {/* ---------------------------------------------------------- nav ---- */}
      <header className="fixed inset-x-0 top-0 z-[70] border-b border-white/10 bg-[#0b0f10]/80 backdrop-blur-xl">
        <div className="mx-auto flex h-14 w-full max-w-[1500px] items-center justify-between gap-6 px-5 lg:px-10">
          <Link
            href={`/${locale}`}
            className="text-lg tracking-tight [font-family:var(--font-cormorant),serif]"
          >
            The Retreat
          </Link>
          <nav
            className="hidden items-center gap-7 text-[0.62rem] tracking-[0.2em] uppercase lg:flex"
            aria-label={c.nav.stay}
          >
            <a href="#land" className="opacity-60 transition hover:opacity-100">
              {c.nav.land}
            </a>
            <a href="#villas" className="opacity-60 transition hover:opacity-100">
              {c.nav.stay}
            </a>
            <a href="#ritual" className="opacity-60 transition hover:opacity-100">
              {c.nav.ritual}
            </a>
            <a href="#guests" className="opacity-60 transition hover:opacity-100">
              {c.nav.guests}
            </a>
          </nav>
          <div className="flex items-center gap-5">
            <ConceptLocale
              locale={locale}
              className="text-[0.62rem] tracking-[0.16em] uppercase"
            />
            <a
              href="#book"
              className="border border-[#c8933c] px-4 py-2 text-[0.62rem] tracking-[0.18em] text-[#c8933c] uppercase transition hover:bg-[#c8933c] hover:text-[#0b0f10]"
            >
              {c.nav.book}
            </a>
          </div>
        </div>
      </header>

      {/* --------------------------------------------------------- hero ---- */}
      <section className="relative min-h-[100svh] overflow-hidden">
        <Parallax className="absolute inset-0" y={14} fromScale={1.18} toScale={1.02}>
          <Image
            src={hero}
            alt="Sunset over the coffee plantations and the Pacific ridgeline at The Retreat at Blue Mountain Farms"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </Parallax>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f10] via-[#0b0f10]/35 to-[#0b0f10]/70" />
        {/* Letterbox bars set the film frame. */}
        <div className="absolute inset-x-0 top-0 h-14 bg-[#07090a]" />
        <div className="absolute inset-x-0 bottom-0 h-10 bg-[#07090a]" />

        {/* Bottom-aligned, but with enough head room that a short viewport grows
            the section instead of pushing the headline under the letterbox. */}
        <div className="relative z-10 flex min-h-[100svh] flex-col justify-end px-5 pt-32 pb-20 lg:px-10">
          <div className="mx-auto w-full max-w-[1500px]">
            <div className="mb-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-[0.62rem] tracking-[0.24em] uppercase">
              <span style={{ color: OCHRE }}>{c.hero.eyebrow}</span>
              <span className="opacity-50 [font-family:var(--font-jetbrains),monospace]">
                {c.hero.timecode}
              </span>
            </div>
            <SplitText
              as="h1"
              mode="line"
              wrapAt={26}
              immediate
              rise={1.1}
              className="max-w-[18ch] text-[clamp(3rem,8.2vw,8.5rem)] leading-[0.88] font-light tracking-[-0.02em] [font-family:var(--font-cormorant),serif]"
            >
              {c.hero.title}
            </SplitText>
            <p className="mt-8 max-w-lg text-[0.98rem] leading-relaxed text-[#efe9dd]/65">
              {c.hero.sub}
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="#book"
                className="bg-[#c8933c] px-7 py-4 text-[0.68rem] font-medium tracking-[0.18em] text-[#0b0f10] uppercase transition hover:bg-[#dba851]"
              >
                {c.hero.ctaBook}
              </a>
              <a
                href="#villas"
                className="border border-white/30 px-7 py-4 text-[0.68rem] tracking-[0.18em] uppercase transition hover:border-[#c8933c] hover:text-[#c8933c]"
              >
                {c.hero.ctaExplore}
              </a>
            </div>
          </div>
        </div>

        <span className="absolute bottom-16 left-1/2 z-10 -translate-x-1/2 text-[0.58rem] tracking-[0.3em] uppercase opacity-45">
          {c.hero.cue}
        </span>
      </section>

      {/* ------------------------------------------------------ logline ---- */}
      <section className="border-y border-white/8 px-5 py-[clamp(5rem,12vh,9rem)] lg:px-10">
        <div className="mx-auto max-w-4xl text-center">
          <span
            aria-hidden
            className="mx-auto mb-10 block h-px w-14"
            style={{ background: OCHRE }}
          />
          <SplitText
            as="p"
            mode="line"
            wrapAt={40}
            className="text-[clamp(1.5rem,3.1vw,2.6rem)] leading-[1.28] font-light [font-family:var(--font-cormorant),serif]"
          >
            {c.logline}
          </SplitText>
        </div>
      </section>

      {/* ---------------------------------------------- chapter 01 · land ---- */}
      <section id="land" className="relative">
        <div className="relative h-[110svh] overflow-hidden">
          <Parallax className="absolute inset-0" y={20} fromScale={1.12} toScale={1}>
            <Image
              src={land}
              alt="Twenty acres of working organic farmland and coffee terraces at Blue Mountain Farms in Chinampas, Guanacaste"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </Parallax>
          <div className="absolute inset-0 bg-[#0b0f10]/55" />
          <div className="sticky top-0 flex h-[100svh] items-center">
            <div className="mx-auto w-full max-w-[1500px] px-5 lg:px-10">
              <Chapter num={c.land.chapter} label={c.land.eyebrow} />
              <SplitText
                as="h2"
                mode="line"
                wrapAt={22}
                className="mt-5 max-w-[16ch] text-[clamp(2.4rem,5.4vw,5rem)] leading-[0.94] font-light [font-family:var(--font-cormorant),serif]"
              >
                {c.land.title}
              </SplitText>
              <p className="mt-7 max-w-xl leading-relaxed text-[#efe9dd]/70">
                {c.land.body}
              </p>
            </div>
          </div>
        </div>

        <div className="border-y border-white/10 bg-[#07090a]">
          <dl className="mx-auto grid max-w-[1500px] grid-cols-2 gap-px px-5 lg:grid-cols-4 lg:px-10">
            {c.land.stats.map((stat) => (
              <div key={stat.label} className="border-white/10 py-10 lg:border-l lg:pl-8 lg:first:border-l-0 lg:first:pl-0">
                <dd
                  className="text-[clamp(2.8rem,5vw,4.4rem)] leading-none font-light [font-family:var(--font-cormorant),serif]"
                  style={{ color: OCHRE }}
                >
                  <CountUp to={stat.value} suffix={stat.suffix} />
                </dd>
                <dt className="mt-3 max-w-[18ch] text-[0.66rem] tracking-[0.16em] uppercase opacity-55">
                  {stat.label}
                </dt>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* -------------------------------------------- chapter 02 · villas ---- */}
      <section id="villas" aria-labelledby="ridgeline-villas-title">
        <div className="mx-auto flex max-w-[1500px] flex-wrap items-end justify-between gap-6 px-5 pt-[clamp(4rem,9vh,7rem)] pb-12 lg:px-10">
          <div>
            <Chapter num={c.villas.chapter} label={c.villas.eyebrow} />
            <h2
              id="ridgeline-villas-title"
              className="mt-5 text-[clamp(2.2rem,4.6vw,4rem)] leading-[0.95] font-light [font-family:var(--font-cormorant),serif]"
            >
              {c.villas.title}
            </h2>
          </div>
          <p className="text-[0.62rem] tracking-[0.2em] uppercase opacity-45">
            {c.villas.note}
          </p>
        </div>

        <HorizontalReel trackClassName="gap-5 px-5 lg:px-10">
          {siteContent.accommodations.map((unit, i) => {
            const accent = ACCENT[unit.accent] ?? OCHRE;
            return (
              <article
                key={unit.slug}
                className="relative h-[78svh] w-[86vw] shrink-0 snap-center overflow-hidden md:w-[62vw] lg:w-[46vw]"
              >
                <Image
                  src={villaImages[i] ?? img(i)}
                  alt={`${unit.name} — ${unit.tagline}, ${unit.capacity}, private infinity pool`}
                  fill
                  sizes="(max-width: 768px) 86vw, 46vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07090a] via-[#07090a]/30 to-transparent" />
                <div
                  aria-hidden
                  className="absolute inset-x-0 bottom-0 h-1"
                  style={{ background: accent }}
                />
                <div className="relative z-10 flex h-full flex-col justify-between p-7 lg:p-9">
                  <span
                    className="text-[0.66rem] tracking-[0.22em] uppercase [font-family:var(--font-jetbrains),monospace]"
                    style={{ color: accent }}
                  >
                    0{i + 1}
                  </span>
                  <div>
                    <h3 className="max-w-[14ch] text-[clamp(1.8rem,3vw,2.7rem)] leading-[1] font-light [font-family:var(--font-cormorant),serif]">
                      {unit.name}
                    </h3>
                    <p className="mt-2 text-sm text-[#efe9dd]/70">{unit.tagline}</p>
                    <dl className="mt-6 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/15 pt-5 text-[0.68rem] [font-family:var(--font-jetbrains),monospace]">
                      <div>
                        <dt className="tracking-[0.14em] uppercase opacity-45">
                          {c.villas.specs.capacity}
                        </dt>
                        <dd className="mt-1">{unit.capacity}</dd>
                      </div>
                      <div>
                        <dt className="tracking-[0.14em] uppercase opacity-45">
                          {c.villas.specs.bedrooms}
                        </dt>
                        <dd className="mt-1">{unit.bedrooms}</dd>
                      </div>
                      <div>
                        <dt className="tracking-[0.14em] uppercase opacity-45">
                          {c.villas.specs.pool}
                        </dt>
                        <dd className="mt-1">{c.villas.poolValue}</dd>
                      </div>
                    </dl>
                    <Link
                      href={`/${locale}/stay/${unit.slug}`}
                      className="mt-7 inline-block border-b pb-1 text-[0.66rem] tracking-[0.18em] uppercase transition hover:opacity-70"
                      style={{ borderColor: accent, color: accent }}
                    >
                      {c.villas.cta}
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </HorizontalReel>
      </section>

      {/* ------------------------------------------- chapter 03 · ritual ---- */}
      <section id="ritual" className="border-t border-white/8 px-5 py-[clamp(4rem,9vh,7rem)] lg:px-10">
        <div className="mx-auto grid max-w-[1500px] gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <Chapter num={c.ritual.chapter} label={c.ritual.eyebrow} />
            <h2 className="mt-5 max-w-[15ch] text-[clamp(2.1rem,4.2vw,3.6rem)] leading-[0.96] font-light [font-family:var(--font-cormorant),serif]">
              {c.ritual.title}
            </h2>
            <div className="mt-7 space-y-5 leading-relaxed text-[#efe9dd]/70">
              {c.ritual.paras.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <p className="mt-10 text-[0.6rem] tracking-[0.22em] uppercase opacity-45">
              {c.ritual.specsLabel}
            </p>
            <dl className="mt-4 grid grid-cols-2 gap-px border-t border-white/12">
              {siteContent.coffee.specs.map((spec) => (
                <div key={spec.label} className="border-b border-white/12 py-4 pr-4">
                  <dt className="text-[0.6rem] tracking-[0.16em] uppercase opacity-45">
                    {spec.label}
                  </dt>
                  <dd className="mt-1.5 text-sm [font-family:var(--font-jetbrains),monospace]">
                    {spec.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="space-y-5">
            <ClipReveal className="relative aspect-[4/3]">
              <Image
                src={coffee}
                alt="Hibiscus and plantation flora on the coffee terraces at Blue Mountain Farms"
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover"
              />
            </ClipReveal>
            <div className="grid gap-5 sm:grid-cols-2">
              {ritual.map((src, i) => (
                <ClipReveal
                  key={src}
                  from={i === 0 ? "left" : "right"}
                  className="relative aspect-[3/4]"
                >
                  <Image
                    src={src}
                    alt="Morning coffee ritual on the terrace at The Retreat at Blue Mountain Farms"
                    fill
                    sizes="(max-width: 640px) 100vw, 28vw"
                    className="object-cover"
                  />
                </ClipReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------------------------- chapter 04 · shot list ---- */}
      <section id="experiences" className="border-t border-white/8 bg-[#07090a] px-5 py-[clamp(4rem,9vh,7rem)] lg:px-10">
        <div className="mx-auto max-w-[1500px]">
          <Chapter num={c.shotlist.chapter} label={c.shotlist.eyebrow} />
          <h2 className="mt-5 max-w-[20ch] text-[clamp(2.1rem,4.2vw,3.6rem)] leading-[0.96] font-light [font-family:var(--font-cormorant),serif]">
            {c.shotlist.title}
          </h2>

          <ul className="mt-14 border-t border-white/12">
            {siteContent.experiences.map((exp, i) => (
              <li key={exp.slug} className="group border-b border-white/12">
                <div className="grid items-center gap-6 py-8 md:grid-cols-[4rem_1fr_1.1fr_9rem]">
                  <span className="text-[0.68rem] tracking-[0.18em] opacity-40 [font-family:var(--font-jetbrains),monospace]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-[clamp(1.3rem,2.2vw,1.9rem)] leading-tight font-light [font-family:var(--font-cormorant),serif]">
                    {exp.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#efe9dd]/60">{exp.body}</p>
                  <div className="relative aspect-[4/3] overflow-hidden md:aspect-[3/2]">
                    <Image
                      src={img(i + 4)}
                      alt={exp.title}
                      fill
                      sizes="200px"
                      className="object-cover opacity-70 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
                    />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* --------------------------------------------- chapter 05 · guests ---- */}
      <section id="guests" className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Parallax className="absolute inset-0" y={16}>
            <Image
              src={quoteBg}
              alt=""
              fill
              sizes="100vw"
              className="object-cover"
              aria-hidden
            />
          </Parallax>
          <div className="absolute inset-0 bg-[#07090a]/80" />
        </div>
        <div className="relative z-10 mx-auto max-w-[1500px] px-5 py-[clamp(5rem,11vh,8rem)] lg:px-10">
          <Chapter num={c.guests.chapter} label={c.guests.eyebrow} />
          <h2 className="mt-5 text-[clamp(2.1rem,4.2vw,3.6rem)] leading-[0.96] font-light [font-family:var(--font-cormorant),serif]">
            {c.guests.title}
          </h2>
          <div className="mt-16 space-y-16">
            {siteContent.testimonials.map((item, i) => (
              <figure
                key={item.name}
                className={
                  i % 2 === 1
                    ? "ml-auto max-w-3xl text-right"
                    : "mr-auto max-w-3xl"
                }
              >
                <SplitText
                  as="blockquote"
                  mode="line"
                  wrapAt={44}
                  className="text-[clamp(1.35rem,2.7vw,2.2rem)] leading-[1.32] font-light [font-family:var(--font-cormorant),serif]"
                >
                  {`“${item.quote}”`}
                </SplitText>
                <figcaption className="mt-6 text-[0.62rem] tracking-[0.22em] uppercase" style={{ color: OCHRE }}>
                  {item.name} · <span className="opacity-60">{item.role}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------- chapter 06 · route ---- */}
      <section className="border-y border-white/10 bg-[#07090a] px-5 py-[clamp(4rem,9vh,6rem)] lg:px-10">
        <div className="mx-auto max-w-[1500px]">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <Chapter num={c.route.chapter} label={c.route.eyebrow} />
              <h2 className="mt-5 text-[clamp(1.9rem,3.6vw,3rem)] leading-[0.98] font-light [font-family:var(--font-cormorant),serif]">
                {c.route.title}
              </h2>
            </div>
            <p className="max-w-xs text-sm text-[#efe9dd]/55">{c.route.note}</p>
          </div>
          <dl className="mt-12 grid gap-px sm:grid-cols-2 lg:grid-cols-4">
            {siteContent.gettingHere.points.map((point) => (
              <div key={point.label} className="border-t border-white/15 pt-5">
                <dt className="text-[0.62rem] tracking-[0.16em] uppercase opacity-50">
                  {point.label}
                </dt>
                <dd className="mt-2 text-lg [font-family:var(--font-jetbrains),monospace]">
                  {point.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ----------------------------------------------------------- faq ---- */}
      <section className="px-5 py-[clamp(4rem,9vh,7rem)] lg:px-10">
        <div className="mx-auto grid max-w-[1500px] gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-[0.62rem] tracking-[0.24em] uppercase" style={{ color: OCHRE }}>
              {c.faq.eyebrow}
            </p>
            <h2 className="mt-4 max-w-[16ch] text-[clamp(1.9rem,3.6vw,3rem)] leading-[0.98] font-light [font-family:var(--font-cormorant),serif]">
              {c.faq.title}
            </h2>
          </div>
          <Faq
            items={c.faq.items}
            className="border-t border-white/12"
            itemClassName="border-b border-white/12"
            questionClassName="py-6 text-[1.05rem] leading-snug font-light [font-family:var(--font-cormorant),serif] text-[1.2rem]"
            answerClassName="pb-7 max-w-2xl text-sm leading-relaxed text-[#efe9dd]/60"
          />
        </div>
      </section>

      {/* ---------------------------------------------------------- book ---- */}
      <section id="book" className="border-t border-white/10 bg-[#07090a] px-5 py-[clamp(4rem,9vh,7rem)] lg:px-10">
        <div className="mx-auto max-w-[1500px]">
          <p className="text-[0.62rem] tracking-[0.24em] uppercase" style={{ color: OCHRE }}>
            {c.book.eyebrow}
          </p>
          <h2 className="mt-4 text-[clamp(2.2rem,4.6vw,4rem)] leading-[0.95] font-light [font-family:var(--font-cormorant),serif]">
            {c.book.title}
          </h2>
          <p className="mt-5 max-w-xl text-[#efe9dd]/65">{c.book.body}</p>
          <div className="mt-10 [&_input]:border-white/25 [&_input]:text-[#efe9dd] [&_.eyebrow]:text-[#efe9dd]/50">
            <BookingWidget locale={locale} variant="inline" />
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={`/${locale}/book`}
              className="bg-[#c8933c] px-7 py-4 text-[0.66rem] font-medium tracking-[0.18em] text-[#0b0f10] uppercase transition hover:bg-[#dba851]"
            >
              {c.nav.book}
            </Link>
            <a
              href="mailto:elizabethcannva@gmail.com"
              className="border border-white/30 px-7 py-4 text-[0.66rem] tracking-[0.18em] uppercase transition hover:border-[#c8933c] hover:text-[#c8933c]"
            >
              {c.book.ctaEnquire}
            </a>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------ sister property ---- */}
      <section className="relative overflow-hidden border-t border-white/10">
        <div className="mx-auto grid max-w-[1500px] items-center gap-10 px-5 py-[clamp(3.5rem,8vh,6rem)] lg:grid-cols-2 lg:px-10">
          <ClipReveal from="left" className="relative aspect-[5/4]">
            <Image
              src={land}
              alt="Blue Mountain Farms — the working organic farm behind The Retreat"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
          </ClipReveal>
          <div>
            <p className="text-[0.62rem] tracking-[0.24em] uppercase" style={{ color: OCHRE }}>
              {locale === "es" ? "Propiedad hermana" : "Sister property"}
            </p>
            <h2 className="mt-4 text-[clamp(1.8rem,3.4vw,2.8rem)] leading-[1] font-light [font-family:var(--font-cormorant),serif]">
              Blue Mountain Farms
            </h2>
            <p className="mt-5 max-w-md text-[#efe9dd]/65">
              {locale === "es"
                ? "La finca productiva detrás de The Retreat. Orgánicos de Zona Azul, cosechados lunes y jueves, entregados martes y viernes."
                : "The working farm behind the Retreat. Certified Blue Zone organics, harvested Monday and Thursday, delivered Tuesday and Friday."}
            </p>
            <a
              href={FARMS_URL}
              className="mt-8 inline-block border-b border-[#c8933c] pb-1 text-[0.66rem] tracking-[0.18em] text-[#c8933c] uppercase"
            >
              {locale === "es" ? "Visitar la tienda" : "Visit the farm shop"}
            </a>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------- footer ---- */}
      <footer className="border-t border-white/10 bg-[#07090a] px-5 py-10 lg:px-10">
        <div className="mx-auto flex max-w-[1500px] flex-wrap items-center justify-between gap-4 text-[0.62rem] tracking-[0.16em] uppercase opacity-50">
          <p>{c.footer.tagline}</p>
          <p className="[font-family:var(--font-jetbrains),monospace]">{c.footer.concept}</p>
        </div>
      </footer>
    </div>
  );
}

function Chapter({ num, label }: { num: string; label: string }) {
  return (
    <p className="flex items-center gap-4 text-[0.62rem] tracking-[0.24em] uppercase">
      <span
        className="[font-family:var(--font-jetbrains),monospace]"
        style={{ color: OCHRE }}
      >
        {num}
      </span>
      <span aria-hidden className="h-px w-8 bg-white/25" />
      <span className="opacity-55">{label}</span>
    </p>
  );
}
