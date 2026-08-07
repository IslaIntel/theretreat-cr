import { useTranslations } from "next-intl";
import { siteContent } from "../lib/content";

export function SiteFooter({ locale }: { locale: "en" | "es" }) {
  const t = useTranslations("footer");

  return (
    <footer className="section-ink border-t border-white/10">
      <div className="container grid gap-10 py-16 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="font-[family-name:var(--font-display)] text-3xl">
            The Retreat
          </p>
          <p className="mt-3 max-w-sm text-[color:var(--sand)]">
            {t("tagline")}
          </p>
          <p className="mt-6 text-sm text-[color:var(--sand)]">
            {siteContent.meta.location}
          </p>
        </div>
        <div>
          <p className="eyebrow">{t("contact")}</p>
          <ul className="mt-4 space-y-2 text-[color:var(--cream)]">
            <li>
              <a href={`/${locale}/book`}>Book</a>
            </li>
            <li>
              <a href="mailto:elizabethcannva@gmail.com">
                elizabethcannva@gmail.com
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="eyebrow">{t("follow")}</p>
          <ul className="mt-4 space-y-2">
            <li>
              <a href={siteContent.social.instagram} target="_blank" rel="noreferrer">
                Instagram
              </a>
            </li>
            <li>
              <a href={siteContent.social.facebook} target="_blank" rel="noreferrer">
                Facebook
              </a>
            </li>
            <li>
              <a href="https://bluemountainfarms.cr">Blue Mountain Farms</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container border-t border-white/10 py-6 text-xs text-[color:var(--sand)]">
        © {new Date().getFullYear()} The Retreat at Blue Mountain Farms
      </div>
    </footer>
  );
}
