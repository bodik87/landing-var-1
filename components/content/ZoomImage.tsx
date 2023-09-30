"use client"
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import React, { useRef } from 'react'

const ZoomImage = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "0.3 0.65"],
    smooth: 1
  })

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [1.6, 1])

  return (
    <div className='overflow-hidden'>
      <motion.div ref={ref} style={{ scale: scaleProgress }} className='flex items-center justify-center origin-top text-[min(20vw,400px)]'>
        <Image
          src={"/images/img.jpg"}
          alt={"Zoom"}
          width={1900}
          height={1080}
          className={`object-cover mx-auto`}
          priority
          quality={100} />
      </motion.div>
    </div>
  )
}

export default ZoomImage