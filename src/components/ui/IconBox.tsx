import { type ReactNode } from 'react';
import clsx from 'clsx';

interface IconBoxProps {
  children: ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export function IconBox({ children, className, size = 'md' }: IconBoxProps) {
  return (
    <div
      className={clsx(
        'flex items-center justify-center rounded-xl bg-accent-50 text-accent',
        {
          'w-10 h-10': size === 'sm',
          'w-14 h-14': size === 'md',
          'w-18 h-18': size === 'lg',
        },
        className
      )}
    >
      {children}
    </div>
  );
}