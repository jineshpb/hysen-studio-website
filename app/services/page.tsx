import { SeoRouteIndex } from "@/components/seo/route-index";
import { getRoutesByType } from "@/lib/seo-routes";

export default function ServicesIndexPage() {
  return (
    <SeoRouteIndex
      type="services"
      title="Services"
      description="Design systems, rapid prototyping, product support, packaging, and launch collateral services."
      items={getRoutesByType("services")}
    />
  );
}
