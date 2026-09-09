"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { QuoteForm } from "@/components/quote-form";
import { images } from "@/lib/constants";
import { homeSeo } from "@/lib/seo-content";

export function Hero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <div
          className={
            prefersReducedMotion ? "h-full w-full" : "animate-ken-burns h-full w-full"
          }
        >
          <Image
            src={images.hero.src}
            alt={images.hero.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-primary-dark/55" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-32 text-center lg:px-8">
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
          className="mx-auto max-w-4xl text-4xl font-light leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
        >
          {homeSeo.h1}
        </motion.h1>

        <motion.p
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg"
        >
          Professional relocation solutions designed around your home, your
          business, and your peace of mind.
        </motion.p>

        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="mx-auto mt-10 w-full max-w-4xl text-left"
        >
          <QuoteForm />
        </motion.div>
      </div>
    </section>
  );
}
