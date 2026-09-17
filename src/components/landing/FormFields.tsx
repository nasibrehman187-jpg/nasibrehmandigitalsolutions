import type { InputHTMLAttributes, ReactNode, SelectHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type FieldFrameProps = {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  children: ReactNode;
};

export function FieldFrame({ id, label, required, error, children }: FieldFrameProps) {
  return (
    <div className="min-w-0">
      <label htmlFor={id} className="block text-sm font-medium text-[#111827]">
        {label}
        {required && <span className="text-[#0F766E]"> *</span>}
      </label>
      <div className="mt-2">{children}</div>
      {error && (
        <p
          id={id + "-error"}
          className="mt-2 text-xs sm:text-sm text-red-600 font-medium"
          role="alert"
        >
          {error}
        </p>
      )}
    </div>
  );
}

export function Field({
  id,
  label,
  error,
  required,
  className,
  ...props
}: InputHTMLAttributes<HTMLInputElement> & { id: string; label: string; error?: string }) {
  return (
    <FieldFrame id={id} label={label} required={required} error={error}>
      <input
        {...props}
        id={id}
        required={required}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? id + "-error" : undefined}
        className={cn(
          "form-control transition duration-150 focus:border-[#0F766E] focus:ring-1 focus:ring-[#0F766E]",
          error && "border-red-500",
          className,
        )}
      />
    </FieldFrame>
  );
}

export function SelectField({
  id,
  label,
  error,
  required,
  options,
  className,
  ...props
}: SelectHTMLAttributes<HTMLSelectElement> & {
  id: string;
  label: string;
  error?: string;
  options: readonly string[];
}) {
  return (
    <FieldFrame id={id} label={label} required={required} error={error}>
      <select
        {...props}
        id={id}
        aria-required={required}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? id + "-error" : undefined}
        className={cn(
          "form-control transition duration-150 focus:border-[#0F766E] focus:ring-1 focus:ring-[#0F766E]",
          error && "border-red-500",
          className,
        )}
      >
        <option value="">Select…</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </FieldFrame>
  );
}
