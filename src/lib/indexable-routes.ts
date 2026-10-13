/** Public routes included in sitemap.xml and eligible for indexing. */
export const indexableRoutes = [
  "/",
  "/about",
  "/services",
  "/contact",
  "/home-relocation",
  "/corporate-relocation",
] as const;

export type IndexableRoute = (typeof indexableRoutes)[number];
