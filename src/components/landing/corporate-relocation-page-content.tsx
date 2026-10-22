import Image from "next/image";
import {
  Building2,
  Check,
  Fuel,
  GraduationCap,
  HardHat,
  type LucideIcon,
} from "lucide-react";
import {
  callNowHref,
  companyLicense,
  images,
  services,
} from "@/lib/constants";
import {
  corporateLicensedActivities,
  corporatePartnerBenefits,
  corporatePartners,
} from "@/lib/corporate-relocation-content";
import { corporateRelocationImageAlt } from "@/lib/landing-images";
import { corporateRelocationSeo } from "@/lib/seo-content";
import { Button } from "@/components/button";
import { CinematicOverlay } from "@/components/cinematic-overlay";
import { FadeIn } from "@/components/fade-in";
import { ImageReveal } from "@/components/image-reveal";
import { SectionHeading } from "@/components/section-heading";

const partnerIcons: LucideIcon[] = [
  Building2,
  GraduationCap,
  HardHat,
  Fuel,
];

const corporateService = services.find(
  (s) => s.id === "office-commercial-relocation",
);

export function CorporateRelocationPageContent() {
  return (
    <>
      <section className="relative flex min-h-[65vh] items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={corporateService?.image ?? images.services.officeCommercial}
            alt={corporateService?.imageAlt ?? corporateRelocationImageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <CinematicOverlay />
        </div>
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 pt-32 lg:px-8 lg:pb-28">
          <FadeIn>
            <p className="mb-4 text-xs font-semibold tracking-[0.25em] text-accent uppercase">
              {corporateRelocationSeo.heroEyebrow}
            </p>
            <h1 className="max-w-4xl text-4xl font-light leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
              {corporateRelocationSeo.h1}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
              {corporateRelocationSeo.heroSubline}
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="/contact" variant="primary">
                {corporateRelocationSeo.cta.heading}
              </Button>
              <Button href={callNowHref} variant="outline" showArrow={false}>
                Call Now
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-24 lg:py-32" aria-label="Our partners">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <SectionHeading
              subtitle="Who We Work With"
              title="Our Partners"
              align="center"
              className="mx-auto mb-16"
            />
          </FadeIn>
          <div className="grid gap-5 sm:grid-cols-2">
            {corporatePartners.map((partner, index) => {
              const Icon = partnerIcons[index] ?? Building2;
              return (
                <FadeIn key={partner.title} delay={index * 0.06}>
                  <div className="h-full rounded-xl border border-border bg-surface p-6 shadow-[0_8px_24px_rgb(17_19_21/0.05)]">
                    <Icon
                      className="h-8 w-8 stroke-[1.25] text-accent"
                      aria-hidden="true"
                    />
                    <h3 className="mt-4 text-sm font-semibold tracking-wide text-primary-dark uppercase">
                      {partner.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                      {partner.description}
                    </p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      <section
        className="bg-primary-dark py-24 lg:py-32"
        aria-label="Licensed capabilities"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <SectionHeading
              subtitle="Licensed Capabilities"
              title="What We're Approved For"
              dark
              align="center"
              className="mx-auto mb-16"
            />
          </FadeIn>
          <div className="grid gap-8 lg:grid-cols-3">
            {corporateLicensedActivities.map((activity, index) => (
              <FadeIn key={activity.activityCode} delay={index * 0.08}>
                <div className="h-full border-l border-accent/40 pl-5 lg:border-l-0 lg:border-t lg:border-accent/40 lg:pl-0 lg:pt-6">
                  <p className="font-mono text-xs font-semibold tracking-widest text-accent">
                    Licence Activity {activity.activityCode}
                  </p>
                  <h3 className="mt-3 text-lg font-light tracking-wide text-white uppercase">
                    {activity.title}
                  </h3>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.15}>
            <p className="mx-auto mt-16 max-w-3xl text-center text-sm leading-relaxed text-white/60">
              Licence: {companyLicense.tradeName}, {companyLicense.licenceNumber}
              , Unified Licence {companyLicense.unifiedLicenceNumber}
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="bg-surface py-24 lg:py-32" aria-label="Why partner with us">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
            <div>
              <FadeIn>
                <SectionHeading
                  subtitle="Why Partner With Us"
                  title="Built For Recurring Work"
                  className="mb-10"
                />
              </FadeIn>
              <ul className="space-y-4">
                {corporatePartnerBenefits.map((benefit, index) => (
                  <FadeIn key={benefit} delay={index * 0.06}>
                    <li className="flex gap-3 text-sm leading-relaxed text-text-secondary sm:text-base">
                      <Check
                        className="mt-0.5 h-5 w-5 shrink-0 stroke-2 text-accent"
                        aria-hidden="true"
                      />
                      <span className="text-primary-dark">{benefit}</span>
                    </li>
                  </FadeIn>
                ))}
              </ul>
            </div>
            <FadeIn delay={0.1}>
              <ImageReveal
                src={images.services.officeCommercial}
                alt={corporateRelocationImageAlt}
                className="aspect-4/5 w-full rounded-xl"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32" aria-label="Corporate quote">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <FadeIn>
            <p className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">
              {corporateRelocationSeo.cta.subheading}
            </p>
            <h2 className="mt-4 text-3xl font-light tracking-tight text-primary-dark sm:text-4xl md:text-5xl">
              {corporateRelocationSeo.cta.heading}
            </h2>
            <div className="mx-auto mt-6 h-px w-14 bg-accent" />
            <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-text-secondary">
              {corporateRelocationSeo.cta.body}
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Button href="/contact" variant="primary">
                {corporateRelocationSeo.cta.heading}
              </Button>
              <Button href={callNowHref} variant="secondary" showArrow={false}>
                Call Now
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
