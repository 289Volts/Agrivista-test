import cabbage from "../../../assets/images/cabbage.png";
import pumpkin from "../../../assets/images/pumpkin.png";
import rice from "../../../assets/images/rice.png";
import wheat from "../../../assets/images/wheat.png";
import Heading from "../Heading";
import ProductCard from "./ProductCard";
const ProductsSection = () => {
  const products = [
    {
      name: "Rice",
      image: rice,
      desc: "Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. ",
    },
    {
      name: "Wheat",
      image: wheat,
      desc: "Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. ",
    },
    {
      name: "Pumpkin",
      image: pumpkin,
      desc: "Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. ",
    },
    {
      name: "Cabbage",
      image: cabbage,
      desc: "Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. ",
    },
  ];
  return (
    <section className="w-90 max-w-desktop xl:w-designFit mx-auto py-10 md:py-10 md:pt-[90px]">
      <Heading
        wrapperClassName=""
        label="Our Featured Product"
        subtitle="Li Europan lingues es membres del sam familie. Lor separat existentie es un myth Por scientie, musica."
      />
      <div className="mb-10 mt-8 grid gap-5 md:grid-cols-2 md:gap-7 lg:mb-20 xl:grid-cols-4 xl:gap-10">
        {products.map((product) => (
          <ProductCard
            key={product.name}
            label={product.name}
            image={product.image}
            desc={product.desc}
          />
        ))}
      </div>
      <div className="text-center">
        <a href="/#" className="text-xl font-bold">
          See all products
        </a>
      </div>
    </section>
  );
};

export default ProductsSection;
