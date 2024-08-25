import LinkArr from "./SVGIcons/LinkArr";

type TLinkProps = {
  href: string;
  className?: string;
  label: string;
  hasIcon?: boolean;
  variant?: "primary" | "ghost";
} & React.HTMLAttributes<HTMLAnchorElement>;

const Link = ({
  href,
  className,
  label,
  hasIcon,
  variant,
  ...props
}: TLinkProps) => {
  const variants = {
    primary: "text-white bg-primary",
    ghost: "border border-primary text-primary",
  };

  return (
    <a
      {...props}
      href={href}
      className={`flex items-center justify-center gap-3 rounded-lg px-8 py-2 font-semibold capitalize lg:px-[39px] lg:py-[13px] lg:text-xl ${variants[variant!]} ${className}`}
    >
      <span className="">{label}</span>
      {hasIcon ? <LinkArr /> : null}
    </a>
  );
};

export default Link;
