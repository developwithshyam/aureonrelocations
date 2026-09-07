import Image from "next/image";
import { aboutSections, images, principles } from "@/lib/constants";
import { createPageMetadata } from "@/lib/metadata";
import { Button } from "@/components/button";
import { FadeIn } from "@/components/fade-in";
import { SectionHeading } from "@/components/section-heading";

export const metadata = createPageMetadata({
  title: "About Aureon Relocations | Professional Relocation Services",
  description:
    "Learn about Aureon Relocations — professional relocation solutions built around careful planning, reliable execution, and customer care.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <section className="relative flex min-h-[70vh] items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={images.aboutHero}
            alt="Modern elegant home interior representing a fresh start"
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
              <span className="block">Built Around</span>
              <span className="block">One Simple Idea.</span>
            </h1>
          </FadeIn>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl font-light tracking-tight text-primary-dark sm:text-4xl md:text-5xl lg:text-6xl">
              Moving Should
              <br />
              Feel Easier.
            </h2>
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-text-secondary sm:text-lg">
              Aureon Relocations provides professional relocation solutions
              designed around careful planning, reliable execution, and customer
              care.
            </p>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-text-secondary sm:text-lg">
              From residential moves to commercial and corporate relocations, we
              focus on making every stage of the journey organized, transparent,
              and dependable.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="bg-surface py-24 lg:py-32" aria-label="People, Process, Precision">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <SectionHeading
              title="People. Process. Precision."
              align="center"
              className="mx-auto mb-16 lg:mb-20"
            />
          </FadeIn>

          <div className="grid gap-12 lg:grid-cols-3 lg:gap-8">
            {aboutSections.map((section, index) => (
              <FadeIn key={section.title} delay={index * 0.12}>
                <div className="border-t border-border pt-8">
                  <h3 className="text-sm font-semibold tracking-widest text-accent uppercase">
                    {section.title}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-text-secondary">
                    {section.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32" aria-label="Values">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {principles.map((principle, index) => (
              <FadeIn key={principle.title} delay={index * 0.08}>
                <div className="text-center">
                  <p className="text-lg font-light tracking-widest text-primary-dark uppercase sm:text-xl">
                    {principle.title}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
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
