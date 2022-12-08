import Image from "next/image";
import React from "react";
import SectionWrapper from "../ui/SectionWrapper";
import heroImg from "../../../public/images/project-detail.png";
import ProjectCard from "../ui/ProjectCard";
import { projectData } from "@/constants/projectData";
import ProjectSummary from "./ProjectSummary";

const ProjectDetail = () => {
  return (
    <section className="mt-20 md:mt-10">
      <div className="flex justify-center ">
        <Image
          src={heroImg}
          alt="hero image"
          width={1512}
          height={723}
          placeholder="blur"
          className="object-cover w-full max-h-[723px] "
          priority
        />
      </div>

      <div className={` py-10  `}>
        <div className=" px-4  sm:px-5 md:px-7 mx-auto max-w-[89rem] ">
          <h1 className="text-black font-bold text-xl md:text-3xl lg:text-[84px] lg:leading-none uppercase ">
            REHABILITATION WORKS IN ILELA WATER SCHEME
          </h1>

          <hr className=" my-4 md:my-7 lg:my-10" />

          {/*----------------- */}
          {/* project overview */}
          <div className=" space-y-2 md:space-y-4 ">
            <h2 className="font-bold text-xl md:text-2xl lg:text-4xl uppercase">
              Project Overview
            </h2>

            <p className=" max-w-7xl text-md lg:text-2xl">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Laudantium quaerat dolorem dignissimos quae deleniti incidunt,
              cupiditate repudiandae necessitatibus, minus qui illum maxime
              officiis similique quas dolor asperiores reprehenderit
              praesentium. Doloremque aliquam quo possimus debitis, iusto
              adipisci quas, voluptatum expedita, quia sint sed nostrum maxime
              quam itaque amet molestias hic ducimus.
              <br />
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              eveniet cumque a consectetur reiciendis perferendis dolorem. Nemo
              similique porro iure, qui veritatis excepturi maxime praesentium
              quibusdam animi perferendis illum, illo molestiae est? Voluptates
              voluptatum porro, quam sed excepturi qui expedita accusamus
              voluptatem reprehenderit debitis provident unde dolor consectetur,
              quis repudiandae nam, mollitia sit deserunt repellat nesciunt
              asperiores quisquam quos. Voluptatibus neque adipisci quisquam,
              qui nesciunt libero asperiores quidem. Voluptatem, fugit.
            </p>

            <div className="flex flex-col gap-6 md:flex-row pt-4 lg:pt-6">
              <div className="h-[437px] md:w-[49%] bg-[#D9D9D9] " />
              <div className="h-[437px] md:w-[49%] bg-[#D9D9D9]" />
            </div>
          </div>
          {/* project overview */}
          {/*----------------- */}

          {/*----------- */}
          {/* What we do */}
          <div className=" space-y-2 md:space-y-4 mt-12 lg:mt-14">
            <h2 className="font-bold text-xl md:text-2xl lg:text-4xl uppercase">
              What We Did
            </h2>

            <p className="max-w-7xl text-md lg:text-2xl">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Laudantium quaerat dolorem dignissimos quae deleniti incidunt,
              cupiditate repudiandae necessitatibus, minus qui illum maxime
              officiis similique quas dolor asperiores reprehenderit
              praesentium. Doloremque aliquam quo possimus debitis, iusto
              adipisci quas, voluptatum expedita, quia sint sed nostrum maxime
              quam itaque amet molestias hic ducimus. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Nesciunt eveniet cumque a
              consectetur reiciendis perferendis dolorem. Nemo similique porro
              iure, qui veritatis excepturi maxime praesentium quibusdam animi
              perferendis illum, illo molestiae est? Voluptates voluptatum
              porro, quam sed excepturi qui expedita accusamus voluptatem
              reprehenderit debitis provident unde dolor consectetur, quis
              repudiandae nam, mollitia sit deserunt repellat nesciunt
              asperiores quisquam quos. Voluptatibus neque adipisci quisquam,
              qui nesciunt libero asperiores quidem. Voluptatem, fugit.
            </p>
          </div>
          {/* What we do */}
          {/*----------- */}
        </div>

        {/*----------- */}
        {/* Project Summary */}
        <div className=" mt-12 lg:mt-14 bg-primary-blue  ">
          <div className="mx-auto max-w-[89rem] px-4  sm:px-5 md:px-7">
            <ProjectSummary />
          </div>
        </div>
        {/* Project Summary  */}
        {/*----------- */}

        <div className=" px-4 sm:px-5 md:px-7 mx-auto max-w-[89rem]">
          {/*----------- */}
          {/* Gallery */}
          <div className=" space-y-2 md:space-y-4 mt-12 lg:mt-14">
            <h2 className="font-bold text-xl md:text-2xl lg:text-4xl uppercase">
              Gallery
            </h2>

            <p className="max-w-7xl text-md lg:text-2xl">
              Enjoy some images of the project.
            </p>

            <div className="flex flex-col gap-6 md:flex-row flex-wrap justify-between">
              {[1, 2, 3, 1, 5, 6].map((item, index) => (
                <div
                  key={index}
                  className="h-[370px] w-full md:w-[48%] lg:w-[30%] bg-[#D9D9D9]"
                />
              ))}
            </div>
          </div>
          {/* Gallery */}
          {/*----------- */}

          <hr className=" mt-12 lg:mt-14" />

          {/*----------- */}
          {/* Other projects*/}

          <div className="space-y-2 md:space-y-4 mt-8 ">
            <h2 className="font-bold text-xl md:text-2xl lg:text-4xl uppercase">
              Other projects
            </h2>

            <div className="pt-4 space-y-8 sm:space-y-0 gap-8 sm:grid grid-cols-4 justify-between">
              {projectData.slice(0, 2).map((project, index) => {
                return (
                  <div key={index} className="col-span-2">
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
