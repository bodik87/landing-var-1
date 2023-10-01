"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperCore } from 'swiper/types';
import "swiper/css";

type Slide = {
  id: number,
  title: string,
  description: string,
  image: string
}

type Props = {
  slides: Slide[]
}

export const Swiper_products = ({ slides }: Props) => {
  const swiperRef = useRef<SwiperCore>();
  return (
    <section className="mb-5 wrapper">
      <Swiper
        centeredSlides={true}
        spaceBetween={10}
        slidesPerView={1.2}
        breakpoints={{
          480: {
            slidesPerView: 1.8,
            spaceBetween: 15,
            centeredSlides: false
          },
          768: {
            slidesPerView: 2.5,
            spaceBetween: 15,
            centeredSlides: false
          },
          1200: {
            slidesPerView: 3.5,
            spaceBetween: 20,
            centeredSlides: false
          },
        }}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {slides.map((item) =>
          <SwiperSlide key={item.id}>
            <div className="flex flex-col cursor-pointer bg-white text-black p-5 rounded-2xl">
              <Image
                src={item.image}
                alt={item.title}
                width={240}
                height={240}
                className={`object-cover mx-auto`}
                priority
                quality={100}
              />
              <h3 className="mt-6">{item.title}</h3>
              <p>{item.description}</p>
              <p className="mt-4 text-blue-500 cursor-pointer">{`Купити >`}</p>
            </div>
          </SwiperSlide>)}
      </Swiper>

      <div className="max-w-7xl w-full mx-auto px-3 sm:px-6 mt-6 flex justify-between items-center space-x-4">
        <span className="w-[104px]"></span>

        <div className="flex space-x-4">
          <button
            className={`h-9 w-9 flex items-center justify-center rounded-full bg-[#4D4D4D] transition-all rotate-180`}
            onClick={() => swiperRef.current?.slidePrev()}
          ><Arrow />
          </button>
          <button
            className={`h-9 w-9 flex items-center justify-center rounded-full bg-[#4D4D4D] transition-all`}
            onClick={() => swiperRef.current?.slideNext()}
          ><Arrow />
          </button>
        </div>
      </div>
    </section>
  );
};

export function Arrow() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36"><path fill="white" d="M23.5587,16.916 C24.1447,17.4999987 24.1467,18.446 23.5647,19.034 L16.6077,26.056 C16.3147,26.352 15.9287,26.4999987 15.5427,26.4999987 C15.1607,26.4999987 14.7787,26.355 14.4867,26.065 C13.8977,25.482 13.8947,24.533 14.4777,23.944 L20.3818,17.984 L14.4408,12.062 C13.8548,11.478 13.8528,10.5279 14.4378,9.941 C15.0218,9.354 15.9738,9.353 16.5588,9.938 L23.5588,16.916 L23.5587,16.916 Z"></path></svg>
  );
}