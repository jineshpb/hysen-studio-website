import { IndustrialSection } from "@/components/landing/industrial-section";

type Props = {
  items: string[];
};

export function CapabilitiesBlock({ items }: Props) {
  return <IndustrialSection items={items} />;
}
