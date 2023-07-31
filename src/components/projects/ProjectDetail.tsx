import Image from "next/image";
import React from "react";
import ProjectCard from "../ui/ProjectCard";
import ProjectSummary from "./ProjectSummary";
import { ProjectDetails } from "@/typings/projectDetails";
import dateFormatter from "@/utils/dateFormat";
import { ProjectsEntity } from "@/typings/projects";
import Gallery from "./Gallery";
import { RichText } from "@graphcms/rich-text-react-renderer";
import RichTextRenderer from "./RichTextRenderer";

const ProjectDetail = ({
  projectDetails,
  projects: otherProjects,
}: {
  projectDetails: ProjectDetails;
  projects: ProjectsEntity[];
}) => {
  return (
    <section className="mt-20 md:mt-10">
      <div className="flex justify-center ">
        <Image
          src={projectDetails?.coverImage?.url || ""}
          alt="hero image"
          width={1512}
          height={723}
          className="object-cover w-full max-h-[500px] bg-slate-300"
          priority
        />
      </div>

      <div className={`py-10`}>
        <div className=" px-4 sm:px-5 md:px-7 mx-auto max-w-[89rem] ">
          <h1 className="text-black font-bold text-2xl md:text-3xl lg:text-4xl lg:leading-none uppercase ">
            {projectDetails.title}
          </h1>

          <hr className=" my-4 md:my-7" />

          {/*----------------- */}
          {/* project overview */}
          <div className=" space-y-2 md:space-y-4 ">
            <h2 className="font-semibold text-lg md:text-2xl lg:text-3xl uppercase">
              Project Overview
            </h2>

            <div className={"rich-text-renderer"}>
              <RichTextRenderer
                // @ts-ignore
                content={projectDetails?.projectOverview?.raw}
              />
            </div>

            {/* <div className="flex flex-col gap-6 md:flex-row pt-4 lg:pt-6">
              <div className="h-[350px] md:w-[49%] bg-[#D9D9D9] " />
              <div className="h-[350px] md:w-[49%] bg-[#D9D9D9]" />
            </div> */}
          </div>
          {/* project overview */}
          {/*----------------- */}

          {/*----------- */}
          {/* What we did */}
          <div className=" space-y-2 md:space-y-4 mt-12 lg:mt-14">
            <h2 className="font-semibold text-lg md:text-2xl lg:text-3xl uppercase">
              What We Did
            </h2>

            <div className={"rich-text-renderer"}>
              <RichTextRenderer
                // @ts-ignore
                content={projectDetails?.whatWeDid?.raw}
              />
            </div>
          </div>
          {/* What we did */}
          {/*----------- */}
        </div>

        {/*----------- */}
        {/* Project Summary */}
        <div className=" mt-12 lg:mt-14 bg-primary-blue  ">
          <div className="mx-auto max-w-[89rem] px-4  sm:px-5 md:px-7">
            <ProjectSummary
              categories={projectDetails.categories?.map(
                (item, idx) =>
                  item.name +
                  (projectDetails?.categories?.length &&
                  idx === projectDetails?.categories?.length - 1
                    ? ""
                    : ", ")
              )}
              client={projectDetails?.client}
              date={projectDetails?.date && dateFormatter(projectDetails?.date)}
              location={projectDetails?.location}
              href={projectDetails?.projectBrochure?.url}
            />
          </div>
        </div>
        {/* Project Summary  */}
        {/*----------- */}

        <div className=" px-4 sm:px-5 md:px-7 mx-auto max-w-[89rem]">
          {/*----------- */}
          {/* Gallery */}
          <div className="  mt-12 lg:mt-14">
            <Gallery
              gallery={projectDetails?.gallery}
              title={projectDetails?.title}
            />
          </div>
          {/* Gallery */}
          {/*----------- */}

          <hr className=" mt-12 lg:mt-14" />

          {/*----------- */}
          {/* Other projects*/}

          <div className="space-y-2 md:space-y-4 mt-8 ">
            <h2 className="font-semibold text-xl md:text-2xl lg:text-3xl uppercase">
              Other projects
            </h2>

            <div className="pt-4 space-y-8 sm:space-y-0 gap-8 sm:grid grid-cols-4 lg:grid-cols-6 justify-between">
              {otherProjects?.map((project, index) => {
                return (
                  <div key={index} className="col-span-2 ">
                    <ProjectCard {...project} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        {/* Other projects*/}
        {/*----------- */}
      </div>
    </section>
  );
};

export default ProjectDetail;
