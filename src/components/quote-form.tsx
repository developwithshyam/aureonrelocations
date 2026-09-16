"use client";

import { useState } from "react";
import { moveTypes, whatsappQuote } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Button } from "@/components/button";
import { LocationCombobox } from "@/components/location-combobox";

type QuoteFormProps = {
  className?: string;
  compact?: boolean;
  centered?: boolean;
};

export function QuoteForm({
  className,
  compact = false,
  centered = false,
}: QuoteFormProps) {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [moveType, setMoveType] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const trimmedFrom = from.trim();
    const trimmedTo = to.trim();

    if (!trimmedFrom || !trimmedTo || !moveType) return;

    const message = whatsappQuote.buildMessage(
      moveType,
      trimmedFrom,
      trimmedTo,
    );
    const url = `https://wa.me/${whatsappQuote.number}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const inputClasses = cn(
    "w-full rounded-md border border-border bg-background px-4 py-3 text-sm text-primary-dark transition-colors",
    "placeholder:text-text-secondary/60",
    "focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent",
  );

  return (
    <form
      onSubmit={handleSubmit}
      className={cn(
        "rounded-xl border border-border/60 bg-surface p-6 shadow-xl shadow-primary-dark/5 lg:p-8",
        className,
      )}
    >
      <h2
        className={cn(
          "mb-6 w-full text-lg font-medium tracking-wide text-primary-dark uppercase",
          centered ? "text-center" : "text-left",
        )}
      >
        Plan Your Move
      </h2>

      <div
        className={cn(
          "grid w-full gap-4",
          compact ? "grid-cols-1" : "sm:grid-cols-3 sm:items-end",
        )}
      >
        <LocationCombobox
          id="quote-from"
          name="from"
          label="Moving From"
          value={from}
          onChange={setFrom}
          required
        />

        <LocationCombobox
          id="quote-to"
          name="to"
          label="Moving To"
          value={to}
          onChange={setTo}
          required
        />

        <div>
          <label
            htmlFor="quote-type"
            className="mb-2 block text-xs font-medium uppercase tracking-widest text-text-secondary"
          >
            Move Type
          </label>
          <select
            id="quote-type"
            name="moveType"
            value={moveType}
            onChange={(e) => setMoveType(e.target.value)}
            className={inputClasses}
            required
          >
            <option value="" disabled>
              Select type
            </option>
            {moveTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div
        className={cn(
          "mt-6 w-full",
          centered ? "flex justify-center" : "",
        )}
      >
        <Button type="submit" variant="primary" showArrow>
          Get My Quote
        </Button>
      </div>
    </form>
  );
}
