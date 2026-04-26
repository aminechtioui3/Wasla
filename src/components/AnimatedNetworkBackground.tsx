import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

const nodes = [
  { x: 90, y: 140, delay: 0.2 },
  { x: 220, y: 230, delay: 0.6 },
  { x: 380, y: 118, delay: 1.1 },
  { x: 520, y: 270, delay: 1.4 },
  { x: 760, y: 120, delay: 1.8 },
  { x: 910, y: 230, delay: 2.1 },
  { x: 1020, y: 420, delay: 2.5 },
  { x: 790, y: 520, delay: 2.9 },
  { x: 560, y: 610, delay: 3.2 },
  { x: 330, y: 540, delay: 3.6 },
  { x: 150, y: 430, delay: 4.1 },
];

const connections = [
  [0, 1],
  [1, 2],
  [2, 3],
  [2, 4],
  [4, 5],
  [5, 6],
  [3, 7],
  [7, 8],
  [8, 9],
  [9, 10],
  [1, 10],
  [3, 9],
  [5, 7],
];

const ribbonPaths = [
  {
    id: 'ribbon-a',
    d: 'M -180 180 C 60 100, 240 110, 380 176 S 690 302, 864 278 S 1120 186, 1290 236',
    width: 22,
    duration: 24,
    delay: 0,
  },
  {
    id: 'ribbon-b',
    d: 'M -140 620 C 86 526, 262 452, 432 468 S 720 620, 896 604 S 1124 492, 1290 564',
    width: 18,
    duration: 28,
    delay: 0.8,
  },
  {
    id: 'ribbon-c',
    d: 'M 920 -40 C 856 84, 774 180, 704 248 S 548 394, 456 406 S 246 366, 114 446',
    width: 14,
    duration: 22,
    delay: 1.5,
  },
];

const ribbonSparks = [
  { x: 430, y: 214, delay: 0.2, size: 1 },
  { x: 694, y: 292, delay: 1.1, size: 0.9 },
  { x: 462, y: 438, delay: 2, size: 1.1 },
];

