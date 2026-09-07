import Image from "next/image";
import { images, principles } from "@/lib/constants";
import { FadeIn } from "@/components/fade-in";

export function WhyAureon() {
  return (
    <section className="py-24 lg:py-32" aria-label="Why Aureon">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <FadeIn>
            <div>
              <h2 className="text-3xl font-light leading-tight tracking-tight text-primary-dark sm:text-4xl md:text-5xl lg:text-6xl">
                <span className="block">We Don&apos;t Just</span>
                <span className="block">Move Things.</span>
                <span className="mt-4 block text-accent">We Move Lives</span>
                <span className="block text-accent">Forward.</span>
              </h2>

              <div className="mt-12 grid gap-8 sm:grid-cols-2">
                {principles.map((principle, index) => (
                  <FadeIn key={principle.title} delay={index * 0.1}>
                    <div>
                      <h3 className="text-sm font-semibold tracking-widest text-primary-dark uppercase">
                        {principle.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                        {principle.description}
                      </p>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="right" delay={0.2}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-lg">
              <Image
                src={images.whyAureon}
                alt="Professional mover carefully handling furniture in an elegant interior"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
