import { type ReactNode } from 'react';
import clsx from 'clsx';

interface BadgeProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
}

export function Badge({ children, variant = 'primary', className }: BadgeProps) {
  return (
    <span
      className={clsx(
        'badge',
        {
          'badge-primary': variant === 'primary',
          'badge-secondary': variant === 'secondary',
        },
        className
      )}
    >
      {children}
    </span>
  );
}