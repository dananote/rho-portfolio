'use client';

import { usePathname } from 'next/navigation';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathName = usePathname();

  const pageClass = pathName.includes('/portfolio') ? 'page-portfolio' : '';

  return (
    <html lang="en">
      <body className={pageClass}>
        <Header />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
