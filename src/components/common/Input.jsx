import React, { forwardRef } from 'react';
import Icon from './Icon';

const Input = forwardRef(({
  type = 'text',
  label,
  error,
  helperText,
  icon,
  rightIcon,
  className = '',
  containerClassName = '',
  disabled = false,
  required = false,
  fullWidth = true,
  ...props
}, ref) => {
  const baseInputClasses = `
    block w-full px-4 py-2.5 
    text-gray-900 bg-white border border-gray-300 rounded-lg
    focus:ring-2 focus:ring-blue-500 focus:border-transparent
    disabled:bg-gray-100 disabled:text-gray-500 disabled:cursor-not-allowed
    transition-all duration-200
    ${icon ? 'pl-11' : ''}
    ${rightIcon ? 'pr-11' : ''}
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
          <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
            <Icon name={icon} size={20} className="text-gray-400" />
          </div>
        )}
        
        <input
          ref={ref}
          type={type}
          disabled={disabled}
          className={baseInputClasses}
          {...props}
        />
        
        {rightIcon && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
            <Icon name={rightIcon} size={20} className="text-gray-400" />
          </div>
        )}
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

Input.displayName = 'Input';

export default Input;
