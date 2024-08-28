const Heading = ({
  label,
  className,
  subtitle,
  variant,
  wrapperClassName,
  subtitleClassName,
}: {
  label: string;
  className?: string;
  subtitle?: string;
  wrapperClassName?: string;
  variant?: "withoutSubtitle" | "white";
  subtitleClassName?: string;
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
        className={`font-montserrat text-[2.5rem] font-bold leading-[1] lg:text-[3.75rem] xl:text-[calc(72rem/16)] ${className ?? ""} ${variant === "white" ? variants[variant!] : ""}`}
      >
        {label}
      </h2>
      <p
        className={`${variant === "withoutSubtitle" ? variants["withoutSubtitle"] : ""} ${subtitleClassName} mx-auto max-w-[500px]`}
      >
        {subtitle}
      </p>
    </div>
  );
};

export default Heading;
