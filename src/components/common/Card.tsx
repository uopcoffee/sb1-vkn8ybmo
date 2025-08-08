import React from 'react';
import { motion } from 'framer-motion';

export interface CardProps {
  children: React.ReactNode;
  variant?: 'default' | 'elevated' | 'interactive';
  className?: string;
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  onClick?: () => void;
  href?: string;
  to?: string;
  hover?: boolean;
  animate?: boolean;
}

const Card: React.FC<CardProps> = ({
  children,
  variant = 'default',
  className = '',
  padding = 'md',
  onClick,
  href,
  to,
  hover = false,
  animate = true,
}) => {
  const baseClasses = 'card';
  const variantClasses = {
    default: 'card',
    elevated: 'card-elevated',
    interactive: 'card-interactive',
  };

  const paddingClasses = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
    xl: 'p-12',
  };

  const classes = [
    baseClasses,
    variantClasses[variant],
    paddingClasses[padding],
    hover ? 'cursor-pointer' : '',
    className,
  ].filter(Boolean).join(' ');

  const content = (
    <div className={classes} onClick={onClick}>
      {children}
    </div>
  );

  if (!animate) {
    return content;
  }

  const MotionComponent = motion.div;

  if (href) {
    return (
      <MotionComponent
        whileHover={hover ? { y: -4 } : {}}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2 }}
      >
        <a href={href} className="block">
          {content}
        </a>
      </MotionComponent>
    );
  }

  if (to) {
    return (
      <MotionComponent
        whileHover={hover ? { y: -4 } : {}}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2 }}
      >
        <a href={to} className="block">
          {content}
        </a>
      </MotionComponent>
    );
  }

  return (
    <MotionComponent
      whileHover={hover ? { y: -4 } : {}}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
    >
      {content}
    </MotionComponent>
  );
};

export default Card; 