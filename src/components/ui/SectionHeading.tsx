import clsx from 'clsx';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
}

export function SectionHeading({
  title,
  subtitle,
  centered = false,
  light = false,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={clsx(
        'mb-12',
        centered && 'text-center',
        className
      )}
    >
      <h2
        className={clsx(
          'section-heading',
          light && 'text-white'
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={clsx(
            'section-subheading',
            centered && 'mx-auto',
            light && 'text-gray-300'
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}