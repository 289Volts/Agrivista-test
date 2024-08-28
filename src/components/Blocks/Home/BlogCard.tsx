import Link from "@/components/Atoms/Link";

type TBlogCardProps = {
  title: string;
  desc: string;
  img: string;
};

const BlogCard = ({ title, desc, img }: TBlogCardProps) => {
  return (
    <div className="flex flex-col items-center">
      <div className="">
        <img src={img} alt="" className="aspect-[3/3.5]" />
      </div>
      <div className="text-primary mt-10 grid h-full grid-rows-[auto_1fr_auto] text-center md:text-left">
        <h3 className="text-2xl font-bold md:text-[2rem] lg:pr-8">{title}</h3>
        <p className="text-textColor my-6 font-light md:text-xl">{desc}</p>
        <Link label="read more" className="!block !p-0 underline" href="#" />
      </div>
    </div>
  );
};

export default BlogCard;
