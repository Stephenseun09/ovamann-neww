import { memo, useState, useCallback } from "react";

const FilterByPill = ({
  label,
  className,
  onClick,
  activeTab,
}: {
  className?: string;
  onClick?: () => void;
  label?: string | number;
  activeTab?: string | number;
}) => {
  const [isActive, setIsActive] = useState(label === "All" ? true : false);
  const handleClick = useCallback(() => {
    setIsActive(!isActive);
    if (onClick) {
      onClick();
    }
  }, [isActive, onClick]);
  return (
    <button
      className={`${
        activeTab === label ? "bg-black text-white" : "bg-white text-black"
      } text-sm border hover:bg-black hover:text-white border-black px-3 py-1 rounded-full h-fit transition-all ease-linear duration-100 ${className}`}
      onClick={handleClick}
    >
      {label}
    </button>
  );
};

export default memo(FilterByPill);
