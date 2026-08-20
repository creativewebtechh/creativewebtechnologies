import { type ReactNode } from 'react';
import clsx from 'clsx';

interface SectionProps {
  children: ReactNode;
  className?: string;
  dark?: boolean;
}

export function Section({ children, className, dark = false }: SectionProps) {
  return (
    <section
      className={clsx(
        'section',
        dark && 'bg-primary text-white',
        className
      )}
    >
      <div className="container">{children}</div>
    </section>
  );
}