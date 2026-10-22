import Link from "next/link";
import { homeSeo } from "@/lib/seo-content";
import { FadeIn } from "@/components/fade-in";

export function LocalNearMe() {
  return (
    <section
      className="bg-surface py-24 lg:py-32"
      aria-label="Movers near me in Abu Dhabi"
    >
      <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
        <FadeIn>
          <h2 className="text-3xl font-light tracking-tight text-primary-dark sm:text-4xl">
            {homeSeo.localBlock.heading}
          </h2>
          <p className="mt-6 text-base leading-relaxed text-text-secondary sm:text-lg">
            {homeSeo.localBlock.body}
          </p>
          <p className="mt-4 text-base leading-relaxed text-text-secondary sm:text-lg">
            <Link
              href="/about"
              className="font-medium text-primary-dark underline decoration-accent/40 underline-offset-4 transition-colors hover:decoration-accent"
            >
              About Aureon
            </Link>
            {" · "}
            <Link
              href="/contact"
              className="font-medium text-primary-dark underline decoration-accent/40 underline-offset-4 transition-colors hover:decoration-accent"
            >
              Get a free quote
            </Link>
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
