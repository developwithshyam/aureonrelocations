"use client";

import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function TestimonialSlider() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  }, []);

  useEffect(() => {
    const interval = setInterval(next, 6000);
    return () => clearInterval(interval);
  }, [next]);

  return (
    <div className="relative mx-auto max-w-3xl">
      <div className="overflow-hidden">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={cn(
              "transition-all duration-700",
              index === current
                ? "opacity-100"
                : "pointer-events-none absolute inset-0 opacity-0",
            )}
            aria-hidden={index !== current}
          >
            {testimonial.isPlaceholder && (
              <span className="mb-4 inline-block rounded-full border border-border bg-background px-3 py-1 text-xs uppercase tracking-widest text-text-secondary">
                Placeholder testimonial
              </span>
            )}
            <blockquote className="text-xl leading-relaxed font-light text-primary-dark sm:text-2xl lg:text-3xl">
              &ldquo;{testimonial.quote}&rdquo;
            </blockquote>
            <cite className="mt-6 block text-sm font-medium not-italic tracking-wide text-text-secondary">
              — {testimonial.author}
            </cite>
          </div>
        ))}
      </div>

      <div className="mt-10 flex items-center justify-between">
        <div className="flex gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setCurrent(index)}
              className={cn(
                "h-1.5 rounded-full transition-all duration-400",
                index === current
                  ? "w-8 bg-accent"
                  : "w-1.5 bg-border hover:bg-text-secondary",
              )}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={prev}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition-colors hover:border-accent hover:text-accent"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={next}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition-colors hover:border-accent hover:text-accent"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
