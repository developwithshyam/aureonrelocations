"use client";

import { motion, useReducedMotion } from "motion/react";
import { Button } from "@/components/button";
import { FadeIn } from "@/components/fade-in";

export function BrandStatement() {
  const prefersReducedMotion = useReducedMotion();

  const lines = [
    "A New Address",
    "Is More Than",
    "A New Place.",
    "",
    "It's a New",
    "Beginning.",
  ];

  return (
    <section className="bg-primary-dark py-24 lg:py-40" aria-label="Brand statement">
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
        <h2 className="sr-only">Brand statement</h2>
        <div className="mx-auto max-w-4xl">
          {lines.map((line, index) =>
            line === "" ? (
              <div key={index} className="h-6 lg:h-10" aria-hidden="true" />
            ) : (
              <motion.p
                key={index}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="text-3xl font-light leading-tight tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl"
              >
                {line}
              </motion.p>
            ),
          )}
        </div>

        <FadeIn delay={0.5}>
          <p className="mt-10 text-base text-white/60 sm:text-lg">
            Aureon makes getting there easier.
          </p>
          <div className="mt-10">
            <Button href="/contact" variant="primary">
              Start Your Move
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
