import React from 'react';

const Badge = ({ 
  children, 
  variant = 'default', 
  size = 'md',
  dot = false,
  className = '' 
}) => {
  const variants = {
    default: 'bg-gray-500',
    primary: 'bg-blue-500',
    success: 'bg-green-500',
    warning: 'bg-yellow-500',
    danger: 'bg-red-500',
    info: 'bg-cyan-500',
  };

  const sizes = {
    sm: 'text-xs px-1.5 min-w-[18px] h-[18px]',
    md: 'text-xs px-2 min-w-[20px] h-[20px]',
    lg: 'text-sm px-2.5 min-w-[24px] h-[24px]',
  };

  if (dot) {
    return (
      <span className={`
        inline-block w-2 h-2 rounded-full
        ${variants[variant]} ${className}
      `} />
    );
  }

  return (
    <span className={`
      inline-flex items-center justify-center rounded-full
      text-white font-semibold
      ${variants[variant]} ${sizes[size]} ${className}
    `}>
      {children}
    </span>
  );
};

export default Badge;
