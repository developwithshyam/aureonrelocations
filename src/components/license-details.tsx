import Image from "next/image";
import { companyLicense } from "@/lib/constants";
import { cn } from "@/lib/utils";

type LicenseDetailsProps = {
  variant: "compact" | "full";
  className?: string;
  showLogos?: boolean;
};

const labelClass =
  "text-xs font-medium tracking-widest text-text-secondary uppercase";

function CertificationLogos({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex flex-wrap items-center justify-center gap-8 sm:gap-12",
        className,
      )}
    >
      {companyLicense.certificationLogos.map((logo) => (
        <Image
          key={logo.src}
          src={logo.src}
          alt={logo.alt}
          width={140}
          height={140}
          className="h-20 w-auto max-w-[140px] object-contain sm:h-24"
        />
      ))}
    </div>
  );
}

export function LicenseDetails({
  variant,
  className,
  showLogos = false,
}: LicenseDetailsProps) {
  if (variant === "compact") {
    return (
      <div className={cn("text-center sm:text-left", className)}>
        <p className="text-xs leading-relaxed text-white/50">
          {companyLicense.tradeName} · Licence {companyLicense.licenceNumber} ·
          Unified Licence {companyLicense.unifiedLicenceNumber}
        </p>
        <p className="mt-1 text-xs text-white/40">
          {companyLicense.emirate} · Valid until {companyLicense.expiryDate}
        </p>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "rounded-xl border border-border bg-surface p-8 lg:p-10",
        className,
      )}
    >
      {showLogos && (
        <CertificationLogos className="mb-8 border-b border-border pb-8" />
      )}

      <h2 className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">
        Company Registration
      </h2>

      <dl className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <dt className={labelClass}>Trade Name</dt>
          <dd className="mt-1 text-sm text-primary-dark">
            {companyLicense.tradeName}
          </dd>
        </div>
        <div>
          <dt className={labelClass}>Licence Type</dt>
          <dd className="mt-1 text-sm text-primary-dark">
            {companyLicense.licenceType}
          </dd>
        </div>
        <div>
          <dt className={labelClass}>Licence No.</dt>
          <dd className="mt-1 text-sm text-primary-dark">
            {companyLicense.licenceNumber}
          </dd>
        </div>
        <div>
          <dt className={labelClass}>Unified Licence No.</dt>
          <dd className="mt-1 text-sm text-primary-dark">
            {companyLicense.unifiedLicenceNumber}
          </dd>
        </div>
        <div>
          <dt className={labelClass}>Unified Registration No.</dt>
          <dd className="mt-1 text-sm text-primary-dark">
            {companyLicense.unifiedRegistrationNumber}
          </dd>
        </div>
        <div>
          <dt className={labelClass}>Legal Form</dt>
          <dd className="mt-1 text-sm text-primary-dark">
            {companyLicense.legalForm}
          </dd>
        </div>
        <div>
          <dt className={labelClass}>Establishment Date</dt>
          <dd className="mt-1 text-sm text-primary-dark">
            {companyLicense.establishmentDate}
          </dd>
        </div>
        <div>
          <dt className={labelClass}>Expiry Date</dt>
          <dd className="mt-1 text-sm text-primary-dark">
            {companyLicense.expiryDate}
          </dd>
        </div>
        <div>
          <dt className={labelClass}>Emirate</dt>
          <dd className="mt-1 text-sm text-primary-dark">
            {companyLicense.emirate}
          </dd>
        </div>
      </dl>
    </div>
  );
}
