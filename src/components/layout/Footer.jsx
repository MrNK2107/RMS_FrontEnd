import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-rms-neutral-200/60">
      <div className="px-6 py-3 flex items-center justify-center">
        <span className="text-xs text-rms-neutral-400">
          © {currentYear} Serenity Resort Management · All rights reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
