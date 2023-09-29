"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useMotionValueEvent, useScroll } from "framer-motion";

const Header = () => {
 const [scrollUp, setScrollUp] = useState(true);
 const { scrollY }: any = useScroll();

 useMotionValueEvent(scrollY, "change", (latest: any) => {
  const previousScrollY = scrollY.getPrevious();
  if (latest > previousScrollY) {
   setScrollUp(false);
  } else {
   setScrollUp(true);
  }
 });

 return (
  <header
   className={`bg-gray-300/50 border-b border-b-gray-50/50 backdrop-blur-xl sticky top-0 transition-all z-30 ${!scrollUp && "-translate-y-[110%]"}`}
  >
   <section className="wrapper flex justify-between items-center text-[min(4vw,20px)]">
    <Link href="/">Назва</Link>

    <nav className="space-x-3">
     <a href="tel:+380660984114">Зателефонуати</a>
     <Link href={`/information`}>Інформація</Link>
    </nav>
   </section>
  </header>
 )
}

export default Header