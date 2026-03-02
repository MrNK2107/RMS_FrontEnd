import React from 'react';
import LayoutShell from '../components/layout/LayoutShell';

const AdminLayout = ({ children }) => {
  return (
    <LayoutShell role="ADMIN">
      {children}
    </LayoutShell>
  );
};

export default AdminLayout;
