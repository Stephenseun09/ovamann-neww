import CustomLink from "@/components/ui/CustomLink";
import ProjectCard from "@/components/ui/ProjectCard";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { projectData } from "@/constants/projectData";
import Link from "next/link";

const Projects = () => {
  return (
    <section
    //  className="bg-[#f5f5f5]"
    >
      <SectionWrapper>
        <div className=" max-w-full ">
          <div className="flex gap-4 justify-between items-center mb-4">
            <h2 className="font-bold text-black text-3xl sm:text-4xl md:text-5xl lg:text-[84px] uppercase md:max-w-[50%]">
              Our Projects
            </h2>
            <Link
              className=" text-primary-red underline lg:text-2xl"
              href="/projects"
            >
              View all
            </Link>
          </div>
          {/* <Cards /> */}
          <div className="pt-4 space-y-10 sm:space-y-0 gap-8 sm:grid grid-cols-4 justify-between ">
            {projectData.map((project, index) => {
              return (
                <div key={index} className="col-span-2">
                  <ProjectCard {...project} />
                </div>
              );
            })}
          </div>
        </div>
      </SectionWrapper>
    </section>
  );
};

export default Projects;
