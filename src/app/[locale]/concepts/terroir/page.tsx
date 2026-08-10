import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { JsonLd } from "@bluemountain/brand";
import { TerroirLanding } from "../../../../components/concepts/TerroirLanding";
import { terroirCopy } from "../../../../lib/concept-copy";
import {
  accommodationNodes,
  breadcrumbNode,
  conceptMetadata,
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
  const c = terroirCopy[locale];
  return conceptMetadata({
    locale,
    path: "/concepts/terroir",
    title: c.meta.title,
    description: c.meta.description,
    keywords: [...c.meta.keywords],
    image: "/images/TheRetreat.47.jpg",
  });
}

export default async function TerroirPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  setRequestLocale(raw);
  const locale = pick(raw);
  const c = terroirCopy[locale];

  /* This direction argues locally, so the graph adds the surrounding beaches and
     towns as real places tied to the resort. */
  const nearby = c.nearby.places.map((place) => ({
    "@type": "TouristAttraction",
    name: place.name,
    description: place.detail,
    address: {
      "@type": "PostalAddress",
      addressRegion: "Guanacaste",
      addressCountry: "CR",
    },
  }));

  return (
    <>
      <JsonLd
        data={[
          websiteNode(locale),
          resortNode(locale),
          ...accommodationNodes(locale),
          ...reviewNodes(),
          ...nearby,
          faqNode([...c.faq.items]),
          breadcrumbNode(locale, [
            { name: "Home", path: "" },
            { name: "Terroir", path: "/concepts/terroir" },
          ]),
        ]}
      />
      <TerroirLanding locale={locale} />
    </>
  );
}
