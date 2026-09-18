"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { MessageCircle, Phone, X } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import {
  callNowHref,
  displayPhone,
  floatingContactTitle,
  whatsappGeneralInquiryHref,
} from "@/lib/constants";
import { useIsClient } from "@/lib/use-is-client";
import { cn } from "@/lib/utils";

export function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const fabRef = useRef<HTMLButtonElement>(null);
  const isClient = useIsClient();
  const prefersReducedMotion = useReducedMotion();

  const close = useCallback(() => {
    setIsOpen(false);
    setCopied(false);
    requestAnimationFrame(() => fabRef.current?.focus());
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, close]);

  const handleCopyNumber = async () => {
    try {
      await navigator.clipboard.writeText(displayPhone);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  const overlay =
    isClient &&
    isOpen &&
    createPortal(
      <div className="fixed inset-0 z-[90] flex items-center justify-center p-6">
        <motion.button
          type="button"
          className="absolute inset-0 bg-primary-dark/60 backdrop-blur-md"
          aria-label="Close contact options"
          initial={{ opacity: prefersReducedMotion ? 1 : 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.25 }}
          onClick={close}
        />
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-labelledby="floating-contact-title"
          className="relative z-10 w-full max-w-sm rounded-xl bg-surface p-6 shadow-2xl shadow-primary-dark/20"
          initial={
            prefersReducedMotion
              ? false
              : { opacity: 0, scale: 0.96, y: 8 }
          }
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.3 }}
        >
          <div className="mb-6 flex items-start justify-between gap-4">
            <h2
              id="floating-contact-title"
              className="text-xl font-light tracking-tight text-primary-dark"
            >
              {floatingContactTitle}
            </h2>
            <button
              type="button"
              onClick={close}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md text-primary-dark/70 transition-colors hover:bg-primary-dark/5 hover:text-primary-dark"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="flex flex-col gap-3">
            <a
              href={callNowHref}
              className="inline-flex items-center justify-center gap-2 rounded-md border border-accent bg-accent px-6 py-3.5 text-xs font-semibold uppercase tracking-widest text-white transition-colors hover:bg-accent-hover"
              onClick={close}
            >
              <Phone className="h-4 w-4" aria-hidden />
              Call {displayPhone}
            </a>
            <button
              type="button"
              onClick={handleCopyNumber}
              className="text-center text-xs text-text-secondary underline-offset-2 hover:text-primary-dark hover:underline"
            >
              {copied ? "Number copied" : "Copy number"}
            </button>
            <span className="sr-only" aria-live="polite">
              {copied ? "Phone number copied to clipboard" : ""}
            </span>

            <a
              href={whatsappGeneralInquiryHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-primary-dark/20 bg-primary-dark px-6 py-3.5 text-xs font-semibold uppercase tracking-widest text-white transition-colors hover:bg-primary-dark/90"
              onClick={close}
            >
              <MessageCircle className="h-4 w-4" aria-hidden />
              WhatsApp
            </a>
          </div>
        </motion.div>
      </div>,
      document.body,
    );

  const open = () => setIsOpen(true);

  return (
    <>
      <div
        className={cn(
          "fixed right-6 bottom-6 z-[91] flex items-center pb-[max(0px,env(safe-area-inset-bottom))] transition-opacity",
          isOpen && "pointer-events-none opacity-0",
        )}
      >
        <button
          type="button"
          onClick={open}
          className="relative z-0 -mr-10 rounded-l-full rounded-r-lg bg-primary-dark py-3.5 pl-5 pr-12 text-xs font-semibold uppercase tracking-widest text-white shadow-lg shadow-primary-dark/30 transition-colors hover:bg-primary-dark/90"
        >
          {floatingContactTitle}
        </button>
        <button
          ref={fabRef}
          type="button"
          onClick={open}
          className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-accent text-white shadow-lg shadow-primary-dark/25 ring-4 ring-accent/25 transition-transform hover:scale-105 hover:bg-accent-hover active:scale-95"
          aria-label="Contact Aureon"
          aria-expanded={isOpen}
          aria-haspopup="dialog"
        >
          <Phone className="h-6 w-6" aria-hidden />
        </button>
      </div>
      {overlay}
    </>
  );
}
