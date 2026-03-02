import React, { forwardRef } from 'react';

const Checkbox = forwardRef(({
  label,
  description,
  error,
  className = '',
  disabled = false,
  ...props
}, ref) => {
  return (
    <div className={className}>
      <div className="flex items-start">
        <div className="flex items-center h-5">
          <input
            ref={ref}
            type="checkbox"
            disabled={disabled}
            className={`
              w-4 h-4 text-blue-600 bg-white border-gray-300 rounded
              focus:ring-2 focus:ring-blue-500
              disabled:opacity-50 disabled:cursor-not-allowed
              cursor-pointer transition-colors
              ${error ? 'border-red-500' : ''}
            `}
            {...props}
          />
        </div>
        {label && (
          <div className="ml-3">
            <label className={`
              text-sm font-medium text-gray-700
              ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
            `}>
              {label}
            </label>
            {description && (
              <p className="text-sm text-gray-500">{description}</p>
            )}
          </div>
        )}
      </div>
      {error && (
        <p className="mt-1.5 ml-7 text-sm text-red-600">{error}</p>
      )}
    </div>
  );
});

Checkbox.displayName = 'Checkbox';

export default Checkbox;