const AnimatedNetworkBackground = () => {
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.35,
  });

  const auraLeftY = useTransform(smoothProgress, [0, 1], [0, -220]);
  const auraRightY = useTransform(smoothProgress, [0, 1], [0, 180]);
  const auraLeftX = useTransform(smoothProgress, [0, 1], [0, 70]);
  const auraRightX = useTransform(smoothProgress, [0, 1], [0, -80]);
  const clusterY = useTransform(smoothProgress, [0, 1], [0, -180]);
  const clusterRotate = useTransform(smoothProgress, [0, 1], [-6, 16]);
  const clusterScale = useTransform(smoothProgress, [0, 1], [0.96, 1.14]);
  const slabY = useTransform(smoothProgress, [0, 1], [0, -130]);
  const slabRotate = useTransform(smoothProgress, [0, 1], [-8, 10]);
  const networkY = useTransform(smoothProgress, [0, 1], [0, -120]);
  const networkRotate = useTransform(smoothProgress, [0, 1], [-4, 7]);
  const backgroundScale = useTransform(smoothProgress, [0, 1], [1, 1.08]);
  const centerGlowY = useTransform(smoothProgress, [0, 1], [0, -100]);
  const ribbonY = useTransform(smoothProgress, [0, 1], [0, -90]);
  const ribbonRotate = useTransform(smoothProgress, [0, 1], [-2, 4]);
  const sparkShift = useTransform(smoothProgress, [0, 1], [0, -32]);

  return (
    <>
      <motion.div
        className="pointer-events-none fixed inset-x-0 top-0 z-40 h-[3px] origin-left bg-[linear-gradient(90deg,#fdf9b6_0%,#e1a0ba_45%,#720065_100%)] shadow-[0_0_24px_rgba(114,0,101,0.28)]"
        style={{ scaleX: smoothProgress }}
      />

      <div className="pointer-events-none fixed inset-0 -z-30 overflow-hidden">
        <motion.div className="absolute inset-0" style={{ scale: backgroundScale }}>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_0%,rgba(253,249,182,0.9),transparent_26%),radial-gradient(circle_at_86%_16%,rgba(225,160,186,0.24),transparent_22%),radial-gradient(circle_at_50%_100%,rgba(114,0,101,0.08),transparent_28%),linear-gradient(180deg,rgba(255,253,240,0.98)_0%,rgba(255,248,232,0.95)_34%,rgba(251,241,247,0.86)_68%,rgba(255,252,243,0.96)_100%)]" />
          <div className="vibe-grid absolute inset-0 opacity-50" />
        </motion.div>

        <motion.div
          className="absolute -left-24 top-0 h-[34rem] w-[34rem] rounded-full bg-[#fff0af]/80 blur-3xl"
          style={{ x: auraLeftX, y: auraLeftY }}
        />
        <motion.div
          className="absolute right-[-10rem] top-[18rem] h-[32rem] w-[32rem] rounded-full bg-rose/25 blur-3xl"
          style={{ x: auraRightX, y: auraRightY }}
        />
        <motion.div
          className="absolute left-[12%] top-[58%] h-64 w-64 rounded-full bg-purple/10 blur-3xl"
          style={{ y: centerGlowY }}
        />

        <motion.div
          className="absolute right-[6%] top-24 hidden h-80 w-80 md:block"
          style={{
            y: clusterY,
            rotateZ: clusterRotate,
            scale: clusterScale,
            transformPerspective: 1600,
            transformStyle: 'preserve-3d',
          }}
        >
          <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(253,249,182,0.42)_0%,rgba(225,160,186,0.24)_34%,rgba(114,0,101,0.08)_72%,transparent_100%)] blur-2xl" />
          <motion.div
            className="vibe-ring absolute inset-10"
            animate={{ rotateZ: [0, 360] }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          />
          <motion.div
            className="vibe-ring vibe-ring--tilt-a absolute inset-6"
            animate={{ rotateZ: [360, 0] }}
            transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
          />
          <motion.div
            className="vibe-ring vibe-ring--tilt-b absolute inset-16"
            animate={{ rotateZ: [0, 360] }}
            transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
          />
          <motion.div
            className="vibe-glass-slab vibe-glass-slab--a absolute left-8 top-16 h-24 w-48 rounded-[30px]"
            animate={{ y: [0, -18, 0], rotateZ: [-16, -10, -16] }}
            transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="vibe-glass-slab vibe-glass-slab--b absolute right-4 top-36 h-28 w-40 rounded-[30px]"
            animate={{ y: [0, 16, 0], rotateZ: [14, 8, 14] }}
            transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>

        <motion.div
          className="absolute left-[7%] top-[54%] hidden h-44 w-60 md:block"
          style={{
            y: slabY,
            rotateZ: slabRotate,
            transformPerspective: 1600,
            transformStyle: 'preserve-3d',
          }}
        >
          <div className="vibe-glass-slab vibe-glass-slab--c absolute inset-0 rounded-[34px]" />
          <div className="absolute inset-[1px] rounded-[34px] bg-[linear-gradient(135deg,rgba(255,255,255,0.38),rgba(255,255,255,0.12))]" />
        </motion.div>

        <svg className="absolute inset-0 h-full w-full opacity-[0.22]" aria-hidden="true">
          <defs>
            <linearGradient id="vibe-beam" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#FDF9B6" stopOpacity="0.18" />
              <stop offset="48%" stopColor="#E1A0BA" stopOpacity="0.24" />
              <stop offset="100%" stopColor="#720065" stopOpacity="0.18" />
            </linearGradient>
          </defs>
          <motion.path
            d="M-80 180 C 260 40, 520 320, 1240 80"
            stroke="url(#vibe-beam)"
            strokeWidth="2"
            fill="none"
            strokeDasharray="16 12"
            animate={{ pathLength: [0.2, 1, 0.2], opacity: [0.12, 0.32, 0.12] }}
            transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
          />
        </svg>

        <motion.svg
          className="absolute inset-0 h-full w-full opacity-[0.42]"
          viewBox="0 0 1100 760"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
          style={{ y: ribbonY, rotate: ribbonRotate }}
        >
          <defs>
            <linearGradient id="ribbon-flow" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FDF9B6" stopOpacity="0.84" />
              <stop offset="38%" stopColor="#E6C7B6" stopOpacity="0.74" />
              <stop offset="70%" stopColor="#B5679E" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#8A007B" stopOpacity="0.86" />
            </linearGradient>
            <linearGradient id="ribbon-core" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FFF8BC" stopOpacity="0.95" />
              <stop offset="52%" stopColor="#E0B8C0" stopOpacity="0.82" />
              <stop offset="100%" stopColor="#9A238B" stopOpacity="0.92" />
            </linearGradient>
            <radialGradient id="spark-glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FFFCE0" stopOpacity="1" />
              <stop offset="48%" stopColor="#FDF9B6" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#A42390" stopOpacity="0" />
            </radialGradient>
            <filter id="ribbon-blur" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="9" />
            </filter>
            <filter id="spark-blur" x="-80%" y="-80%" width="260%" height="260%">
              <feGaussianBlur stdDeviation="3.5" />
            </filter>
          </defs>

          <motion.g
            animate={{ x: [0, 10, 0], y: [0, -8, 0] }}
            transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
          >
            {ribbonPaths.map((path) => (
              <g key={path.id}>
                <motion.path
                  d={path.d}
                  fill="none"
                  stroke="url(#ribbon-flow)"
                  strokeWidth={path.width + 7}
                  strokeLinecap="round"
                  opacity="0.16"
                  filter="url(#ribbon-blur)"
                  animate={{ pathLength: [0.18, 1, 0.18], opacity: [0.1, 0.2, 0.1] }}
                  transition={{
                    duration: path.duration,
                    delay: path.delay,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
                <motion.path
                  d={path.d}
                  fill="none"
                  stroke="url(#ribbon-flow)"
                  strokeWidth={path.width}
                  strokeLinecap="round"
                  opacity="0.28"
                  animate={{ pathLength: [0.2, 1, 0.2] }}
                  transition={{
                    duration: path.duration,
                    delay: path.delay,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
                <motion.path
                  d={path.d}
                  fill="none"
                  stroke="url(#ribbon-core)"
                  strokeWidth={Math.max(3, path.width * 0.24)}
                  strokeLinecap="round"
                  opacity="0.34"
                  animate={{ opacity: [0.2, 0.38, 0.2] }}
                  transition={{
                    duration: path.duration - 4,
                    delay: path.delay,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
              </g>
            ))}

            {ribbonSparks.map((spark, index) => (
              <motion.g
                key={`spark-${spark.x}-${spark.y}`}
                style={{ y: sparkShift }}
                animate={{ opacity: [0.12, 0.92, 0.12], scale: [0.8, 1.18, 0.8] }}
                transition={{
                  duration: 4.4,
                  delay: spark.delay,
                  repeat: Infinity,
                  repeatDelay: 2.8 + index * 0.4,
                  ease: 'easeInOut',
                }}
              >
                <circle
                  cx={spark.x}
                  cy={spark.y}
                  r={18 * spark.size}
                  fill="url(#spark-glow)"
                  opacity="0.52"
                  filter="url(#spark-blur)"
                />
                <circle cx={spark.x} cy={spark.y} r={4.4 * spark.size} fill="#FFF8C8" opacity="0.95" />
                <motion.circle
                  cx={spark.x}
                  cy={spark.y}
                  r={10 * spark.size}
                  fill="none"
                  stroke="#FDF9B6"
                  strokeOpacity="0.34"
                  strokeWidth="1.2"
                  animate={{ r: [8 * spark.size, 18 * spark.size], opacity: [0.34, 0] }}
                  transition={{
                    duration: 1.8,
                    delay: spark.delay + 0.2,
                    repeat: Infinity,
                    repeatDelay: 5.4 + index * 0.4,
                    ease: 'easeOut',
                  }}
                />
              </motion.g>
            ))}
          </motion.g>
        </motion.svg>

        <motion.svg
          className="absolute inset-0 h-full w-full opacity-55"
          viewBox="0 0 1100 760"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
          style={{ y: networkY, rotate: networkRotate }}
        >
          <defs>
            <linearGradient id="network-line" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#FDF9B6" stopOpacity="0.28" />
              <stop offset="52%" stopColor="#C97CBB" stopOpacity="0.24" />
              <stop offset="100%" stopColor="#720065" stopOpacity="0.28" />
            </linearGradient>
            <radialGradient id="network-node" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FDF9B6" stopOpacity="0.86" />
              <stop offset="100%" stopColor="#720065" stopOpacity="0.42" />
            </radialGradient>
          </defs>

          <motion.g
            animate={{ y: [0, -14, 0], x: [0, 8, 0] }}
            transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
          >
            {connections.map(([startIndex, endIndex], index) => {
              const start = nodes[startIndex];
              const end = nodes[endIndex];

              return (
                <motion.line
                  key={`${startIndex}-${endIndex}`}
                  x1={start.x}
                  y1={start.y}
                  x2={end.x}
                  y2={end.y}
                  stroke="url(#network-line)"
                  strokeWidth="1.6"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: [0, 1, 1], opacity: [0, 0.4, 0.14] }}
                  transition={{
                    duration: 8,
                    delay: index * 0.22,
                    repeat: Infinity,
                    repeatDelay: 6,
                    ease: 'easeInOut',
                  }}
                />
              );
            })}

            {nodes.map((node) => (
              <motion.g
                key={`${node.x}-${node.y}`}
                animate={{ scale: [1, 1.16, 1], opacity: [0.58, 0.95, 0.58] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: node.delay,
                }}
                style={{ transformOrigin: `${node.x}px ${node.y}px` }}
              >
                <circle cx={node.x} cy={node.y} r="12" fill="#720065" fillOpacity="0.06" />
                <circle cx={node.x} cy={node.y} r="4.8" fill="url(#network-node)" />
              </motion.g>
            ))}

            {[0, 3, 6].map((nodeIndex, index) => {
              const node = nodes[nodeIndex];
              return (
                <motion.circle
                  key={`pulse-${nodeIndex}`}
                  cx={node.x}
                  cy={node.y}
                  r="18"
                  fill="none"
                  stroke="#720065"
                  strokeOpacity="0.12"
                  strokeWidth="1.2"
                  animate={{ r: [18, 36, 18], opacity: [0.1, 0.02, 0.1] }}
                  transition={{
                    duration: 7 + index,
                    repeat: Infinity,
                    ease: 'easeOut',
                    delay: index * 1.5,
                  }}
                />
              );
            })}
          </motion.g>
        </motion.svg>
      </div>
    </>
  );
};

export default AnimatedNetworkBackground;
