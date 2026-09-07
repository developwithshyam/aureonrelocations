import { Hero } from "@/components/home/hero";
import { QuickQuote } from "@/components/home/quick-quote";
import { TrustSection } from "@/components/home/trust-section";
import { ServicesGrid } from "@/components/home/services-grid";
import { MovingJourney } from "@/components/home/moving-journey";
import { WhyAureon } from "@/components/home/why-aureon";
import { BrandStatement } from "@/components/home/brand-statement";
import { ResidentialCommercial } from "@/components/home/residential-commercial";
import { Testimonials } from "@/components/home/testimonials";
import { FinalCta } from "@/components/home/final-cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <QuickQuote />
      <TrustSection />
      <ServicesGrid />
      <MovingJourney />
      <WhyAureon />
      <BrandStatement />
      <ResidentialCommercial />
      <Testimonials />
      <FinalCta />
    </>
  );
}
