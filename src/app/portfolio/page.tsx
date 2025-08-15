'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useHomeAnimationStore } from '@/store/homeAnimationStore';
import PortfolioGroup from './component/PortFolioGroup';

const NAVIGTION_ANIMATION_DURATION = 250;

export default function Portfolio() {
  const { isHomeAnimation, animationDuration } = useHomeAnimationStore();

  /**
   * variants
   */
  const variants = {
    init: { x: '100%', opacity: 0 },
    view: { x: '0', opacity: 1 },
    out: { x: isHomeAnimation ? '-100%' : '0', opacity: isHomeAnimation ? 0 : 1 },
  };

  return (
    <motion.div
      variants={variants}
      animate="out"
      transition={{ duration: animationDuration, ease: 'easeInOut' }}
    >
      <motion.div
        variants={variants}
        initial="init"
        whileInView="view"
        transition={{ duration: animationDuration }}
        className="w-screen h-screen bg-[#121212]"
      >
        <PortfolioGroup />
      </motion.div>
    </motion.div>
  );
}
