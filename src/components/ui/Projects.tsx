import CustomLink from "@/components/ui/CustomLink";
import ProjectCard from "@/components/ui/ProjectCard";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { projectData } from "@/constants/projectData";
import { fadeInBottom } from "@/utils/animations";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <section
    //  className="bg-[#f5f5f5]"
    >
      <SectionWrapper>
        <div className=" max-w-full ">
          <motion.h2
            className="text-black font-semibold md:text-center text-3xl lg:text-4xl leading-none mb-4"
            variants={fadeInBottom}
            initial="hidden"
            whileInView="visible"
            custom={0}
            viewport={{ once: true }}
          >
            Our <span className="text-primary-turquoise">Projects </span>
          </motion.h2>
          {/*---- Section Title ----*/}
          {/*-----------------------*/}

          {/*-----------------------------*/}
          {/*---- Section Description ----*/}
          <motion.h3
            className="md:text-center text-black  md:text-lg lg:text-xl lg:max-w-[70%] mx-auto md:leading-none mb-4"
            variants={fadeInBottom}
            initial="hidden"
            whileInView="visible"
            custom={1}
            viewport={{ once: true }}
          >
            Ovamann has championed major pumping projects for various
            Institutions, Ministries, Individuals, and Organizations across
            various sectors.
          </motion.h3>
          {/*---- Section Description ----*/}
          {/*-----------------------------*/}

          {/* <Cards /> */}
          <div className="pt-4 space-y-8 md:space-y-0 gap-8 md:grid grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 justify-between ">
            {projectData.map((project, index) => {
              return (
                <div key={index} className="col-span-2">
                  <ProjectCard {...project} />
                </div>
              );
            })}
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInBottom}
            custom={0.4}
            className="mt-10 md:mt-12 "
          >
            <div className=" md:w-[15em] mx-auto">
              <CustomLink
                className="bg-primary text-primary-turquoise w-full text-sm md:text-base"
                href="/projects"
              >
                View all
              </CustomLink>
            </div>
          </motion.div>
        </div>
      </SectionWrapper>
    </section>
  );
};

export default Projects;
