const COMMON_CAPABILITY_POOL = [
  "UX Research Support",
  "Design QA Workflow",
  "Cross-Team Collaboration",
  "Product Strategy Alignment",
  "Conversion-Focused UX",
  "Iteration Planning",
  "Launch Asset Readiness",
  "Design-to-Dev Handoff",
];

const FALLBACK_SERVICE_POINTS = [
  "Discovery and scope clarity",
  "User flow and interaction design",
  "Execution-ready design outputs",
  "Launch and optimization support",
];

function toTitleCase(value: string) {
  return value
    .toLowerCase()
    .split(/\s+/)
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function normalizePoint(point: string) {
  return point.replace(/[•.,;:!?]/g, " ").replace(/\s+/g, " ").trim();
}

function hashString(value: string) {
  let hash = 0;
  for (let index = 0; index < value.length; index += 1) {
    hash = (hash << 5) - hash + value.charCodeAt(index);
    hash |= 0;
  }
  return Math.abs(hash);
}

function pickCommonCapabilities(seed: string) {
  const picked = new Set<string>();
  let rolling = hashString(seed) + 17;

  while (picked.size < 2) {
    const poolIndex = rolling % COMMON_CAPABILITY_POOL.length;
    picked.add(COMMON_CAPABILITY_POOL[poolIndex]);
    rolling = rolling * 31 + 7;
  }

  return Array.from(picked);
}

export function deriveCapabilitiesFromServices(servicePoints: string[], seed: string) {
  const sourcePoints = servicePoints.length > 0 ? servicePoints : FALLBACK_SERVICE_POINTS;
  const normalizedUnique = Array.from(new Set(sourcePoints.map((item) => normalizePoint(item)).filter(Boolean)));

  const serviceDerived = normalizedUnique.slice(0, 4).map((item) => toTitleCase(item));
  while (serviceDerived.length < 4) {
    const fallbackItem = FALLBACK_SERVICE_POINTS[serviceDerived.length];
    serviceDerived.push(toTitleCase(fallbackItem));
  }

  return [...serviceDerived, ...pickCommonCapabilities(seed)];
}
