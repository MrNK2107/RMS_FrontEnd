import React from 'react';

const Stack = ({ 
  children, 
  direction = 'vertical',
  spacing = 4,
  align = 'stretch',
  justify = 'start',
  className = '' 
}) => {
  const spacingMap = {
    1: direction === 'vertical' ? 'space-y-1' : 'space-x-1',
    2: direction === 'vertical' ? 'space-y-2' : 'space-x-2',
    3: direction === 'vertical' ? 'space-y-3' : 'space-x-3',
    4: direction === 'vertical' ? 'space-y-4' : 'space-x-4',
    5: direction === 'vertical' ? 'space-y-5' : 'space-x-5',
    6: direction === 'vertical' ? 'space-y-6' : 'space-x-6',
    8: direction === 'vertical' ? 'space-y-8' : 'space-x-8',
  };

  const alignMap = {
    start: 'items-start',
    center: 'items-center',
    end: 'items-end',
    stretch: 'items-stretch',
  };

  const justifyMap = {
    start: 'justify-start',
    center: 'justify-center',
    end: 'justify-end',
    between: 'justify-between',
    around: 'justify-around',
  };

  return (
    <div className={`
      flex ${direction === 'vertical' ? 'flex-col' : 'flex-row'}
      ${spacingMap[spacing]} ${alignMap[align]} ${justifyMap[justify]}
      ${className}
    `}>
      {children}
    </div>
  );
};

export default Stack;
