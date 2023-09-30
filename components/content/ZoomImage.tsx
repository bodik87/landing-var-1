"use client"
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import Image from 'next/image'
import React, { useRef } from 'react'

const ZoomImage = () => {
 const ref = useRef(null)
 const { scrollYProgress } = useScroll({
  target: ref,
  offset: ["start end", "end end"],
 })

 const scale = useSpring(scrollYProgress, {
  stiffness: 100,
  damping: 30,
  restDelta: 0.001
 });

 ///


 return (
  <motion.div ref={ref} style={{ scale }}>
   <Image
    src={"/images/1.png"}
    alt={"Zoom"}
    width={1900}
    height={1080}
    className={`object-cover mx-auto`}
    priority
    quality={100} />
  </motion.div>
 )
}

export default ZoomImage