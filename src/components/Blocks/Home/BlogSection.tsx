import analytics from "../../../assets/images/analytics.png";
import farms from "../../../assets/images/farms.png";
import innovations from "../../../assets/images/innovations.png";
import Heading from "../Heading";
import BlogCard from "./BlogCard";

const blogContent = [
  {
    title: "Innovations for a Greener Future",
    desc: "Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica.",
    img: innovations,
  },
  {
    title: "The Power of Agricultural Analytics",
    desc: "Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica.",
    img: analytics,
  },
  {
    title: "Cultivating Sustainable and Resilient Farms",
    desc: "Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica.",
    img: farms,
  },
];

const BlogSection = () => {
  return (
    <section className="w-90 max-w-desktop xl:w-designFit mx-auto space-y-12 py-10 md:mt-[150px] md:space-y-20 md:py-0">
      <Heading
        wrapperClassName=""
        label="Our Blog"
        subtitle="Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular. "
      />
      <div className="flex flex-col gap-10 md:flex-row">
        {blogContent.map((item, i) => (
          <BlogCard key={i} {...item} />
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
