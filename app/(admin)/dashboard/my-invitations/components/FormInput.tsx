import React, { forwardRef, InputHTMLAttributes, ReactNode } from "react";
import { FieldError } from "react-hook-form";

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: FieldError;
  description?: ReactNode;
  required?: boolean;
}

const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  ({ label, error, description, required, className, ...props }, ref) => {
    return (
      <div className="w-full">
        <label className="block text-sm font-semibold mb-2">
          {label} {required && <span className="text-red-500">*</span>}
        </label>

        <input
          ref={ref}
          {...props}
          className={`
            w-full px-4 py-2
            border rounded-md
            bg-white/70 dark:bg-slate-950
            focus:outline-none focus:ring-0
            transition-colors
            ${
              error
                ? "border-red-500 focus:border-red-500"
                : "border-gray-300 dark:border-slate-700 focus:border-blue-500 dark:focus:border-blue-600"
            }
            ${className}
          `}
        />

        {description && !error && (
          <p className="text-gray-500 dark:text-slate-400 text-xs mt-2 italic">
            {description}
          </p>
        )}

        {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
      </div>
    );
  }
);

FormInput.displayName = "FormInput";

export default FormInput;
