import { contactInfo } from "@/lib/constants";

export function ContactInfoCard() {
  return (
    <div className="h-full rounded-xl border border-border bg-surface p-8 lg:p-10">
      <h2 className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">
        Aureon Relocations
      </h2>

      <dl className="mt-8 space-y-6">
        <div>
          <dt className="text-xs font-medium tracking-widest text-text-secondary uppercase">
            Phone
          </dt>
          <dd className="mt-2 space-y-1">
            {contactInfo.phones.map((phone) => (
              <a
                key={phone}
                href={`tel:${phone.replace(/\s/g, "")}`}
                className="block text-sm text-primary-dark transition-colors hover:text-accent"
              >
                {phone}
              </a>
            ))}
          </dd>
        </div>
        <div>
          <dt className="text-xs font-medium tracking-widest text-text-secondary uppercase">
            Email
          </dt>
          <dd className="mt-1">
            <a
              href={`mailto:${contactInfo.email}`}
              className="text-sm text-primary-dark transition-colors hover:text-accent"
            >
              {contactInfo.email}
            </a>
          </dd>
        </div>
        <div>
          <dt className="text-xs font-medium tracking-widest text-text-secondary uppercase">
            Address
          </dt>
          <dd className="mt-1 text-sm text-primary-dark">
            {contactInfo.location}
          </dd>
        </div>
      </dl>
    </div>
  );
}
