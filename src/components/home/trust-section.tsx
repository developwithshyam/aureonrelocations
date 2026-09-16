import {
  Briefcase,
  Building2,
  Home,
  PackageCheck,
  Truck,
  type LucideIcon,
} from "lucide-react";
import { trustIndicators } from "@/lib/constants";
import { FadeIn } from "@/components/fade-in";
import { SectionHeading } from "@/components/section-heading";
import { cn } from "@/lib/utils";

const trustIconMap: Record<(typeof trustIndicators)[number], LucideIcon> = {
  "Residential Relocation": Home,
  "Commercial Relocation": Building2,
  "Corporate Relocation": Briefcase,
  "Professional Handling": PackageCheck,
  "Secure Transportation": Truck,
};

export function TrustSection() {
  return (
    <section
      className="bg-surface pt-24 pb-12 lg:pt-32 lg:pb-16"
      aria-label="Trust indicators"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn>
          <SectionHeading
            title="Relocation, Without the Stress."
            description="From careful planning and professional handling to safe transportation and final delivery, Aureon takes care of the details that make moving easier."
            align="center"
            className="mx-auto mb-16"
          />
        </FadeIn>

        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5 lg:gap-6">
          {trustIndicators.map((item, index) => {
            const Icon = trustIconMap[item];

            return (
              <FadeIn key={item} delay={index * 0.08}>
                <div
                  className={cn(
                    "group flex h-full min-h-36 flex-col rounded-xl bg-background px-4 py-5 sm:min-h-40 sm:px-5 sm:py-6",
                    "shadow-[0_8px_24px_rgb(17_19_21_/_0.05)] transition-shadow duration-400",
                    "hover:shadow-[0_14px_32px_rgb(17_19_21_/_0.08)]",
                  )}
                >
                  <div className="flex justify-center">
                    <Icon
                      className={cn(
                        "trust-neon-icon h-10 w-10 text-accent sm:h-11 sm:w-11",
                        "stroke-[1.35] motion-safe:group-hover:scale-110",
                      )}
                      aria-hidden="true"
                    />
                  </div>

                  <p className="mt-auto pt-5 text-center text-xs font-semibold leading-snug tracking-[0.1em] text-primary-dark uppercase sm:text-sm">
                    {item}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
