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
        className="hidden sm:flex absolute top-1/2 -translate-y-1/2 left-10 w-8 h-8 rounded-full bg-white/30 z-10 items-center justify-center hover:scale-105 transition-all"
      >
        <ArrowIcon />
      </button>
      <button
        onClick={() => swiperRef.current?.slideNext()}
        className="hidden sm:flex absolute top-1/2 -translate-y-1/2 rotate-180 right-10 w-8 h-8 rounded-full bg-white/30 z-10 items-center justify-center hover:scale-105 transition-all"
      >
        <ArrowIcon />
      </button>
    </section>
  );
};

export function ArrowIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15 6L9 12L15 18"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}