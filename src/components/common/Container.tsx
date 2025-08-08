import React from 'react';

export interface ContainerProps {
  children: React.ReactNode;
  size?: 'narrow' | 'default' | 'wide' | 'full';
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

const Container: React.FC<ContainerProps> = ({
  children,
  size = 'default',
  className = '',
  as: Component = 'div',
}) => {
  const sizeClasses = {
    narrow: 'container-narrow',
    default: 'container-custom',
    wide: 'container-wide',
    full: 'w-full px-4 sm:px-6 lg:px-8',
  };

  const classes = [sizeClasses[size], className].filter(Boolean).join(' ');

  return <Component className={classes}>{children}</Component>;
};

export default Container; 