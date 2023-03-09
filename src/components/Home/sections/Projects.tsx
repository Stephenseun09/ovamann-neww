import ProjectCard from "@/components/ui/ProjectCard";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { HomepageProjectData } from "@/typings/projects";
import Link from "next/link";

const Projects = ({ projects }: HomepageProjectData) => {
  return (
    <section>
      <SectionWrapper>
        <div className=" max-w-full ">
          <div className="flex gap-4 justify-between items-center mb-4">
            <h2 className="font-semibold text-black text-3xl sm:text-4xl md:text-5xl  uppercase md:max-w-[50%]">
              Our Projects
            </h2>
            <Link
              className=" text-primary-red underline md:text-lg"
              href="/projects"
            >
              View all
            </Link>
          </div>
          {/* <Cards /> */}
          <div className="pt-4 space-y-10 sm:space-y-0 gap-8 sm:grid grid-cols-4 lg:grid-cols-6 justify-between ">
            {projects?.map((project, index) => {
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
