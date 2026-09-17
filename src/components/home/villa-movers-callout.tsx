import { homeSeo } from "@/lib/seo-content";
import { FadeIn } from "@/components/fade-in";

export function VillaMoversCallout() {
  return (
    <section
      className="border-y border-border bg-background py-16 lg:py-20"
      aria-label="Professional villa movers"
    >
      <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
        <FadeIn>
          <h2 className="text-2xl font-light tracking-tight text-primary-dark sm:text-3xl">
            {homeSeo.villaCallout.heading}
          </h2>
          <p className="mt-6 text-base leading-relaxed text-text-secondary sm:text-lg">
            {homeSeo.villaCallout.body}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
