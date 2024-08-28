import Link from "../../Atoms/Link";
import CheckMark from "../../Atoms/SVGIcons/CheckMark";
import Cube from "../../Atoms/SVGIcons/Cube";
import Group from "../../Atoms/SVGIcons/Group";
import Star from "../../Atoms/SVGIcons/Star";
import Heading from "../Heading";

const benefits = [
  {
    boldText: "15+",
    normalText: "Years Of Experience",
    icon: <Star className="h-full w-full" />,
  },
  {
    boldText: "40+",
    normalText: "Products",
    icon: <Cube className="h-full w-full" />,
  },
  {
    boldText: "2,458+",
    normalText: "Satisfied Clients",
    icon: <CheckMark className="h-full w-full" />,
  },
  {
    boldText: "20",
    normalText: "Local Team Members",
    icon: <Group className="h-full w-full" />,
  },
];
const BenefitsSection = () => {
  return (
    <section className="w-90 max-w-desktop xl:w-designFit mx-auto items-center justify-between gap-10 space-y-8 py-10 md:mt-[150px] md:flex md:space-y-0 md:py-0 lg:gap-20">
      <div className="md:w-[40%] md:space-y-10 lg:w-[45%] lg:space-y-20 xl:w-1/2">
        <Heading
          wrapperClassName=" !mx-0 md:!text-left"
          label="The Benefits of Choosing Our Expertise"
          subtitle="Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabulary."
          subtitleClassName="md:ml-0"
        />
        <Link
          label="learn more"
          href="/"
          variant="primary"
          hasIcon
          className="hidden w-fit md:flex"
        />
      </div>
      <div className="bg-primary relative space-y-10 rounded-[1.25rem] px-8 py-20 md:w-[55%] lg:w-auto lg:flex-1 lg:px-8 xl:px-10 2xl:px-20">
        {benefits.map((benefit, i) => (
          <div
            key={i}
            className="flex flex-col items-center gap-3 md:flex-row md:gap-8 lg:gap-14"
          >
            <div className="relative flex aspect-square h-[80px] items-center justify-center rounded-full bg-[#00000066] p-4 lg:h-[100px] lg:p-6 xl:h-[125px] xl:p-8">
              {benefit.icon}
            </div>
            <div className="font-montserrat flex flex-col gap-4 text-center md:gap-6 md:text-start">
              <span className="text-2xl font-bold text-white md:text-3xl lg:text-5xl">
                {benefit.boldText}
              </span>
              <span className="text-white md:text-xl">
                {benefit.normalText}
              </span>
            </div>
          </div>
        ))}
      </div>
      <Link
        label="learn more"
        href="/"
        variant="primary"
        hasIcon
        className="mx-auto w-fit md:hidden"
      />
    </section>
  );
};

export default BenefitsSection;
