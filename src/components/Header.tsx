import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { navItems } from '../data/mockData';
import BrandLogo from './BrandLogo';
import Button from './Button';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-40 px-3 pt-3 sm:px-4 sm:pt-4">
      <div
        className={`container-shell rounded-full border transition-all duration-300 ${
          scrolled
            ? 'border-purple/10 bg-white/88 shadow-soft backdrop-blur-xl'
            : 'border-white/50 bg-white/72 backdrop-blur-md'
        }`}
      >
        <div className="flex items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <BrandLogo />

          <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
            {navItems.map((item) => (
              <NavLink
                key={item.label}
                to={item.to}
                className={({ isActive }) =>
                  `text-sm font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-purple ${
                    isActive ? 'text-purple' : 'text-plum/80 hover:text-purple'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button href="#cta" size="md">
              Join waitlist
            </Button>
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-purple/10 bg-white/70 text-purple transition hover:border-purple/25 hover:bg-white lg:hidden"
            onClick={() => setMenuOpen((value) => !value)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <motion.div
          id="mobile-menu"
          initial={false}
          animate={{
            height: menuOpen ? 'auto' : 0,
            opacity: menuOpen ? 1 : 0,
          }}
          className="overflow-hidden lg:hidden"
        >
          <div className="space-y-3 border-t border-purple/10 px-4 py-4 sm:px-6">
            {navItems.map((item) => (
              <NavLink
                key={item.label}
                to={item.to}
                className={({ isActive }) =>
                  `block rounded-2xl px-3 py-2 text-sm font-medium transition hover:bg-purple/5 hover:text-purple ${
                    isActive ? 'text-purple' : 'text-plum/80'
                  }`
                }
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
            <Button href="#cta" className="w-full" onClick={() => setMenuOpen(false)}>
              Join waitlist
            </Button>
          </div>
        </motion.div>
      </div>
    </header>
  );
};

export default Header;
