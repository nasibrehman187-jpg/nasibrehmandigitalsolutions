import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, MessageSquare } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { SectionHeader } from "./Services";

const SERVICE_OPTIONS = [
  "Website Development",
  "AI Automation",
  "AI Chatbot",
  "AI Voice Agent",
  "Custom Digital Solution",
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
      if (s || p) {
        setForm((prev) => ({
          ...prev,
          service: s && SERVICE_OPTIONS.includes(s) ? s : prev.service,
          message: p ? `I am interested in the ${p} package.\n\nProject details: ` : prev.message,
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
    <section id="contact" className="relative py-32">
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
            className="glass-strong rounded-3xl border border-white/10 p-8 lg:col-span-3"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field
                label="Full Name"
                placeholder="Your name"
                value={form.name}
                onChange={update("name")}
                required
              />
              <Field
                label="Email"
                type="email"
                placeholder="your@email.com"
                value={form.email}
                onChange={update("email")}
              />
              <Field
                label="Business Name"
                placeholder="Your business (optional)"
                value={form.company}
                onChange={update("company")}
              />
              <Field
                label="WhatsApp Number"
                type="tel"
                placeholder="+92 xxx xxxxxxx"
                value={form.whatsapp}
                onChange={update("whatsapp")}
              />
              <SelectField
                label="Service Needed"
                value={form.service}
                onChange={update("service")}
                options={SERVICE_OPTIONS}
              />
              <SelectField
                label="Budget Range (Optional)"
                value={form.budget}
                onChange={update("budget")}
                options={BUDGET_OPTIONS}
              />
            </div>
            <div className="mt-5">
              <label className="text-xs uppercase tracking-wider text-muted-foreground">
                Project Details
              </label>
              <div className="relative mt-2 rounded-xl">
                <div className="absolute -inset-px rounded-xl bg-gradient-to-r from-cyan-500/40 via-blue-500/20 to-violet-500/40 opacity-0 blur transition-opacity focus-within:opacity-100" />
                <textarea
                  rows={5}
                  value={form.message}
                  onChange={update("message")}
                  placeholder="Describe your project, requirements or the problem you want to solve..."
                  className="relative w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm outline-none placeholder:text-muted-foreground/60 focus:border-cyan-400/50"
                />
              </div>
            </div>

            <div className="mt-4 rounded-xl border border-white/5 bg-white/[0.02] p-3 text-xs text-muted-foreground">
              Direct connection: Your message will open directly in WhatsApp or your email client
              with all entered details preserved.
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <button
                type="submit"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_40px_-10px_rgba(56,189,248,0.6)] transition hover:scale-[1.02]"
              >
                Send Project Inquiry{" "}
                <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </button>
              <button
                type="button"
                onClick={onSendEmail}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium hover:bg-white/10 transition"
              >
                <Mail className="h-4 w-4 text-cyan-300" />
                Send via Email
              </button>
            </div>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-6 lg:col-span-2"
          >
            {/* Contact info */}
            <div className="glass rounded-2xl p-6">
              <div className="font-display text-lg font-semibold">Get in Touch</div>
              <ul className="mt-4 space-y-4 text-sm">
                <InfoRow
                  icon={MessageSquare}
                  label="Chat on WhatsApp"
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
              className="glass group flex items-center gap-4 rounded-2xl p-6 transition hover:bg-white/5"
            >
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-emerald-500/30 bg-emerald-500/20">
                <MessageSquare className="h-5 w-5 text-emerald-400" />
              </span>
              <div>
                <div className="text-sm font-semibold">Chat on WhatsApp</div>
                <div className="mt-0.5 text-xs text-muted-foreground">+92 331 7962794</div>
              </div>
              <Send className="ml-auto h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1" />
            </a>

            {/* Services quick reference */}
            <div className="glass rounded-2xl p-6">
              <div className="mb-3 text-xs uppercase tracking-wider text-muted-foreground">
                Services Available
              </div>
              <ul className="space-y-2 text-sm">
                {SERVICE_OPTIONS.map((s) => (
                  <li key={s} className="flex items-center gap-2 text-muted-foreground">
                    <span className="h-1 w-1 rounded-full bg-cyan-400" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  placeholder,
  type = "text",
  value,
  onChange,
  required,
}: {
  label: string;
  placeholder?: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}) {
  return (
    <div>
      <label className="text-xs uppercase tracking-wider text-muted-foreground">
        {label}
        {required && <span className="text-cyan-400"> *</span>}
      </label>
      <div className="relative mt-2 rounded-xl">
        <div className="absolute -inset-px rounded-xl bg-gradient-to-r from-cyan-500/40 via-blue-500/20 to-violet-500/40 opacity-0 blur transition-opacity focus-within:opacity-100" />
        <input
          type={type}
          value={value}
          onChange={onChange}
          required={required}
          placeholder={placeholder}
          className="relative w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm outline-none placeholder:text-muted-foreground/60 focus:border-cyan-400/50 [color-scheme:dark]"
        />
      </div>
    </div>
  );
}

function SelectField({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: string[];
}) {
  return (
    <div>
      <label className="text-xs uppercase tracking-wider text-muted-foreground">{label}</label>
      <div className="relative mt-2 rounded-xl">
        <select
          value={value}
          onChange={onChange}
          className="relative w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm outline-none focus:border-cyan-400/50 [color-scheme:dark]"
        >
          <option value="">Select…</option>
          {options.map((o) => (
            <option key={o} value={o}>
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
    <li className="flex items-center gap-3">
      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl border border-white/10 bg-gradient-to-br from-cyan-500/20 to-violet-500/20">
        <Icon className="h-4 w-4 text-cyan-300" />
      </span>
      <span className={isLink ? "transition-colors hover:text-foreground" : ""}>{label}</span>
    </li>
  );

  if (isLink && href) {
    return (
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel="noopener noreferrer"
      >
        {content}
      </a>
    );
  }
  return content;
}
