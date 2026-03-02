import React from "react";

const Card = ({
  title,
  subtitle,
  children,
  header,
  footer,
  className = "",
  padding = true,
  hover = false,
  onClick,
}) => {
  return (
    <div
      className={`
        bg-white/80 backdrop-blur-sm rounded-2xl border border-rms-neutral-200/60
        shadow-[0_1px_3px_rgba(0,0,0,0.04),0_4px_12px_rgba(0,0,0,0.03)]
        transition-all duration-300 ease-out
        ${hover ? 'hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:border-rms-primary-200/50' : ''}
        ${onClick ? 'cursor-pointer' : ''}
        ${className}
      `}
      onClick={onClick}
    >
      {header && (
        <div className="px-6 py-4 border-b border-rms-neutral-100">
          {header}
        </div>
      )}

      {(title || subtitle) && (
        <div className="px-6 py-4 border-b border-rms-neutral-100">
          {title && <h3 className="text-lg font-semibold text-rms-neutral-900">{title}</h3>}
          {subtitle && <p className="text-sm text-rms-neutral-500 mt-0.5">{subtitle}</p>}
        </div>
      )}

      <div className={padding ? 'p-6' : ''}>
        {children}
      </div>

      {footer && (
        <div className="px-6 py-4 border-t border-rms-neutral-100 bg-rms-neutral-50/50 rounded-b-2xl">
          {footer}
        </div>
      )}
    </div>
  );
};

export default Card;
