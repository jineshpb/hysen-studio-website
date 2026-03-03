import fs from "node:fs";
import path from "node:path";

const filePath = path.resolve("./data/seo-pages.json");
const raw = fs.readFileSync(filePath, "utf-8");
const data = JSON.parse(raw);

const requiredTop = ["type", "slug", "keyword", "meta", "hero", "ctaBand", "capabilities", "services", "finalCta"];
const allowedTypes = new Set(["services", "use-cases", "locations"]);

const errors = [];
const seen = new Set();

function hasText(value) {
  return typeof value === "string" && value.trim().length > 0;
}

if (!Array.isArray(data)) {
  errors.push("seo-pages.json must be an array");
} else {
  data.forEach((item, idx) => {
    for (const key of requiredTop) {
      if (!(key in item)) errors.push(`[${idx}] missing key: ${key}`);
    }

    if (!allowedTypes.has(item.type)) {
      errors.push(`[${idx}] invalid type: ${item.type}`);
    }

    if (!hasText(item.slug)) errors.push(`[${idx}] slug is empty`);
    if (!hasText(item.keyword)) errors.push(`[${idx}] keyword is empty`);

    const uniq = `${item.type}:${item.slug}`;
    if (seen.has(uniq)) errors.push(`[${idx}] duplicate route: ${uniq}`);
    seen.add(uniq);

    if (!item.meta || !hasText(item.meta.title) || !hasText(item.meta.description)) {
      errors.push(`[${idx}] meta.title/meta.description required`);
    }

    const hero = item.hero || {};
    ["heading", "subheading", "description", "imageSrc", "imageAlt", "ctaLabel", "ctaHref"].forEach((key) => {
      if (!hasText(hero[key])) errors.push(`[${idx}] hero.${key} is required`);
    });

    const ctaBand = item.ctaBand || {};
    ["heading", "subheading", "ctaLabel", "ctaHref"].forEach((key) => {
      if (!hasText(ctaBand[key])) errors.push(`[${idx}] ctaBand.${key} is required`);
    });

    if (!Array.isArray(item.capabilities) || item.capabilities.length < 3) {
      errors.push(`[${idx}] capabilities must have at least 3 items`);
    } else {
      item.capabilities.forEach((cap, cIdx) => {
        if (!hasText(cap.title) || !hasText(cap.subtitle)) {
          errors.push(`[${idx}] capabilities[${cIdx}] title/subtitle required`);
        }
      });
    }

    const services = item.services || {};
    if (!hasText(services.heading)) errors.push(`[${idx}] services.heading is required`);
    if (!Array.isArray(services.points) || services.points.length < 4) {
      errors.push(`[${idx}] services.points must have at least 4 entries`);
    }
    if (!hasText(services.ctaLabel) || !hasText(services.ctaHref)) {
      errors.push(`[${idx}] services ctaLabel/ctaHref required`);
    }

    const finalCta = item.finalCta || {};
    ["heading", "subheading", "ctaLabel", "ctaHref"].forEach((key) => {
      if (!hasText(finalCta[key])) errors.push(`[${idx}] finalCta.${key} is required`);
    });
  });
}

if (errors.length > 0) {
  console.error("SEO page validation failed:\n");
  errors.forEach((e) => console.error(`- ${e}`));
  process.exit(1);
}

console.log(`SEO page validation passed (${data.length} pages).`);
