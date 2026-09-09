import {
  companyLicense,
  contactInfo,
  services,
} from "@/lib/constants";
import { siteUrl } from "@/lib/metadata";

type JsonLdProps = {
  data: Record<string, unknown> | Record<string, unknown>[];
};

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function LocalBusinessJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "MovingCompany",
    "@id": `${siteUrl}/#organization`,
    name: "Aureon Relocations",
    legalName: companyLicense.tradeName,
    url: siteUrl,
    email: contactInfo.email,
    telephone: contactInfo.phones[0],
    areaServed: {
      "@type": "City",
      name: "Abu Dhabi",
      containedInPlace: {
        "@type": "Country",
        name: "United Arab Emirates",
      },
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Abu Dhabi",
      addressCountry: "AE",
    },
    description:
      "Professional moving company in Abu Dhabi offering residential, commercial, corporate, and international relocation services.",
    identifier: companyLicense.licenceNumber,
  };

  return <JsonLd data={data} />;
}

export function ServicesItemListJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Aureon Relocation Services",
    itemListElement: services.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: service.title,
        description: service.description,
        url: `${siteUrl}/services#${service.id}`,
        provider: {
          "@type": "MovingCompany",
          name: "Aureon Relocations",
        },
        areaServed: "Abu Dhabi, UAE",
      },
    })),
  };

  return <JsonLd data={data} />;
}

export function FaqPageJsonLd({
  faqs,
}: {
  faqs: { question: string; answer: string }[];
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return <JsonLd data={data} />;
}
