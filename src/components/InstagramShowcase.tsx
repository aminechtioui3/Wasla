import { motion } from 'framer-motion';
import { Heart, Instagram, MessageCircle, Send } from 'lucide-react';
import { socialPosts } from '../data/mockData';
import ScrollReveal from './ScrollReveal';
import SectionBadge from './SectionBadge';

const InstagramShowcase = () => {
  return (
    <section className="py-12 sm:py-16">
      <div className="container-shell">
        <ScrollReveal className="rounded-[34px] bg-[linear-gradient(135deg,rgba(76,3,69,0.98),rgba(42,20,48,0.96))] p-7 text-white shadow-glow sm:p-9">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <SectionBadge>Social creative</SectionBadge>
              <h2 className="mt-5 text-3xl font-bold text-white sm:text-4xl">
                Your campaign art now lives on the site like a real Instagram feed.
              </h2>
              <p className="mt-4 text-base text-white/72">
                We turned the supplied visuals into a styled content wall so visitors can instantly
                feel the Wasla brand voice and imagine how campaigns would show up in-market.
              </p>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/8 px-4 py-2 text-sm font-semibold text-cream">
              <Instagram className="h-4 w-4" />
              @wasla.marketplace
            </div>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {socialPosts.map((post, index) => (
              <motion.article
                key={post.image}
                initial={{ opacity: 0, y: 26, rotateX: -12 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.65, delay: 0.06 + index * 0.05 }}
                whileHover={{ y: -10, rotateX: 5, rotateY: index % 2 === 0 ? -4 : 4 }}
                style={{ transformPerspective: 1400, transformStyle: 'preserve-3d' }}
                className="overflow-hidden rounded-[30px] border border-white/10 bg-white text-plum shadow-soft"
              >
                <div className="flex items-center justify-between border-b border-purple/10 px-4 py-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[linear-gradient(135deg,#fdf9b6,#e1a0ba,#720065)] p-[1px]">
                      <div className="flex h-full w-full items-center justify-center rounded-full bg-white text-purple">
                        <Instagram className="h-4 w-4" />
                      </div>
                    </div>
                    <div className="min-w-0">
                      <p className="truncate text-sm font-bold text-plum">wasla.marketplace</p>
                      <p className="truncate text-xs text-plum/55">{post.title}</p>
                    </div>
                  </div>
                  <div className="flex gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-purple/25" />
                    <span className="h-1.5 w-1.5 rounded-full bg-purple/25" />
                    <span className="h-1.5 w-1.5 rounded-full bg-purple/25" />
                  </div>
                </div>

                <div className="aspect-square overflow-hidden bg-blush">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover transition duration-500 hover:scale-[1.03]"
                    loading="lazy"
                  />
                </div>

                <div className="space-y-3 px-4 pb-4 pt-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-purple">
                      <Heart className="h-5 w-5" />
                      <MessageCircle className="h-5 w-5" />
                      <Send className="h-5 w-5" />
                    </div>
                    <span className="rounded-full bg-purple/8 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-purple/70">
                      Promo post
                    </span>
                  </div>

                  <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.14em] text-plum/55">
                    <span>{post.likes} likes</span>
                    <span>{post.comments} comments</span>
                  </div>

                  <p className="text-sm leading-6 text-plum/75">
                    <span className="mr-2 font-bold text-plum">wasla.marketplace</span>
                    {post.caption}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default InstagramShowcase;
