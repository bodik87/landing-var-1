import Section from "@/components/Section";
import { Carousel_full } from "@/components/carousels/Carousel_full";
import { Carousel_half } from "@/components/carousels/Carousel_half";
import Article_1 from "@/components/content/Article_1";
import Article_2 from "@/components/content/Article_2";
import { mainSliderSlides, secondarySliderSlides } from "@/data";

export default function Home() {
  return (
    <>
      <Carousel_full slides={mainSliderSlides} />

      <Article_2 />


      <Section>
        <Article_1 />
      </Section >

      <Carousel_half slides={secondarySliderSlides} />
    </>
  )
}