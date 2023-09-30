"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useMotionValueEvent, useScroll } from "framer-motion";
import ThemeToggle from "./ui/ThemeToggle";

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
   className={`bg-gray-300/50 dark:bg-white/5 border-b border-b-gray-50/30 backdrop-blur-xl sticky top-0 transition-all z-30 ${!scrollUp && "-translate-y-[110%]"}`}
  >
   <section className="wrapper flex justify-between items-center text-[min(4vw,20px)]">
    <Link href="/">Назва</Link>

    <nav className="space-x-3 flex items-center">
     <a href="tel:+380660984114">
      <span className="hidden sm:block">Зателефонувати</span>
      <span className="sm:hidden"><PhoneIcon /></span>
     </a>
     <Link href={`/information`}>Інформація</Link>
     <ThemeToggle />
    </nav>
   </section>
  </header>
 )
}

export default Header


function PhoneIcon() {
 return (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5.5C3 14.06 9.94 21 18.5 21c.386 0 .77-.014 1.148-.042.435-.032.653-.048.851-.162a1.06 1.06 0 0 0 .402-.432c.099-.206.099-.446.099-.926v-2.817c0-.404 0-.606-.067-.779a.999.999 0 0 0-.277-.396c-.14-.122-.33-.191-.71-.329l-3.206-1.166c-.441-.16-.662-.24-.872-.227a1 1 0 0 0-.513.182c-.171.121-.292.322-.534.725L14 16a12.1 12.1 0 0 1-6-6l1.369-.821c.402-.242.604-.363.725-.534a1 1 0 0 0 .182-.513c.014-.21-.066-.43-.227-.872L8.883 4.053c-.138-.38-.207-.569-.329-.709a1 1 0 0 0-.396-.278C7.985 3 7.783 3 7.379 3H4.562c-.48 0-.72 0-.926.1a1.06 1.06 0 0 0-.432.401c-.114.198-.13.416-.162.85C3.014 4.732 3 5.115 3 5.5Z" /></svg>
 );
}