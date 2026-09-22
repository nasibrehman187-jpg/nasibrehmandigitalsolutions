export const PRICING_CATEGORIES = [
  "websites",
  "chatbots",
  "automation",
  "voice-agents",
  "custom",
] as const;

export type PricingCategory = (typeof PRICING_CATEGORIES)[number];

export const DEFAULT_PRICING_CATEGORY: PricingCategory = "websites";

export const SERVICE_SLUG_TO_PRICING_CATEGORY: Record<string, PricingCategory> = {
  "website-development": "websites",
  "ai-chatbots": "chatbots",
  "ai-automation": "automation",
  "ai-voice-agents": "voice-agents",
  "custom-digital-solutions": "custom",
};

export function isValidPricingCategory(val: unknown): val is PricingCategory {
  return typeof val === "string" && (PRICING_CATEGORIES as readonly string[]).includes(val);
}

export function parsePricingCategory(val: unknown): PricingCategory {
  if (typeof val !== "string") return DEFAULT_PRICING_CATEGORY;
  const normalized = val.trim().toLowerCase();
  if (isValidPricingCategory(normalized)) {
    return normalized;
  }
  if (normalized in SERVICE_SLUG_TO_PRICING_CATEGORY) {
    return SERVICE_SLUG_TO_PRICING_CATEGORY[normalized];
  }
  return DEFAULT_PRICING_CATEGORY;
}

export function getPricingCategoryForService(slug: string): PricingCategory {
  return SERVICE_SLUG_TO_PRICING_CATEGORY[slug] ?? DEFAULT_PRICING_CATEGORY;
}
