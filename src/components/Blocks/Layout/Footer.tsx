import Behance from "@/components/Atoms/SVGIcons/Behance";
import Dribble from "@/components/Atoms/SVGIcons/Dribble";
import Facebook from "@/components/Atoms/SVGIcons/Facebook";
import Instagram from "@/components/Atoms/SVGIcons/Instagram";

const footerLinks = {
  pages: ["home", "about", "products", "blog"],
  about: ["testimonials", "our service", "contact us", "benefit"],
};
const Footer = () => {
  return (
    <footer className="bg-primary mt-10 p-6 py-10 md:mt-[calc(150rem/16)] md:p-16 lg:px-[calc(103rem/16)] lg:py-[calc(170rem/16)] xl:pr-[calc(246rem/16)]">
      <div className="gap-[calc(157rem/16)] space-y-12 md:flex md:justify-between md:space-y-0">
        <div className="space-y-10 text-center text-white md:max-w-[calc(290rem/16)] md:space-y-[3.75rem] md:text-left lg:max-w-[calc(390rem/16)]">
          <div className="space-y-6">
            <a href="#" className="font-montserrat text-4xl font-bold">
              AgriVista Farms
            </a>
            <p className="font-light">
              Li Europan lingues es membres del sam familie. Lor separat
              existentie{" "}
            </p>
          </div>
          <div className="flex justify-center gap-5 md:justify-start">
            <Instagram />
            <Dribble />
            <Facebook />
            <Behance />
          </div>
        </div>
        <div className="space-y-8 text-center capitalize text-white md:flex md:gap-12 md:space-y-0 md:text-left lg:gap-[calc(107rem/16)] xl:gap-[calc(157rem/16)]">
          <nav className="flex flex-col gap-6">
            <h3 className="font-montserrat text-[1.75rem] font-bold">
              {Object.keys(footerLinks)[0]}
            </h3>
            {footerLinks.pages.map((link) => (
              <span className="text-xl" key={link}>
                {link}
              </span>
            ))}
          </nav>
          <nav className="flex flex-col gap-6">
            <h3 className="font-montserrat text-[1.75rem] font-bold">
              {Object.keys(footerLinks)[1]}
            </h3>
            {footerLinks.about.map((link) => (
              <span className="text-xl" key={link}>
                {link}
              </span>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
