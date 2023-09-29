"use client"
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, cubicBezier, motion, useInView } from "framer-motion";
import Modal from "./Modal";

const easing = cubicBezier(0.35, 0.17, 0.3, 1);

const overlayVariants = {
  initial: { opacity: 0 },
  animate: {
    scale: [0.5, 1.5, 0],
    opacity: [0.5, 1, 0],
    transition: {
      ease: easing,
      duration: 0.8,
    },
  },
};

const iconVariants = {
  initial: { opacity: 0 },
  animate: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: { delay: 0.5, ease: easing },
  },
  exit: {
    scale: [1, 0],
    opacity: [1, 0],
    transition: { ease: easing },
  },
};

const textVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { delay: 1 },
  },
  exit: { opacity: 0 },
};

type Props = {
  children: React.ReactNode,
  text?: string,
  maxWidth?: number
}

export default function Section({ children, text = "Додатково", maxWidth = 185 }: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5 });

  const [modal, setModal] = useState(false);

  useEffect(() => {
    if (modal) window.document.body.style.overflow = "hidden";
    else window.document.body.style.overflow = "auto";
  }, [modal]);

  return (
    <section
      ref={ref}
      className="min-h-screen relative flex justify-center items-center"
    >
      <Modal modal={modal} setModal={setModal}>
        Hello
      </Modal>

      {children}
      <div className="absolute h-full py-5 flex items-end z-30">
        <AnimatePresence initial={false}>
          {isInView && (
            <>
              <motion.div
                variants={overlayVariants}
                initial={{ opacity: 0 }}
                animate={"animate"}
                className="h-14 rounded-full bg-blue-500 sticky left-1/2 bottom-3 shadow-xl cursor-pointer overflow-hidden"
              />
              <motion.div
                onClick={() => setModal(true)}
                initial={"initial"}
                animate={{
                  scale: [0, 1, 1, 1],
                  opacity: [0.5, 1, 1, 1],
                  width: [56, 56, 56, maxWidth],
                  transition: {
                    ease: easing,
                    duration: 1,
                    times: [0, 0.2, 0.8, 1],
                  },
                }}
                exit={{
                  scale: [1, 1, 0],
                  opacity: [1, 1, 0],
                  width: [maxWidth, 56, 56],
                  transition: {
                    ease: easing,
                    delay: 0.2,
                    duration: 0.5,
                  },
                }}
                className="h-14 w-auto rounded-full bg-black/10 backdrop-blur-xl sticky bottom-3 shadow-xl cursor-pointer overflow-hidden z-50"
              >
                <motion.span
                  id="text"
                  variants={textVariants}
                  initial={"initial"}
                  animate={"animate"}
                  exit={"exit"}
                  className="absolute left-5 top-1/2 -translate-y-1/2 font-semibold text-xl"
                >
                  {text}
                </motion.span>

                <motion.div
                  variants={iconVariants}
                  initial={"initial"}
                  animate={"animate"}
                  exit={"exit"}
                  className="absolute right-2 top-2 h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center"
                >
                  <span className="w-4 h-[3px] rounded-md bg-blue-100"></span>
                  <span className="absolute rotate-90 w-4 h-[3px] rounded-md bg-blue-100"></span>
                </motion.div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
