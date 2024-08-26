import missionImg from "../../../assets/images/missionImg.png";
import Heading from "../Heading";
const MissionSection = () => {
  return (
    <section className="w-90 max-w-desktop xl:w-designFit mx-auto items-center justify-between gap-10 space-y-8 py-10 pb-[4.375rem] md:flex md:pb-[90px] md:pt-[150px]">
      <Heading
        wrapperClassName="md:w-[45%] lg:w-[55%] xl:w-[56%] mx-0 md:!text-left xl:w-1/2"
        label="Our Passion for Agriculture Nurturing Growth and Sustaining the Future"
        subtitle="Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabulary."
      />
      <div className="relative md:w-[45%] lg:w-[42%] xl:w-[40%]">
        <img src={missionImg} alt="" className="w-full" />
        <div className="text-primary absolute bottom-[-1.5rem] left-1/2 w-max -translate-x-1/2 rounded-3xl bg-white px-9 py-4 text-xl font-bold">
          Since 1976
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
