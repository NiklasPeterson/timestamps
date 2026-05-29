export const SITE_URL = "https://timestamps.app";

export const AUTHOR = {
  "@type": "Person",
  name: "Niklas Peterson",
  url: "https://niklaspeterson.com",
} as const;

export const PUBLISHER = {
  "@type": "Organization",
  name: "timestamps.app",
  url: SITE_URL,
} as const;

const today = () => new Date().toISOString().slice(0, 10);

export function articleSchema({
  headline,
  description,
  path,
  datePublished,
}: {
  headline: string;
  description: string;
  path: string;
  datePublished: string;
}) {
  const url = `${SITE_URL}${path}`;
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    url,
    author: AUTHOR,
    publisher: PUBLISHER,
    datePublished,
    dateModified: today(),
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
  };
}

export const webApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "timestamps.app",
  url: SITE_URL,
  applicationCategory: "UtilitiesApplication",
  operatingSystem: "Any",
  description:
    "Free tool to generate Discord timestamps and UNIX timestamps from any date and time.",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  author: AUTHOR,
  datePublished: "2021-10-17",
  dateModified: today(),
};
