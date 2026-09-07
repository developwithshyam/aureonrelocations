import { FadeIn } from "@/components/fade-in";
import { SectionHeading } from "@/components/section-heading";
import { TestimonialSlider } from "@/components/testimonial-slider";

export function Testimonials() {
  return (
    <section className="bg-surface py-24 lg:py-32" aria-label="Testimonials">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn>
          <SectionHeading
            title="Moved With Confidence."
            align="center"
            className="mx-auto mb-16"
          />
        </FadeIn>
        <FadeIn delay={0.2}>
          <TestimonialSlider />
        </FadeIn>
      </div>
    </section>
  );
}
