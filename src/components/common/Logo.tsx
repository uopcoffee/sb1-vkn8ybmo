import React from 'react';

interface LogoProps {
  height?: number;
  light?: boolean;
}

const Logo: React.FC<LogoProps> = ({ height = 32, light = false }) => {
  const fillColor = light ? '#F8F4EF' : '#0D2C3E';
  const accentColor = '#87B6A4';

  return (
    <svg 
      width={height} 
      height={height} 
      viewBox="0 0 40 40" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="40" height="40" rx="8" fill={fillColor} />
      <path 
        d="M12 8H28C30.2091 8 32 9.79086 32 12V28C32 30.2091 30.2091 32 28 32H12C9.79086 32 8 30.2091 8 28V12C8 9.79086 9.79086 8 12 8Z" 
        fill={fillColor} 
      />
      <path 
        d="M16 12H24V20C24 22.2091 22.2091 24 20 24C17.7909 24 16 22.2091 16 20V12Z" 
        fill={accentColor} 
      />
      <path 
        d="M16 28V20H24V28H16Z" 
        fill={accentColor} 
      />
    </svg>
  );
};

export default Logo;