"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/button";
import { navLinks } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function MobileMenu({ isSolid }: { isSolid: boolean }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className={cn(
          "flex h-10 w-10 items-center justify-center rounded-md transition-colors lg:hidden",
          isSolid
            ? "text-primary-dark hover:bg-primary-dark/5"
            : "text-white hover:bg-white/10",
        )}
        aria-label="Open menu"
        aria-expanded={isOpen}
      >
        <Menu className="h-5 w-5" />
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          <div
            className="absolute inset-0 bg-primary-dark/60 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />
          <nav className="absolute inset-y-0 right-0 flex w-full max-w-sm flex-col bg-primary-dark p-8 shadow-2xl">
            <div className="mb-12 flex items-center justify-between">
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className="text-lg font-semibold tracking-[0.15em] text-white"
              >
                AUREON
              </Link>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="flex h-10 w-10 items-center justify-center rounded-md text-white transition-colors hover:bg-white/10"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block rounded-md px-2 py-4 text-lg font-light text-white/80 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-auto pt-8">
              <Button
                href="/contact"
                variant="primary"
                className="w-full"
                onClick={() => setIsOpen(false)}
              >
                Get a Quote
              </Button>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}

type NavbarProps = {
  transparent?: boolean;
};

export function Navbar({ transparent = true }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isSolid = scrolled || !transparent;

  return (
    <header
      className={cn(
        "fixed top-0 right-0 left-0 z-40 transition-all duration-500",
        isSolid
          ? "border-b border-border/60 bg-background/90 shadow-sm backdrop-blur-md"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:h-20 lg:px-8">
        <Link
          href="/"
          className={cn(
            "text-base font-semibold tracking-[0.2em] transition-colors lg:text-lg",
            isSolid ? "text-primary-dark" : "text-white",
          )}
        >
          AUREON
        </Link>

        <nav
          className="hidden items-center gap-8 lg:flex"
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium tracking-wide transition-colors hover:opacity-70",
                isSolid ? "text-primary-dark" : "text-white/90",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Button
            href="/contact"
            variant={isSolid ? "primary" : "outline"}
            className="hidden lg:inline-flex"
          >
            Get a Quote
          </Button>
          <MobileMenu isSolid={isSolid} />
        </div>
      </div>
    </header>
  );
}
