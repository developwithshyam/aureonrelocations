import type { ServiceFaq } from "@/lib/constants";
import { FaqAccordion } from "@/components/faq-accordion";

type ServiceFaqProps = {
  faqs: ServiceFaq[];
};

export function ServiceFaqList({ faqs }: ServiceFaqProps) {
  return (
    <div className="mt-10 border-t border-border pt-8">
      <h3 className="text-xs font-semibold tracking-widest text-primary-dark uppercase">
        Frequently Asked Questions
      </h3>
      <FaqAccordion faqs={faqs} className="mt-4" />
    </div>
  );
}
