"use client"
import React from 'react'
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

export const variants = {
 hidden: { opacity: 0, y: "100%" },
 visible: { opacity: 1, y: 0 },
};

const Promo = () => {
 const { scrollY } = useScroll();
 const moveRight = useTransform(scrollY, [0, 100], [0, 100], {
  clamp: false,
 });
 const moveLeft = useTransform(scrollY, [0, 100], [100, 0], { clamp: false });

 const springLeft = useSpring(moveLeft, {
  stiffness: 100,
  damping: 30,
 });

 const springRight = useSpring(moveRight, {
  stiffness: 100,
  damping: 30,
 });

 return (
  <div className="overflow-hidden">
   <motion.div
    style={{ translateX: springLeft }}
   >
    <motion.div
     initial={"hidden"}
     animate={"visible"}
     variants={variants}
     transition={{
      delay: 0.5,
      duration: 0.5,
      type: "tween",
     }}
    >
     Наполегливість
    </motion.div>
   </motion.div>



   <motion.div
    style={{ translateX: springRight }}
    className="overflow-hidden"
   >
    <motion.div
     initial={"hidden"}
     animate={"visible"}
     variants={variants}
     transition={{
      delay: 0.8,
      duration: 0.5,
      type: "tween",
     }}
    >
     Відданість
    </motion.div>
   </motion.div>
  </div>
 )
}

export default Promo