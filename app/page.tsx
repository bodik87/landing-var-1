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


      <Section>
        <Article />
      </Section >

      <Swiper_half slides={secondarySliderSlides} />

      <ZoomImage />

      <Swiper_products slides={products} />

      <TabsElement />
    </>
  )
}