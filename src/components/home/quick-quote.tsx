import { FadeIn } from "@/components/fade-in";
import { QuoteForm } from "@/components/quote-form";

export function QuickQuote() {
  return (
    <section
      className="bg-surface pb-24 lg:pb-32"
      aria-label="Plan your move"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn className="mx-auto w-full max-w-4xl">
          <QuoteForm centered />
        </FadeIn>
      </div>
    </section>
  );
}
