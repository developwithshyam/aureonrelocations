"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { services } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Button } from "@/components/button";
import { FadeIn } from "@/components/fade-in";
import { ServiceFaqList } from "@/components/service-faq";

export function ServicesNav() {
  const [activeId, setActiveId] = useState(services[0]?.id ?? "");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    services.forEach((service) => {
      const el = document.getElementById(service.id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveId(service.id);
          }
        },
        { rootMargin: "-40% 0px -50% 0px" },
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <nav
      className="sticky top-[4.5rem] z-30 border-b border-border bg-background/90 backdrop-blur-md lg:top-[5.5rem]"
      aria-label="Service navigation"
    >
      <div className="mx-auto max-w-7xl overflow-x-auto px-6 lg:px-8">
        <ul className="flex gap-1 py-3">
          {services.map((service) => (
            <li key={service.id}>
              <Link
                href={`#${service.id}`}
                className={cn(
                  "block whitespace-nowrap rounded-md px-3 py-2 text-xs font-medium tracking-wide uppercase transition-colors",
                  activeId === service.id
                    ? "bg-primary-dark text-white"
                    : "text-text-secondary hover:text-primary-dark",
                )}
              >
                {service.shortTitle}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export function ServiceDetailBlocks() {
  return (
    <div className="space-y-24 py-24 lg:space-y-32 lg:py-32">
      {services.map((service, index) => (
        <section
          key={service.id}
          id={service.id}
          className="scroll-mt-36"
          aria-labelledby={`${service.id}-heading`}
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div
              className={cn(
                "grid items-center gap-12 lg:grid-cols-2 lg:gap-20",
                index % 2 === 1 && "lg:[&>*:first-child]:order-2",
              )}
            >
              <FadeIn direction={index % 2 === 0 ? "left" : "right"}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </FadeIn>

              <FadeIn direction={index % 2 === 0 ? "right" : "left"} delay={0.1}>
                <div>
                  <span className="text-xs font-semibold tracking-widest text-accent">
                    {service.number}
                  </span>
                  <h2
                    id={`${service.id}-heading`}
                    className="mt-3 text-2xl font-light tracking-wide text-primary-dark uppercase sm:text-3xl lg:text-4xl"
                  >
                    {service.title}
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-text-secondary">
                    {service.description}
                  </p>
                  <div className="mt-4 space-y-4">
                    {service.longDescription.split("\n\n").map((paragraph) => (
                      <p
                        key={paragraph.slice(0, 48)}
                        className="text-base leading-relaxed text-text-secondary"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  {service.faqs && service.faqs.length > 0 && (
                    <ServiceFaqList faqs={service.faqs} />
                  )}

                  <div className="mt-8">
                    <h3 className="text-xs font-semibold tracking-widest text-primary-dark uppercase">
                      Includes
                    </h3>
                    <ul className="mt-4 space-y-2">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-2 text-sm text-text-secondary"
                        >
                          <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-accent" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-10">
                    <Button href="/contact" variant="primary">
                      Get a Quote
                    </Button>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
