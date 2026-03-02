import React, { forwardRef } from 'react';
import Icon from './Icon';

const Select = forwardRef(({
  label,
  options = [],
  error,
  helperText,
  icon,
  className = '',
  containerClassName = '',
  disabled = false,
  required = false,
  fullWidth = true,
  placeholder = 'Select an option',
  ...props
}, ref) => {
  const baseSelectClasses = `
    block w-full px-4 py-2.5 pr-10
    text-gray-900 bg-white border border-gray-300 rounded-lg
    focus:ring-2 focus:ring-blue-500 focus:border-transparent
    disabled:bg-gray-100 disabled:text-gray-500 disabled:cursor-not-allowed
    transition-all duration-200 appearance-none cursor-pointer
    ${icon ? 'pl-11' : ''}
    ${error ? 'border-red-500 focus:ring-red-500' : ''}
    ${className}
  `;

  return (
    <div className={`${fullWidth ? 'w-full' : ''} ${containerClassName}`}>
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-1.5">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      
      <div className="relative">
        {icon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none z-10">
            <Icon name={icon} size={20} className="text-gray-400" />
          </div>
        )}
        
        <select
          ref={ref}
          disabled={disabled}
          className={baseSelectClasses}
          {...props}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        
        <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
          <Icon name="chevronDown" size={20} className="text-gray-400" />
        </div>
      </div>
      
      {error && (
        <p className="mt-1.5 text-sm text-red-600">{error}</p>
      )}
      
      {helperText && !error && (
        <p className="mt-1.5 text-sm text-gray-500">{helperText}</p>
      )}
    </div>
  );
});

Select.displayName = 'Select';

export default Select;
