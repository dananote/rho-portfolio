'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Home() {
  const router = useRouter();
  const [isOut, setIsOut] = useState(false);
  const variants = {
    init: { x: '100%' },
    view: { x: '0' },
    out: { x: isOut ? '-100%' : '0' },
  };

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault(); // 기본 링크 동작 방지
    setIsOut(true);

    // 1초 후에 페이지 이동
    setTimeout(() => {
      router.push(href);
    }, 1000);
  };
  return (
    <></>
    // <motion.div
    //   animate={{ x: isOut ? '-100%' : '0' }}
    //   transition={{ duration: 1 }}
    // >
    //   <motion.div
    //     initial="init"
    //     whileInView="view"
    //     variants={variants}
    //     transition={{ duration: 1 }}
    //   >
    //     <div className="bg-blue-900">
    //       <div>profile page</div>
    //       <Link
    //         href="/portfolio"
    //         onClick={e => handleClick(e, '/portfolio')}
    //       >
    //         Go to Portfolio
    //       </Link>
    //     </div>
    //   </motion.div>
    // </motion.div>
  );
}
