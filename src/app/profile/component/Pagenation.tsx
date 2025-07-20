import { ChevronUp, ChevronDown } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';
import '@/css/pagination.css';

interface PagenationProps {
  totalPages: number;
  isAnimating: boolean;
  currentPage: number;
  wrapRef: React.RefObject<HTMLDivElement> | React.RefObject<null>;
  setCurrentPage: (page: number) => void;
}
export default function Pagenation({
  isAnimating,
  currentPage,
  setCurrentPage,
  totalPages,
  wrapRef,
}: PagenationProps) {
  const [isUpAnimating, setIsUpAnimating] = useState(false);
  const [isDownAnimating, setIsDownAnimating] = useState(false);

  /**
   * Actions
   */
  const convertPageNumber = (pageType: 'total' | 'current') => {
    if (pageType === 'current') {
      return currentPage + 1 < 10 ? `0${currentPage + 1}` : currentPage + 1;
    } else {
      return totalPages < 10 ? `0${totalPages}` : totalPages;
    }
  };

  const moveToScroll = (arrow: 'up' | 'down') => {
    if (arrow === 'up' && currentPage === 0) return;
    if (arrow === 'down' && currentPage === totalPages - 1) return;
    const targetScrollTop = (currentPage + (arrow === 'up' ? -1 : 1)) * window.innerHeight;
    wrapRef.current?.scrollTo({
      top: targetScrollTop,
      behavior: 'smooth',
    });

    setCurrentPage(currentPage + (arrow === 'up' ? -1 : 1));
  };

  /**
   * variants
   */
  const variants = {
    init: { x: '100%' },
    view: { x: '0' },
    out: { x: isAnimating ? '100%' : '0' },
  };

  const buttonVariants = {
    // function으로 정의하는 모습
    upHover: {
      y: isUpAnimating ? ['-25%', '-100%', '100%', '0%'] : '0',
      opacity: isUpAnimating ? [1, 0, 0, 1] : 1,
    },
    downHover: {
      y: isDownAnimating ? ['25%', '100%', '-100%', '0%'] : '0',
      opacity: isDownAnimating ? [1, 0, 0, 1] : 1,
    },
    default: { y: '0%', opacity: 1 },
  };

  // Up
  const onUpMouseEnter = () => {
    setIsUpAnimating(true);
  };
  const onUpMouseLeave = () => {
    setIsUpAnimating(false);
  };

  // Down
  const onDownMouseEnter = () => {
    setIsDownAnimating(true);
  };
  const onDownMouseLeave = () => {
    setIsDownAnimating(false);
  };

  return (
    <motion.div
      variants={variants}
      animate="out"
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      <motion.div
        className="pagination"
        variants={variants}
        initial="init"
        whileInView="view"
        transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.4 }}
      >
        <div className="flex flex-col items-center gap-2 text-xs font-semibold">
          <p className="mt-[-2px]">{convertPageNumber('current')}</p>
          <div className="w-[1px] h-full bg-white"></div>
          <p className="mb-[-2px]">{convertPageNumber('total')}</p>
        </div>
        <div className="flex flex-col">
          <button
            onMouseEnter={onUpMouseEnter}
            onMouseLeave={onUpMouseLeave}
            onClick={() => moveToScroll('up')}
            className="w-10 h-10 border-l-2 border-r-2 border-t-2 border-white overflow-hidden bg-black"
          >
            <motion.div
              className="w-full h-full flex items-center justify-center"
              initial="default"
              animate="upHover" // hover상태 일 때 hover animation발생
              variants={buttonVariants}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
            >
              <ChevronUp color="#ffffff" />
            </motion.div>
          </button>

          <button
            onMouseEnter={onDownMouseEnter}
            onMouseLeave={onDownMouseLeave}
            onClick={() => moveToScroll('down')}
            className="w-10 h-10 border-2 border-white overflow-hidden bg-black"
          >
            <motion.div
              className="w-full h-full flex items-center justify-center"
              initial="default"
              animate="downHover" // hover상태 일 때 hover animation발생
              variants={buttonVariants}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
            >
              <ChevronDown color="#ffffff" />
            </motion.div>
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}
