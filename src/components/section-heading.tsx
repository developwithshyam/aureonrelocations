import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  label?: string;
  title: string | string[];
  subtitle?: string;
  description?: string;
  align?: "left" | "center";
  dark?: boolean;
  className?: string;
};

export function SectionHeading({
  label,
  title,
  subtitle,
  description,
  align = "left",
  dark = false,
  className,
}: SectionHeadingProps) {
  const titles = Array.isArray(title) ? title : [title];

  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {label && (
        <p
          className={cn(
            "mb-4 text-xs font-semibold uppercase tracking-[0.2em]",
            dark ? "text-accent" : "text-accent",
          )}
        >
          {label}
        </p>
      )}
      {subtitle && (
        <p
          className={cn(
            "mb-3 text-sm font-medium uppercase tracking-widest",
            dark ? "text-white/60" : "text-text-secondary",
          )}
        >
          {subtitle}
        </p>
      )}
      <h2
        className={cn(
          "text-3xl font-light leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl",
          dark ? "text-white" : "text-primary-dark",
        )}
      >
        {titles.map((line, i) => (
          <span key={i} className="block">
            {line}
          </span>
        ))}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-6 text-base leading-relaxed sm:text-lg",
            dark ? "text-white/70" : "text-text-secondary",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
