import { services } from "@/lib/constants";
import { FadeIn } from "@/components/fade-in";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";

export function ServicesGrid() {
  return (
    <section className="bg-surface py-24 lg:py-32" aria-label="Services">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn>
          <SectionHeading
            subtitle="We manage the entire journey."
            title="More Than Moving."
            description="Whether you're moving a home, relocating a business, or planning a larger transition, our services are designed around a smooth, organized relocation experience."
            className="mb-16 lg:mb-20"
          />
        </FadeIn>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <FadeIn key={service.id} delay={index * 0.06}>
              <ServiceCard service={service} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
