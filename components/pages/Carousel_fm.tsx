"use client"
import { motion, MotionConfig } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const images = [
  "/secondarySlider/1.jpg",
  "/secondarySlider/1.jpg",
  "/secondarySlider/1.jpg",
];

export default function Carousel_fm() {
  const [index, setIndex] = useState(0);

  return (
    <MotionConfig transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}>
      <div className="w-full overflow-hidden">
        <div className="wrapper">
          <motion.div className="absolute flex w-full gap-2">
            {/* <motion.div animate={{ x: `-${index * 768}px` }} className="flex gap-2 w-full"> */}
            {images.map((image, i) => (
              <Image
                key={i}
                src={image}
                alt={`img`}
                width={1280}
                height={768}
                className="object-cover rounded-lg md:first:ml-[calc(50%-768px/2)]"
                priority
                quality={100}
              />
            ))}
          </motion.div>

          <div className="flex justify-end">

            <div className="mt-6 flex space-x-4">
              <button
                className={`${index > 0 ? "" : "opacity-50"} h-9 w-9 flex items-center justify-center rounded-full bg-[#4D4D4D] transition-all rotate-180`}
                onClick={() => index > 0 && setIndex(index - 1)}
              ><ArrowRight />
              </button>
              <button
                className={`${index + 1 < images.length ? "" : "opacity-50"} h-9 w-9 flex items-center justify-center rounded-full bg-[#4D4D4D] transition-all`}
                onClick={() => index + 1 < images.length && setIndex(index + 1)}
              ><ArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </MotionConfig>
  );
}

import React from 'react'

export function ArrowRight() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36"><path fill="white" d="M23.5587,16.916 C24.1447,17.4999987 24.1467,18.446 23.5647,19.034 L16.6077,26.056 C16.3147,26.352 15.9287,26.4999987 15.5427,26.4999987 C15.1607,26.4999987 14.7787,26.355 14.4867,26.065 C13.8977,25.482 13.8947,24.533 14.4777,23.944 L20.3818,17.984 L14.4408,12.062 C13.8548,11.478 13.8528,10.5279 14.4378,9.941 C15.0218,9.354 15.9738,9.353 16.5588,9.938 L23.5588,16.916 L23.5587,16.916 Z"></path></svg>
  )
}
