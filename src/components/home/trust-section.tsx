import { trustIndicators } from "@/lib/constants";
import { FadeIn } from "@/components/fade-in";
import { SectionHeading } from "@/components/section-heading";

export function TrustSection() {
  return (
    <section className="py-24 lg:py-32" aria-label="Trust indicators">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn>
          <SectionHeading
            title="Relocation, Without the Stress."
            description="From careful planning and professional handling to safe transportation and final delivery, Aureon takes care of the details that make moving easier."
            align="center"
            className="mx-auto mb-16"
          />
        </FadeIn>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5 lg:gap-6">
          {trustIndicators.map((item, index) => (
            <FadeIn key={item} delay={index * 0.08}>
              <div className="rounded-lg border border-border bg-surface px-4 py-6 text-center transition-colors hover:border-accent/30 lg:px-6 lg:py-8">
                <p className="text-xs font-medium tracking-wide text-primary-dark uppercase sm:text-sm">
                  {item}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
