import { Carousel } from "@/components/Carousel";
import Section from "@/components/Section";
import { Carousel_half } from "@/components/pages/Carousel_half";
import Promo from "@/components/pages/Promo";
import { mainSliderSlides, secondarySliderSlides } from "@/data";

export default function Home() {
  return (
    <>
      <Carousel slides={mainSliderSlides} />
      <Carousel_half slides={secondarySliderSlides} />
      <Promo />
      <Section>Hellp</Section>

      <div className="min-h-screen"></div>
    </>
  )
}