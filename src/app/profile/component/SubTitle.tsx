import { motion } from 'motion/react';
import '@/css/subtitle.css';

interface SubTitleProps {
  isAnimating: boolean;
}
export default function SubTitle({ isAnimating }: SubTitleProps) {
  const variants = {
    init: { x: '100%' },
    view: { x: '-100%' },
    out: { x: isAnimating ? '100%' : '0' },
  };
  return (
    <div className="sub-title">
      <motion.div
        variants={variants}
        animate="out"
        transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.3 }}
        className="w-full overflow-hidden"
      >
        <motion.p
          variants={variants}
          initial="init"
          whileInView="view"
          transition={{ repeat: Infinity, duration: 10, ease: 'linear', delay: 1 }}
          className="whitespace-nowrap text-xl tracking-wide"
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry's standard
        </motion.p>
      </motion.div>
    </div>
  );
}
