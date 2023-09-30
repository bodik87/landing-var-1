"use client";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperCore } from 'swiper/types';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

type Slide = {
  id: number,
  title: string,
  slideImage: string
}

type Props = {
  slides: Slide[]
}

export const Carousel_full = ({ slides }: Props) => {
  const swiperRef = useRef<SwiperCore>();
  return (
    <section className="wrapper relative">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        autoplay={{ disableOnInteraction: false, delay: 3000 }}
        pagination={{ clickable: true }}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        className="rounded-lg"
      >
        {slides.map(item =>
          <SwiperSlide key={item.id}>
            <Link href={`/promo/${item.id}`}>
              <Image
                src={item.slideImage}
                alt={item.title}
                width={1280}
                height={512}
                className="object-cover rounded-lg"
                priority
                quality={100}
              />
            </Link>
          </SwiperSlide>)}
      </Swiper>

      <button
        onClick={() => swiperRef.current?.slidePrev()}
        className="hidden sm:flex absolute top-1/2 -translate-y-1/2 left-10 w-9 h-9 rounded-full overflow-hidden bg-white/20 z-10 items-center justify-center hover:scale-105 transition-all rotate-180"
      >
        <Arrow />
      </button>
      <button
        onClick={() => swiperRef.current?.slideNext()}
        className="hidden sm:flex absolute top-1/2 -translate-y-1/2 right-10 w-9 h-9 rounded-full overflow-hidden bg-white/20 z-10 items-center justify-center hover:scale-105 transition-all"
      >
        <Arrow />
      </button>
    </section>
  );
};

function Arrow() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 36 36">
      <path fill="white"
        d="M23.5587,16.916 C24.1447,17.4999987 24.1467,18.446 23.5647,19.034 L16.6077,26.056 C16.3147,26.352 15.9287,26.4999987 15.5427,26.4999987 C15.1607,26.4999987 14.7787,26.355 14.4867,26.065 C13.8977,25.482 13.8947,24.533 14.4777,23.944 L20.3818,17.984 L14.4408,12.062 C13.8548,11.478 13.8528,10.5279 14.4378,9.941 C15.0218,9.354 15.9738,9.353 16.5588,9.938 L23.5588,16.916 L23.5587,16.916 Z">
      </path>
    </svg>
  );
}