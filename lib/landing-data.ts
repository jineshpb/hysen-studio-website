import type { ServiceCardData } from "@/components/landing/service-card";
import type { ProjectCardData } from "@/components/landing/project-card";

export const serviceTiles: ServiceCardData[] = [
  {
    title: "Prototyping & proof of concepts",
    description: "Turn sketches into functional prototypes you can test and refine.",
    variant: "orange",
    iconVariant: "pill",
    icon: "none",
  },
  {
    title: "Marketing & Launch Collaterals",
    description: "Product visuals, renders, videos, and materials for launch readiness.",
    variant: "navy",
    iconVariant: "circle",
    icon: "megaphone",
  },
  {
    title: "Packaging & Physical Design",
    description: "Retail-ready packaging and industrial design for production.",
    variant: "light",
    iconVariant: "circle",
    icon: "briefcase",
  },
  {
    title: "Manufacturing Preparation",
    description: "CAD optimization, BOMs, and production-ready files.",
    variant: "silver",
    iconVariant: "none",
    icon: "none",
    watermarkText: "HEISENHYSE",
  },
];

export const projectTiles: ProjectCardData[] = [
  {
    title: "Aether Marine EV",
    description: "Electric catamaran concept refined from sketch to showroom prototype.",
    imageType: "image",
    imageSrc: "/projects/image-1.png",
    textOverlay: true,
    projectGradient: "from-[#181414] to-[#323232]",
    descriptionTextColor: "#52525b",
  },
  {
    title: "Orbit Assistant",
    description: "Consumer robot identity and launch visuals for first-round investor demos.",
    imageType: "image",
    imageSrc: "/projects/image-2.png",
    textOverlay: true,
    projectGradient: "from-[#CDFFAB] to-[#D5FFB8]",
    descriptionTextColor: "#134e4a",
  },
  {
    title: "RetroCore Console",
    description: "Industrial redesign of a nostalgic gaming unit with modern internals.",
    imageType: "image",
    imageSrc: "/projects/image-3.png",
    textOverlay: true,
    projectGradient: "from-[#CACACA] to-[#5E5E5E]",
    descriptionTextColor: "#3f3f46",
  },
  {
    title: "Trailframe Utility EV",
    description: "Off-road platform with modular chassis and production-ready surfacing.",
    imageType: "image",
    imageSrc: "/projects/image-4.png",
    textOverlay: true,
    projectGradient: "from-[#F7A591] to-[#FF7959]",
    descriptionTextColor: "#ffedd4",
  },
  {
    title: "Helix Cockpit",
    description: "Automotive steering interface study focused on UX and premium finish.",
    imageType: "image",
    imageSrc: "/projects/image-5.png",
    textOverlay: true,
    projectGradient: "from-[#303936] to-[#45504A]",
    descriptionTextColor: "#a4f4cf",
  },
  {
    title: "Nova Home Drone",
    description: "Compact indoor drone product language and packaging system exploration.",
    imageType: "image",
    imageSrc: "/projects/image-1.png",
    textOverlay: true,
    projectGradient: "from-[#CACACA] to-[#5E5E5E]",
    descriptionTextColor: "#d1d5db",
  },
];
