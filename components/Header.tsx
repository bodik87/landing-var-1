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
          <Link href="/" className="inline-flex gap-2 items-center"><Logo /> Назва</Link>

          <nav className="space-x-4 md:space-x-6 flex items-center">
            <a href="tel:+380660984114">
              <span className="block">Телефон</span>
            </a>
            <Link href={`/information`}>Інфо</Link>

            <ThemeToggle />
            <button
              title="Burger"
              onClick={() => setActive(!active)}
              className="md:hidden z-50"
            >
              <Burger />
            </button>
          </nav>
        </section>
      </header>

      {active && (
        <div
          onClick={() => setActive(false)}
          className="md:hidden bg-white dark:bg-black fixed inset-0 z-40">
          <button
            onClick={() => setActive(!active)}
            className="w-9 h-9 p-2 fixed top-5 right-6 rounded-full overflow-hidden bg-black/20 dark:bg-white/20 items-center justify-center"
          >
            <Close />
          </button>

          <nav className="flex flex-col items-end px-8 pt-[120px] gap-14 font-bold text-[20px]">
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
          ? "stroke-black dark:stroke-white"
          : "stroke-black dark:stroke-white"
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
          ? "stroke-black dark:stroke-white"
          : "stroke-black dark:stroke-white"
          }`}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Close({ active = false }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      className={`${active
        ? "fill-black dark:fill-white"
        : "fill-black dark:fill-white"
        }`}
    >
      <path

        d="m12.12 10 4.07-4.06a1.5 1.5 0 1 0-2.11-2.12L10 7.88 5.94 3.81a1.5 1.5 0 1 0-2.12 2.12L7.88 10l-4.07 4.06a1.5 1.5 0 0 0 0 2.12 1.51 1.51 0 0 0 2.13 0L10 12.12l4.06 4.07a1.45 1.45 0 0 0 1.06.44 1.5 1.5 0 0 0 1.06-2.56Z" /></svg>
  );
}

function Logo({ active = false }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
      <path
        className={`${active
          ? "stroke-black dark:stroke-white"
          : "stroke-black dark:stroke-white"
          }`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M8 15s1.6 2 4 2 4-2 4-2m-13-.4v-2.47c0-1.149 0-1.723.148-2.252a4 4 0 0 1 .636-1.3c.327-.442.78-.795 1.687-1.5l2.6-2.022c1.405-1.093 2.108-1.64 2.884-1.85a4 4 0 0 1 2.09 0c.776.21 1.479.757 2.884 1.85l2.6 2.022c.907.705 1.36 1.058 1.687 1.5.29.39.505.832.636 1.3.148.529.148 1.103.148 2.252v2.47c0 2.24 0 3.36-.436 4.216a4 4 0 0 1-1.748 1.748C17.96 21 16.84 21 14.6 21H9.4c-2.24 0-3.36 0-4.216-.436a4 4 0 0 1-1.748-1.748C3 17.96 3 16.84 3 14.6Z" />
    </svg>
  );
}