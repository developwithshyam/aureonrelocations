"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Service } from "@/lib/constants";
import { cn } from "@/lib/utils";

type ServiceCardProps = {
  service: Service;
  className?: string;
};

export function ServiceCard({ service, className }: ServiceCardProps) {
  return (
    <Link
      href={`/services#${service.id}`}
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-lg bg-surface",
        className,
      )}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={service.image}
          alt={service.imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-primary-dark/20 transition-colors duration-500 group-hover:bg-primary-dark/40" />
        <span className="absolute top-4 left-4 text-xs font-semibold tracking-widest text-white/80">
          {service.number}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6 lg:p-8">
        <h3 className="text-lg font-medium tracking-wide text-primary-dark uppercase lg:text-xl">
          {service.title}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-text-secondary">
          {service.description}
        </p>
        <span className="mt-6 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-widest text-accent transition-all duration-400 group-hover:gap-2">
          Learn more
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </Link>
  );
}
