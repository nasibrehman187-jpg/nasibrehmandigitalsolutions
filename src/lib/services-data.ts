import { Globe, Workflow, Bot, Mic, Wrench, type LucideIcon } from "lucide-react";

export type ServiceSlug =
  | "website-development"
  | "ai-automation"
  | "ai-chatbots"
  | "ai-voice-agents"
  | "custom-digital-solutions";

export type Service = {
  slug: ServiceSlug;
  icon: LucideIcon;
  title: string;
  tagline: string;
  desc: string;
  color: string; // tailwind gradient
  features: string[];
};

export const SERVICES: Service[] = [
  {
    slug: "website-development",
    icon: Globe,
    title: "Website Development",
    tagline: "Professional websites for businesses that need a strong online presence",
    desc: "Professional, responsive websites built for businesses that need a strong online presence and an easier way for customers to contact them.",
    color: "from-cyan-400 to-blue-500",
    features: [
      "Business Websites",
      "Landing Pages",
      "Portfolio Websites",
      "Clinic Websites",
      "Service Websites",
      "Contact Forms",
      "RFQ Forms",
      "WhatsApp Integration",
      "Mobile Responsive Design",
      "Custom UI Design",
      "Deployment Assistance",
    ],
  },
  {
    slug: "ai-automation",
    icon: Workflow,
    title: "AI Automation",
    tagline:
      "Custom automation workflows that reduce repetitive manual work and connect business tools",
    desc: "Custom automation workflows designed to reduce repetitive manual work, connect business tools and streamline digital processes.",
    color: "from-blue-400 to-indigo-500",
    features: [
      "n8n Automation",
      "Lead Management Workflows",
      "Google Sheets Automation",
      "Email Automation",
      "Webhooks",
      "API Integrations",
      "Form Automation",
      "AI-powered Workflows",
      "Business Process Automation",
    ],
  },
  {
    slug: "ai-chatbots",
    icon: Bot,
    title: "AI Chatbots",
    tagline: "AI chat assistants for FAQs, customer questions and structured support",
    desc: "AI chat assistants for FAQs, customer questions, lead capture and structured business support.",
    color: "from-violet-400 to-fuchsia-500",
    features: [
      "Website Chatbots",
      "FAQ Assistants",
      "Lead Capture",
      "Business Knowledge Assistants",
      "AI-powered Responses",
      "API-connected Chatbots",
    ],
  },
  {
    slug: "ai-voice-agents",
    icon: Mic,
    title: "AI Voice Agents",
    tagline: "AI-powered calling assistants for structured customer conversations",
    desc: "AI-powered calling assistants designed for structured customer conversations and business workflows.",
    color: "from-fuchsia-400 to-rose-500",
    features: [
      "Inbound Call Handling",
      "Customer Inquiries",
      "Appointment Requests",
      "Lead Qualification",
      "Basic Order-taking Workflows",
      "Business Call Automation",
    ],
  },
  {
    slug: "custom-digital-solutions",
    icon: Wrench,
    title: "Custom Digital Solutions",
    tagline: "Combined websites, automation and AI tailored to your business workflow",
    desc: "Websites, automation, chatbots and voice AI can be combined into a custom solution based on a specific business workflow.",
    color: "from-cyan-400 to-violet-500",
    features: [
      "Custom Project Scoping",
      "Multi-service Combinations",
      "Website + Automation",
      "Chatbot + Voice Agent",
      "End-to-end Digital Systems",
      "Business Workflow Design",
    ],
  },
];

export const getService = (slug: string) => SERVICES.find((s) => s.slug === slug);
