import { CorporateRelocationPageContent } from "@/components/landing/corporate-relocation-page-content";
import { BreadcrumbListJsonLd } from "@/components/structured-data";
import { createPageMetadata } from "@/lib/metadata";
import { corporateRelocationSeo } from "@/lib/seo-content";

export const metadata = createPageMetadata({
  title: corporateRelocationSeo.title,
  description: corporateRelocationSeo.description,
  path: "/corporate-relocation",
});

export default function CorporateRelocationPage() {
  return (
    <>
      <BreadcrumbListJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Corporate Relocation", path: "/corporate-relocation" },
        ]}
      />
      <CorporateRelocationPageContent />
    </>
  );
}
