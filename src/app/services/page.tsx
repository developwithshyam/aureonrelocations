import Image from "next/image";
import { images, services } from "@/lib/constants";
import { createPageMetadata } from "@/lib/metadata";
import { servicesSeo } from "@/lib/seo-content";
import { FadeIn } from "@/components/fade-in";
import {
  FaqPageJsonLd,
  ServicesItemListJsonLd,
} from "@/components/structured-data";
import {
  ServiceDetailBlocks,
  ServicesNav,
} from "@/components/services-page-content";

export const metadata = createPageMetadata({
  title: servicesSeo.title,
  description: servicesSeo.description,
  path: "/services",
});

const residentialFaqs =
  services.find((service) => service.id === "residential-relocation")?.faqs ??
  [];

export default function ServicesPage() {
  return (
    <>
      <ServicesItemListJsonLd />
      {residentialFaqs.length > 0 && <FaqPageJsonLd faqs={residentialFaqs} />}

      <section className="relative flex min-h-[60vh] items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={images.servicesHero}
            alt="Moving services in Abu Dhabi — Aureon Relocations"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-primary-dark/60" />
        </div>
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 pt-32 lg:px-8 lg:pb-28">
          <FadeIn>
            <h1 className="max-w-3xl text-4xl font-light leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
              <span className="block">Relocation,</span>
              <span className="block">Without the</span>
              <span className="block">Complications.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
              From homes and offices to larger corporate transitions, Aureon
              provides professional relocation services built around care,
              coordination, and reliability.
            </p>
          </FadeIn>
        </div>
      </section>

      <ServicesNav />
      <ServiceDetailBlocks />
    </>
  );
}
