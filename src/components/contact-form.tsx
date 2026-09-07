"use client";

import { useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { services } from "@/lib/constants";
import { submitEnquiryToGoogleSheets } from "@/lib/submit-enquiry";
import { cn } from "@/lib/utils";
import { Button } from "@/components/button";

interface FormData {
  name: string;
  email: string;
  phone: string;
  enquiryType: string;
  message: string;
}

const initialForm: FormData = {
  name: "",
  email: "",
  phone: "",
  enquiryType: "",
  message: "",
};

const MIN_SUBMIT_MS = 700;

function SuccessMessage({ onReset }: { onReset: () => void }) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.96, y: 12 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="rounded-xl border border-border bg-surface p-10 text-center lg:p-12"
    >
      <motion.div
        initial={prefersReducedMotion ? false : { scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          delay: prefersReducedMotion ? 0 : 0.15,
          duration: 0.45,
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10"
      >
        <CheckCircle2 className="h-8 w-8 text-accent" aria-hidden="true" />
      </motion.div>
      <h3 className="text-xl font-light text-primary-dark sm:text-2xl">
        Thank you for your request.
      </h3>
      <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-text-secondary">
        We&apos;ve received your enquiry and will be in touch shortly to help
        plan your move.
      </p>
      <button
        type="button"
        onClick={onReset}
        className="mt-8 text-xs font-semibold uppercase tracking-widest text-accent transition-colors hover:text-accent-hover"
      >
        Send another enquiry
      </button>
    </motion.div>
  );
}

export function ContactForm() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [status, setStatus] = useState<"idle" | "submitting" | "success">(
    "idle",
  );
  const [error, setError] = useState<string | null>(null);
  const prefersReducedMotion = useReducedMotion();

  const inputClasses = cn(
    "w-full rounded-md border border-border bg-background px-4 py-3 text-sm text-primary-dark transition-colors",
    "placeholder:text-text-secondary/60",
    "focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent",
    status === "submitting" && "pointer-events-none opacity-60",
  );

  const labelClasses =
    "mb-2 block text-xs font-medium uppercase tracking-widest text-text-secondary";

  const updateField = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const formEl = e.currentTarget as HTMLFormElement;
    if (!formEl.checkValidity()) {
      formEl.reportValidity();
      return;
    }

    setStatus("submitting");

    try {
      await Promise.all([
        submitEnquiryToGoogleSheets({
          name: form.name.trim(),
          email: form.email.trim(),
          phone: form.phone.trim(),
          enquiryType: form.enquiryType,
          message: form.message.trim(),
        }),
        new Promise((resolve) => window.setTimeout(resolve, MIN_SUBMIT_MS)),
      ]);

      setForm(initialForm);
      setStatus("success");
    } catch {
      setStatus("idle");
      setError(
        "Something went wrong. Please try again, or contact us directly by email or phone.",
      );
    }
  };

  const handleReset = () => {
    setForm(initialForm);
    setStatus("idle");
    setError(null);
  };

  return (
    <AnimatePresence mode="wait">
      {status === "success" ? (
        <SuccessMessage key="success" onReset={handleReset} />
      ) : (
        <motion.form
          key="form"
          onSubmit={handleSubmit}
          initial={false}
          animate={{ opacity: 1 }}
          exit={
            prefersReducedMotion
              ? { opacity: 0 }
              : { opacity: 0, y: -8, scale: 0.99 }
          }
          transition={{ duration: 0.35 }}
          className="relative rounded-xl border border-border/60 bg-surface p-6 shadow-sm lg:p-8"
        >
          {status === "submitting" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="pointer-events-none absolute inset-0 z-10 rounded-xl bg-surface/40 backdrop-blur-[1px]"
              aria-hidden="true"
            />
          )}

          <div className="grid gap-5 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label htmlFor="full-name" className={labelClasses}>
                Full Name
              </label>
              <input
                id="full-name"
                name="name"
                type="text"
                required
                autoComplete="name"
                value={form.name}
                onChange={(e) => updateField("name", e.target.value)}
                className={inputClasses}
                placeholder="Your full name"
                disabled={status === "submitting"}
              />
            </div>

            <div>
              <label htmlFor="email" className={labelClasses}>
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                value={form.email}
                onChange={(e) => updateField("email", e.target.value)}
                className={inputClasses}
                placeholder="you@example.com"
                disabled={status === "submitting"}
              />
            </div>

            <div>
              <label htmlFor="phone" className={labelClasses}>
                Phone
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                autoComplete="tel"
                value={form.phone}
                onChange={(e) => updateField("phone", e.target.value)}
                className={inputClasses}
                placeholder="Your phone number"
                disabled={status === "submitting"}
              />
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="enquiry-type" className={labelClasses}>
                Enquiry Type
              </label>
              <select
                id="enquiry-type"
                name="enquiryType"
                required
                value={form.enquiryType}
                onChange={(e) => updateField("enquiryType", e.target.value)}
                className={inputClasses}
                disabled={status === "submitting"}
              >
                <option value="" disabled>
                  Select a service
                </option>
                {services.map((service) => (
                  <option key={service.id} value={service.title}>
                    {service.title}
                  </option>
                ))}
              </select>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="message" className={labelClasses}>
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={form.message}
                onChange={(e) => updateField("message", e.target.value)}
                className={cn(inputClasses, "resize-none")}
                placeholder="Tell us about your move..."
                disabled={status === "submitting"}
              />
            </div>
          </div>

          {error && (
            <p className="mt-4 text-sm text-red-600" role="alert">
              {error}
            </p>
          )}

          <div className="relative z-20 mt-8">
            <Button
              type="submit"
              variant="primary"
              showArrow={status !== "submitting"}
              disabled={status === "submitting"}
              className="min-w-[160px]"
            >
              {status === "submitting" ? (
                <span className="inline-flex items-center gap-2">
                  <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                  Sending...
                </span>
              ) : (
                "Send Request"
              )}
            </Button>
          </div>

          <p
            className={cn(
              "mt-4 text-xs text-text-secondary transition-opacity duration-300",
              status === "submitting" ? "opacity-100" : "opacity-0",
            )}
            aria-live="polite"
          >
            Submitting your enquiry...
          </p>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
