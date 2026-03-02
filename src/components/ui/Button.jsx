import React, { forwardRef } from "react";
import Icon from '../common/Icon';

const Button = forwardRef(({
  children,
  variant = "primary",
  size = "md",
  icon,
  iconRight,
  fullWidth = false,
  loading = false,
  className = "",
  type = "button",
  disabled = false,
  ...props
}, ref) => {
  const baseClasses =
    "inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.97] select-none";

  const variants = {
    primary:
      "bg-gradient-to-r from-rms-primary-500 to-rms-primary-600 text-white hover:from-rms-primary-600 hover:to-rms-primary-700 shadow-[0_2px_12px_rgba(20,168,126,0.3)] hover:shadow-[0_4px_20px_rgba(20,168,126,0.4)]",
    secondary:
      "border border-rms-neutral-200 bg-white text-rms-neutral-700 hover:bg-rms-neutral-50 hover:border-rms-neutral-300 shadow-sm",
    danger:
      "bg-gradient-to-r from-red-500 to-red-600 text-white hover:from-red-600 hover:to-red-700 shadow-[0_2px_12px_rgba(239,68,68,0.3)]",
    ghost:
      "text-rms-primary-600 hover:bg-rms-primary-50 hover:text-rms-primary-700",
    success:
      "bg-gradient-to-r from-emerald-500 to-emerald-600 text-white hover:from-emerald-600 hover:to-emerald-700 shadow-[0_2px_12px_rgba(16,185,129,0.3)]",
    warning:
      "bg-gradient-to-r from-amber-400 to-amber-500 text-amber-900 hover:from-amber-500 hover:to-amber-600 shadow-[0_2px_12px_rgba(245,158,11,0.3)]",
    outline:
      "bg-transparent border-2 border-rms-primary-500 text-rms-primary-600 hover:bg-rms-primary-50 hover:border-rms-primary-600",
  };

  const sizes = {
    sm: "px-3.5 py-1.5 text-sm",
    md: "px-5 py-2.5 text-sm",
    lg: "px-7 py-3.5 text-base",
  };

  return (
    <button
      ref={ref}
      type={type}
      disabled={disabled || loading}
      className={`
        ${baseClasses} 
        ${variants[variant]} 
        ${sizes[size]}
        ${fullWidth ? 'w-full' : ''}
        ${className}
      `}
      {...props}
    >
      {loading && (
        <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      )}
      {icon && !loading && <Icon name={icon} size={18} />}
      {children}
      {iconRight && !loading && <Icon name={iconRight} size={18} />}
    </button>
  );
});

Button.displayName = 'Button';

export default Button;
