import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { JsonLd } from "@bluemountain/brand";
import { RidgelineLanding } from "../../../../components/concepts/RidgelineLanding";
import { ridgelineCopy } from "../../../../lib/concept-copy";
import {
  accommodationNodes,
  breadcrumbNode,
  conceptMetadata,
  faqNode,
  imageGalleryNode,
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
  const c = ridgelineCopy[locale];
  return conceptMetadata({
    locale,
    path: "/concepts/ridgeline",
    title: c.meta.title,
    description: c.meta.description,
    keywords: [...c.meta.keywords],
    image: "/images/Wine-sunset-2.jpg",
  });
}

export default async function RidgelinePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  setRequestLocale(raw);
  const locale = pick(raw);
  const c = ridgelineCopy[locale];

  /* This direction leans on media: the gallery and review nodes give the
     image-heavy page something machine-readable to stand on. */
  return (
    <>
      <JsonLd
        data={[
          websiteNode(locale),
          resortNode(locale),
          ...accommodationNodes(locale),
          ...reviewNodes(),
          imageGalleryNode(locale, c.meta.title),
          faqNode([...c.faq.items]),
          breadcrumbNode(locale, [
            { name: "Home", path: "" },
            { name: "Ridgeline", path: "/concepts/ridgeline" },
          ]),
        ]}
      />
      <RidgelineLanding locale={locale} />
    </>
  );
}
