import Section from "@/components/Section";
import { Carousel_full } from "@/components/carousels/Carousel_full";
import { Carousel_half } from "@/components/carousels/Carousel_half";
import Promo from "@/components/pages/Promo";
import { mainSliderSlides, secondarySliderSlides } from "@/data";

export default function Home() {
  return (
    <>
      <Carousel_full slides={mainSliderSlides} />
      <Carousel_half slides={secondarySliderSlides} />
      <Promo />
      <Section>Hellp</Section>

      <div className="min-h-screen"></div>
    </>
  )
}