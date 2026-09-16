import Image from "next/image";
import Link from "next/link";
import {
  contactInfo,
  footerNavLinks,
  footerServiceLinks,
  socialLinks,
} from "@/lib/constants";
import { LicenseDetails } from "@/components/license-details";
import { cn, isExternalHref } from "@/lib/utils";

const mobileRowBand =
  "border-b border-white/10 px-6 py-10 lg:border-0 lg:bg-transparent lg:px-0 lg:py-0";
const mobileRowAlt = "bg-white/[0.04]";
const mobileCenter = "text-center lg:text-left";
const headingClass =
  "mb-4 text-xs font-semibold uppercase tracking-widest text-accent";
const linkClass =
  "text-sm text-white/70 transition-colors hover:text-white";

function FooterLinkList({
  links,
  className,
}: {
  links: readonly { label: string; href: string }[];
  className?: string;
}) {
  return (
    <ul className={cn("space-y-3", className)}>
      {links.map((link) => (
        <li key={link.href + link.label}>
          {isExternalHref(link.href) ? (
            <a href={link.href} className={linkClass}>
              {link.label}
            </a>
          ) : (
            <Link href={link.href} className={linkClass}>
              {link.label}
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
}

export function Footer() {
  return (
    <footer className="bg-primary-dark text-white">
      <div className="mx-auto max-w-7xl lg:px-8 lg:py-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 lg:gap-12">
          <div
            className={cn(
              mobileRowBand,
              mobileRowAlt,
              mobileCenter,
              "col-span-2 lg:col-span-1",
            )}
          >
            <Link
              href="/"
              className="inline-flex justify-center lg:justify-start"
            >
              <Image
                src="/images/logo.png"
                alt="Aureon Relocations"
                width={160}
                height={80}
                className="h-auto w-36 object-contain"
              />
            </Link>
            <p className="mt-6 text-sm leading-relaxed text-white/60">
              Moving you forward.
              <br />
              Without the stress.
            </p>
          </div>

          <div
            className={cn(
              mobileRowBand,
              mobileCenter,
              "border-r border-white/10 lg:border-0",
            )}
          >
            <h3 className={headingClass}>Navigation</h3>
            <FooterLinkList links={footerNavLinks} />
          </div>

          <div className={cn(mobileRowBand, mobileRowAlt, mobileCenter)}>
            <h3 className={headingClass}>Services</h3>
            <FooterLinkList links={footerServiceLinks} />
          </div>

          <div
            className={cn(
              mobileRowBand,
              mobileRowAlt,
              mobileCenter,
              "col-span-2 lg:col-span-1 lg:bg-transparent",
            )}
          >
            <h3 className={headingClass}>Contact</h3>
            <ul className="space-y-3 text-sm text-white/70">
              {contactInfo.phones.map((phone) => (
                <li key={phone}>
                  <a
                    href={`tel:${phone.replace(/\s/g, "")}`}
                    className="transition-colors hover:text-white"
                  >
                    {phone}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="transition-colors hover:text-white"
                >
                  {contactInfo.email}
                </a>
              </li>
              <li>{contactInfo.location}</li>
            </ul>
            <div className="mt-6 flex justify-center gap-4 lg:justify-start">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-xs uppercase tracking-widest text-white/50 transition-colors hover:text-accent"
                  aria-label={link.label}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-0 border-t border-white/10 px-6 pt-8 lg:mt-16 lg:px-0">
          <LicenseDetails variant="compact" className="mb-6 text-center lg:text-left" />
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-center text-xs text-white/40 sm:text-left">
              © 2026 Aureon Relocations. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link
                href="#"
                className="text-xs text-white/40 transition-colors hover:text-white/70"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-xs text-white/40 transition-colors hover:text-white/70"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
