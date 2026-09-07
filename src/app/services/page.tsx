import Image from "next/image";
import { images } from "@/lib/constants";
import { createPageMetadata } from "@/lib/metadata";
import { FadeIn } from "@/components/fade-in";
import {
  ServiceDetailBlocks,
  ServicesNav,
} from "@/components/services-page-content";

export const metadata = createPageMetadata({
  title: "Relocation Services | Aureon Relocations",
  description:
    "Explore Aureon Relocations services — residential, commercial, corporate, international relocation, packing, furniture installation, and storage solutions.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <section className="relative flex min-h-[60vh] items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={images.servicesHero}
            alt="Professional relocation services in a modern setting"
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
