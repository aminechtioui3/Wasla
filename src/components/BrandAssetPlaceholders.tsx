import { motion } from 'framer-motion';
import { ImagePlus, Layers3, LayoutTemplate, Palette } from 'lucide-react';
import SectionBadge from './SectionBadge';

const assetCards = [
  {
    title: 'Logo system',
    copy: 'Drop in your official logo lockup, app icon, and dark/light variants so the header, footer, and hero can feel distinctly Wasla.',
    icon: Palette,
    image: '/brand/logo-placeholder.svg',
    note: 'Best deliverables: SVG wordmark, icon mark, transparent PNG exports',
  },
  {
    title: 'Pattern backgrounds',
    copy: 'Subtle mesh textures, grain overlays, or geometric patterns will make the site feel more human, tactile, and less template-like.',
    icon: Layers3,
    image: '/brand/pattern-placeholder.svg',
    note: 'Best deliverables: seamless SVG, PNG texture, or layered Figma export',
  },
  {
    title: 'UI storytelling shots',
    copy: 'Feature pages become more convincing when we replace placeholder surfaces with polished app screenshots and close-up interaction moments.',
    icon: LayoutTemplate,
    image: '/brand/ui-placeholder.svg',
    note: 'Best deliverables: 2-4 mobile screenshots with clean framing',
  },
  {
    title: 'Human photography',
    copy: 'Creator portraits, merchant scenes, café counters, product shoots, and Tunisian retail moments will soften the product and increase trust.',
    icon: ImagePlus,
    image: '/brand/photo-placeholder.svg',
    note: 'Best deliverables: authentic photography, not stock-heavy generic poses',
  },
];

const BrandAssetPlaceholders = () => {
  return (
    <section className="py-12 sm:py-16">
      <div className="container-shell">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="section-card p-7 sm:p-9"
        >
          <div className="max-w-3xl">
            <SectionBadge>Brand-ready placeholders</SectionBadge>
            <h2 className="mt-5 text-3xl font-bold sm:text-4xl">
              The places where your real brand assets will make Wasla feel warmer and more premium.
            </h2>
            <p className="mt-4 text-base">
              I left clear placeholder zones for your actual logo, patterns, UI shots, and human
              visuals. Once you deliver those assets, we can make the site feel far more distinctive
              and emotionally credible.
            </p>
          </div>

          <div className="mt-8 grid gap-5 xl:grid-cols-2">
            {assetCards.map((card) => {
              const Icon = card.icon;
              return (
                <article key={card.title} className="overflow-hidden rounded-[28px] border border-purple/10 bg-white/80 shadow-soft">
                  <div className="border-b border-purple/10 bg-gradient-to-r from-white to-cream/50 px-5 py-4">
                    <div className="flex items-center gap-3">
                      <div className="inline-flex rounded-2xl bg-purple/10 p-3 text-purple">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">{card.title}</h3>
                        <p className="text-sm">{card.note}</p>
                      </div>
                    </div>
                  </div>
                  <img
                    src={card.image}
                    alt={`${card.title} placeholder`}
                    className="h-64 w-full object-cover sm:h-72"
                    loading="lazy"
                  />
                  <div className="px-5 py-5">
                    <p className="text-sm">{card.copy}</p>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-8 rounded-[28px] border border-purple/10 bg-purple/5 p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-purple">
              Best assets to deliver next
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
              {[
                'A clean SVG logo lockup and icon mark',
                '2-4 polished app screenshots with real UI',
                'A subtle brand texture or pattern set',
                'Authentic local creator and merchant photography',
              ].map((item) => (
                <div key={item} className="rounded-[22px] border border-purple/10 bg-white/80 p-4 text-sm text-plum/75">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BrandAssetPlaceholders;
