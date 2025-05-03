import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  shade?: boolean;
  pattern?: boolean;
}

const Section: React.FC<SectionProps> = ({
  children,
  className = '',
  id,
  shade = false,
  pattern = false,
}) => {
  return (
    <section
      id={id}
      className={`
        py-16 md:py-24 
        ${shade ? 'bg-primary-50' : 'bg-white'} 
        ${pattern ? 'geometric-pattern' : ''} 
        ${className}
      `}
    >
      <div className="container-custom relative z-10">{children}</div>
    </section>
  );
};

export default Section;