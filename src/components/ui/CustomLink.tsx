import Link from "next/link";
import ArrowRightIcon from "./custom-icons/ArrowRight";

const CustomLink = ({
  children,
  className,
  style,
  href = "#",
  target = "_self",
  ...rest
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  href?: string;
  target?: string;
}) => {
  return (
    <Link
      href={href}
      className={` group flex h-12 items-center justify-center rounded-lg px-6 shadow-lg ${className}`}
      target={target}
      {...rest}
    >
      {children}
      <span>
        <ArrowRightIcon className=" ml-2 h-3.5 w-0 transition-all duration-150 ease-linear group-hover:w-3.5 group-focus:w-3.5 " />
      </span>
    </Link>
  );
};

export default CustomLink;
