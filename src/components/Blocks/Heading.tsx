const Heading = ({
  label,
  className,
  subtitle,
  variant,
  wrapperClassName,
}: {
  label: string;
  className?: string;
  subtitle?: string;
  wrapperClassName?: string;
  variant?: "withoutSubtitle" | "white";
}) => {
  const variants = {
    withoutSubtitle: "hidden",
    white: "!text-white",
  };
  return (
    <div
      className={`text-primary mx-auto max-w-[600px] space-y-4 text-pretty text-center md:max-w-max md:space-y-6 ${wrapperClassName}`}
    >
      <h2
        className={`font-montserrat text-[1.5rem] font-bold leading-[1] md:text-[2.25rem] lg:text-[3.75rem] xl:text-[calc(72rem/16)] ${className} ${variant === "white" ? variants[variant!] : ""}`}
      >
        {label}
      </h2>
      <p
        className={`${variants[variant!] === "withoutSubtitle" ? variants["withoutSubtitle"] : ""} max-w-[500px]`}
      >
        {subtitle}
      </p>
    </div>
  );
};

export default Heading;
