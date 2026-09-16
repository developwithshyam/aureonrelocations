"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Button } from "@/components/button";
import { callNowHref, navLinks } from "@/lib/constants";
import { cn } from "@/lib/utils";

function BrandLogo({ className }: { className?: string }) {
  return (
    <Image
      src="/images/logo.png"
      alt="Aureon Relocations"
      width={200}
      height={100}
      priority
      className={cn("h-14 w-auto object-contain lg:h-[4.25rem]", className)}
    />
  );
}

const menuEase = [0.22, 1, 0.36, 1] as const;

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    setMounted(true);
  }, []);

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

  const menuOverlay =
    mounted &&
    createPortal(
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            className="fixed inset-0 z-[100] lg:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            initial={{ opacity: prefersReducedMotion ? 1 : 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: prefersReducedMotion ? 1 : 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.3 }}
          >
            <motion.div
              className="absolute inset-0 bg-primary-dark/60 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
              aria-hidden="true"
              initial={{ opacity: prefersReducedMotion ? 1 : 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: prefersReducedMotion ? 1 : 0 }}
              transition={{ duration: prefersReducedMotion ? 0 : 0.3 }}
            />
            <motion.nav
              className="absolute inset-y-0 right-0 flex w-full max-w-sm flex-col bg-primary-dark p-8 shadow-2xl"
              initial={{ x: prefersReducedMotion ? 0 : "100%" }}
              animate={{ x: 0 }}
              exit={{ x: prefersReducedMotion ? 0 : "100%" }}
              transition={{
                duration: prefersReducedMotion ? 0 : 0.4,
                ease: menuEase,
              }}
            >
              <div className="mb-12 flex items-center justify-between">
                <Link
                  href="/"
                  onClick={() => setIsOpen(false)}
                  className="inline-flex items-center"
                >
                  <BrandLogo className="h-16" />
                </Link>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="flex h-11 w-11 items-center justify-center rounded-md text-white transition-colors hover:bg-white/10"
                  aria-label="Close menu"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <ul className="flex flex-col gap-1">
                {navLinks.map((link, index) => (
                  <motion.li
                    key={link.href}
                    initial={{
                      opacity: prefersReducedMotion ? 1 : 0,
                      y: prefersReducedMotion ? 0 : 12,
                    }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: prefersReducedMotion ? 0 : 0.3,
                      delay: prefersReducedMotion ? 0 : 0.15 + index * 0.06,
                      ease: menuEase,
                    }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="block rounded-md px-2 py-4 text-xl font-light text-white/80 transition-colors hover:text-accent"
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>

              <motion.div
                className="mt-auto pt-8"
                initial={{
                  opacity: prefersReducedMotion ? 1 : 0,
                  y: prefersReducedMotion ? 0 : 12,
                }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: prefersReducedMotion ? 0 : 0.3,
                  delay: prefersReducedMotion
                    ? 0
                    : 0.15 + navLinks.length * 0.06 + 0.04,
                  ease: menuEase,
                }}
              >
                <Button
                  href={callNowHref}
                  variant="primary"
                  className="w-full py-3.5 text-sm"
                  onClick={() => setIsOpen(false)}
                >
                  Call Now
                </Button>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>,
      document.body,
    );

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="flex h-11 w-11 items-center justify-center rounded-md text-white transition-colors hover:bg-white/10 lg:hidden"
        aria-label="Open menu"
        aria-expanded={isOpen}
      >
        <Menu className="h-6 w-6" />
      </button>

      {menuOverlay}
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
          ? "border-b border-white/10 bg-primary-dark shadow-lg shadow-primary-dark/25 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between px-6 lg:h-[5.5rem] lg:px-8">
        <Link href="/" className="inline-flex shrink-0 items-center">
          <BrandLogo />
        </Link>

        <nav
          className="hidden items-center gap-10 lg:flex"
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-base font-medium tracking-wide transition-colors",
                isSolid
                  ? "text-white/85 hover:text-accent"
                  : "text-white/90 hover:text-white",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Button
            href={callNowHref}
            variant={isSolid ? "primary" : "outline"}
            className="hidden px-7 py-3.5 text-sm lg:inline-flex"
          >
            Call Now
          </Button>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
