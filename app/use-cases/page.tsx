import { SeoRouteIndex } from "@/components/seo/route-index";
import { getRoutesByType } from "@/lib/seo-routes";

export default function UseCasesIndexPage() {
  return (
    <SeoRouteIndex
      type="use-cases"
      title="Use Cases"
      description="Problem-driven pages covering handoff, launch, execution, conversion, and delivery bottlenecks."
      items={getRoutesByType("use-cases")}
    />
  );
}
