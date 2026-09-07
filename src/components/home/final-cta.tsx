import { Button } from "@/components/button";
import { FadeIn } from "@/components/fade-in";

export function FinalCta() {
  return (
    <section className="py-24 lg:py-32" aria-label="Final call to action">
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
        <FadeIn>
          <h2 className="text-3xl font-light leading-tight tracking-tight text-primary-dark sm:text-4xl md:text-5xl lg:text-6xl">
            <span className="block">Ready For</span>
            <span className="block">A Smoother Move?</span>
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-text-secondary sm:text-lg">
            Tell us where you&apos;re going. We&apos;ll help you plan how to get
            there.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button href="/contact" variant="primary">
              Get Your Free Quote
            </Button>
            <Button href="/contact" variant="secondary" showArrow={false}>
              Contact Aureon
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
