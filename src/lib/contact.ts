export const CONTACT_INFO = {
  name: "Nasib Rehman",
  brand: "Digital Solution",
  phone: "+92 331 7962794",
  phoneRaw: "923317962794",
  phoneTel: "+923317962794",
  whatsappUrl: "https://wa.me/923317962794",
  email: "nasibrehman187@gmail.com",
  location: "Khairpur, Sindh, Pakistan",
} as const;

export function getWhatsAppUrl(message?: string): string {
  if (!message) return CONTACT_INFO.whatsappUrl;
  return `${CONTACT_INFO.whatsappUrl}?text=${encodeURIComponent(message)}`;
}
