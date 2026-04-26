import type { ReactNode } from 'react';

type SectionBadgeProps = {
  children: ReactNode;
};

const SectionBadge = ({ children }: SectionBadgeProps) => {
  return (
    <span className="inline-flex items-center rounded-full border border-purple/10 bg-cream/65 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-purple shadow-soft backdrop-blur">
      {children}
    </span>
  );
};

export default SectionBadge;
