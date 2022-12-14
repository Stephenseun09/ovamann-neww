import client from "@/apollo-client";
import ProjectDetail from "@/components/projects/ProjectDetail";
import {
  GET_PROJECTS_SLUGS,
  GET_PROJECT_DETAILS,
  GET_RELATED_PROJECTS,
} from "@/lib/query";
import { GetStaticProps } from "next";
import Head from "next/head";

const Project = ({ projectDetails, projects }: any) => {
  return (
    <>
      <Head>
        {projectDetails.title && <title>{projectDetails.title}</title>}

        <meta
          name="description"
          content={`${projectDetails.title} project by Ovamann`}
        />
      </Head>
      <div>
        <ProjectDetail projectDetails={projectDetails} projects={projects} />
      </div>
    </>
  );
};

export default Project;

///////////////////
export async function getStaticPaths() {
  const { data } = await client.query({
    query: GET_PROJECTS_SLUGS,
  });
  return {
    paths: data.projects.map((project: { slug: string }) => ({
      params: {
        slug: project.slug,
      },
    })),
    // paths: data.posts.map(({ slug }) => ({ params: { slug } })),
    fallback: "blocking",
  };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug;
  const projectDetailsRes = await client.query({
    query: GET_PROJECT_DETAILS,
    variables: {
      slug,
    },
  });
  const otherProjectsRes = await client.query({
    query: GET_RELATED_PROJECTS,
    variables: {
      slug,
    },
  });

  return {
    props: {
      projectDetails: projectDetailsRes.data.project || [],
      projects: otherProjectsRes.data.projects || [],
    },
  };
};
