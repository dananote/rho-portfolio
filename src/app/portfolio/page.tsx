"use client" 

import Link from "next/link";

export default function Portfolio() {
    // const portfolioData = await fetch('/api/getPorfolio', {
    //     method: 'GET',
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    // });

  return <>
  <div>portfolio page</div>
  <Link href="/portfolio/1234">go to detail</Link>
  </>;
}