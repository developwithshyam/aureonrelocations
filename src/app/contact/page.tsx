import Image from "next/image";
import { images } from "@/lib/constants";
import { createPageMetadata } from "@/lib/metadata";
import { ContactForm } from "@/components/contact-form";
import { ContactInfoCard } from "@/components/contact-info-card";
import { FadeIn } from "@/components/fade-in";
import { LicenseDetails } from "@/components/license-details";

export const metadata = createPageMetadata({
  title: "Contact Aureon Relocations | Get a Free Quote",
  description:
    "Contact Aureon Relocations to request a free quote. Tell us about your move and we'll help you plan the next step.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <section className="relative flex min-h-[50vh] items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={images.contactHero}
            alt="Contact Aureon Relocations for your moving needs"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-primary-dark/60" />
        </div>
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-16 pt-32 lg:px-8 lg:pb-20">
          <FadeIn>
            <h1 className="max-w-2xl text-4xl font-light leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
              <span className="block">Let&apos;s Get</span>
              <span className="block">You Moving.</span>
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-white/75 sm:text-lg">
              Tell us a little about your move and we&apos;ll help you plan the
              next step.
            </p>
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
    </>
  );
}
