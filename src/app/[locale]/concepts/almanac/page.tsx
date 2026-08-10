import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { JsonLd } from "@bluemountain/brand";
import { AlmanacLanding } from "../../../../components/concepts/AlmanacLanding";
import { almanacCopy } from "../../../../lib/concept-copy";
import {
  accommodationNodes,
  breadcrumbNode,
  conceptMetadata,
  experienceNodes,
  faqNode,
  resortNode,
  reviewNodes,
  websiteNode,
  type Locale,
} from "../../../../lib/seo";

function pick(locale: string): Locale {
  return locale === "es" ? "es" : "en";
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = pick((await params).locale);
  const c = almanacCopy[locale];
  return conceptMetadata({
    locale,
    path: "/concepts/almanac",
    title: c.meta.title,
    description: c.meta.description,
    keywords: [...c.meta.keywords],
    image: "/images/Retreat-top-lot-4.jpg",
  });
}

export default async function AlmanacPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  setRequestLocale(raw);
  const locale = pick(raw);
  const c = almanacCopy[locale];

  /* The data direction emits the deepest graph: every villa as its own
     accommodation, every experience as its own attraction, and the long FAQ. */
  return (
    <>
      <JsonLd
        data={[
          websiteNode(locale),
          resortNode(locale),
          ...accommodationNodes(locale),
          ...experienceNodes(locale),
          ...reviewNodes(),
          faqNode([...c.faq.items]),
          breadcrumbNode(locale, [
            { name: "Home", path: "" },
            { name: "Almanac", path: "/concepts/almanac" },
          ]),
        ]}
      />
      <AlmanacLanding locale={locale} />
    </>
  );
}
