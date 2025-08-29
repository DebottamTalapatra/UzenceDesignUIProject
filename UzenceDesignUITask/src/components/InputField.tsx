import React, { useState } from "react";
import type { ChangeEvent } from "react";
import { Eye, EyeOff, X, Loader2 } from "lucide-react";

// Size classes
const sizeClasses = {
  sm: "px-2 py-1 text-sm",
  md: "px-3 py-2 text-base",
  lg: "px-4 py-3 text-lg",
};

// Variant classes
const variantClasses = {
  filled: "bg-white border border-gray-300 focus:border-red-600",
  outlined: "bg-white border border-gray-300 focus:border-red-600",
  ghost: "bg-white border border-transparent focus:border-red-600",
};

export interface InputFieldProps {
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  placeholder?: string;
  helperText?: string;
  errorMessage?: string;
  disabled?: boolean;
  invalid?: boolean;
  loading?: boolean;
  type?: "text" | "password" | "search";
  variant?: "filled" | "outlined" | "ghost";
  size?: "sm" | "md" | "lg";
  clearable?: boolean;
  passwordToggle?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({
  value = "",
  onChange,
  label,
  placeholder,
  helperText,
  errorMessage,
  disabled = false,
  invalid = false,
  loading = false,
  type = "text",
  variant = "outlined",
  size = "md",
  clearable = false,
  passwordToggle = false,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const inputType =
    type === "password" && passwordToggle
      ? showPassword
        ? "text"
        : "password"
      : type;

  const baseClasses = `w-full rounded-md outline-none transition pr-10 text-red-600 font-bold ${sizeClasses[size]}`;
  const inputClass = `${baseClasses} ${
    variantClasses[variant] || variantClasses.outlined
  } ${invalid ? "border-red-600 focus:border-red-600" : ""} ${
    disabled ? "opacity-50 cursor-not-allowed" : ""
  }`;

  return (
    <div className="w-full flex flex-col gap-2">
      {label && <label className="text-sm font-bold text-red-600">{label}</label>}

      <div className="relative">
        <input
          type={inputType}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          className={inputClass}
        />

        <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center space-x-1">
          {loading && <Loader2 className="animate-spin text-red-600" size={18} />}

          {!loading && clearable && value && !disabled && (
            <button
              type="button"
              onClick={() => onChange?.({ target: { value: "" } } as ChangeEvent<HTMLInputElement>)}
              className="text-red-600 hover:text-red-800"
            >
              <X size={18} />
            </button>
          )}

          {!loading && type === "password" && passwordToggle && (
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="text-red-600 hover:text-red-800"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          )}
        </div>
      </div>

      {invalid && errorMessage ? (
        <p className="text-xs font-bold text-red-600">{errorMessage}</p>
      ) : helperText ? (
        <p className="text-xs font-bold text-red-600">{helperText}</p>
      ) : null}
    </div>
  );
};

export default InputField;
