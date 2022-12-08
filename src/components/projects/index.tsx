import { projectData } from "@/constants/projectData";
import Image from "next/image";
import React, { useCallback, useState } from "react";
import heroImg from "../../../public/images/hero.png";
import { OurProjects } from "../Home/sections";
import ContactUs from "../Home/sections/ContactUs";
import { NextIcon, PreviousIcon } from "../ui/custom-icons";
import FilterByPill from "../ui/FilterByPill";
import ProjectCard from "../ui/ProjectCard";
import SectionWrapper from "../ui/SectionWrapper";

const categories = [
  "All",
  "Pumps",
  "Agriculture",
  "Construction",
  "Mining And Construction",
  "Water Engineering",
];

const Projects = () => {
  const [activeTab, setActiveTab] = useState(categories[0]);
  const [activePage, setActivePage] = useState(1);
  const [filteredProjects, setFilteredProjects] = useState(projectData);

  const handleTabClick = useCallback((tab: string) => {
    setActiveTab(tab);
    if (tab === "All") {
      setFilteredProjects(projectData);
    } else {
      setFilteredProjects(
        projectData.filter((project) => project.categories.includes(tab))
      );
    }
  }, []);

  const pages = 2;

  const getPages = () => {
    const elements = [];
    for (let i = 1; i <= pages; i++) {
      elements.push(
        <FilterByPill
          activeTab={activePage}
          key={i}
          label={i}
          // onClick={() => handlePaginationClick()}
          onClick={() => setActivePage(i)}
        />
      );
    }
    return elements; // [<div>1</div>, <div>2</div>....]
  };

  return (
    <>
      <section>
        <div className="mt-[74px] md:mt-8 lg:mt-0 grid grid-cols-1 ">
          <Image
            src={heroImg}
            alt="hero image"
            width={1512}
            height={425}
            placeholder="blur"
            className="object-cover w-full col-start-1 row-start-1 h-full"
            priority
          />
          <div className="grid items-center col-start-1 row-start-1 bg-black bg-opacity-20 px-4  sm:px-5 md:px-7 py-4 mt-4">
            <div className=" flex justify-between flex-col md:flex-row gap-6 ">
              <h1 className="font-bold text-white text-3xl sm:text-4xl md:text-5xl lg:text-[84px] uppercase shrink-0 drop-shadow-lg shadow-lg">
                our <br className="hidden md:block" /> projects
              </h1>
              <p className="text-white text-md md:text-lg lg:text-2xl max-w-xl">
                Ovamann Pumps Limited is a technology-driven Organization that
                specializes in the sales, distribution, installation, and
                maintenance of all forms of pumps, electric motors, industrial &
                domestic plumbing systems and projects.
              </p>
            </div>
          </div>

          <SectionWrapper>
            <div className="flex flex-wrap md:justify-center gap-3 mb-8">
              {categories.map((category, index) => (
                <FilterByPill
                  activeTab={activeTab}
                  key={index}
                  label={category}
                  onClick={() => handleTabClick(category)}
                />
              ))}
            </div>

            <div className="pt-4 space-y-10 sm:space-y-0 gap-8 sm:grid grid-cols-4 justify-between ">
              {filteredProjects.map((project, index) => (
                <div key={index} className="col-span-2">
                  <ProjectCard {...project} />
                </div>
              ))}
            </div>

            <div className="mt-6 md:mt-10 flex gap-3 justify-center items-center">
              <button
                type="button"
                disabled={activePage === 1}
                onClick={() =>
                  activePage !== 1 &&
                  setActivePage((page) => Math.max(page - 1, 1))
                }
              >
                <PreviousIcon
                  className={`w-5 h-5 ${
                    activePage === 1 ? "text-gray-400" : "text-black"
                  }`}
                />
              </button>

              {getPages()}
              <button
                type="button"
                disabled={activePage === pages}
                onClick={() =>
                  activePage !== pages && setActivePage((page) => page + 1)
                }
              >
                <NextIcon
                  className={`w-5 h-5 ${
                    activePage === pages ? "text-gray-400" : "text-black"
                  }`}
                />
              </button>
            </div>
          </SectionWrapper>
        </div>
      </section>
      <OurProjects showDescription={false} />
      <ContactUs />
    </>
  );
};

export default Projects;
