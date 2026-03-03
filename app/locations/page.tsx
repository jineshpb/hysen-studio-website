import { SeoRouteIndex } from "@/components/seo/route-index";
import { getRoutesByType } from "@/lib/seo-routes";

export default function LocationsIndexPage() {
  return (
    <SeoRouteIndex
      type="locations"
      title="Locations"
      description="Location and market-intent pages for India startup teams and remote product collaborations."
      items={getRoutesByType("locations")}
    />
  );
}
