import type { ServiceFaq } from "@/lib/constants";
import { FaqAccordion } from "@/components/faq-accordion";
import { FadeIn } from "@/components/fade-in";
import { SectionHeading } from "@/components/section-heading";

type FaqSectionProps = {
  faqs: ServiceFaq[];
  className?: string;
};

export function FaqSection({ faqs, className }: FaqSectionProps) {
  return (
    <section
      className={className ?? "bg-surface py-24 lg:py-32"}
      aria-label="Frequently asked questions"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn>
          <SectionHeading
            label="FAQ"
            title="Frequently Asked Questions"
            description="Common questions about our moving and relocation services in Abu Dhabi."
            align="center"
            className="mx-auto mb-12 lg:mb-16"
          />
        </FadeIn>

        <FadeIn delay={0.1}>
          <FaqAccordion faqs={faqs} className="mx-auto max-w-3xl" />
        </FadeIn>
      </div>
    </section>
  );
}
