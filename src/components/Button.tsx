import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  PropsWithChildren,
} from 'react';
import { Link } from 'react-router-dom';

type ButtonProps = PropsWithChildren<{
  href?: string;
  to?: string;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}> &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className' | 'children'> &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'className' | 'children'>;

const variantClasses: Record<NonNullable<ButtonProps['variant']>, string> = {
  primary:
    'bg-purple text-white shadow-glow hover:-translate-y-0.5 hover:bg-plum focus-visible:outline-purple',
  secondary:
    'border border-purple/10 bg-white/80 text-purple hover:-translate-y-0.5 hover:border-purple/25 hover:bg-cream/60 focus-visible:outline-purple',
  ghost:
    'text-purple hover:bg-purple/10 focus-visible:outline-purple',
};

const sizeClasses: Record<NonNullable<ButtonProps['size']>, string> = {
  sm: 'h-10 px-4 text-sm',
  md: 'h-11 px-5 text-sm sm:text-base',
  lg: 'h-12 px-6 text-sm sm:text-base',
};

const sharedClasses =
  'inline-flex items-center justify-center rounded-full font-semibold transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2';

const Button = ({
  href,
  to,
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  type,
  ...props
}: ButtonProps) => {
  const classes = `${sharedClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`.trim();

  if (to) {
    return (
      <Link className={classes} to={to}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a className={classes} href={href} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    );
  }

  return (
    <button
      className={classes}
      type={type ?? 'button'}
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
};

export default Button;
