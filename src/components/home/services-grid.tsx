import { services } from "@/lib/constants";
import { homeSeo } from "@/lib/seo-content";
import { FadeIn } from "@/components/fade-in";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";

export function ServicesGrid() {
  return (
    <section className="bg-surface py-24 lg:py-32" aria-label="Services">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn>
          <SectionHeading
            title={homeSeo.services.title}
            description={homeSeo.services.intro}
            align="center"
            fullWidth
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
