import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/Atoms/ui/carousel";
import ratings from "../../../assets/images/stars.png";
import testimonialImg from "../../../assets/images/testimonialImg.png";
import Heading from "../Heading";
import TestimonialCard from "./TestimonialCard";

const testimonialContent = Array(4).fill({
  img: testimonialImg,
  ratings: ratings,
  author: "Madeline Williamson",
  role: "Forward Creative Manager",
  desc: "Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular. ",
});
const TestimonialsSection = () => {
  return (
    <section className="w-90 max-w-desktop xl:w-designFit mx-auto space-y-8 py-10 md:mt-[150px] md:py-0">
      <Heading
        wrapperClassName=""
        label="Testimonial"
        subtitle="Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular. "
      />
      <div className="">
        <Carousel className="max-w-[100vw]">
          <CarouselContent className="-ml-4">
            {testimonialContent.map((item, i) => (
              <CarouselItem key={i} className="pl-6">
                <TestimonialCard {...item} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialsSection;
