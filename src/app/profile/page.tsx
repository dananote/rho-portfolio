'use client';

import { motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import FirstPage from './scrollPage/FirstPage';
import SecondPage from './scrollPage/SecondPage';
import Pagenation from './component/Pagenation';
import SubTitle from './component/SubTitle';

const NAVIGTION_ANIMATION_DURATION = 800;

export default function Profile() {
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [duration, setDuration] = useState(0);
  const wrapRef = useRef<HTMLDivElement>(null);
  const slides = [1, 2, 3, 4, 5, 6];
  const height = `calc(100vh * ${slides.length})`;
  const isScrollingRef = useRef(false);
  const scrollDuration = 1500; // 밀리초 단위

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

  // one-scroll
  const scrollToPage = (index: number) => {
    if (!wrapRef.current) return;
    const targetScrollTop = index * window.innerHeight;
    wrapRef.current.scrollTo({
      top: targetScrollTop,
      behavior: 'smooth',
    });
    setCurrentPage(index);
  };

  useEffect(() => {
    const wheelHandler = (e: WheelEvent) => {
      if (!wrapRef.current) return;
      // wheel 이벤트 너무 많이 발생하므로 잠금 처리
      if (isScrollingRef.current) return;
      e.preventDefault();
      if (e.deltaY > 0 && currentPage < slides.length - 1) {
        // 아래로
        isScrollingRef.current = true;
        scrollToPage(currentPage + 1);
      } else if (e.deltaY < 0 && currentPage > 0) {
        // 위로
        isScrollingRef.current = true;
        scrollToPage(currentPage - 1);
      }
      setTimeout(() => {
        isScrollingRef.current = false;
      }, scrollDuration);
    };

    // 스크롤 이벤트 추가
    const baseRefCurrent = wrapRef.current;
    baseRefCurrent?.addEventListener('wheel', wheelHandler, { passive: false });

    return () => {
      baseRefCurrent?.removeEventListener('wheel', wheelHandler);
    };
  }, [currentPage]);
  return (
    <>
      <motion.div
        className="base"
        ref={wrapRef}
        variants={variants}
        animate="out"
        transition={{ duration: duration, ease: 'easeInOut', delay: 0.6 }}
      >
        <SubTitle isAnimating={isAnimating} />
        <motion.div
          className="wrap"
          style={{ height: height }}
          variants={variants}
          initial="init"
          whileInView="view"
          transition={{ duration: duration, ease: 'easeInOut' }}
        >
          {/* 1 */}
          <FirstPage
            isAnimating={isAnimating}
            setIsAnimating={setIsAnimating}
            animationDuration={NAVIGTION_ANIMATION_DURATION}
          />
          {/* 2 */}
          <SecondPage
            setIsAnimating={setIsAnimating}
            animationDuration={NAVIGTION_ANIMATION_DURATION}
          />
          {/* 3 */}
          <div className="content">3번쨰</div>
          {/* 4 */}
          <div className="content">4번쨰</div>
          {/* 5 */}
          <div className="content">5번쨰</div>
          {/* 6 */}
          <div className="content">6번쨰</div>
        </motion.div>
      </motion.div>
      <Pagenation
        totalPages={slides.length}
        isAnimating={isAnimating}
        wrapRef={wrapRef}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
}
