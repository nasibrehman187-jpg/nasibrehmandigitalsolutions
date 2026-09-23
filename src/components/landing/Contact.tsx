import { motion } from "framer-motion";
import { Mail, MapPin, Phone, MessageSquare, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { SectionHeader } from "./SectionHeader";
import { CONTACT_INFO } from "@/lib/contact";
import {
  type InquiryForm,
  validateInquiry,
  getInquiryWhatsAppUrl,
  getInquiryEmailUrl,
} from "@/lib/inquiry";

const SERVICE_OPTIONS = [
  "Website Development",
  "AI Chatbots",
  "AI Automation",
  "AI Voice Agents",
  "Custom Digital Solutions",
];

const BUDGET_OPTIONS = ["Under $200", "$200 – $500", "$500 – $1,000", "$1,000+", "Not sure yet"];

export function Contact({ as = "h2" }: { as?: "h1" | "h2" }) {
  const SubHeading = as === "h1" ? "h2" : "h3";
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

  const [errors, setErrors] = useState<Record<string, string>>({});

  const update =
    (k: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setForm((f) => ({ ...f, [k]: e.target.value }));
      if (errors[k]) {
        setErrors((prev) => {
          const next = { ...prev };
          delete next[k];
          return next;
        });
      }
    };

  const onSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validateInquiry(form);
    setErrors(errs);
    if (Object.keys(errs).length > 0) {
      toast.error("Please complete the required project fields.");
      return;
    }
    const url = getInquiryWhatsAppUrl(form);
    window.open(url, "_blank", "noopener,noreferrer");
    toast.success("Your project details are ready to open in WhatsApp.");
  };

  const onSendEmail = () => {
    const errs = validateInquiry(form);
    setErrors(errs);
    if (Object.keys(errs).length > 0) {
      toast.error("Please complete the required project fields.");
      return;
    }
    const url = getInquiryEmailUrl(form);
    window.location.href = url;
    toast.success("Your email app is being opened with your project details.");
  };

  return (
    <section id="contact" className="content-auto relative pt-20 pb-16 sm:pt-28 sm:pb-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          as={as}
          tag="Direct Consultation"
          title={
            <>
              Tell Me About <span className="text-[#087F8C]">Your Project</span>
            </>
          }
          subtitle="Share what you want to build or improve, and send your requirements directly through WhatsApp or email."
        />

        {/* Founder Consultation Split Layout */}
        <div className="mt-8 sm:mt-12 lg:mt-18 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-stretch">
          {/* Left Column — Deep Navy Direct Contact Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 rounded-2xl bg-[#10233F] p-5 sm:p-8 lg:p-10 text-white flex flex-col justify-between shadow-lg relative overflow-hidden"
          >
            {/* Ambient blur */}
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-56 h-56 rounded-full bg-[#087F8C]/20 blur-3xl pointer-events-none" />

            <div className="relative z-10 space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#2DD4BF] border border-white/10">
                  <MessageSquare className="h-3.5 w-3.5 text-[#2DD4BF]" />
                  <span>Direct Communication</span>
                </div>
                <SubHeading className="mt-3 font-display text-2xl sm:text-3xl font-bold text-white">
                  Direct Contact
                </SubHeading>
                <p className="mt-1.5 text-xs sm:text-sm text-[#D1DCE8] leading-relaxed">
                  Have questions or want to discuss project feasibility? Reach out directly via
                  WhatsApp or email.
                </p>

                {/* Compact & Prominent Direct Contact Options */}
                <div className="mt-5 space-y-2.5">
                  <a
                    href={CONTACT_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between gap-3 p-3 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 hover:bg-emerald-500/25 transition group min-h-[44px]"
                  >
                    <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold">
                      <MessageSquare className="h-4 w-4 text-emerald-400 shrink-0" />
                      <span>Chat on WhatsApp</span>
                    </div>
                    <span className="text-xs font-mono text-emerald-400 font-normal group-hover:translate-x-0.5 transition-transform">
                      {CONTACT_INFO.phone} →
                    </span>
                  </a>

                  <a
                    href={`mailto:${CONTACT_INFO.email}`}
                    className="flex items-center justify-between gap-3 p-3 rounded-xl bg-white/5 border border-white/10 text-[#D1DCE8] hover:bg-white/10 hover:text-white transition min-h-[44px]"
                  >
                    <div className="flex items-center gap-2.5 text-xs sm:text-sm">
                      <Mail className="h-4 w-4 text-[#2DD4BF] shrink-0" />
                      <span>{CONTACT_INFO.email}</span>
                    </div>
                    <span className="text-xs text-slate-400">Email →</span>
                  </a>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                    <a
                      href={`tel:${CONTACT_INFO.phoneRaw}`}
                      className="flex items-center gap-2.5 p-2.5 rounded-lg bg-white/5 border border-white/10 text-xs text-[#D1DCE8] hover:text-white transition min-h-[44px]"
                    >
                      <Phone className="h-3.5 w-3.5 text-[#2DD4BF] shrink-0" />
                      <span>{CONTACT_INFO.phone}</span>
                    </a>
                    <a
                      href={CONTACT_INFO.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View location on Google Maps: ${CONTACT_INFO.location}`}
                      className="flex items-center gap-2.5 p-2.5 rounded-lg bg-white/5 border border-white/10 text-xs text-[#D1DCE8] hover:text-white transition min-h-[44px]"
                    >
                      <MapPin className="h-3.5 w-3.5 text-[#2DD4BF] shrink-0" />
                      <span>{CONTACT_INFO.location}</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Working Together (Desktop view) */}
              <div className="hidden lg:block border-t border-white/10 pt-6 space-y-3">
                <div className="text-xs uppercase tracking-wider text-[#2DD4BF] font-bold mb-3">
                  Working Together
                </div>
                <ul className="space-y-2.5 text-xs text-[#D1DCE8]">
                  <li className="flex items-center gap-2.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#2DD4BF] shrink-0" />
                    <span>Direct communication with Nasib Rehman</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#2DD4BF] shrink-0" />
                    <span>No-obligation project discussion</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-400 shrink-0" />
                    <span>Available for remote projects</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-400 shrink-0" />
                    <span>Clear scope & transparent pricing</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="hidden lg:block relative z-10 pt-6 mt-6 border-t border-white/10 text-xs text-[#D1DCE8]">
              Typical response time: within a few business hours.
            </div>
          </motion.div>

          {/* Right Column — Clean White Form Container */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            onSubmit={onSendWhatsApp}
            className="rounded-2xl border border-[#DCE4EC] bg-white p-5 sm:p-8 lg:p-10 lg:col-span-7 shadow-xs flex flex-col justify-between"
          >
            <div>
              <div className="mb-6 pb-4 border-b border-slate-100">
                <SubHeading className="font-display text-lg sm:text-xl font-bold text-[#142338]">
                  Send Project Inquiry
                </SubHeading>
                <p className="text-xs text-[#526174] mt-0.5">
                  Fill in your details below to prepare your message.
                </p>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <Field
                  id="contact-name"
                  label="Full Name"
                  placeholder="Your name"
                  value={form.name}
                  onChange={update("name")}
                  autoComplete="name"
                  required
                  error={errors.name}
                />
                <Field
                  id="contact-email"
                  label="Email"
                  type="email"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={update("email")}
                  autoComplete="email"
                  error={errors.email}
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
                  required
                  error={errors.service}
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
                  className="text-xs font-bold uppercase tracking-wider text-[#142338]"
                >
                  Project Details <span className="text-[#087F8C]">*</span>
                </label>
                <div className="relative mt-2">
                  <textarea
                    id="contact-message"
                    rows={5}
                    value={form.message}
                    onChange={update("message")}
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={errors.message ? "contact-message-error" : undefined}
                    placeholder="Describe your project, requirements or the problem you want to solve..."
                    className={`relative w-full rounded-xl border ${
                      errors.message
                        ? "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                        : "border-[#DCE4EC] bg-[#F8FAFC] focus:border-[#087F8C] focus:bg-white focus:ring-2 focus:ring-[#087F8C]/20"
                    } px-4 py-3 text-sm text-[#142338] outline-none placeholder:text-slate-400 transition-all [color-scheme:light]`}
                  />
                </div>
                {errors.message && (
                  <p
                    id="contact-message-error"
                    className="mt-1.5 text-xs text-red-600"
                    role="alert"
                  >
                    {errors.message}
                  </p>
                )}
              </div>

              <p className="mt-4 text-xs text-[#526174] leading-relaxed">
                Your project details will open directly in WhatsApp or your email client for you to
                review and send.
              </p>
            </div>

            <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-slate-100">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <button
                  type="submit"
                  className="group inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-[#087F8C] px-6 py-3 text-xs sm:text-sm font-semibold text-white shadow-xs hover:bg-[#066570] transition-all min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#087F8C]"
                >
                  <MessageSquare className="h-4 w-4" />
                  <span>Send via WhatsApp</span>
                </button>
                <button
                  type="button"
                  onClick={onSendEmail}
                  className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-xs sm:text-sm font-semibold text-[#142338] hover:bg-slate-50 transition min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#087F8C]"
                >
                  <Mail className="h-4 w-4 text-[#087F8C]" />
                  <span>Send via Email</span>
                </button>
              </div>

              <div className="mt-4 text-xs text-[#526174]">
                Direct communication with Nasib Rehman • No-obligation project discussion
              </div>
            </div>
          </motion.form>
        </div>

        {/* Mobile Working Together Card — positioned below form on mobile */}
        <div className="mt-6 sm:mt-8 lg:hidden rounded-2xl border border-[#DCE4EC] bg-white p-5 sm:p-8 shadow-xs space-y-4">
          <div className="text-xs uppercase tracking-wider text-[#087F8C] font-bold">
            Working Together
          </div>
          <ul className="grid gap-2.5 text-xs text-[#526174]">
            <li className="flex items-center gap-2.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#087F8C] shrink-0" />
              <span>Direct communication with Nasib Rehman</span>
            </li>
            <li className="flex items-center gap-2.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#087F8C] shrink-0" />
              <span>No-obligation project discussion</span>
            </li>
            <li className="flex items-center gap-2.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#B38A3D] shrink-0" />
              <span>Available for remote projects</span>
            </li>
            <li className="flex items-center gap-2.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#B38A3D] shrink-0" />
              <span>Clear scope & transparent pricing</span>
            </li>
          </ul>
          <div className="pt-3 border-t border-slate-100 text-xs text-[#526174]">
            Typical response time: within a few business hours.
          </div>
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
  error,
}: {
  id: string;
  label: string;
  placeholder?: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  autoComplete?: string;
  error?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="text-xs font-bold uppercase tracking-wider text-[#142338]">
        {label}
        {required && <span className="text-[#087F8C]"> *</span>}
      </label>
      <div className="relative mt-2">
        <input
          id={id}
          type={type}
          value={value}
          onChange={onChange}
          required={required}
          autoComplete={autoComplete}
          placeholder={placeholder}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${id}-error` : undefined}
          className={`relative w-full rounded-xl border ${
            error
              ? "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500"
              : "border-[#DCE4EC] bg-[#F8FAFC] focus:border-[#087F8C] focus:bg-white focus:ring-2 focus:ring-[#087F8C]/20"
          } px-4 py-2.5 text-sm text-[#142338] outline-none placeholder:text-slate-400 transition-all [color-scheme:light]`}
        />
      </div>
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-xs text-red-600" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

function SelectField({
  id,
  label,
  value,
  onChange,
  options,
  required,
  error,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: string[];
  required?: boolean;
  error?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="text-xs font-bold uppercase tracking-wider text-[#142338]">
        {label}
        {required && <span className="text-[#087F8C]"> *</span>}
      </label>
      <div className="relative mt-2">
        <select
          id={id}
          value={value}
          onChange={onChange}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${id}-error` : undefined}
          className={`relative w-full rounded-xl border ${
            error
              ? "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500"
              : "border-[#DCE4EC] bg-[#F8FAFC] focus:border-[#087F8C] focus:bg-white focus:ring-2 focus:ring-[#087F8C]/20"
          } px-4 py-2.5 text-sm text-[#142338] outline-none transition-all [color-scheme:light]`}
        >
          <option value="" className="bg-white text-slate-400">
            Select…
          </option>
          {options.map((o) => (
            <option key={o} value={o} className="bg-white text-[#142338]">
              {o}
            </option>
          ))}
        </select>
      </div>
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-xs text-red-600" role="alert">
          {error}
        </p>
      )}
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
    <li className="flex items-center gap-3 text-[#D1DCE8] py-1 hover:text-white transition-colors">
      <span className="grid h-7 w-7 place-items-center rounded-lg bg-white/10 text-[#2DD4BF] shrink-0">
        <Icon className="h-3.5 w-3.5" />
      </span>
      <span className={isLink ? "transition-colors hover:text-[#2DD4BF]" : ""}>{label}</span>
    </li>
  );

  if (isLink && href) {
    return (
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel="noopener noreferrer"
        className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 rounded-lg"
      >
        {content}
      </a>
    );
  }
  return content;
}
