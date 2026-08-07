import content from "../../content/retreat/content.json";
import images from "../../content/retreat/images.json";

export type SiteImage = { file: string; url: string; src: string };

export const siteContent = content;
export const siteImages = images as SiteImage[];

export function img(index: number, fallback = "/images/TheRetreat.47.jpg") {
  return siteImages[index]?.src ?? fallback;
}

export function imgByFile(partial: string, fallback = "/images/TheRetreat.47.jpg") {
  const hit = siteImages.find((i) =>
    i.file.toLowerCase().includes(partial.toLowerCase()),
  );
  return hit?.src ?? fallback;
}

export function getAccommodation(slug: string) {
  return siteContent.accommodations.find((a) => a.slug === slug);
}
