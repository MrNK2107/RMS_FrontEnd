import React from 'react';
import LayoutShell from '../components/layout/LayoutShell';

const EmployeeLayout = ({ children }) => {
  return (
    <LayoutShell role="EMPLOYEE">
      {children}
    </LayoutShell>
  );
};

export default EmployeeLayout;
