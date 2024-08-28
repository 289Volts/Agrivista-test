import cta from "../../../assets/images/ctaImg.png";
import Link from "../../Atoms/Link";
import Heading from "../Heading";

const CtaSection = () => {
  return (
    <section className="relative mb-[4.375rem] py-10 after:absolute after:inset-0 after:z-[1] after:bg-[#1E1E1E99] md:py-14 lg:py-[8.75rem]">
      <img
        src={cta}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="w-90 max-w-desktop xl:w-designFit relative z-[2] mx-auto flex-col items-center justify-between gap-10 space-y-8 md:flex md:space-y-0 lg:gap-20">
        <Heading
          label="Sustainable Farming Meets Technology: Building a Greener Future"
          variant="withoutSubtitle"
          className="max-w-[400px] text-white md:text-left lg:max-w-[600px] xl:max-w-[983px]"
          wrapperClassName="ml-0"
        />
        <div className="flex w-full justify-center gap-6 md:justify-start md:gap-10">
          <Link label="learn more" href="/#" variant="primary" />
          <Link label="contact us" href="/#" variant="ghostWhite" />
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
