'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
interface Props {
  setIsAnimating: (isAnimating: boolean) => void;
  animationDuration: number;
}

export default function SecondPage({ setIsAnimating, animationDuration }: Props) {
  const duration = 0.2;
  const delay = 0.2;
  const router = useRouter();

  const navigateWithAnimation = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault(); // 기본 링크 동작 방지
    setIsAnimating(true);

    // 1초 후에 페이지 이동
    setTimeout(() => {
      router.push(href);
    }, animationDuration);
  };

  return (
    <div className="content second-content">
      <motion.div className="first-page-title-wrap">
        <Link
          href="/portfolio"
          onClick={e => navigateWithAnimation(e, '/portfolio')}
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
        </Link>
      </motion.div>
    </div>
  );
}
