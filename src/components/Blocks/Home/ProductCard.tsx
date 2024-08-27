const ProductCard = ({
  label,
  image,
  desc,
}: {
  label: string;
  image: string;
  desc: string;
}) => {
  return (
    <div className="flex flex-col items-center rounded-3xl bg-white px-11 py-[calc(54rem/16)] text-center">
      <img src={image} loading="lazy" alt="" className="w-full" />
      <h3 className="font-montserrat text-primary mb-6 mt-10 text-2xl">
        {label}
      </h3>
      <p className="text-textColor">{desc}</p>
    </div>
  );
};

export default ProductCard;
