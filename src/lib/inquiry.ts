import { CONTACT_INFO } from "./contact.ts";

export type InquiryForm = {
  name: string;
  email: string;
  company: string;
  whatsapp: string;
  service: string;
  budget: string;
  message: string;
};

// Shared validation for contact form
export function validateInquiry(form: InquiryForm) {
  const errs: Record<string, string> = {};
  if (!form.name.trim()) {
    errs.name = "Please enter your full name.";
  }
  if (form.email.trim()) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email.trim())) {
      errs.email = "Please enter a valid email address (e.g. name@domain.com).";
    }
  }
  if (!form.service) {
    errs.service = "Please select the service you need.";
  }
  if (!form.message.trim()) {
    errs.message = "Please describe your project or requirements.";
  }
  return errs;
}

export function buildInquiryText(form: InquiryForm) {
  return [
    `*Project Inquiry — Digital Solution*`,
    `*Name:* ${form.name.trim()}`,
    `*Email:* ${form.email.trim() || "Not provided"}`,
    `*Business Name:* ${form.company.trim() || "Not provided"}`,
    `*WhatsApp Number:* ${form.whatsapp.trim() || "Not provided"}`,
    `*Service Needed:* ${form.service || "Not selected"}`,
    `*Budget Range:* ${form.budget || "Not specified"}`,
    `*Project Details:*`,
    form.message.trim() || "None provided",
  ].join("\n");
}

export function getInquiryEmailUrl(form: InquiryForm) {
  const subject = `Project Inquiry: ${form.service} — ${form.name.trim()}`;
  return `mailto:${CONTACT_INFO.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(buildInquiryText(form))}`;
}

export function getInquiryWhatsAppUrl(form: InquiryForm) {
  return `${CONTACT_INFO.whatsappUrl}?text=${encodeURIComponent(buildInquiryText(form))}`;
}
