import {
  CATEGORY_NAMES_QUERY,
  GET_ALL_PROJECTS,
  GET_PROJECT_BY_CATEGORY,
} from "@/lib/query";
import { CategoriesData } from "@/typings/categories";
import { useLazyQuery, useQuery } from "@apollo/client";
import Image from "next/image";
import { useCallback, useEffect, useState, useMemo } from "react";
import heroImg from "../../../public/images/hero.png";
import { OurProjects } from "../Home/sections";
import ContactUs from "../Home/sections/ContactUs";
import FilterByPill from "../ui/FilterByPill";
import ProjectCard from "../ui/ProjectCard";
import SectionWrapper from "../ui/SectionWrapper";
// import { useInView } from "framer-motion";
import { ProjectConnectionData } from "@/typings/projects";
import FilterByPillSkeleton from "../ui/FilterByPillSkeleton";
import ProjectCardSkeleton from "../ui/ProjectCardSkeleton";

const Projects = () => {
  // const ref = useRef(null);
  // const ref = useRef(null);
  // const isInView = useInView(ref);

  // useEffect(() => {
  //  handleFetchMore();
  // }, [isInView]);

  const {
    data: categoriesNamesData,
    loading: categoriesNamesLoading,
    error: categoriesNamesError,
  } = useQuery<CategoriesData>(CATEGORY_NAMES_QUERY);

  const [
    getAllProjects,
    {
      data: allProjectsData,
      loading: allProjectsLoading,
      error: allProjectsError,
    },
  ] = useLazyQuery<ProjectConnectionData>(GET_ALL_PROJECTS);

  const [
    getAllProjectsByCategory,
    { loading: projectsByCategoryLoading, error: projectsByCategoryError },
  ] = useLazyQuery<ProjectConnectionData>(GET_PROJECT_BY_CATEGORY);

  const [filteredProjects, setFilteredProjects] = useState(
    allProjectsData ? allProjectsData.projectsConnection.edges : []
  );

  useEffect(() => {
    getAllProjects({
      variables: {
        first: 12,
      },
    });
    setFilteredProjects(allProjectsData?.projectsConnection.edges);
  }, [getAllProjects, allProjectsData?.projectsConnection.edges]);
  const [activeTab, setActiveTab] = useState("All");

  // const handleFetchMore = () => {
  //   if (!data.postsConnection.pageInfo.hasNextPage) {
  //     return;
  //   }
  //   fetchMore({
  //     variables: {
  //       after: data.postsConnection.pageInfo.endCursor,
  //       first: 15,
  //     },
  //     updateQuery: (pv, { fetchMoreResult }) => {
  //       if (!fetchMoreResult) {
  //         return pv;
  //       }

  //       const newData = {
  //         postsConnection: {
  //           __typename: "PostConnection",
  //           edges: [
  //             ...pv.postsConnection.edges,
  //             ...fetchMoreResult.postsConnection.edges,
  //           ],
  //           pageInfo: {
  //             __typename: "PageInfo",
  //             hasNextPage: fetchMoreResult.postsConnection.pageInfo.hasNextPage,
  //             endCursor: fetchMoreResult.postsConnection.pageInfo.endCursor,
  //           },
  //         },
  //       };
  //       return newData;
  //     },
  //   });
  // };

  const handleFilterByCategory = useMemo(
    () => (category: string) => {
      setActiveTab(category);
      getAllProjectsByCategory({
        variables: {
          first: 15,
          category,
        },
      }).then((res) => {
        setFilteredProjects(res?.data?.projectsConnection.edges);
      });
    },
    [getAllProjectsByCategory]
  );

  const handleFilterByAll = useCallback(() => {
    setActiveTab("All");
    setFilteredProjects(allProjectsData?.projectsConnection.edges);
  }, [allProjectsData?.projectsConnection.edges]);

  if (categoriesNamesError || allProjectsError || projectsByCategoryError) {
    return (
      <p className="text-xl text-center my-6">
        Something went wrong, please try again
      </p>
    );
  }

  const categoryNames = categoriesNamesData?.categories?.map(
    (category) => category.name
  );

  return (
    <>
      <section>
        <div className="mt-[74px] md:mt-8 lg:mt-0 ">
          <div className=" grid grid-cols-1">
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
              <div className="w-full flex justify-between flex-col md:flex-row gap-6 mx-auto max-w-[86rem]">
                <h1 className="font-bold text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase shrink-0 drop-shadow-lg shadow-lg">
                  our <br className="hidden md:block" /> projects
                </h1>
                <p className="text-white text-md md:text-lg lg:text-xl max-w-xl">
                  Ovamann Pumps Limited is a technology-driven Organization that
                  specializes in the sales, distribution, installation, and
                  maintenance of all forms of pumps, electric motors, industrial
                  & domestic plumbing systems and projects.
                </p>
              </div>
            </div>
          </div>

          <SectionWrapper>
            <div className="flex flex-wrap gap-3 mb-8">
              <FilterByPill
                activeTab={activeTab}
                label={"All"}
                onClick={handleFilterByAll}
              />
              {categoriesNamesLoading ? (
                <FilterByPillSkeleton />
              ) : (
                categoryNames?.map((category, index) => (
                  <FilterByPill
                    activeTab={activeTab}
                    key={index}
                    label={category}
                    onClick={() => handleFilterByCategory(category)}
                  />
                ))
              )}
            </div>

            <div className="pt-4 space-y-10 sm:space-y-0 gap-8 sm:grid grid-cols-4 lg:grid-cols-6 justify-between ">
              {
                // allProjectsLoading or projectsByCategoryLoading
                allProjectsLoading || projectsByCategoryLoading
                  ? [1, 2, 3].map((_, idx) => (
                      <div key={idx} className="col-span-2">
                        <ProjectCardSkeleton />
                      </div>
                    ))
                  : filteredProjects?.map((item, index) => {
                      const project = item?.node;

                      return (
                        <div key={index} className="col-span-2">
                          <ProjectCard {...project} />
                        </div>
                      );
                    })
              }
            </div>

            {/* <div className="mt-6 md:mt-10 flex gap-3 justify-center items-center">
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
                </div> */}
          </SectionWrapper>
        </div>
      </section>
      <OurProjects showDescription={false} />
      <ContactUs />
      {/* <div ref={ref} className="h-2" /> */}
    </>
  );
};

export default Projects;
