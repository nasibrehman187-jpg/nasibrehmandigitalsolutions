import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, MessageSquare } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { SectionHeader } from "./Services";

const SERVICE_OPTIONS = [
  "Website Development",
  "AI Chatbots",
  "AI Automation",
  "AI Voice Agents",
  "Custom Digital Solutions",
];

const BUDGET_OPTIONS = ["Under $200", "$200 – $500", "$500 – $1,000", "$1,000+", "Not sure yet"];

export function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    whatsapp: "",
    service: "",
    budget: "",
    message: "",
  });

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const params = new URLSearchParams(window.location.search);
      const s = params.get("service");
      const p = params.get("plan");
      const proj = params.get("project");

      if (s || p || proj) {
        let initialMessage = "";
        if (proj) {
          initialMessage = `I am interested in discussing a solution similar to ${proj}.\n\nProject details: `;
        } else if (p) {
          initialMessage = `I am interested in the ${p} package.\n\nProject details: `;
        }

        // Match service accurately whether singular or plural
        const matchedService = SERVICE_OPTIONS.find(
          (opt) =>
            opt.toLowerCase() === s?.toLowerCase() ||
            (s?.toLowerCase().includes("chatbot") && opt === "AI Chatbots") ||
            (s?.toLowerCase().includes("voice") && opt === "AI Voice Agents") ||
            (s?.toLowerCase().includes("website") && opt === "Website Development") ||
            (s?.toLowerCase().includes("automation") && opt === "AI Automation") ||
            (s?.toLowerCase().includes("custom") && opt === "Custom Digital Solutions"),
        );

        setForm((prev) => ({
          ...prev,
          service: matchedService || prev.service,
          message: initialMessage || prev.message,
        }));
      }
    } catch {
      // ignore
    }
  }, []);

  const update =
    (k: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm((f) => ({ ...f, [k]: e.target.value }));

  const buildInquiryText = () => {
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
  };

  const onSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim()) {
      toast.error("Please enter your name.");
      return;
    }
    const text = buildInquiryText();
    const url = `https://wa.me/923317962794?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    toast.success("Opening WhatsApp with your project inquiry details!");
  };

  const onSendEmail = () => {
    if (!form.name.trim()) {
      toast.error("Please enter your name first.");
      return;
    }
    const text = buildInquiryText();
    const subject = `Project Inquiry from ${form.name.trim()}`;
    const url = `mailto:nasibrehman187@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(text)}`;
    window.location.href = url;
  };

  return (
    <section id="contact" className="content-auto relative pt-24 pb-20 sm:pt-28 sm:pb-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          tag="Contact"
          title={
            <>
              Tell Me About <span className="text-gradient">Your Project</span>
            </>
          }
          subtitle="Have a website, automation or AI idea? Send your requirements directly via WhatsApp or email to discuss the most suitable solution for your business."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-5">
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            onSubmit={onSendWhatsApp}
            className="glass-strong rounded-3xl border border-[rgba(247,243,232,0.08)] bg-[#111827]/80 p-8 lg:col-span-3"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field
                id="contact-name"
                label="Full Name"
                placeholder="Your name"
                value={form.name}
                onChange={update("name")}
                autoComplete="name"
                required
              />
              <Field
                id="contact-email"
                label="Email"
                type="email"
                placeholder="your@email.com"
                value={form.email}
                onChange={update("email")}
                autoComplete="email"
              />
              <Field
                id="contact-company"
                label="Business Name"
                placeholder="Your business (optional)"
                value={form.company}
                onChange={update("company")}
                autoComplete="organization"
              />
              <Field
                id="contact-whatsapp"
                label="WhatsApp Number"
                type="tel"
                placeholder="+92 xxx xxxxxxx"
                value={form.whatsapp}
                onChange={update("whatsapp")}
                autoComplete="tel"
              />
              <SelectField
                id="contact-service"
                label="Service Needed"
                value={form.service}
                onChange={update("service")}
                options={SERVICE_OPTIONS}
              />
              <SelectField
                id="contact-budget"
                label="Budget Range (Optional)"
                value={form.budget}
                onChange={update("budget")}
                options={BUDGET_OPTIONS}
              />
            </div>
            <div className="mt-5">
              <label
                htmlFor="contact-message"
                className="text-xs uppercase tracking-wider text-[#A8B0BF] font-medium"
              >
                Project Details
              </label>
              <div className="relative mt-2 rounded-xl">
                <textarea
                  id="contact-message"
                  rows={5}
                  value={form.message}
                  onChange={update("message")}
                  placeholder="Describe your project, requirements or the problem you want to solve..."
                  className="relative w-full rounded-xl border border-[rgba(247,243,232,0.1)] bg-[#0B1220] px-4 py-3 text-sm text-[#F7F3E8] outline-none placeholder:text-[#A8B0BF]/50 focus:border-[#14B8A6] focus:ring-1 focus:ring-[#14B8A6]"
                />
              </div>
            </div>

            <p className="mt-4 text-xs text-[#A8B0BF]">
              Your project details will open directly in WhatsApp or your email client for you to
              review and send.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <button
                type="submit"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#0F8B8D] to-[#14B8A6] px-6 py-2.5 text-xs sm:text-sm font-semibold text-[#0B1220] shadow-md shadow-[#0F8B8D]/20 hover:brightness-110 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#14B8A6]"
              >
                <MessageSquare className="h-4 w-4" />
                Send via WhatsApp
              </button>
              <button
                type="button"
                onClick={onSendEmail}
                className="inline-flex items-center gap-2 rounded-full border border-[rgba(247,243,232,0.1)] bg-[#111827] px-5 py-2.5 text-xs sm:text-sm font-medium text-[#F7F3E8] hover:bg-[#162033] hover:border-[rgba(20,184,166,0.3)] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#14B8A6]"
              >
                <Mail className="h-4 w-4 text-[#14B8A6]" />
                Send via Email
              </button>
            </div>

            <p className="mt-4 text-xs text-[#A8B0BF]">
              Direct communication with Nasib Rehman • No-obligation project discussion
            </p>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-6 lg:col-span-2"
          >
            {/* Contact info */}
            <div className="glass rounded-2xl p-6 sm:p-7 border border-[rgba(247,243,232,0.08)] bg-[#111827]">
              <div className="font-display text-lg font-semibold text-[#F7F3E8]">
                Direct Contact
              </div>
              <ul className="mt-4 space-y-4 text-sm">
                <InfoRow
                  icon={MessageSquare}
                  label="Chat on WhatsApp (+92 331 7962794)"
                  href="https://wa.me/923317962794"
                  isLink
                />
                <InfoRow icon={Phone} label="+92 331 7962794" href="tel:+923317962794" isLink />
                <InfoRow
                  icon={Mail}
                  label="nasibrehman187@gmail.com"
                  href="mailto:nasibrehman187@gmail.com"
                  isLink
                />
                <InfoRow icon={MapPin} label="Khairpur, Sindh, Pakistan" />
              </ul>
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/923317962794"
              target="_blank"
              rel="noopener noreferrer"
              className="glass group flex items-center gap-4 rounded-2xl p-5 border border-emerald-500/20 bg-emerald-500/5 transition hover:bg-emerald-500/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-emerald-500/30 bg-emerald-500/20">
                <MessageSquare className="h-5 w-5 text-emerald-400" />
              </span>
              <div>
                <div className="text-sm font-semibold text-[#F7F3E8]">Chat on WhatsApp</div>
                <div className="mt-0.5 text-xs text-[#A8B0BF]">+92 331 7962794</div>
              </div>
              <Send className="ml-auto h-4 w-4 text-[#A8B0BF] transition-transform group-hover:translate-x-1" />
            </a>

            {/* Trust highlights */}
            <div className="glass rounded-2xl p-6 border border-[rgba(247,243,232,0.08)] bg-[#111827]">
              <div className="mb-3 text-xs uppercase tracking-wider text-[#A8B0BF] font-medium">
                Working Together
              </div>
              <ul className="space-y-2.5 text-xs text-[#A8B0BF]">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#14B8A6]" />
                  Direct communication with Nasib Rehman
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#14B8A6]" />
                  No-obligation project discussion
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#D6A84B]" />
                  Available for remote projects
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#D6A84B]" />
                  Clear scope & transparent pricing
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Field({
  id,
  label,
  placeholder,
  type = "text",
  value,
  onChange,
  required,
  autoComplete,
}: {
  id: string;
  label: string;
  placeholder?: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="text-xs uppercase tracking-wider text-[#A8B0BF] font-medium">
        {label}
        {required && <span className="text-[#14B8A6]"> *</span>}
      </label>
      <div className="relative mt-2 rounded-xl">
        <input
          id={id}
          type={type}
          value={value}
          onChange={onChange}
          required={required}
          autoComplete={autoComplete}
          placeholder={placeholder}
          className="relative w-full rounded-xl border border-[rgba(247,243,232,0.1)] bg-[#0B1220] px-4 py-2.5 text-sm text-[#F7F3E8] outline-none placeholder:text-[#A8B0BF]/50 focus:border-[#14B8A6] focus:ring-1 focus:ring-[#14B8A6] [color-scheme:dark]"
        />
      </div>
    </div>
  );
}

function SelectField({
  id,
  label,
  value,
  onChange,
  options,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: string[];
}) {
  return (
    <div>
      <label htmlFor={id} className="text-xs uppercase tracking-wider text-[#A8B0BF] font-medium">
        {label}
      </label>
      <div className="relative mt-2 rounded-xl">
        <select
          id={id}
          value={value}
          onChange={onChange}
          className="relative w-full rounded-xl border border-[rgba(247,243,232,0.1)] bg-[#0B1220] px-4 py-2.5 text-sm text-[#F7F3E8] outline-none focus:border-[#14B8A6] focus:ring-1 focus:ring-[#14B8A6] [color-scheme:dark]"
        >
          <option value="" className="bg-[#0B1220] text-[#A8B0BF]">
            Select…
          </option>
          {options.map((o) => (
            <option key={o} value={o} className="bg-[#0B1220] text-[#F7F3E8]">
              {o}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

function InfoRow({
  icon: Icon,
  label,
  href,
  isLink,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  href?: string;
  isLink?: boolean;
}) {
  const content = (
    <li className="flex items-center gap-3 text-[#A8B0BF]">
      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl border border-[#14B8A6]/20 bg-[#14B8A6]/10">
        <Icon className="h-4 w-4 text-[#14B8A6]" />
      </span>
      <span className={isLink ? "transition-colors hover:text-[#F7F3E8]" : ""}>{label}</span>
    </li>
  );

  if (isLink && href) {
    return (
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel="noopener noreferrer"
        className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#14B8A6] rounded-lg"
      >
        {content}
      </a>
    );
  }
  return content;
}
