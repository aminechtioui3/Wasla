import { Link } from 'react-router-dom';

type BrandLogoProps = {
  className?: string;
  dark?: boolean;
  showTagline?: boolean;
};

const BrandLogo = ({ className = '', dark = false, showTagline = true }: BrandLogoProps) => {
  return (
    <Link to="/" className={`flex items-center gap-3 ${className}`.trim()} aria-label="Wasla home">
      <span
        className={`flex h-12 w-[4.25rem] items-center justify-center overflow-hidden rounded-[18px] border shadow-soft ${
          dark ? 'border-white/10 bg-white/8' : 'border-purple/10 bg-white'
        }`}
      >
        <img
          src="/brand/wasla-logo.png"
          alt="Wasla logo"
          className="h-full w-full object-contain"
          loading="eager"
        />
      </span>
      <span className="flex flex-col">
        <span
          className={`font-display text-2xl font-bold tracking-tight transition ${
            dark ? 'text-cream hover:text-white' : 'text-purple hover:text-plum'
          }`}
        >
          Wasla
        </span>
        {showTagline && (
          <span
            className={`hidden text-[11px] font-semibold uppercase tracking-[0.18em] sm:block ${
              dark ? 'text-white/50' : 'text-plum/55'
            }`}
          >
            Tunisia-first creator marketplace
          </span>
        )}
      </span>
    </Link>
  );
};

export default BrandLogo;
