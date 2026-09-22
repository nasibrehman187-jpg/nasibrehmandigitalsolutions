import assert from "node:assert/strict";
import test from "node:test";
import {
  DEFAULT_PRICING_CATEGORY,
  PRICING_CATEGORIES,
  SERVICE_SLUG_TO_PRICING_CATEGORY,
  getPricingCategoryForService,
  isValidPricingCategory,
  parsePricingCategory,
} from "../src/lib/pricing-categories.ts";

test("pricing categories constant contains all 5 expected categories", () => {
  assert.deepEqual(PRICING_CATEGORIES, [
    "websites",
    "chatbots",
    "automation",
    "voice-agents",
    "custom",
  ]);
  assert.equal(DEFAULT_PRICING_CATEGORY, "websites");
});

test("maps all 5 service slugs to their respective pricing category tabs", () => {
  assert.equal(getPricingCategoryForService("website-development"), "websites");
  assert.equal(getPricingCategoryForService("ai-chatbots"), "chatbots");
  assert.equal(getPricingCategoryForService("ai-automation"), "automation");
  assert.equal(getPricingCategoryForService("ai-voice-agents"), "voice-agents");
  assert.equal(getPricingCategoryForService("custom-digital-solutions"), "custom");
});

test("falls back to default 'websites' for unknown service slugs", () => {
  assert.equal(getPricingCategoryForService("unknown-service"), "websites");
  assert.equal(getPricingCategoryForService(""), "websites");
});

test("isValidPricingCategory correctly validates categories", () => {
  for (const cat of PRICING_CATEGORIES) {
    assert.equal(isValidPricingCategory(cat), true);
  }
  assert.equal(isValidPricingCategory("invalid"), false);
  assert.equal(isValidPricingCategory(null), false);
  assert.equal(isValidPricingCategory(undefined), false);
  assert.equal(isValidPricingCategory(123), false);
});

test("parsePricingCategory handles exact categories", () => {
  assert.equal(parsePricingCategory("websites"), "websites");
  assert.equal(parsePricingCategory("chatbots"), "chatbots");
  assert.equal(parsePricingCategory("automation"), "automation");
  assert.equal(parsePricingCategory("voice-agents"), "voice-agents");
  assert.equal(parsePricingCategory("custom"), "custom");
});

test("parsePricingCategory normalizes whitespace and casing", () => {
  assert.equal(parsePricingCategory("  chatbots  "), "chatbots");
  assert.equal(parsePricingCategory("VOICE-AGENTS"), "voice-agents");
  assert.equal(parsePricingCategory(" Automation "), "automation");
});

test("parsePricingCategory accepts service slugs directly for convenience", () => {
  assert.equal(parsePricingCategory("ai-chatbots"), "chatbots");
  assert.equal(parsePricingCategory("ai-automation"), "automation");
  assert.equal(parsePricingCategory("ai-voice-agents"), "voice-agents");
  assert.equal(parsePricingCategory("website-development"), "websites");
  assert.equal(parsePricingCategory("custom-digital-solutions"), "custom");
});

test("parsePricingCategory safely falls back to default 'websites' on invalid or missing input", () => {
  assert.equal(parsePricingCategory(undefined), "websites");
  assert.equal(parsePricingCategory(null), "websites");
  assert.equal(parsePricingCategory(""), "websites");
  assert.equal(parsePricingCategory("random-nonexistent-category"), "websites");
  assert.equal(parsePricingCategory({ foo: "bar" }), "websites");
});
