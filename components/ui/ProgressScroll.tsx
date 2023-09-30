"use client"
import { motion, useScroll, useSpring } from 'framer-motion'
import React from 'react'

const ProgressScroll = () => {
 const { scrollYProgress } = useScroll()

 const scaleX = useSpring(scrollYProgress, {
  stiffness: 100,
  damping: 30,
  restDelta: 0.001
 });

 return (
  <motion.div className="fixed bottom-0 left-0 h-1 w-full origin-left bg-gray-400 z-40" style={{ scaleX }} />
 )
}

export default ProgressScroll