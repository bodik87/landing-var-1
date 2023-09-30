import Section from "@/components/Section";
import { Carousel_full } from "@/components/carousels/Carousel_full";
import { Carousel_half } from "@/components/carousels/Carousel_half";
import Article from "@/components/content/Article";
import ImageSection from "@/components/content/ImageSection";
import ZoomImage from "@/components/content/ZoomImage";
import { mainSliderSlides, secondarySliderSlides } from "@/data";

export default function Home() {
  return (
    <>
      <Carousel_full slides={mainSliderSlides} />

      <ImageSection />


      <Section>
        <Article />
      </Section >

      <Carousel_half slides={secondarySliderSlides} />
      <ZoomImage />
    </>
  )
}