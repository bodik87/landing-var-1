import Section from "@/components/Section";
import { Carousel_full } from "@/components/carousels/Carousel_full";
import { Carousel_half } from "@/components/carousels/Carousel_half";
import { mainSliderSlides, secondarySliderSlides } from "@/data";

export default function Home() {
  return (
    <>
      <Carousel_full slides={mainSliderSlides} />
      <Carousel_half slides={secondarySliderSlides} />
      <Section>
        <article className="wrapper">
          <div className="min-h-[500px] h-full p-5 bg-black/10 dark:bg-[#313131]">
            <h2>
              <span className="opacity-40">23.</span>
              Hello
            </h2>

            <p>Content</p>
          </div>
        </article >
      </Section >
    </>
  )
}