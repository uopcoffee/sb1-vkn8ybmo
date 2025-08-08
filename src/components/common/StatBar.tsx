import React from 'react';

const stats = [
  { label: 'Board‑ready close', value: 'Monthly' },
  { label: 'Admin time reduced', value: '70%+' },
  { label: 'Audit‑friendly', value: 'Controls built‑in' },
];

const StatBar: React.FC = () => {
  return (
    <div className="w-full border-y border-neutral-200 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-neutral-200">
          {stats.map((s, idx) => (
            <div key={idx} className="py-3 md:py-4 px-2 text-center">
              <div className="text-sm text-primary-400">{s.label}</div>
              <div className="text-base font-semibold text-primary-700">{s.value}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatBar;
