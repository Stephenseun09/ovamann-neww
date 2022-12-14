import { ProjectsEntity } from "@/typings/projects";
import Image from "next/image";
import Link from "next/link";

const ProjectCard = ({
  excerpt,
  slug,
  title,
  categories,
  coverImage,
}: ProjectsEntity) => {
  return (
    <div className="flex flex-col  space-y-4 md:space-y-6  overflow-hidden">
      <Image
        src={coverImage?.url || ""}
        width={400}
        height={200}
        alt={title}
        className="w-full shadow  h-[200px] bg-slate-300 object-cover"
      />
      {/* project name */}
      <div className="flex flex-col grow">
        <Link
          href={`/projects/${slug}`}
          className="text-xl md:text-2xl  mb-2 font-semibold hover:underline"
        >
          {title}
        </Link>
        {/* project description */}
        <p className=" mb-4 text-black">{excerpt}</p>
        {/* project categories */}
        <div className="flex gap-3 flex-wrap">
          {categories?.map((category, idx) => (
            <Link
              href="/projects"
              key={idx}
              className="text-sm border hover:bg-black hover:text-white border-black px-3 py-1 rounded-full h-fit transition-all ease-linear duration-100"
            >
              {category.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
