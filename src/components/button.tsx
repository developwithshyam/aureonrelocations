import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn, isExternalHref } from "@/lib/utils";

type ButtonProps = {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "dark" | "outline";
  className?: string;
  showArrow?: boolean;
  type?: "button" | "submit";
  onClick?: () => void;
  disabled?: boolean;
};

const variants = {
  primary:
    "bg-accent text-white hover:bg-accent-hover border border-accent hover:border-accent-hover",
  secondary:
    "bg-transparent text-primary-dark border border-primary-dark/20 hover:border-primary-dark/40 hover:bg-primary-dark/5",
  dark: "bg-primary-dark text-white hover:bg-primary-dark/90 border border-primary-dark",
  outline:
    "bg-transparent text-white border border-white/30 hover:border-white/60 hover:bg-white/10",
};

export function Button({
  href,
  children,
  variant = "primary",
  className,
  showArrow = true,
  type = "button",
  onClick,
  disabled = false,
}: ButtonProps) {
  const classes = cn(
    "group inline-flex items-center justify-center gap-2 rounded-md px-6 py-3 text-xs font-semibold uppercase tracking-widest transition-all duration-400",
    variants[variant],
    className,
  );

  const content = (
    <>
      <span>{children}</span>
      {showArrow && (
        <ArrowRight
          className="h-4 w-4 transition-transform duration-400 group-hover:translate-x-1"
          aria-hidden="true"
        />
      )}
    </>
  );

  if (href) {
    if (isExternalHref(href)) {
      return (
        <a href={href} className={classes} onClick={onClick}>
          {content}
        </a>
      );
    }

    return (
      <Link href={href} className={classes} onClick={onClick}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} disabled={disabled}>
      {content}
    </button>
  );
}
