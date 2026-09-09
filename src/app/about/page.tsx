import Image from "next/image";
import { images } from "@/lib/constants";
import { createPageMetadata } from "@/lib/metadata";
import { aboutSeo, homeSeo } from "@/lib/seo-content";
import { Button } from "@/components/button";
import { FadeIn } from "@/components/fade-in";
import { LicenseDetails } from "@/components/license-details";

export const metadata = createPageMetadata({
  title: aboutSeo.title,
  description: aboutSeo.description,
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <section className="relative flex min-h-[70vh] items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={images.aboutHero}
            alt="Trusted moving company in Abu Dhabi — Aureon Relocations team"
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
              About Aureon
            </p>
            <h1 className="max-w-3xl text-4xl font-light leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
              {aboutSeo.h1}
            </h1>
          </FadeIn>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <div className="mx-auto max-w-3xl space-y-8">
              <div className="space-y-6">
                {homeSeo.intro.map((paragraph) => (
                  <p
                    key={paragraph.slice(0, 48)}
                    className="text-base leading-relaxed text-text-secondary sm:text-lg"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              <p className="text-base leading-relaxed text-text-secondary sm:text-lg">
                {aboutSeo.intro}
              </p>

              <div>
                <h2 className="text-2xl font-light tracking-tight text-primary-dark sm:text-3xl">
                  {aboutSeo.whyHeading}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-text-secondary sm:text-lg">
                  {aboutSeo.whyBody}
                </p>
              </div>

              <div>
                <p className="text-base leading-relaxed text-text-secondary sm:text-lg">
                  {aboutSeo.principlesHeading}
                </p>
                <ul className="mt-6 space-y-3">
                  {aboutSeo.principles.map((principle) => (
                    <li
                      key={principle.title}
                      className="flex items-start gap-3 text-base text-text-secondary"
                    >
                      <span className="mt-0.5 font-medium text-primary-dark">
                        {principle.title}
                      </span>
                      <span>— {principle.description}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-light tracking-tight text-primary-dark sm:text-3xl">
                  {aboutSeo.movesHeading}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-text-secondary sm:text-lg">
                  {aboutSeo.movesBody}
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="bg-surface py-24 lg:py-32" aria-label="Company registration">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <div className="mx-auto mb-12 max-w-2xl text-center lg:mb-16">
              <span className="inline-block rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-semibold tracking-widest text-accent uppercase">
                Licensed &amp; Insured
              </span>
              <h2 className="mt-6 text-3xl font-light tracking-tight text-primary-dark sm:text-4xl">
                Licensed &amp; Registered
              </h2>
              <p className="mt-4 text-base leading-relaxed text-text-secondary">
                Aureon operates as a licensed Abu Dhabi trader, registered with
                the relevant authorities in the United Arab Emirates.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <LicenseDetails variant="full" showLogos />
          </FadeIn>
        </div>
      </section>

      <section className="bg-primary-dark py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <FadeIn>
            <h2 className="text-3xl font-light tracking-tight text-white sm:text-4xl md:text-5xl">
              Let&apos;s Make Your Next Move Easier.
            </h2>
            <div className="mt-10">
              <Button href="/contact" variant="primary">
                Get a Free Quote
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
