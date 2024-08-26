import React from "react";

const ServicesCard = ({
  label,
  icon,
}: {
  label: string;
  icon: React.JSX.Element;
}) => {
  return (
    <div className="flex flex-col items-center space-y-7 rounded-3xl bg-white px-[2rem] py-[2.875rem] text-center">
      {icon}
      <span className="font-montserrat text-primary text-2xl">{label}</span>
    </div>
  );
};

export default ServicesCard;
