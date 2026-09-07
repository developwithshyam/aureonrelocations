import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { images } from "@/lib/constants";
import { FadeIn } from "@/components/fade-in";

const splits = [
  {
    title: "Residential",
    headline: "Moving home?",
    subline: "We've got it handled.",
    href: "/services#residential-relocation",
    cta: "Explore Residential",
    image: images.residential,
    alt: "Elegant modern residential interior",
  },
  {
    title: "Commercial",
    headline: "Moving your business?",
    subline: "Keep moving forward.",
    href: "/services#commercial-relocation",
    cta: "Explore Commercial",
    image: images.commercial,
    alt: "Modern professional office space",
  },
] as const;

export function ResidentialCommercial() {
  return (
    <section className="py-24 lg:py-32" aria-label="Residential and commercial">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          {splits.map((item, index) => (
            <FadeIn key={item.title} delay={index * 0.15}>
              <Link
                href={item.href}
                className="group relative flex aspect-[3/4] overflow-hidden rounded-lg sm:aspect-[4/5] lg:aspect-[3/4]"
              >
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary-dark/40 transition-colors duration-500 group-hover:bg-primary-dark/50" />

                <div className="relative flex h-full flex-col justify-end p-8 lg:p-10">
                  <p className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">
                    {item.title}
                  </p>
                  <h3 className="mt-3 text-2xl font-light text-white sm:text-3xl">
                    {item.headline}
                  </h3>
                  <p className="mt-2 text-sm text-white/70">{item.subline}</p>
                  <span className="mt-6 inline-flex items-center gap-1 text-xs font-semibold tracking-widest text-white uppercase transition-all duration-400 group-hover:gap-2">
                    {item.cta}
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
