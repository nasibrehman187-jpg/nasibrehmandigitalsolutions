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
      { title: "Transparent Package Pricing | Nasib Rehman" },
      {
        name: "description",
        content:
          "Transparent, one-time setup pricing: websites from $99, AI chatbots from $150, n8n automation from $200, and AI voice agents from $350. Defined deliverables.",
      },
      {
        property: "og:title",
        content: "Transparent Package Pricing | Nasib Rehman",
      },
      {
        property: "og:description",
        content:
          "Transparent, one-time setup pricing: websites from $99, AI chatbots from $150, n8n automation from $200, and AI voice agents from $350. Defined deliverables.",
      },
      { property: "og:url", content: "https://nasibrehmandigitalsolutions.vercel.app/pricing" },
      {
        name: "twitter:title",
        content: "Transparent Package Pricing | Nasib Rehman",
      },
      {
        name: "twitter:description",
        content:
          "Transparent, one-time setup pricing: websites from $99, AI chatbots from $150, n8n automation from $200, and AI voice agents from $350. Defined deliverables.",
      },
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
