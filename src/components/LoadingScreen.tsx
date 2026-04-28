import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [wordPositions, setWordPositions] = useState<{ x: number; y: number }[]>([]);

  const words = ['Connect', 'Grow', 'Link', 'Collaborate'];

  // Generate random positions for words - avoiding center area
  useEffect(() => {
    const positions = words.map(() => {
      // Avoid center area (40-60% width, 35-65% height) where logo/text/bar are
      let x, y;
      do {
        x = Math.random() * 100;
        y = Math.random() * 100;
      } while (
        (x >= 35 && x <= 65 && y >= 30 && y <= 70) // Avoid center rectangle
      );
      return { x, y };
    });
    setWordPositions(positions);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 4000); // 4 seconds loading time

    const wordTimer = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 1000); // Change word every 1 second

    return () => {
      clearTimeout(timer);
      clearInterval(wordTimer);
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-purple via-plum to-panel overflow-hidden"
    >
      {/* Animated Ribbons */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top ribbon */}
        <motion.div
          initial={{ x: '-100%' }}
          animate={{ x: '100%' }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'linear'
          }}
          className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-cream/30 to-transparent"
        />

        {/* Bottom ribbon */}
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: '-100%' }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'linear',
            delay: 0.5
          }}
          className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-cream/30 to-transparent"
        />

        {/* Left ribbon */}
        <motion.div
          initial={{ y: '-100%' }}
          animate={{ y: '100%' }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'linear',
            delay: 1
          }}
          className="absolute left-0 top-0 h-full w-2 bg-gradient-to-b from-transparent via-cream/20 to-transparent"
        />

        {/* Right ribbon */}
        <motion.div
          initial={{ y: '100%' }}
          animate={{ y: '-100%' }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'linear',
            delay: 1.5
          }}
          className="absolute right-0 top-0 h-full w-2 bg-gradient-to-b from-transparent via-cream/20 to-transparent"
        />
      </div>

      {/* Floating Words */}
      <div className="absolute inset-0 pointer-events-none">
        {words.map((word, index) => (
          <motion.div
            key={word}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: index === currentWordIndex ? [0, 1, 1, 0] : 0,
              scale: index === currentWordIndex ? [0.8, 1.1, 1.1, 0.8] : 0.8,
            }}
            transition={{
              duration: 1,
              ease: 'easeInOut',
            }}
            className="absolute"
            style={{
              left: wordPositions[index]?.x ? `${wordPositions[index].x}%` : '50%',
              top: wordPositions[index]?.y ? `${wordPositions[index].y}%` : '50%',
              transform: 'translate(-50%, -50%)',
            }}
          >
            <motion.span
              animate={{
                textShadow: [
                  '0 0 20px rgba(253, 249, 182, 0.5)',
                  '0 0 40px rgba(253, 249, 182, 0.8)',
                  '0 0 20px rgba(253, 249, 182, 0.5)',
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="text-3xl md:text-5xl font-bold text-cream/80 select-none"
              style={{
                filter: 'drop-shadow(0 0 10px rgba(253, 249, 182, 0.3))',
              }}
            >
              {word}
            </motion.span>
          </motion.div>
        ))}
      </div>

      <div className="text-center relative z-10 px-4">
        <motion.div
          initial={{ scale: 0.8, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1],
            delay: 0.2
          }}
          className="mb-6"
        >
          <div className="flex h-20 w-20 md:h-24 md:w-24 items-center justify-center overflow-hidden rounded-[18px] border border-white/20 bg-white/10 shadow-soft backdrop-blur mx-auto">
            <img
              src="/brand/wasla-logo.png"
              alt="Wasla logo"
              className="h-full w-full object-contain"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="space-y-1 mb-8"
        >
          <h1 className="text-xl md:text-2xl font-bold text-white">Wasla</h1>
          <p className="text-xs md:text-sm text-white/80">Tunisia-first creator marketplace</p>
        </motion.div>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 3, delay: 0.5, ease: 'easeInOut' }}
          className="h-1 w-28 md:w-32 bg-white/30 rounded-full mx-auto origin-left"
        >
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 3.2, delay: 0.5, ease: 'easeInOut' }}
            className="h-full bg-gradient-to-r from-cream to-white rounded-full"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;