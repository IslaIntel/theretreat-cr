import type { Metadata } from "next";
import { Cormorant_Garamond, Archivo, Newsreader, Syne, DM_Sans } from "next/font/google";
import { setRequestLocale } from "next-intl/server";
import { ConceptSwitcher } from "../../../components/concepts/ConceptSwitcher";

/* Each direction gets its own typeface pairing — the fonts are half of what
   makes them read as genuinely different designs. */
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
});

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-archivo",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-newsreader",
});

const syne = Syne({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-syne",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm",
});

/** Previews must never outrank the live homepage. */
export const metadata: Metadata = {
  robots: { index: false, follow: false, nocache: true },
};

export default async function ConceptsLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div
      data-concept-shell
      className={`${cormorant.variable} ${archivo.variable} ${newsreader.variable} ${syne.variable} ${dmSans.variable}`}
    >
      <ConceptSwitcher locale={locale as "en" | "es"} />
      {children}
    </div>
  );
}
