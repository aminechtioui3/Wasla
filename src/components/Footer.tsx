import { footerLinks, socialLinks } from '../data/mockData';
import BrandLogo from './BrandLogo';

const Footer = () => {
  return (
    <footer className="mt-8 border-t border-white/10 bg-midnight py-10 text-white">
      <div className="container-shell">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr]">
          <div>
            <BrandLogo dark showTagline={false} />
            <p className="mt-4 max-w-sm text-sm text-white/70">
              Wasla is a Tunisia-first creator marketplace concept for SMEs that want a faster,
              safer way to launch creator campaigns from one app.
            </p>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-cream">Product</h2>
            <div className="mt-4 space-y-3">
              {footerLinks.product.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block text-sm text-white/70 transition hover:text-cream"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-cream">Company</h2>
            <div className="mt-4 space-y-3">
              {footerLinks.company.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block text-sm text-white/70 transition hover:text-cream"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-cream">Social</h2>
            <div className="mt-4 space-y-3">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block text-sm text-white/70 transition hover:text-cream"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6">
          <p className="text-sm text-white/50">© 2026 Wasla. Demo landing page with mock data only.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
