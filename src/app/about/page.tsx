import Image from "next/image";
import { images } from "@/lib/constants";
import { createPageMetadata } from "@/lib/metadata";
import { aboutSeo } from "@/lib/seo-content";
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
              {aboutSeo.h1Lines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
              {aboutSeo.heroSubline}
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-24 lg:py-32" aria-label="Our story">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-light tracking-tight text-primary-dark sm:text-4xl">
                {aboutSeo.story.heading}
              </h2>
              <div className="mt-6 space-y-6">
                {aboutSeo.story.body.map((paragraph) => (
                  <p
                    key={paragraph.slice(0, 48)}
                    className="text-base leading-relaxed text-text-secondary sm:text-lg"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="bg-surface py-24 lg:py-32" aria-label="Our promise">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-light tracking-tight text-primary-dark sm:text-4xl">
                {aboutSeo.promise.heading}
              </h2>
              <div className="mt-6 space-y-6">
                {aboutSeo.promise.body.map((paragraph) => (
                  <p
                    key={paragraph.slice(0, 48)}
                    className="text-base leading-relaxed text-text-secondary sm:text-lg"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-24 lg:py-32" aria-label="Licensing and credentials">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <div className="mx-auto mb-12 max-w-3xl lg:mb-16">
              <h2 className="text-3xl font-light tracking-tight text-primary-dark sm:text-4xl">
                {aboutSeo.licensing.heading}
              </h2>
              <div className="mt-6 space-y-6">
                {aboutSeo.licensing.body.map((paragraph) => (
                  <p
                    key={paragraph.slice(0, 48)}
                    className="text-base leading-relaxed text-text-secondary sm:text-lg"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <LicenseDetails variant="full" showLogos />
          </FadeIn>
        </div>
      </section>

      <section className="bg-surface py-24 lg:py-32" aria-label="Why choose Aureon">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <div className="mx-auto mb-12 max-w-3xl lg:mb-16">
              <h2 className="text-3xl font-light tracking-tight text-primary-dark sm:text-4xl">
                {aboutSeo.whyChoose.heading}
              </h2>
              <p className="mt-6 text-base leading-relaxed text-text-secondary sm:text-lg">
                {aboutSeo.whyChoose.intro}
              </p>
            </div>
          </FadeIn>
          <div className="grid gap-5 sm:grid-cols-2">
            {aboutSeo.whyChoose.points.map((point, index) => (
              <FadeIn key={point.title} delay={index * 0.06}>
                <div className="h-full rounded-xl bg-background p-6 shadow-[0_8px_24px_rgb(17_19_21/0.05)] sm:p-8">
                  <h3 className="text-lg font-medium tracking-tight text-primary-dark">
                    {point.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-text-secondary sm:text-base">
                    {point.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32" aria-label="Areas we serve">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-light tracking-tight text-primary-dark sm:text-4xl">
                {aboutSeo.areas.heading}
              </h2>
              <p className="mt-6 text-base leading-relaxed text-text-secondary sm:text-lg">
                {aboutSeo.areas.body}
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="bg-primary-dark py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <FadeIn>
            <h2 className="text-3xl font-light tracking-tight text-white sm:text-4xl md:text-5xl">
              {aboutSeo.cta.heading}
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
              {aboutSeo.cta.body}
            </p>
            <div className="mt-10">
              <Button href="/contact" variant="primary">
                {aboutSeo.cta.button}
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
