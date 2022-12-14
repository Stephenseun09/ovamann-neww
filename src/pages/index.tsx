import client from "@/apollo-client";
import HomePage from "@/components/Home/HomePage";
import { HomepageProjectData } from "@/typings/projects";
import { HOMEPAGE_PROJECTS_QUERY } from "@/lib/query";

export default function Home({ projects }: HomepageProjectData) {
  return (
    <div>
      <HomePage projects={projects} />
    </div>
  );
}

export async function getStaticProps() {
  const projects = await client.query({
    query: HOMEPAGE_PROJECTS_QUERY,
  });
  return {
    props: {
      projects: projects.data.projects || [],
    },
  };
}
