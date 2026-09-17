import { FadeIn } from "@/components/fade-in";
import { QuoteForm } from "@/components/quote-form";
import { homeSeo } from "@/lib/seo-content";

export function QuickQuote() {
  return (
    <section
      className="bg-surface pb-24 lg:pb-32"
      aria-label="Plan your move"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn className="mx-auto w-full max-w-4xl">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-light tracking-tight text-primary-dark sm:text-3xl">
              {homeSeo.quote.heading}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-text-secondary sm:text-lg">
              {homeSeo.quote.subheading}
            </p>
          </div>
          <QuoteForm centered hideFormHeading />
          <p className="mt-6 text-center text-sm leading-relaxed text-text-secondary">
            {homeSeo.quote.supportingLine}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
