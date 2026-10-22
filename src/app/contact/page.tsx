import Image from "next/image";
import Link from "next/link";
import { images } from "@/lib/constants";
import { createPageMetadata } from "@/lib/metadata";
import { contactSeo } from "@/lib/seo-content";
import { ContactForm } from "@/components/contact-form";
import { ContactInfoCard } from "@/components/contact-info-card";
import { FaqSection } from "@/components/faq-section";
import { FadeIn } from "@/components/fade-in";
import { LicenseDetails } from "@/components/license-details";
import {
  BreadcrumbListJsonLd,
  FaqPageJsonLd,
} from "@/components/structured-data";

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Contact", path: "/contact" },
];

export const metadata = createPageMetadata({
  title: contactSeo.title,
  description: contactSeo.description,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <BreadcrumbListJsonLd items={breadcrumbs} />
      <FaqPageJsonLd faqs={[...contactSeo.faqs]} />

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
          <FadeIn>
            <div className="mx-auto mb-12 max-w-3xl lg:mb-16">
              <h2 className="text-3xl font-light tracking-tight text-primary-dark sm:text-4xl">
                {contactSeo.intro.heading}
              </h2>
              <p className="mt-6 text-base leading-relaxed text-text-secondary sm:text-lg">
                {contactSeo.intro.body}
              </p>
              <p className="mt-4 text-base leading-relaxed text-text-secondary sm:text-lg">
                <Link
                  href="/services"
                  className="font-medium text-primary-dark underline decoration-accent/40 underline-offset-4 transition-colors hover:decoration-accent"
                >
                  {contactSeo.intro.servicesLabel}
                </Link>
                {" · "}
                <Link
                  href="/about"
                  className="font-medium text-primary-dark underline decoration-accent/40 underline-offset-4 transition-colors hover:decoration-accent"
                >
                  {contactSeo.intro.aboutLabel}
                </Link>
              </p>
            </div>
          </FadeIn>

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

      <FaqSection faqs={[...contactSeo.faqs]} />
    </>
  );
}
