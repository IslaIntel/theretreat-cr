import type { Metadata } from "next";
import { siteContent, siteImages } from "./content";

export type Locale = "en" | "es";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || siteContent.site || "https://theretreat.cr";

export const FARMS_URL =
  process.env.NEXT_PUBLIC_FARMS_URL || "https://bluemountainfarms.cr";

export function absoluteUrl(path = "/") {
  return new URL(path, SITE_URL).toString();
}

/** Language-tagged copies of a path, for `alternates` and `inLanguage` hints. */
function localeAlternates(path: string) {
  const clean = path.replace(/^\/(en|es)/, "");
  return {
    en: absoluteUrl(`/en${clean}`),
    es: absoluteUrl(`/es${clean}`),
    "x-default": absoluteUrl(`/en${clean}`),
  };
}

export type ConceptMetaInput = {
  locale: Locale;
  /** Path under the locale segment, e.g. `/concepts/ridgeline`. */
  path: string;
  title: string;
  description: string;
  keywords: string[];
  image?: string;
  /** Concept previews stay out of the index until a direction is chosen. */
  index?: boolean;
};

export function conceptMetadata({
  locale,
  path,
  title,
  description,
  keywords,
  image,
  index = false,
}: ConceptMetaInput): Metadata {
  const url = absoluteUrl(`/${locale}${path}`);
  const ogImage = absoluteUrl(image ?? "/images/Wine-sunset-2.jpg");

  return {
    title,
    description,
    keywords,
    metadataBase: new URL(SITE_URL),
    alternates: { canonical: url, languages: localeAlternates(path) },
    robots: index
      ? { index: true, follow: true }
      : { index: false, follow: false, nocache: true },
    openGraph: {
      type: "website",
      url,
      siteName: siteContent.meta.title,
      title,
      description,
      locale: locale === "es" ? "es_CR" : "en_US",
      alternateLocale: locale === "es" ? "en_US" : "es_CR",
      images: [{ url: ogImage, width: 1600, height: 1067, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

const ADDRESS = {
  "@type": "PostalAddress",
  addressLocality: "Chinampas",
  addressRegion: "Guanacaste",
  addressCountry: "CR",
} as const;

const AMENITY_FEATURES = [
  "Private infinity pool",
  "Organic farm on site",
  "Coffee plantation tours",
  "Farm-to-table kitchen",
  "Starlink high-speed internet",
  "Hiking trails and river access",
  "Free private parking",
  "Ocean and mountain views",
];

/** The nearby towns and beaches guests actually search alongside the property. */
export const AREA_SERVED = [
  "Sámara",
  "Playa Carrillo",
  "Nosara",
  "Nicoya",
  "Playa Buena Vista",
  "Guanacaste",
];

function galleryUrls(limit = 12) {
  return siteImages.slice(0, limit).map((i) => absoluteUrl(i.src));
}

/**
 * The property itself. `Resort` inherits from LodgingBusiness, which is what
 * lets the villas hang off it as `containsPlace`.
 */
export function resortNode(locale: Locale) {
  const description =
    locale === "es"
      ? "Eco-retiro de lujo en Chinampas, Guanacaste. Tres villas privadas con piscina infinita en veinte acres de finca orgánica y cafetal, a quince minutos de Playa Sámara."
      : siteContent.meta.description;

  return {
    "@type": "Resort",
    "@id": `${SITE_URL}/#resort`,
    name: siteContent.meta.title,
    description,
    url: absoluteUrl(`/${locale}`),
    address: ADDRESS,
    image: galleryUrls(6),
    priceRange: "$$$",
    currenciesAccepted: "USD, CRC",
    numberOfRooms: siteContent.accommodations.length,
    petsAllowed: false,
    smokingAllowed: false,
    checkinTime: "15:00",
    checkoutTime: "11:00",
    availableLanguage: ["en", "es"],
    areaServed: AREA_SERVED.map((name) => ({ "@type": "Place", name })),
    amenityFeature: AMENITY_FEATURES.map((name) => ({
      "@type": "LocationFeatureSpecification",
      name,
      value: true,
    })),
    sameAs: [siteContent.social.instagram, siteContent.social.facebook],
    containsPlace: siteContent.accommodations.map((unit) => ({
      "@id": `${SITE_URL}/#${unit.slug}`,
    })),
  };
}

/** One node per villa, so each can win its own long-tail query. */
export function accommodationNodes(locale: Locale) {
  return siteContent.accommodations.map((unit) => ({
    "@type": "Accommodation",
    "@id": `${SITE_URL}/#${unit.slug}`,
    name: unit.name,
    description: unit.summary,
    url: absoluteUrl(`/${locale}/stay/${unit.slug}`),
    numberOfBedrooms: unit.bedrooms,
    occupancy: {
      "@type": "QuantitativeValue",
      unitText: "guests",
      description: unit.capacity,
    },
    amenityFeature: unit.amenities.map((name) => ({
      "@type": "LocationFeatureSpecification",
      name,
      value: true,
    })),
    containedInPlace: { "@id": `${SITE_URL}/#resort` },
  }));
}

/**
 * Guest quotes as `Review` nodes. Deliberately rating-free: we hold the words,
 * not scores, and inventing a numeric rating would be fabricating data.
 */
export function reviewNodes() {
  return siteContent.testimonials.map((item, i) => ({
    "@type": "Review",
    "@id": `${SITE_URL}/#review-${i + 1}`,
    itemReviewed: { "@id": `${SITE_URL}/#resort` },
    author: { "@type": "Person", name: item.name },
    reviewBody: item.quote,
  }));
}

export function faqNode(items: { q: string; a: string }[]) {
  return {
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

export function breadcrumbNode(locale: Locale, trail: { name: string; path: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: trail.map((step, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: step.name,
      item: absoluteUrl(`/${locale}${step.path}`),
    })),
  };
}

export function imageGalleryNode(locale: Locale, name: string) {
  return {
    "@type": "ImageGallery",
    name,
    url: absoluteUrl(`/${locale}`),
    image: galleryUrls(12),
  };
}

/** Coffee tours and the farm-to-table dinner read as bookable products. */
export function experienceNodes(locale: Locale) {
  return siteContent.experiences.map((exp) => ({
    "@type": "TouristAttraction",
    "@id": `${SITE_URL}/#${exp.slug}`,
    name: exp.title,
    description: exp.body,
    url: absoluteUrl(`/${locale}#experiences`),
    isAccessibleForFree: false,
    touristType: ["Couples", "Families", "Nature enthusiasts", "Wellness travellers"],
    containedInPlace: { "@id": `${SITE_URL}/#resort` },
  }));
}

export function websiteNode(locale: Locale) {
  return {
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: siteContent.meta.title,
    inLanguage: locale === "es" ? "es-CR" : "en-US",
    publisher: { "@id": `${SITE_URL}/#resort` },
  };
}
