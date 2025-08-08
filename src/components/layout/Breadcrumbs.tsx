import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Breadcrumbs: React.FC = () => {
  const location = useLocation();
  const segments = location.pathname.split('/').filter(Boolean);
  const crumbs = [
    { name: 'Home', path: '/' },
    ...segments.map((segment, idx) => ({
      name: decodeURIComponent(segment).replace(/-/g, ' '),
      path: '/' + segments.slice(0, idx + 1).join('/'),
    })),
  ];

  return (
    <nav aria-label="Breadcrumb" className="text-sm text-primary-500/70 mb-4">
      <ol className="flex flex-wrap items-center gap-1">
        {crumbs.map((c, i) => (
          <li key={c.path} className="flex items-center gap-1">
            {i > 0 && <span aria-hidden>›</span>}
            {i === crumbs.length - 1 ? (
              <span aria-current="page" className="font-medium text-primary-500">{c.name}</span>
            ) : (
              <Link to={c.path} className="hover:text-accent-900">{c.name}</Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;


