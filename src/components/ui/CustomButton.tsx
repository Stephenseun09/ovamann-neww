import React from "react";
import ArrowRightIcon from "./custom-icons/ArrowRight";

const CustomButton = ({
  children,
  className,
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  onClick: () => void;
}) => {
  return (
    <button
      className={` group flex h-12 items-center justify-center rounded-lg px-6 shadow-lg ${className}`}
      onClick={onClick}
    >
      {children}
      <span>
        <ArrowRightIcon className=" ml-2 h-3.5 w-0 transition-all duration-150 ease-linear group-hover:w-3.5 group-focus:w-3.5 " />
      </span>
    </button>
  );
};

export default CustomButton;
