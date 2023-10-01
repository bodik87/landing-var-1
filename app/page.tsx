import Section from "@/components/Section";
import { Swiper_full } from "@/components/carousels/Swiper_full";
import { Swiper_half } from "@/components/carousels/Swiper_half";
import Article from "@/components/content/Article";
import ImageSection from "@/components/content/ImageSection";
import ZoomImage from "@/components/content/ZoomImage";
import { mainSliderSlides, secondarySliderSlides } from "@/data";

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
    </>
  )
}