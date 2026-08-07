import type { Metadata } from "next";
import { Instrument_Serif, Public_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const sans = Public_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-public-sans",
  weight: ["300", "400", "500", "600"],
});

const display = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-instrument",
  weight: "400",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: {
    default: "The Retreat at Blue Mountain Farms",
    template: "%s · The Retreat",
  },
  description:
    "Luxury eco-retreat in Chinampas, Guanacaste — mountain-view villas, organic farm, coffee tours, fifteen minutes from Sámara Beach.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${display.variable} ${mono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
