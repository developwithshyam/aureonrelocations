import Image from "next/image";
import { images } from "@/lib/constants";
import { homeSeo } from "@/lib/seo-content";
import { FadeIn } from "@/components/fade-in";

export function WhyAureon() {
  return (
    <section className="py-24 lg:py-32" aria-label="How we're different">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <FadeIn>
            <div>
              <h2 className="text-3xl font-light leading-tight tracking-tight text-primary-dark sm:text-4xl md:text-5xl">
                {homeSeo.differentiators.title}
              </h2>
              <p className="mt-6 text-base leading-relaxed text-text-secondary sm:text-lg">
                {homeSeo.differentiators.intro}
              </p>

              <div className="mt-12 grid gap-8 sm:grid-cols-2">
                {homeSeo.differentiators.points.map((point, index) => (
                  <FadeIn key={point.title} delay={index * 0.1}>
                    <div>
                      <h3 className="text-sm font-semibold tracking-wide text-primary-dark">
                        {point.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                        {point.description}
                      </p>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="right" delay={0.2}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-lg">
              <Image
                src={images.whyAureon}
                alt="Professional mover carefully handling furniture in an elegant interior"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
