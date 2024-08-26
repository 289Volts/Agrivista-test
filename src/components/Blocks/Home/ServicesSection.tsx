import ContentStrategy from "../../Atoms/SVGIcons/ContentStrategy";
import SocialMediaManagement from "../../Atoms/SVGIcons/SMM";
import WebContent from "../../Atoms/SVGIcons/WebContent";
import Writing from "../../Atoms/SVGIcons/Writing";
import Heading from "../Heading";
import ServicesCard from "./ServicesCard";
const ServicesSection = () => {
  const services = [
    {
      name: "Blog and Article Writing",
      icon: Writing,
    },
    {
      name: "Website Content",
      icon: WebContent,
    },
    {
      name: "Content Strategy and Consulting",
      icon: ContentStrategy,
    },
    {
      name: "Social Media Management",
      icon: SocialMediaManagement,
    },
  ];
  return (
    <section className="w-90 max-w-desktop xl:w-designFit mx-auto space-y-8 py-10 md:py-10 md:pt-[90px]">
      <Heading
        wrapperClassName=""
        label="Our service"
        subtitle="Li Europan lingues es membres del sam familie. Lor separat existentie es un myth Por scientie, musica."
      />
      <div className="grid gap-5 md:grid-cols-2 md:gap-7 xl:grid-cols-4 xl:gap-10">
        {services.map((service) => (
          <ServicesCard
            key={service.name}
            label={service.name}
            icon={<service.icon />}
          />
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
