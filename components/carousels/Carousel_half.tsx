"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperCore } from 'swiper/types';
import "swiper/css";

type Slide = {
  id: number,
  title: string,
  slideImage: string
}

type Props = {
  slides: Slide[]
}

export const Carousel_half = ({ slides }: Props) => {
  const swiperRef = useRef<SwiperCore>();
  const [currentIndex, setCurrentIndex] = useState(1)

  return (
    <section className="relative mb-5">
      <Swiper
        centeredSlides={true}
        spaceBetween={20}
        slidesPerView={2}
        allowTouchMove={false}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {slides.map((item, i) =>
          <SwiperSlide key={item.id}>
            <Image
              src={item.slideImage}
              alt={item.title}
              width={1280}
              height={512}
              className={`object-cover rounded-lg ${currentIndex - 1 === i ? "opacity-100" : "opacity-30"} transition-all`}
              priority
              quality={100}
            />
          </SwiperSlide>)}
      </Swiper>

      <div className="max-w-7xl w-full mx-auto px-3 sm:px-6 mt-6 flex justify-between items-center space-x-4">
        <span className="w-[104px]"></span>

        <span>{slides[currentIndex - 1].title}</span>

        <div className="flex space-x-4">
          <button
            className={`${currentIndex === 1 && "opacity-50 cursor-default"} h-9 w-9 flex items-center justify-center rounded-full bg-[#4D4D4D] transition-all rotate-180`}
            onClick={() => {
              if (currentIndex > 1) {
                swiperRef.current?.slidePrev()
                setCurrentIndex(prev => prev - 1)
              }
            }}
          ><Arrow />
          </button>
          <button
            className={`${currentIndex === slides.length && "opacity-50 cursor-default"} h-9 w-9 flex items-center justify-center rounded-full bg-[#4D4D4D] transition-all`}
            onClick={() => {
              if (currentIndex < slides.length) {
                swiperRef.current?.slideNext()
                setCurrentIndex(prev => prev + 1)
              }
            }}
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