import type { Metadata } from "next";

const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.aureonrelocations.ae"
).replace(/\/$/, "");

function pageUrl(path = "") {
  if (!path || path === "/") {
    return `${siteUrl}/`;
  }

  return `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
}

export function createPageMetadata({
  title,
  description,
  path = "",
}: {
  title: string;
  description: string;
  path?: string;
}): Metadata {
  const url = pageUrl(path);

  return {
    metadataBase: new URL(siteUrl),
    title,
    description,
    alternates: {
      canonical: url,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "Aureon Relocations",
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export const rootLayoutMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Aureon Relocations | Professional Moving & Relocation Services",
    template: "%s",
  },
  description:
    "Aureon Relocations provides professional residential, commercial, corporate, and international relocation solutions in Abu Dhabi, UAE.",
};

export { siteUrl };
