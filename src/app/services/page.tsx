import Image from "next/image";
import { images } from "@/lib/constants";
import { createPageMetadata } from "@/lib/metadata";
import { servicesSeo } from "@/lib/seo-content";
import { Button } from "@/components/button";
import { FaqSection } from "@/components/faq-section";
import { FadeIn } from "@/components/fade-in";
import {
  FaqPageJsonLd,
  ServicesItemListJsonLd,
} from "@/components/structured-data";
import {
  ServiceDetailBlocks,
  ServicesNav,
} from "@/components/services-page-content";

export const metadata = createPageMetadata({
  title: servicesSeo.title,
  description: servicesSeo.description,
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <ServicesItemListJsonLd />
      <FaqPageJsonLd faqs={[...servicesSeo.faqs]} />

      <section className="relative flex min-h-[60vh] items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={images.servicesHero}
            alt="Moving services in Abu Dhabi — Aureon Relocations"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-primary-dark/60" />
        </div>
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 pt-32 lg:px-8 lg:pb-28">
          <FadeIn>
            <p className="mb-4 text-xs font-semibold tracking-[0.25em] text-accent uppercase">
              {servicesSeo.eyebrow}
            </p>
            <h1 className="max-w-3xl text-4xl font-light leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
              {servicesSeo.h1Lines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
              {servicesSeo.heroSubline}
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-16 lg:py-20" aria-label="Services overview">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-light tracking-tight text-primary-dark sm:text-4xl">
                {servicesSeo.intro.heading}
              </h2>
              <p className="mt-6 text-base leading-relaxed text-text-secondary sm:text-lg">
                {servicesSeo.intro.body}
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <ServicesNav />
      <ServiceDetailBlocks />

      <section className="bg-primary-dark py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <FadeIn>
            <h2 className="text-3xl font-light tracking-tight text-white sm:text-4xl md:text-5xl">
              {servicesSeo.cta.heading}
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
              {servicesSeo.cta.body}
            </p>
            <div className="mt-10">
              <Button href="/contact" variant="primary">
                {servicesSeo.cta.button}
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      <FaqSection faqs={[...servicesSeo.faqs]} />
    </>
  );
}
