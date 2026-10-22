import Link from "next/link";
import { ChevronRight } from "lucide-react";

type BreadcrumbItem = {
  name: string;
  path: string;
};

export function PageBreadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex flex-wrap items-center gap-1 text-xs font-semibold tracking-widest text-white/70 uppercase">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={item.path} className="flex items-center gap-1">
              {index > 0 && (
                <ChevronRight className="h-3 w-3 text-white/40" aria-hidden="true" />
              )}
              {isLast ? (
                <span className="text-white/90">{item.name}</span>
              ) : (
                <Link
                  href={item.path}
                  className="transition-colors hover:text-accent"
                >
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
