"use client";
import React, { useEffect, useState } from "react";
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

 const [active, setActive] = useState(false);

 useEffect(() => {
  if (active) window.document.body.style.overflow = "hidden";
  else window.document.body.style.overflow = "auto";
 }, [active]);

 return (
  <>
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
      <button
       onClick={() => setActive(!active)}
       className="lg:hidden z-50"
      >
       <Burger />
      </button>
     </nav>
    </section>



   </header>

   {active && (
    <div
     onClick={() => setActive(false)}
     className="bg-white dark:bg-app-black fixed inset-0 z-40">
     <button
      onClick={() => setActive(!active)}
      className="fixed right-3 top-6 z-50"
     >
      <Burger />
     </button>

     <nav className="flex flex-col items-end pr-8 pt-[120px] gap-14 font-bold text-[20px]">
      <Link onClick={() => setActive(false)} href="#about">
       Продукція
      </Link>
      <Link onClick={() => setActive(false)} href="#">
       Де купити
      </Link>
      <Link onClick={() => setActive(false)} href="#">
       Про бренд
      </Link>
      <Link onClick={() => setActive(false)} href="#">
       Контакти
      </Link>
     </nav>
    </div>
   )}
  </>
 )
}

export default Header


function PhoneIcon({ active = false }) {
 return (
  <svg
   xmlns="http://www.w3.org/2000/svg"
   width="24"
   height="24"
   fill="none">
   <path
    className={`${active
     ? "stroke-app-black dark:stroke-white"
     : "stroke-app-black dark:stroke-white"
     }`}
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    d="M3 5.5C3 14.06 9.94 21 18.5 21c.386 0 .77-.014 1.148-.042.435-.032.653-.048.851-.162a1.06 1.06 0 0 0 .402-.432c.099-.206.099-.446.099-.926v-2.817c0-.404 0-.606-.067-.779a.999.999 0 0 0-.277-.396c-.14-.122-.33-.191-.71-.329l-3.206-1.166c-.441-.16-.662-.24-.872-.227a1 1 0 0 0-.513.182c-.171.121-.292.322-.534.725L14 16a12.1 12.1 0 0 1-6-6l1.369-.821c.402-.242.604-.363.725-.534a1 1 0 0 0 .182-.513c.014-.21-.066-.43-.227-.872L8.883 4.053c-.138-.38-.207-.569-.329-.709a1 1 0 0 0-.396-.278C7.985 3 7.783 3 7.379 3H4.562c-.48 0-.72 0-.926.1a1.06 1.06 0 0 0-.432.401c-.114.198-.13.416-.162.85C3.014 4.732 3 5.115 3 5.5Z" />
  </svg>
 );
}

function Burger({ active = false }) {
 return (
  <svg
   width="24"
   height="24"
   viewBox="0 0 24 24"
   fill="none"
   xmlns="http://www.w3.org/2000/svg"
  >
   <path
    d="M4 6H20M4 12H20M4 18H20"
    className={`${active
     ? "stroke-app-black dark:stroke-white"
     : "stroke-app-black dark:stroke-white"
     }`}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
   />
  </svg>
 );
}