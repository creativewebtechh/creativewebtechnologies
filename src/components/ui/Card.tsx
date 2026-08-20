import { type ReactNode } from 'react';
import clsx from 'clsx';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className, hover = true }: CardProps) {
  return (
    <div
      className={clsx(
        'card',
        hover && 'hover:shadow-lg',
        className
      )}
    >
      {children}
    </div>
  );
}