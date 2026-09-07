import Image from "next/image";
import { contactInfo, images } from "@/lib/constants";
import { createPageMetadata } from "@/lib/metadata";
import { ContactForm } from "@/components/contact-form";
import { FadeIn } from "@/components/fade-in";

export const metadata = createPageMetadata({
  title: "Contact Aureon Relocations | Get a Free Quote",
  description:
    "Contact Aureon Relocations to request a free quote. Tell us about your move and we'll help you plan the next step.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <section className="relative flex min-h-[50vh] items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={images.contactHero}
            alt="Contact Aureon Relocations for your moving needs"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-primary-dark/60" />
        </div>
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-16 pt-32 lg:px-8 lg:pb-20">
          <FadeIn>
            <h1 className="max-w-2xl text-4xl font-light leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
              <span className="block">Let&apos;s Get</span>
              <span className="block">You Moving.</span>
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-white/75 sm:text-lg">
              Tell us a little about your move and we&apos;ll help you plan the
              next step.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-5 lg:gap-20">
            <FadeIn className="lg:col-span-3">
              <ContactForm />
            </FadeIn>

            <FadeIn delay={0.15} className="lg:col-span-2">
              <div className="rounded-xl border border-border bg-surface p-8">
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
                      Location
                    </dt>
                    <dd className="mt-1 text-sm text-primary-dark">
                      {contactInfo.location}
                    </dd>
                  </div>
                </dl>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
