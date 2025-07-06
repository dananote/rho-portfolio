'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const NAVIGTION_ANIMATION_DURATION = 250;

export default function Portfolio() {
  const router = useRouter();

  const [isAnimating, setIsAnimating] = useState(false);
  const [duration, setDuration] = useState(0);

  const navigateWithAnimation = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault(); // 기본 링크 동작 방지
    setIsAnimating(true);

    setTimeout(() => {
      router.push(href);
    }, NAVIGTION_ANIMATION_DURATION);
  };

  // animation duration
  const calculateDuration = () => {
    setDuration(NAVIGTION_ANIMATION_DURATION / 1000);
  };

  useEffect(() => {
    calculateDuration();
  }, []);

  /**
   * variants
   */
  const variants = {
    init: { x: '100%', opacity: 0 },
    view: { x: '0', opacity: 1 },
    out: { x: isAnimating ? '-100%' : '0', opacity: isAnimating ? 0 : 1 },
  };

  return (
    <motion.div
      variants={variants}
      animate="out"
      transition={{ duration: duration }}
    >
      <motion.div
        variants={variants}
        initial="init"
        whileInView="view"
        transition={{ duration: duration }}
      >
        <div className="bg-amber-600">
          <div>portfolio page</div>
          <Link
            href="/"
            onClick={e => {
              navigateWithAnimation(e, '/profile');
            }}
          >
            Go to Home
          </Link>
          <Link href="/portfolio/1234">go to detail</Link>
        </div>
      </motion.div>
    </motion.div>
  );
}
