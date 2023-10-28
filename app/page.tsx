import Section from "@/components/Section";
import { Swiper_full } from "@/components/carousels/Swiper_full";
import { Swiper_half } from "@/components/carousels/Swiper_half";
import { Swiper_products } from "@/components/carousels/Swiper_products";
import Article from "@/components/content/Article";
import ImageSection from "@/components/content/ImageSection";
import ZoomImage from "@/components/content/ZoomImage";
import TabsElement from "@/components/ui/TabsElement";
import { mainSliderSlides, products, secondarySliderSlides } from "@/data";

export default function Home() {
  return (
    <>
      <Swiper_full slides={mainSliderSlides} />
      <ImageSection />
      <Section><Article /></Section >
      <Swiper_half slides={secondarySliderSlides} />
      <ZoomImage />
      <Swiper_products slides={products} />
      <TabsElement />
      <div className="wrapper flex flex-col">
        <button
          className={`w-24 h-10 rounded-lg bg-white text-yellow-600 transition-colors border-2 border-black relative font-medium overflow-hidden before:content-["Hover"] before:absolute before:top-1/2 before:-translate-y-1/2 before:left-1/2 before:-translate-x-1/2 before:z-20 hover:before:text-black after:transition-all after:absolute after:bg-yellow-400 after:w-full after:h-full after:top-0 after:left-0 after:z-10 after:-translate-y-full hover:after:translate-y-0`}
        />
      </div>
    </>
  )
}