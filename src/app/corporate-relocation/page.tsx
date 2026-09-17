import { CorporateRelocationPageContent } from "@/components/landing/corporate-relocation-page-content";
import { createPageMetadata } from "@/lib/metadata";
import { corporateRelocationSeo } from "@/lib/seo-content";

export const metadata = createPageMetadata({
  title: corporateRelocationSeo.title,
  description: corporateRelocationSeo.description,
  path: "/corporate-relocation",
});

export default function CorporateRelocationPage() {
  return <CorporateRelocationPageContent />;
}
