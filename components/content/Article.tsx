"use client"
import { motion } from 'framer-motion'
import React from 'react'

const pVariants = {
 initial: { opacity: 0, y: 20 },
 whileInView: { opacity: 1, y: 0 },
}

const transition = {
 duration: 0.4,
 stiffness: 100,
 damping: 30,
 type: "tween",
}

const Article = () => {
 return (
  <article className="wrapper">
   <div className="min-h-[500px] h-full px-5 md:px-10 pt-10 pb-28 bg-black/10 dark:bg-[#313131]">
    <h2 className='leading-none mt-5'>
     <span className=" text-black/50 dark:text-white/50">Текст. </span>
     Акцент на головних словах
    </h2>

    <h3 className='leading-6 mt-4 text-black/50 dark:text-white/50'>Підзаголовки для пояснення</h3>

    <div className='mt-6 grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
     <motion.p
      variants={pVariants}
      initial="initial"
      whileInView="whileInView"
      viewport={{ amount: 0.5 }}
      transition={transition}
      className='text-black/50 dark:text-[#939393]'>
      Lorem Ipsum is simply dummy text of the printing and <span className='text-accent'>typesetting industry</span>. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of <span className='text-accent'>type and scrambled it to make a type specimen book</span>.
     </motion.p>

     <motion.p
      variants={pVariants}
      initial="initial"
      whileInView="whileInView"
      viewport={{ amount: 0.5 }}
      transition={transition}
      className='text-black/50 dark:text-[#939393]'>
      It has survived not only five centuries, but also the leap into electronic typesetting, <span className='text-accent'>remaining essentially unchanged</span>. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like <span className='text-accent'>Aldus PageMaker</span> including versions of Lorem Ipsum.
     </motion.p>

     <motion.p
      variants={pVariants}
      initial="initial"
      whileInView="whileInView"
      viewport={{ amount: 0.5 }}
      transition={transition}
      className='text-black/50 dark:text-[#939393]'>
      Lorem Ipsum is simply dummy text of the printing and <span className='text-accent'>typesetting industry</span>. Lorem Ipsum, when an unknown printer took a galley of type and scrambled it to make <span className='text-accent'>a type specimen book</span>.
     </motion.p>

    </div>
   </div>
  </article >
 )
}

export default Article