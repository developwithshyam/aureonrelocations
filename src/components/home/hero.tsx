"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { Button } from "@/components/button";
import { images } from "@/lib/constants";

export function Hero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative flex min-h-screen items-end overflow-hidden">
      <div className="absolute inset-0">
        <div
          className={
            prefersReducedMotion ? "h-full w-full" : "animate-ken-burns h-full w-full"
          }
        >
          <Image
            src={images.hero}
            alt="Professional movers carefully handling furniture in a modern home interior"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-primary-dark/55" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-32 pt-32 lg:px-8 lg:pb-40">
        <motion.p
          initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6 text-xs font-semibold tracking-[0.25em] text-accent uppercase"
        >
          Aureon Relocations
        </motion.p>

        <motion.h1
          initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="max-w-4xl text-4xl font-light leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
        >
          <span className="block">Your Move.</span>
          <span className="block">Handled Beautifully.</span>
        </motion.h1>

        <motion.p
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-6 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg"
        >
          Professional relocation solutions designed around your home, your
          business, and your peace of mind.
        </motion.p>

        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <Button href="/contact" variant="primary">
            Get a Free Quote
          </Button>
          <Button href="/services" variant="outline">
            Explore Our Services
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
