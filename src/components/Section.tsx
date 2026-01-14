import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  id?: string;
  variant?: 'white' | 'gray' | 'dark';
  diagonal?: 'none' | 'top' | 'bottom' | 'both';
  className?: string;
  children: ReactNode;
}

const Section = ({ 
  id, 
  variant = 'white', 
  diagonal = 'none',
  className, 
  children 
}: SectionProps) => {
  const variantStyles = {
    white: 'bg-card text-card-foreground',
    gray: 'bg-muted text-foreground',
    dark: 'bg-brand-dark text-primary-foreground',
  };

  const diagonalStyles = {
    none: '',
    top: 'diagonal-clip-top',
    bottom: 'diagonal-clip-bottom',
    both: 'diagonal-clip',
  };

  return (
    <section 
      id={id}
      className={cn(
        'py-16 md:py-24 relative',
        variantStyles[variant],
        diagonalStyles[diagonal],
        className
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {children}
      </div>
    </section>
  );
};

export default Section;
