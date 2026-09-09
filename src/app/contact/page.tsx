import Image from "next/image";
import { images } from "@/lib/constants";
import { createPageMetadata } from "@/lib/metadata";
import { contactSeo } from "@/lib/seo-content";
import { ContactForm } from "@/components/contact-form";
import { ContactInfoCard } from "@/components/contact-info-card";
import { FaqSection } from "@/components/faq-section";
import { FadeIn } from "@/components/fade-in";
import { LicenseDetails } from "@/components/license-details";
import { FaqPageJsonLd } from "@/components/structured-data";
import { siteFaqs } from "@/lib/constants";

export const metadata = createPageMetadata({
  title: contactSeo.title,
  description: contactSeo.description,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <FaqPageJsonLd faqs={siteFaqs} />

      <section className="relative flex min-h-[50vh] items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={images.contactHero}
            alt="Contact movers near me in Abu Dhabi — Aureon Relocations"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-primary-dark/60" />
        </div>
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-16 pt-32 lg:px-8 lg:pb-20">
          <FadeIn>
            <h1 className="max-w-3xl text-4xl font-light leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
              {contactSeo.h1}
            </h1>
          </FadeIn>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
            <FadeIn>
              <ContactForm />
            </FadeIn>

            <FadeIn delay={0.1}>
              <ContactInfoCard />
            </FadeIn>

            <FadeIn delay={0.15} className="lg:col-span-2">
              <LicenseDetails variant="full" showLogos />
            </FadeIn>
          </div>
        </div>
      </section>

      <FaqSection faqs={siteFaqs} className="py-24 lg:py-32" />
    </>
  );
}
