import { Hero } from "@/components/home/hero";
import { TrustSection } from "@/components/home/trust-section";
import { QuickQuote } from "@/components/home/quick-quote";
import { ServicesGrid } from "@/components/home/services-grid";
import { MovingJourney } from "@/components/home/moving-journey";
import { WhyAureon } from "@/components/home/why-aureon";
import { BrandStatement } from "@/components/home/brand-statement";
import { LocalNearMe } from "@/components/home/local-near-me";
import { ResidentialCommercial } from "@/components/home/residential-commercial";
import { VillaMoversCallout } from "@/components/home/villa-movers-callout";
import { Testimonials } from "@/components/home/testimonials";
import { FinalCta } from "@/components/home/final-cta";
import { FaqSection } from "@/components/faq-section";
import { FaqPageJsonLd } from "@/components/structured-data";
import { siteFaqs } from "@/lib/constants";
import { createPageMetadata } from "@/lib/metadata";
import { homeSeo } from "@/lib/seo-content";

export const metadata = createPageMetadata({
  title: homeSeo.title,
  description: homeSeo.description,
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <FaqPageJsonLd faqs={siteFaqs} />
      <Hero />
      <ResidentialCommercial />

      <TrustSection />
      <QuickQuote />
      <ServicesGrid />
      <VillaMoversCallout />
      <MovingJourney />
      <WhyAureon />
      <BrandStatement />
      <LocalNearMe />
      {/* <Testimonials /> */}
      <FinalCta />
      <FaqSection faqs={siteFaqs} />
    </>
  );
}
