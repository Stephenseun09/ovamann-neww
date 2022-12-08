import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectCard = ({
  categories,
  description,
  name,
  src,
}: {
  src: string;
  name: string;
  description: string;
  categories?: string[];
}) => {
  return (
    <div className="flex flex-col space-y-4 md:space-y-6 w-fit h-full overflow-hidden">
      <Image src={src} width={400} height={200} alt={name} className="w-full" />
      {/* project name */}
      <div className="flex flex-col grow">
        <Link
          href={`/projects/${name}`}
          className="text-xl md:text-2xl lg:text-4xl mb-2 font-semibold hover:underline"
        >
          {name}
        </Link>
        {/* project description */}
        <p className="text-base lg:text-2xl mb-4 text-black">{description}</p>
        {/* project categories */}
        <div className="flex gap-3 flex-wrap">
          {categories?.map((category, index) => (
            <Link
              href="#"
              key={index}
              className="text-sm border hover:bg-black hover:text-white border-black px-3 py-1 rounded-full h-fit transition-all ease-linear duration-100"
            >
              {category}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
