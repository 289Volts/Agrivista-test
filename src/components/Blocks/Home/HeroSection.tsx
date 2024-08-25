import heroBg from "../../../assets/images/heroImg.png";
import Link from "../../Atoms/Link";

const HeroSection = () => {
  return (
    <section className="relative mt-[4.75rem] flex min-h-[calc(100vh-4.75rem)] items-center justify-center after:absolute after:inset-0 after:z-[1] after:bg-black/40 lg:mt-[9.25rem] lg:min-h-[calc(100vh-9.25rem)]">
      <img
        src={heroBg}
        alt=""
        className="absolute inset-0 z-[1] h-full w-full object-cover"
      />
      <div className="w-90 relative z-[2] mx-auto max-w-[calc(600rem/16)] space-y-8 text-center md:space-y-20 lg:max-w-[calc(800rem/16)] xl:max-w-[calc(1113rem/16)]">
        <div className="space-y-4 text-white md:space-y-6">
          {" "}
          <h1 className="font-montserrat text-4xl font-bold md:text-5xl lg:text-6xl xl:text-[5.625rem]">
            The Role of Technology in Revolutionizing Agriculture
          </h1>
          <p className="mx-auto max-w-[calc(540rem/16)]">
            Li Europan lingues es membres del sam familie. Lor separat
            existentie es un myth. Por scientie, musica, sport etc, litot Europa
            usa li sam vocabular.
          </p>
        </div>
        <div className="flex-co flex justify-center gap-5 md:gap-[3.1875rem]">
          <Link
            className="md:w-fit"
            label="get started"
            href="/"
            variant="primary"
          />
          <Link
            className="md:w-fit"
            label="learn more"
            href="/"
            variant="ghostWhite"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
