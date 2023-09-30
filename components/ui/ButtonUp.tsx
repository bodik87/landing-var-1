"use client";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

const isBrowser = () => typeof window !== "undefined"; //The approach recommended by Next.js
function scrollToTop() {
  if (!isBrowser()) return;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

export default function ButtonUp() {
  const [show, setShow] = useState(false);
  const { scrollY }: any = useScroll();

  useMotionValueEvent(scrollY, "change", () => {
    if (scrollY.current > 250) {
      setShow(true);
    } else {
      setShow(false);
    }
  });

  return (
    <>
      <AnimatePresence initial={false}>
        {show && (
          <motion.button
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="w-12 h-12 fixed bottom-4 right-4 z-10 flex items-center justify-center bg-white/10 border-2 border-gray-300/50 rounded-full backdrop-blur-md"
            onClick={scrollToTop}
          >
            <UpArrowIcon />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}

export function UpArrowIcon({ active = false }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
      <path
        className={`${active
          ? "stroke-app-black dark:stroke-white"
          : "stroke-app-black dark:stroke-white"
          }`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 6v12m0-12-5 5m5-5 5 5"
      />
    </svg>
  );
}