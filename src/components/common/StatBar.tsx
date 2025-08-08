import React from 'react';

interface StatItem {
  label: string;
  value: string;
}

interface StatBarProps {
  items?: StatItem[];
  className?: string;
}

const defaultItems: StatItem[] = [
  { label: 'Less time on admin', value: '70%↓' },
  { label: 'Board-ready close', value: 'Monthly' },
  { label: 'Cash runway clarity', value: 'Real-time' },
];

const StatBar: React.FC<StatBarProps> = ({ items = defaultItems, className }) => {
  return (
    <div className={`w-full`}> 
      <div className={`container-custom`}>
        <div className={`grid grid-cols-1 sm:grid-cols-3 gap-4 rounded-2xl bg-white/70 backdrop-blur-md border border-primary-100 p-4 md:p-6 shadow-soft ${className ?? ''}`}>
          {items.map(({ label, value }) => (
            <div key={label} className="flex items-center justify-between rounded-xl px-4 py-3 bg-white border border-primary-100">
              <span className="text-sm text-primary-500/70">{label}</span>
              <span className="text-lg font-semibold text-primary-700">{value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatBar;


