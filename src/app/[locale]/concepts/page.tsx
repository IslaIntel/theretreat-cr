import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { setRequestLocale } from "next-intl/server";
import { conceptIndex, hubCopy } from "../../../lib/concept-copy";

export const metadata: Metadata = {
  title: "Landing directions",
  robots: { index: false, follow: false },
};

export default async function ConceptsHubPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const loc = (locale === "es" ? "es" : "en") as "en" | "es";
  const c = hubCopy[loc];

  return (
    <div className="min-h-svh bg-[#0b0f10] px-5 pt-20 pb-28 text-[#efe9dd] [font-family:var(--font-archivo),ui-sans-serif,system-ui] lg:px-10">
      <div className="mx-auto max-w-6xl">
        <header className="mb-16 max-w-3xl">
          <p className="text-[0.62rem] tracking-[0.24em] text-[#c8933c] uppercase">
            {c.eyebrow}
          </p>
          <h1 className="mt-5 text-[clamp(2.2rem,5vw,4rem)] leading-[0.95] font-light [font-family:var(--font-cormorant),serif]">
            {c.title}
          </h1>
          <p className="mt-7 leading-relaxed text-[#efe9dd]/70">{c.lede}</p>
          <p className="mt-7 border-y border-white/12 py-4 text-sm text-[#efe9dd]/55">
            {c.how}
          </p>
          <Link
            href={`/${loc}`}
            className="mt-7 inline-block text-[0.62rem] tracking-[0.18em] text-[#c8933c] uppercase transition hover:text-[#efe9dd]"
          >
            ← {c.live}
          </Link>
        </header>

        <div className="grid gap-5 md:grid-cols-3">
          {conceptIndex.map((concept) => {
            const card = c.cards[concept.slug];
            return (
              <Link
                key={concept.slug}
                href={`/${loc}/concepts/${concept.slug}`}
                className="group flex flex-col border border-white/12 bg-[#07090a] transition duration-500 hover:-translate-y-1 hover:border-[#c8933c]/50"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={concept.image}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover opacity-80 transition duration-700 group-hover:scale-[1.04] group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07090a] via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-5 text-4xl leading-none font-light text-[#c8933c] [font-family:var(--font-cormorant),serif]">
                    {concept.letter}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <p className="text-[0.6rem] tracking-[0.2em] text-[#c8933c] uppercase">
                    {card.tag}
                  </p>
                  <h2 className="mt-3 text-2xl font-light [font-family:var(--font-cormorant),serif]">
                    {card.title}
                  </h2>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-[#efe9dd]/65">
                    {card.body}
                  </p>
                  <p className="mt-6 border-t border-white/10 pt-4 text-[0.6rem] tracking-[0.16em] uppercase opacity-45 [font-family:var(--font-jetbrains),monospace]">
                    {card.principle}
                  </p>
                  <span className="mt-5 text-[0.62rem] tracking-[0.16em] uppercase">
                    {c.open} {concept.letter} →
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
