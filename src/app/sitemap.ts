import type { MetadataRoute } from "next";
import { indexableRoutes } from "@/lib/indexable-routes";
import { siteUrl } from "@/lib/metadata";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date().toISOString();

  return indexableRoutes.map((route) => ({
    url: route === "/" ? `${siteUrl}/` : `${siteUrl}${route}`,
    lastModified,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.8,
  }));
}
