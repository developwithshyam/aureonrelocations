import Image from "next/image";
import { services, callNowHref } from "@/lib/constants";
import {
  corporateAureonResponses,
  corporateDeliveryPhases,
  corporateHrChallenges,
  corporateRelocationMetrics,
} from "@/lib/corporate-relocation-content";
import { corporateRelocationSeo } from "@/lib/seo-content";
import { Button } from "@/components/button";
import { CinematicOverlay } from "@/components/cinematic-overlay";
import { FadeIn } from "@/components/fade-in";
import { LicenseDetails } from "@/components/license-details";
import { SectionHeading } from "@/components/section-heading";

const corporateService = services.find((s) => s.id === "corporate-relocation");

export function CorporateRelocationPageContent() {
  const features = corporateService?.features ?? [];

  return (
    <>
      <section className="relative flex min-h-[65vh] items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={corporateService?.image ?? services[2].image}
            alt={
              corporateService?.imageAlt ??
              "Corporate relocation services in Abu Dhabi"
            }
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
              Corporate Relocation
            </p>
            <h1 className="max-w-4xl text-4xl font-light leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
              {corporateRelocationSeo.h1}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
              {corporateRelocationSeo.heroSubline}
            </p>
            <div className="mt-10">
              <Button href="/contact" variant="primary">
                Schedule a Consultation
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      <section
        className="border-b border-border bg-surface py-12 lg:py-16"
        aria-label="Corporate highlights"
      >
        <div className="mx-auto grid max-w-7xl gap-8 px-6 sm:grid-cols-3 lg:px-8">
          {corporateRelocationMetrics.map((item, index) => (
            <FadeIn key={item.label} delay={index * 0.08}>
              <div className="text-center sm:text-left">
                <p className="text-sm font-semibold tracking-wide text-primary-dark uppercase">
                  {item.label}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                  {item.detail}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {features.length > 0 && (
        <section className="py-24 lg:py-32" aria-label="Capabilities">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <FadeIn>
              <SectionHeading
                title="Corporate Capabilities"
                description="Structured relocation support designed for HR teams, operations leaders, and growing organizations."
                className="mb-16"
              />
            </FadeIn>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, index) => (
                <FadeIn key={feature} delay={index * 0.05}>
                  <div className="rounded-lg border border-border bg-surface px-5 py-6">
                    <span className="text-xs font-semibold tracking-widest text-accent">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="mt-3 text-sm font-medium text-primary-dark">
                      {feature}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-surface py-24 lg:py-32" aria-label="For HR and leadership">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <SectionHeading
              title="For HR & Leadership"
              description="Corporate moves fail when coordination fails. We built our model around the pressures your team actually faces."
              align="center"
              className="mx-auto mb-16"
            />
          </FadeIn>
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <FadeIn>
              <h3 className="text-xs font-semibold tracking-[0.2em] text-text-secondary uppercase">
                Common challenges
              </h3>
              <ul className="mt-6 space-y-3">
                {corporateHrChallenges.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm leading-relaxed text-text-secondary"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-text-secondary" />
                    {item}
                  </li>
                ))}
              </ul>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h3 className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">
                The Aureon response
              </h3>
              <ul className="mt-6 space-y-3">
                {corporateAureonResponses.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm leading-relaxed text-primary-dark"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="bg-primary-dark py-24 lg:py-32" aria-label="Delivery model">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <SectionHeading
              subtitle="Delivery model"
              title="From Discovery to Handover"
              dark
              className="mb-16 lg:mb-20"
            />
          </FadeIn>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {corporateDeliveryPhases.map((phase, index) => (
              <FadeIn key={phase.number} delay={index * 0.08}>
                <div className="border-l border-accent/40 pl-5">
                  <span className="text-xs font-semibold tracking-widest text-accent">
                    {phase.number}
                  </span>
                  <h3 className="mt-3 text-lg font-light tracking-wide text-white uppercase">
                    {phase.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/60">
                    {phase.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32" aria-label="License">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <span className="inline-block rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-semibold tracking-widest text-accent uppercase">
                Licensed &amp; Registered
              </span>
              <h2 className="mt-6 text-3xl font-light tracking-tight text-primary-dark sm:text-4xl">
                Accountability You Can Verify
              </h2>
              <p className="mt-4 text-base leading-relaxed text-text-secondary">
                Corporate programs require vendors you can stand behind. Aureon
                operates as a licensed Abu Dhabi trader with full registration
                on record.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <LicenseDetails variant="full" />
          </FadeIn>
        </div>
      </section>

      <section className="bg-surface py-24 lg:py-32" aria-label="Corporate consultation">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <FadeIn>
            <h2 className="text-3xl font-light tracking-tight text-primary-dark sm:text-4xl md:text-5xl">
              Start Your Corporate Program
            </h2>
            <div className="mx-auto mt-6 h-px w-14 bg-accent" />
            <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-text-secondary">
              Tell us about your employee relocations, timelines, and policy
              requirements. We&apos;ll respond with a structured plan.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Button href="/contact" variant="primary">
                Schedule a Consultation
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
