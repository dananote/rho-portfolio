'use client';

import Link from 'next/link';
import Logo from './Logo';
import { useRouter } from 'next/navigation';
import { useHomeAnimationStore } from '@/store/homeAnimationStore';

export default function Header() {
  const router = useRouter();
  const { setIsHomeAnimation, animationDuration } = useHomeAnimationStore();
  const navigateWithAnimation = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault(); // 기본 링크 동작 방지
    setIsHomeAnimation(true);

    setTimeout(() => {
      router.push(href);
    }, animationDuration * 1000);
  };
  return (
    <header>
      <Link
        href="/profile"
        onClick={e => navigateWithAnimation(e, '/profile')}
        className="header-content"
      >
        <Logo />
      </Link>
    </header>
  );
}
