import { createFileRoute } from "@tanstack/react-router";
import { Pricing } from "../components/landing/Pricing";
import { type PricingCategory, parsePricingCategory } from "../lib/pricing-categories";

type PricingSearch = {
  category?: PricingCategory;
};

export const Route = createFileRoute("/pricing")({
  validateSearch: (search: Record<string, unknown>): PricingSearch => ({
    category: parsePricingCategory(search.category),
  }),
  head: () => ({
    meta: [
      { title: "Pricing — Digital Solution by Nasib Rehman" },
      {
        name: "description",
        content:
          "Website development packages from $99, AI Chatbots from $150, AI Automation from $200, AI Voice Agents from $350, and Custom Solutions from $500+. Transparent, one-time setup pricing.",
      },
      { property: "og:title", content: "Pricing — Digital Solution by Nasib Rehman" },
      {
        property: "og:description",
        content:
          "Transparent pricing for websites from $99, AI chatbots from $150, AI automation from $200, AI voice agents from $350, and custom solutions from $500+.",
      },
      { property: "og:url", content: "https://nasibrehmandigitalsolutions.vercel.app/pricing" },
    ],
    links: [{ rel: "canonical", href: "https://nasibrehmandigitalsolutions.vercel.app/pricing" }],
  }),
  component: PricingPage,
});

function PricingPage() {
  const { category } = Route.useSearch();
  const navigate = Route.useNavigate();

  const handleCategoryChange = (newCategory: PricingCategory) => {
    if (newCategory === category) return;
    navigate({
      search: (prev: PricingSearch) => ({
        ...prev,
        category: newCategory,
      }),
      resetScroll: false,
    });
  };

  return <Pricing as="h1" category={category} onCategoryChange={handleCategoryChange} />;
}
