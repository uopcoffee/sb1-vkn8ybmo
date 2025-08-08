import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';

export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'accent' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  href?: string;
  to?: string;
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  fullWidth?: boolean;
  rounded?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  to,
  onClick,
  disabled = false,
  loading = false,
  icon: Icon,
  iconPosition = 'left',
  className = '',
  type = 'button',
  fullWidth = false,
  rounded = false,
}) => {
  const baseClasses = 'btn';
  const variantClasses = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    accent: 'bg-accent-500 hover:bg-accent-600 text-white',
    ghost: 'bg-transparent text-primary-700 dark:text-primary-300 hover:bg-neutral-100 dark:hover:bg-neutral-800',
    outline: 'bg-transparent text-primary-700 dark:text-primary-300 border border-primary-300 dark:border-primary-600 hover:bg-primary-50 dark:hover:bg-primary-900/20',
  };
  const sizeClasses = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-2.5 text-sm',
    lg: 'px-6 py-3 text-base',
    xl: 'px-8 py-4 text-lg',
  };
  const widthClass = fullWidth ? 'w-full' : '';
  const roundedClass = rounded ? 'rounded-full' : 'rounded-lg';

  const classes = [
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    widthClass,
    roundedClass,
    className,
  ].filter(Boolean).join(' ');

  const content = (
    <>
      {loading && (
        <motion.div
          className="mr-2"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24">
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        </motion.div>
      )}
      {Icon && iconPosition === 'left' && !loading && (
        <Icon className="mr-2 w-4 h-4" />
      )}
      <span className={loading ? 'opacity-50' : ''}>{children}</span>
      {Icon && iconPosition === 'right' && !loading && (
        <Icon className="ml-2 w-4 h-4" />
      )}
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        disabled={disabled || loading}
      >
        {content}
      </motion.a>
    );
  }

  if (to) {
    return (
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <Link to={to} className={classes} onClick={onClick}>
          {content}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled || loading}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {content}
    </motion.button>
  );
};

export default Button;