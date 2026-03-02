import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';
import Breadcrumbs from './Breadcrumbs';
import { useUI } from '../../contexts/UIContext';

const LayoutShell = ({ 
  children, 
  role,
  showBreadcrumbs = true,
  showFooter = true,
}) => {
  const { sidebarOpen } = useUI();

  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* Sidebar */}
      <Sidebar role={role} />

      {/* Main Content Area */}
      <div className={`
        flex-1 flex flex-col transition-all duration-300
        ${sidebarOpen ? 'ml-0' : '-ml-64'}
      `}>
        {/* Header */}
        <Header />

        {/* Breadcrumbs */}
        {showBreadcrumbs && (
          <div className="bg-white border-b border-gray-200 px-6 py-3">
            <Breadcrumbs />
          </div>
        )}

        {/* Page Content */}
        <main className="flex-1 p-6">
          {children}
        </main>

        {/* Footer */}
        {showFooter && <Footer />}
      </div>
    </div>
  );
};

export default LayoutShell;
