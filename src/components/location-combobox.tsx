"use client";

import {
  useCallback,
  useId,
  useMemo,
  useRef,
  useState,
} from "react";
import { gccLocationSuggestions } from "@/lib/constants";
import { cn } from "@/lib/utils";

type LocationComboboxProps = {
  id?: string;
  name: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  placeholder?: string;
  className?: string;
};

export function LocationCombobox({
  id: idProp,
  name,
  label,
  value,
  onChange,
  required = false,
  placeholder = "Type a city or country...",
  className,
}: LocationComboboxProps) {
  const generatedId = useId();
  const id = idProp ?? generatedId;
  const listboxId = `${id}-listbox`;

  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const blurTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const filteredSuggestions = useMemo(() => {
    const query = value.trim().toLowerCase();
    if (!query) return [...gccLocationSuggestions];
    return gccLocationSuggestions.filter((location) =>
      location.toLowerCase().includes(query),
    );
  }, [value]);

  const showSuggestions = isOpen && filteredSuggestions.length > 0;

  const selectSuggestion = useCallback(
    (location: string) => {
      onChange(location);
      setIsOpen(false);
      setHighlightedIndex(-1);
    },
    [onChange],
  );

  const handleFocus = () => {
    if (blurTimeoutRef.current) {
      clearTimeout(blurTimeoutRef.current);
      blurTimeoutRef.current = null;
    }
    setIsOpen(true);
    setHighlightedIndex(-1);
  };

  const handleBlur = () => {
    blurTimeoutRef.current = setTimeout(() => {
      setIsOpen(false);
      setHighlightedIndex(-1);
    }, 150);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!showSuggestions) {
      if (e.key === "ArrowDown" || e.key === "ArrowUp") {
        setIsOpen(true);
      }
      return;
    }

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setHighlightedIndex((prev) =>
          prev < filteredSuggestions.length - 1 ? prev + 1 : 0,
        );
        break;
      case "ArrowUp":
        e.preventDefault();
        setHighlightedIndex((prev) =>
          prev > 0 ? prev - 1 : filteredSuggestions.length - 1,
        );
        break;
      case "Enter":
        if (highlightedIndex >= 0) {
          e.preventDefault();
          selectSuggestion(filteredSuggestions[highlightedIndex]);
        }
        break;
      case "Escape":
        e.preventDefault();
        setIsOpen(false);
        setHighlightedIndex(-1);
        break;
    }
  };

  const inputClasses = cn(
    "w-full rounded-md border border-border bg-background px-4 py-3 text-sm text-primary-dark transition-colors",
    "placeholder:text-text-secondary/60",
    "focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent",
  );

  return (
    <div className={cn("relative", className)}>
      <label
        htmlFor={id}
        className="mb-2 block text-xs font-medium uppercase tracking-widest text-text-secondary"
      >
        {label}
      </label>
      <input
        ref={inputRef}
        id={id}
        name={name}
        type="text"
        role="combobox"
        aria-expanded={showSuggestions}
        aria-autocomplete="list"
        aria-controls={listboxId}
        aria-activedescendant={
          highlightedIndex >= 0
            ? `${id}-option-${highlightedIndex}`
            : undefined
        }
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
          setIsOpen(true);
          setHighlightedIndex(-1);
        }}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        required={required}
        placeholder={placeholder}
        autoComplete="off"
        className={inputClasses}
      />

      {showSuggestions && (
        <ul
          id={listboxId}
          role="listbox"
          className="absolute z-50 mt-1 max-h-48 w-full overflow-y-auto rounded-md border border-border bg-surface py-1 shadow-lg"
        >
          {filteredSuggestions.map((location, index) => (
            <li
              key={location}
              id={`${id}-option-${index}`}
              role="option"
              aria-selected={highlightedIndex === index}
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => selectSuggestion(location)}
              onMouseEnter={() => setHighlightedIndex(index)}
              className={cn(
                "cursor-pointer px-4 py-2.5 text-sm text-primary-dark transition-colors",
                highlightedIndex === index
                  ? "bg-accent/10 text-primary-dark"
                  : "hover:bg-accent/5",
              )}
            >
              {location}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
