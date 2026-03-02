import React from 'react';

const Avatar = ({ 
  src, 
  alt = 'User', 
  size = 'md', 
  className = '',
  initials,
  status,
  onClick 
}) => {
  const sizeClasses = {
    xs: 'w-6 h-6 text-xs',
    sm: 'w-8 h-8 text-sm',
    md: 'w-10 h-10 text-base',
    lg: 'w-12 h-12 text-lg',
    xl: 'w-16 h-16 text-xl',
    '2xl': 'w-20 h-20 text-2xl',
  };

  const statusSizeClasses = {
    xs: 'w-1.5 h-1.5',
    sm: 'w-2 h-2',
    md: 'w-2.5 h-2.5',
    lg: 'w-3 h-3',
    xl: 'w-3.5 h-3.5',
    '2xl': 'w-4 h-4',
  };

  const statusColors = {
    online: 'bg-green-400',
    offline: 'bg-gray-400',
    busy: 'bg-red-400',
    away: 'bg-yellow-400',
  };

  const baseClasses = `
    inline-flex items-center justify-center
    rounded-full overflow-hidden
    ${sizeClasses[size]}
    ${onClick ? 'cursor-pointer hover:opacity-80 transition-opacity' : ''}
    ${className}
  `;

  return (
    <div className="relative inline-block">
      {src ? (
        <img
          src={src}
          alt={alt}
          className={baseClasses}
          onClick={onClick}
        />
      ) : (
        <div 
          className={`${baseClasses} bg-gradient-to-br from-blue-500 to-purple-600 text-white font-semibold`}
          onClick={onClick}
        >
          {initials || alt?.charAt(0).toUpperCase()}
        </div>
      )}
      {status && (
        <span 
          className={`
            absolute bottom-0 right-0 block rounded-full ring-2 ring-white
            ${statusSizeClasses[size]} ${statusColors[status]}
          `}
        />
      )}
    </div>
  );
};

export default Avatar;
