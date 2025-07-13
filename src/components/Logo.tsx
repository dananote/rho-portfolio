import { motion } from 'motion/react';

export default function Logo() {
  //TODO hover시 애니메이션 다시 동작하게 해야함
  return (
    <h1 className="logo">
      <motion.svg
        width="100%"
        height="100%"
        viewBox="0 0 180 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* 1. 애니메이션 윤곽선 (한 면씩 그려지고 사라짐) */}
        <motion.path
          d="M40 50 L90 0 L140 50 L90 100 Z"
          stroke="white"
          strokeWidth="3"
          fill="none"
          initial={{ pathLength: 0, opacity: 1 }}
          animate={{
            pathLength: 1,
            opacity: 0, // 서서히 사라짐
          }}
          transition={{
            pathLength: {
              duration: 0.5,
              ease: 'easeInOut',
            },
            opacity: {
              delay: 1, // 그리기가 끝나고 약간의 텀을 두고 사라짐
              duration: 0.3,
            },
          }}
        />

        {/* 2. 채워진 다이아몬드 (나중에 이동) */}
        <motion.g
          initial={{ x: 0, scale: 0 }}
          animate={{
            x: 30, // 0 → 60(오른쪽) → -60(왼쪽)
            scale: 1,
          }}
          transition={{
            scale: {
              delay: 1,
              duration: 0.2,
              ease: 'easeInOut',
            },
            x: {
              delay: 1.7,
              duration: 0.6, // 전체 이동 시간
              ease: 'easeInOut',
            },
          }}
        >
          <path
            d="M40 50 L90 0 L140 50 L90 100 Z"
            fill="white"
            stroke="white"
            strokeWidth="3"
          />
        </motion.g>

        {/* 3. 정적 윤곽선 다이아몬드 (나중에 나타나서 오른쪽으로 이동) */}
        <motion.path
          d="M40 50 L90 0 L140 50 L90 100 Z"
          stroke="white"
          strokeWidth="3"
          fill="none"
          initial={{ opacity: 0, x: 0 }}
          animate={{
            opacity: 1,
            x: -30, // 오른쪽으로 30 이동
          }}
          transition={{
            opacity: {
              delay: 1,
              duration: 0.5,
            },
            x: {
              delay: 1.7, // 채워진 다이아몬드가 이동하기 시작할 때
              duration: 0.6,
              ease: 'easeInOut',
            },
          }}
        />
      </motion.svg>
    </h1>
  );
}
