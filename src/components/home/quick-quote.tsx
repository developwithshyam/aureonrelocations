import { QuoteForm } from "@/components/quote-form";

export function QuickQuote() {
  return (
    <section className="relative z-20 -mt-20 px-6 pb-16 lg:-mt-24 lg:px-8 lg:pb-24">
      <div className="mx-auto max-w-4xl">
        <QuoteForm />
      </div>
    </section>
  );
}
