type TTestimonialCardProps = {
  img: string;
  ratings: string;
  author: string;
  role: string;
  desc: string;
};
const TestimonialCard = ({
  img,
  ratings,
  author,
  role,
  desc,
}: TTestimonialCardProps) => {
  return (
    <div className="bg-primary items-center gap-10 rounded-3xl p-10 md:flex xl:px-[7.25rem] xl:py-[6.375rem]">
      <div className="mb-7 w-full md:mb-0 md:w-1/2 md:max-w-[231px] lg:w-full">
        <img src={img} alt="" className="w-full" />
      </div>
      <div className="space-y-4 text-center text-white md:w-1/2 md:space-y-6 md:text-left lg:w-full">
        <img src={ratings} alt="" className="mx-auto md:ml-0" />
        <h3 className="font-montserrat text-[2rem] font-semibold">{author}</h3>
        <p className="font-light">{role}</p>
        <p className="font-raleway text-xl">{desc}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
