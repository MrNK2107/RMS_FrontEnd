import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

const Breadcrumbs = ({ items, className = '' }) => {
  const location = useLocation();

  const autoBreadcrumbs = React.useMemo(() => {
    if (items) return items;

    const paths = location.pathname.split('/').filter(Boolean);
    return paths.map((path, index) => ({
      label: path.charAt(0).toUpperCase() + path.slice(1).replace(/-/g, ' '),
      path: '/' + paths.slice(0, index + 1).join('/'),
    }));
  }, [location.pathname, items]);

  return (
    <nav className={`flex items-center gap-1.5 text-sm ${className}`}>
      <Link
        to="/"
        className="p-1 text-rms-neutral-400 hover:text-rms-primary-500 transition-colors rounded"
      >
        <Home size={15} strokeWidth={1.8} />
      </Link>
      {autoBreadcrumbs.map((item, index) => (
        <React.Fragment key={item.path}>
          <ChevronRight size={13} className="text-rms-neutral-300 flex-shrink-0" />
          {index === autoBreadcrumbs.length - 1 ? (
            <span className="text-rms-neutral-700 font-medium px-1.5 py-0.5 bg-rms-neutral-100 rounded-md text-xs">
              {item.label}
            </span>
          ) : (
            <Link
              to={item.path}
              className="text-rms-neutral-400 hover:text-rms-primary-500 transition-colors text-xs"
            >
              {item.label}
            </Link>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};

export default Breadcrumbs;
