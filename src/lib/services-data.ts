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
  metaTitle: string;
  metaDescription: string;
};

export const SERVICES: Service[] = [
  {
    slug: "website-development",
    icon: Globe,
    title: "Website Development",
    tagline:
      "Fast, responsive business websites designed to make services clear and customer contact easier",
    desc: "Fast, responsive business websites designed to make services clear and make it easier for customers to contact the business through forms, phone or WhatsApp.",
    color: "from-[#0f8b8d] to-[#14b8a6]",
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
    metaTitle: "Website Development Services in Pakistan | Nasib Rehman",
    metaDescription:
      "Fast, responsive business websites built with modern UI design, RFQ forms, and WhatsApp integration. Transparent packages from $99 with deployment help.",
  },
  {
    slug: "ai-chatbots",
    icon: Bot,
    title: "AI Chatbots",
    tagline:
      "Website chat assistants for FAQs, customer questions, lead capture and structured inquiries",
    desc: "Website chat assistants for FAQs, customer questions, lead capture and structured inquiries.",
    color: "from-[#0f8b8d] to-[#2dd4bf]",
    features: [
      "Website Chatbots",
      "FAQ Assistants",
      "Lead Capture",
      "Business Knowledge Assistants",
      "AI-powered Responses",
      "API-connected Chatbots",
    ],
    metaTitle: "AI Chatbot Development Services | Nasib Rehman",
    metaDescription:
      "Custom AI chatbots for website customer inquiries, FAQs, and automated lead capture. API-connected intelligent knowledge assistants from $150.",
  },
  {
    slug: "ai-automation",
    icon: Workflow,
    title: "AI Automation",
    tagline:
      "Automations that connect forms, email, Google Sheets, webhooks and business tools to reduce repetitive manual work",
    desc: "Automations that connect forms, email, Google Sheets, webhooks and business tools to reduce repetitive manual work.",
    color: "from-[#0f8b8d] to-[#14b8a6]",
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
    metaTitle: "n8n Workflow Automation Services | Nasib Rehman",
    metaDescription:
      "Eliminate repetitive manual tasks with n8n workflow automation services. Connect Google Sheets, email, CRMs, and webhooks starting from $200.",
  },
  {
    slug: "ai-voice-agents",
    icon: Mic,
    title: "AI Voice Agents",
    tagline:
      "Voice assistants designed to handle structured customer calls, collect information and support workflows",
    desc: "Voice assistants designed to handle structured customer calls, collect information and support lead or appointment workflows.",
    color: "from-[#0f8b8d] to-[#d6a84b]",
    features: [
      "Inbound Call Handling",
      "Customer Inquiries",
      "Appointment Requests",
      "Lead Qualification",
      "Basic Order-taking Workflows",
      "Business Call Automation",
    ],
    metaTitle: "AI Voice Agent Development Services | Nasib Rehman",
    metaDescription:
      "Automated AI voice agent development for customer call handling, appointment requests, and lead qualification. Practical voice AI from $350.",
  },
  {
    slug: "custom-digital-solutions",
    icon: Wrench,
    title: "Custom Digital Solutions",
    tagline:
      "Combined web and automation solutions tailored to workflows that do not fit a standard package",
    desc: "Combined web and automation solutions tailored to workflows that do not fit a standard package.",
    color: "from-[#14b8a6] to-[#d6a84b]",
    features: [
      "Custom Project Scoping",
      "Multi-service Combinations",
      "Website + Automation",
      "Chatbot + Voice Agent",
      "End-to-end Digital Systems",
      "Business Workflow Design",
    ],
    metaTitle: "Custom Software & Business Automation | Nasib Rehman",
    metaDescription:
      "End-to-end digital solutions combining custom websites, AI chatbots, voice agents, and multi-system workflow integrations. Bespoke setups from $500+.",
  },
];

export const getService = (slug: string) => SERVICES.find((s) => s.slug === slug);
