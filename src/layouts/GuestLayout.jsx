import React from 'react';
import LayoutShell from '../components/layout/LayoutShell';

const GuestLayout = ({ children }) => {
  return (
    <LayoutShell role="GUEST">
      {children}
    </LayoutShell>
  );
};

export default GuestLayout;
