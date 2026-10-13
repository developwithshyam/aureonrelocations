const servicePageById: Partial<Record<string, string>> = {
  "home-relocation": "/home-relocation",
  "office-commercial-relocation": "/corporate-relocation",
};

export function getServiceHref(serviceId: string): string {
  const path = servicePageById[serviceId];
  if (path) return path;
  return `/services#${serviceId}`;
}
