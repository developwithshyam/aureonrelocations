import { FaqSection } from "@/components/faq-section";
import { HomeRelocationPageContent } from "@/components/landing/home-relocation-page-content";
import { FaqPageJsonLd } from "@/components/structured-data";
import { homeRelocationFaqs } from "@/lib/home-relocation-content";
import { createPageMetadata } from "@/lib/metadata";
import { homeRelocationSeo } from "@/lib/seo-content";

export const metadata = createPageMetadata({
  title: homeRelocationSeo.title,
  description: homeRelocationSeo.description,
  path: "/home-relocation",
});

export default function HomeRelocationPage() {
  return (
    <>
      <FaqPageJsonLd faqs={homeRelocationFaqs} />
      <HomeRelocationPageContent />
      <FaqSection faqs={homeRelocationFaqs} className="bg-background py-24 lg:py-32" />
    </>
  );
}
