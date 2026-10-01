"use client";

import { useCallback, useEffect, useId, useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { GoogleGIcon } from "@/components/icons/google-g-icon";
import { testimonials } from "@/lib/constants";
import { cn } from "@/lib/utils";

function hasLongerQuote(excerpt: string, quote: string) {
  return quote.trim() !== excerpt.trim();
}

function TestimonialReviewCard({
  excerpt,
  quote,
  author,
  rating,
  source,
  expanded,
  onToggleExpanded,
  quoteId,
}: {
  excerpt: string;
  quote: string;
  author: string;
  rating: number;
  source: string;
  expanded: boolean;
  onToggleExpanded: () => void;
  quoteId: string;
}) {
  const showToggle = hasLongerQuote(excerpt, quote);
  const displayText = expanded ? quote : excerpt;

  return (
    <article className="rounded-2xl border border-border bg-background px-6 py-8 shadow-sm sm:px-10 sm:py-10">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        {source === "google" ? (
          <div className="flex items-center gap-2.5">
            <GoogleGIcon className="h-5 w-5 shrink-0" />
            <span className="text-xs font-medium uppercase tracking-widest text-text-secondary">
              Google review
            </span>
          </div>
        ) : null}
        {rating > 0 ? (
          <div
            className="flex gap-0.5"
            aria-label={`${rating} out of 5 stars`}
          >
            {Array.from({ length: rating }).map((_, i) => (
              <Star
                key={i}
                className="h-3.5 w-3.5 fill-accent text-accent sm:h-4 sm:w-4"
                aria-hidden
              />
            ))}
          </div>
        ) : null}
      </div>

      <blockquote
        id={quoteId}
        className={cn(
          "text-base leading-relaxed font-light text-primary-dark sm:text-lg",
          !expanded && showToggle && "line-clamp-4 sm:line-clamp-5",
        )}
      >
        &ldquo;{displayText}&rdquo;
      </blockquote>

      {showToggle ? (
        <button
          type="button"
          onClick={onToggleExpanded}
          className="mt-3 text-sm font-medium text-accent hover:underline"
          aria-expanded={expanded}
          aria-controls={quoteId}
        >
          {expanded ? "Show less" : "Read more"}
        </button>
      ) : null}

      <cite className="mt-6 block text-sm font-medium not-italic tracking-wide text-text-secondary">
        — {author}
      </cite>
    </article>
  );
}

export function TestimonialSlider() {
  const [current, setCurrent] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const quoteId = useId();

  const testimonial = testimonials[current];

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  }, []);

  useEffect(() => {
    setExpanded(false);
  }, [current]);

  useEffect(() => {
    if (expanded) return;
    const interval = setInterval(next, 6000);
    return () => clearInterval(interval);
  }, [next, expanded]);

  return (
    <div className="relative mx-auto max-w-3xl">
      <TestimonialReviewCard
        key={testimonial.author}
        excerpt={testimonial.excerpt}
        quote={testimonial.quote}
        author={testimonial.author}
        rating={testimonial.rating}
        source={testimonial.source}
        expanded={expanded}
        onToggleExpanded={() => setExpanded((value) => !value)}
        quoteId={quoteId}
      />

      <div className="mt-8 flex items-center justify-between">
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
              aria-current={index === current ? "true" : undefined}
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
