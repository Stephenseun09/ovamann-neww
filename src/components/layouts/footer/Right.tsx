import { footerData } from "@/constants";
import Link from "next/link";

interface Obj {
  [key: string]: any;
}

interface Props {
  items: Obj[];
  heading: string;
}

const Lists = ({ items, heading }: Props) => {
  return (
    <div className="">
      <h5 className="font-bold mb-3 text-white text-lg sm:text-[18px] md:text-xl">
        {heading}
      </h5>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li
            key={index}
            className="w-fit text-sm text-white transition-all duration-100 ease-linear hover:translate-x-1 md:text-[15px] lg:text-base"
          >
            <Link href="#">{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Right = () => {
  const { footerLists } = footerData;
  return (
    <div className="flex flex-col md:flex-row gap-6 lg:gap-10  lg:justify-evenly  grow flex-wrap lg:flex-nowrap">
      {footerLists.map((list, index) => (
        <Lists key={index} items={list.items} heading={list.heading} />
      ))}
    </div>
  );
};

export default Right;
