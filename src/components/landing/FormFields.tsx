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
      <label
        htmlFor={id}
        className="block text-xs font-semibold uppercase tracking-wider text-[#526174]"
      >
        {label}
        {required && <span className="text-[#087F8C]"> *</span>}
      </label>
      <div className="mt-1.5">{children}</div>
      {error && (
        <p id={id + "-error"} className="mt-1.5 text-xs text-red-600 font-medium" role="alert">
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
          "form-control transition duration-150 border-[#DCE4EC] bg-white text-[#142338] focus:border-[#087F8C] focus:ring-1 focus:ring-[#087F8C] rounded-lg",
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
          "form-control transition duration-150 border-[#DCE4EC] bg-white text-[#142338] focus:border-[#087F8C] focus:ring-1 focus:ring-[#087F8C] rounded-lg",
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
