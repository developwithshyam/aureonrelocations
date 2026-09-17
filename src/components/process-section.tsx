"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { journeyStages } from "@/lib/constants";
import { homeSeo } from "@/lib/seo-content";
import { FadeIn } from "@/components/fade-in";
import { SectionHeading } from "@/components/section-heading";

export function ProcessSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollXProgress } = useScroll({
    container: containerRef,
  });

  const progressWidth = useTransform(scrollXProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="bg-primary-dark py-24 lg:py-32" aria-label="Moving journey">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn>
          <SectionHeading
            subtitle={homeSeo.process.subtitle}
            title={[...homeSeo.process.title]}
            description={homeSeo.process.intro}
            dark
            fullWidth
            className="mb-16 lg:mb-20"
          />
        </FadeIn>

        {/* Desktop: horizontal scroll */}
        <div className="hidden lg:block">
          <div className="relative mb-6 h-px bg-white/10">
            <motion.div
              className="absolute top-0 left-0 h-full bg-accent"
              style={prefersReducedMotion ? { width: "100%" } : { width: progressWidth }}
            />
          </div>
          <div
            ref={containerRef}
            className="no-scrollbar flex gap-8 overflow-x-auto pb-4"
          >
            {journeyStages.map((stage, index) => (
              <FadeIn
                key={stage.number}
                delay={index * 0.1}
                className="min-w-[280px] flex-shrink-0"
              >
                <div className="border-l border-white/10 pl-6">
                  <span className="text-xs font-semibold tracking-widest text-accent">
                    {stage.number}
                  </span>
                  <h3 className="mt-3 text-2xl font-light tracking-wide text-white uppercase">
                    {stage.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-white/60">
                    {stage.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Mobile: vertical timeline */}
        <div className="lg:hidden">
          <ol className="relative space-y-0">
            {journeyStages.map((stage, index) => (
              <FadeIn key={stage.number} delay={index * 0.08}>
                <li className="relative flex gap-6 pb-12 last:pb-0">
                  <div className="flex flex-col items-center">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full border border-accent text-xs font-semibold text-accent">
                      {stage.number}
                    </div>
                    {index < journeyStages.length - 1 && (
                      <div className="mt-2 w-px flex-1 bg-white/10" />
                    )}
                  </div>
                  <div className="pb-2">
                    <h3 className="text-xl font-light tracking-wide text-white uppercase">
                      {stage.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/60">
                      {stage.description}
                    </p>
                  </div>
                </li>
              </FadeIn>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
