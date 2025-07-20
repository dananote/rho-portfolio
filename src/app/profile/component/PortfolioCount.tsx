import { motion } from 'motion/react';

export default function PortfolioCount() {
  // TODO 위치 반응형 넣기
  // TODO out될때 애니메이션 넣기
  const variants = {
    init: { y: '-50%', opacity: 0 },
    view: { y: '0%', opacity: 1 },
    opacity: { y: '0%', opacity: 0.7 },
  };
  return (
    <>
      <motion.div
        variants={variants}
        initial="init"
        whileInView="view"
        transition={{ duration: 0.5, type: 'spring', bounce: 0.7, delay: 0.4 }}
        className="w-13 h-8 border-2 border-blue-600 rounded-full absolute right-[-25px] top-4 z-50  flex items-center justify-center font-bold text-base"
      >
        001
      </motion.div>
      <motion.div
        variants={variants}
        initial="init"
        whileInView="opacity"
        transition={{ duration: 0.5, type: 'spring', bounce: 0.7, delay: 0.4 }}
        className="w-13 h-8 bg-blue-600 rounded-full absolute right-[-25px] top-4  flex items-center justify-center"
      ></motion.div>
    </>
  );
}
