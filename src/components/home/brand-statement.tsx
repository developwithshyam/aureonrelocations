import { Button } from "@/components/button";
import { FadeIn } from "@/components/fade-in";

const lines = [
  "A New Address",
  "Is More Than",
  "A New Place.",
  "",
  "It's a New",
  "Beginning.",
];

export function BrandStatement() {
  return (
    <section className="bg-primary-dark py-24 lg:py-40" aria-label="Brand statement">
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
        <h2 className="sr-only">Brand statement</h2>
        <div className="mx-auto max-w-4xl">
          {lines.map((line, index) =>
            line === "" ? (
              <div key={index} className="h-6 lg:h-10" aria-hidden="true" />
            ) : (
              <FadeIn key={index} delay={index * 0.12} duration={0.7}>
                <p className="text-3xl font-light leading-tight tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
                  {line}
                </p>
              </FadeIn>
            ),
          )}
        </div>

        <FadeIn delay={0.5}>
          <p className="mt-10 text-base text-white/60 sm:text-lg">
            Aureon makes getting there easier.
          </p>
          <div className="mt-10">
            <Button href="/contact" variant="primary">
              Start Your Move
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
