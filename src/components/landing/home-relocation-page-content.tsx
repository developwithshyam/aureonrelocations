import Image from "next/image";
import {
  Clock,
  Heart,
  Home,
  Shield,
  type LucideIcon,
} from "lucide-react";
import {
  callNowHref,
  images,
  services,
} from "@/lib/constants";
import {
  homeRelocationCareSteps,
  homeRelocationEmpathy,
  homeRelocationPriorities,
  homeRelocationStories,
} from "@/lib/home-relocation-content";
import { homeRelocationImageAlt } from "@/lib/landing-images";
import { homeRelocationSeo } from "@/lib/seo-content";
import { Button } from "@/components/button";
import { CinematicOverlay } from "@/components/cinematic-overlay";
import { FadeIn } from "@/components/fade-in";
import { QuoteForm } from "@/components/quote-form";
import { SectionHeading } from "@/components/section-heading";
import { cn } from "@/lib/utils";

const priorityIcons: LucideIcon[] = [Heart, Home, Shield, Clock];

const residentialService = services.find((s) => s.id === "home-relocation");

export function HomeRelocationPageContent() {
  const features = residentialService?.features ?? [];

  return (
    <>
      <section className="relative flex min-h-[70vh] items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={images.residential}
            alt={homeRelocationImageAlt}
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
              Home Relocation
            </p>
            <h1 className="max-w-3xl text-4xl font-light leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
              {homeRelocationSeo.h1}
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
              {homeRelocationSeo.heroSubline}
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="#plan-your-move" variant="primary">
                Plan Your Move
              </Button>
              <Button href="/contact" variant="outline" showArrow={false}>
                Talk to Aureon
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="bg-surface py-24 lg:py-32" aria-label="Understanding your move">
        <div className="mx-auto max-w-3xl space-y-8 px-6 lg:px-8">
          {homeRelocationEmpathy.map((paragraph, index) => (
            <FadeIn key={index} delay={index * 0.08}>
              <p className="text-base leading-relaxed text-text-secondary sm:text-lg">
                {paragraph}
              </p>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="py-24 lg:py-32" aria-label="What matters to you">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <SectionHeading
              title="What Matters to You"
              description="A home move should honour the life you're leaving and the one you're stepping into."
              align="center"
              className="mx-auto mb-16"
            />
          </FadeIn>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {homeRelocationPriorities.map((item, index) => {
              const Icon = priorityIcons[index] ?? Heart;
              return (
                <FadeIn key={item.title} delay={index * 0.06}>
                  <div className="h-full rounded-xl bg-surface p-6 shadow-[0_8px_24px_rgb(17_19_21/0.05)]">
                    <Icon
                      className="h-8 w-8 text-accent stroke-[1.25]"
                      aria-hidden="true"
                    />
                    <h3 className="mt-4 text-sm font-semibold tracking-wide text-primary-dark uppercase">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                      {item.description}
                    </p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-surface py-24 lg:py-32" aria-label="Stories">
        <div className="mx-auto max-w-7xl space-y-24 px-6 lg:space-y-32 lg:px-8">
          {homeRelocationStories.map((story, index) => (
            <div
              key={story.title}
              className={cn(
                "grid items-center gap-12 lg:grid-cols-2 lg:gap-20",
                index % 2 === 1 && "lg:[&>*:first-child]:order-2",
              )}
            >
              <FadeIn direction={index % 2 === 0 ? "left" : "right"}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-[0_24px_50px_rgb(17_19_21/0.12)]">
                  <Image
                    src={story.image}
                    alt={story.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </FadeIn>
              <FadeIn
                direction={index % 2 === 0 ? "right" : "left"}
                delay={0.1}
              >
                <h2 className="text-2xl font-light tracking-tight text-primary-dark sm:text-3xl">
                  {story.title}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-text-secondary sm:text-lg">
                  {story.body}
                </p>
              </FadeIn>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 lg:py-32" aria-label="How Aureon cares">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <SectionHeading
              title="How Aureon Cares"
              description="Four gentle steps — the same care from your first call to the last box placed."
              align="center"
              className="mx-auto mb-16"
            />
          </FadeIn>
          <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {homeRelocationCareSteps.map((step, index) => (
              <FadeIn key={step.step} delay={index * 0.08}>
                <li className="rounded-xl border border-border bg-background p-6">
                  <span className="text-xs font-semibold tracking-widest text-accent">
                    {step.step}
                  </span>
                  <h3 className="mt-3 text-lg font-medium text-primary-dark">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                    {step.description}
                  </p>
                </li>
              </FadeIn>
            ))}
          </ol>
        </div>
      </section>

      {features.length > 0 && (
        <section className="bg-surface py-24 lg:py-32" aria-label="What's included">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <FadeIn>
              <SectionHeading
                title="What's Included"
                description="Everything you need for a residential move in Abu Dhabi — planned, packed, and delivered with care."
                align="center"
                className="mx-auto mb-12"
              />
            </FadeIn>
            <FadeIn delay={0.1}>
              <ul className="mx-auto grid max-w-3xl gap-3 sm:grid-cols-2">
                {features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-sm text-text-secondary"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {feature}
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </section>
      )}

      <section
        id="plan-your-move"
        className="scroll-mt-36 py-24 lg:py-32"
        aria-label="Plan your move"
      >
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <FadeIn>
            <QuoteForm centered />
          </FadeIn>
        </div>
      </section>

      <section className="bg-primary-dark py-24 lg:py-32" aria-label="Call to action">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <FadeIn>
            <h2 className="text-3xl font-light tracking-tight text-white sm:text-4xl md:text-5xl">
              Ready to feel at home in your new space?
            </h2>
            <div className="mx-auto mt-6 h-px w-14 bg-accent" />
            <p className="mx-auto mt-6 max-w-lg text-base text-white/70">
              Call our team or request a quote — we&apos;ll take it from there.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Button href={callNowHref} variant="primary">
                Call Now
              </Button>
              <Button href="/contact" variant="outline" showArrow={false}>
                Contact Us
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
