import { Carousel } from "@/components/Carousel";
import Section from "@/components/Section";
import { mainSliderSlides } from "@/data";

export default function Home() {
  return (
    <>
      <Carousel slides={mainSliderSlides} />
      <Section>Hellp</Section>

      <div className="min-h-screen"></div>
    </>
  )
}