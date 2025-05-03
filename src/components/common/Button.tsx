import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  to?: string;
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  to,
  href,
  onClick,
  type = 'button',
  disabled = false,
}) => {
  const baseClasses = `
    inline-flex items-center justify-center
    min-h-[40px] px-6 py-3
    rounded-lg
    font-semibold
    transition-all duration-300
    focus:outline-none focus:ring-2 focus:ring-offset-2
    disabled:opacity-40 disabled:cursor-not-allowed
    ${disabled ? 'pointer-events-none' : ''}
  `;

  const variantClasses = {
    primary: `
      bg-accent-500 text-white
      hover:bg-accent-600 hover:text-white
      active:bg-accent-700 active:text-white
      focus:ring-accent-500
    `,
    secondary: `
      bg-secondary-500 text-primary-900
      hover:bg-secondary-600 hover:text-primary-900
      active:bg-secondary-700 active:text-primary-900
      focus:ring-secondary-500
    `,
  };

  const sizeClasses = {
    sm: 'text-sm px-4',
    md: 'text-base px-6',
    lg: 'text-lg px-8',
  };

  const allClasses = `
    ${baseClasses}
    ${variantClasses[variant]}
    ${sizeClasses[size]}
    ${className}
  `;

  if (to) {
    return (
      <Link to={to} className={allClasses}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a 
        href={href} 
        className={allClasses} 
        target="_blank" 
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={allClasses}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;