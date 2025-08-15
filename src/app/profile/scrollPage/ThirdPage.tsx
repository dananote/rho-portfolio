'use client';

import { useRouter } from 'next/navigation';
import '@/css/firstpage.css';
import { motion } from 'motion/react';
import Link from 'next/link';
import PortfolioCount from '../component/PortfolioCount';

interface FirstPageProps {
  animationDuration: number;
  isAnimating: boolean;
  setIsAnimating: (isAnimating: boolean) => void;
}

export default function ThirdPage({
  isAnimating,
  setIsAnimating,
  animationDuration,
}: FirstPageProps) {
  const router = useRouter();

  const navigateWithAnimation = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault(); // 기본 링크 동작 방지
    setIsAnimating(true);

    // 1초 후에 페이지 이동
    setTimeout(() => {
      router.push(href);
    }, animationDuration);
  };

  const duration = 0.2;
  const delay = 0.2;

  /**
   * variants
   */
  const variants = {
    out: { x: isAnimating ? '-100%' : '0', opacity: isAnimating ? 0 : 1 },
  };

  return (
    <div className="content first-content">
      <motion.div className="first-page-title-wrap relative">
        <motion.div
          variants={variants}
          animate="out"
          transition={{ duration: duration, ease: 'easeInOut', delay: 0.2 }}
        >
          <PortfolioCount />
        </motion.div>
        <Link
          href="/portfolio"
          onClick={e => navigateWithAnimation(e, '/portfolio')}
        >
          <motion.div
            variants={variants}
            animate="out"
            transition={{ duration: duration, ease: 'easeInOut', delay: 0.2 }}
          >
            <motion.div className="first-page-title">
              <motion.p
                initial={{ y: '100%', opacity: 0 }}
                whileInView={{ y: '0%', opacity: 1 }}
                transition={{ duration: duration, delay: delay }}
              >
                Integrated
              </motion.p>
            </motion.div>

            <div className="first-page-title">
              <motion.p
                initial={{ y: '100%', opacity: 0 }}
                whileInView={{ y: '0%', opacity: 1 }}
                transition={{ duration: duration, delay: delay + 0.1 }}
              >
                Brand
              </motion.p>
              <motion.p
                initial={{ y: '100%', opacity: 0 }}
                whileInView={{ y: '0%', opacity: 1 }}
                transition={{ duration: duration, delay: delay + 0.2 }}
              >
                {' '}
                Experience
              </motion.p>
            </div>
            <div className="first-page-title">
              <motion.p
                initial={{ y: '100%', opacity: 0 }}
                whileInView={{ y: '0%', opacity: 1 }}
                transition={{ duration: duration, delay: delay + 0.3 }}
              >
                Solutions
              </motion.p>
            </div>
            <div className="first-page-title">
              <motion.p
                initial={{ y: '100%', opacity: 0 }}
                whileInView={{ y: '0%', opacity: 1 }}
                transition={{ duration: duration, delay: delay + 0.4 }}
              >
                for
              </motion.p>
              <motion.p
                initial={{ y: '100%', opacity: 0 }}
                whileInView={{ y: '0%', opacity: 1 }}
                transition={{ duration: duration, delay: delay + 0.5 }}
              >
                {' '}
                your
              </motion.p>
              <motion.p
                initial={{ y: '100%', opacity: 0 }}
                whileInView={{ y: '0%', opacity: 1 }}
                transition={{ duration: duration, delay: delay + 0.6 }}
              >
                {' '}
                Brand
              </motion.p>
            </div>
          </motion.div>
        </Link>
      </motion.div>
    </div>
  );
}
