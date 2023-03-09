import ClientOnly from "@/clientOnly";
import Projects from "@/components/projects";
import Head from "next/head";

/////////////////
const projects = ({ projects }: any) => {
  return (
    <>
      <Head>
        <title>List of all Ovanann projects</title>
        <meta
          name="description"
          content="List of all projects carried out by by Ovamann"
        />
      </Head>
      <ClientOnly>
        <Projects />
      </ClientOnly>
    </>
  );
};

export default projects;

// export async function getStaticProps() {
//   const query = groq`*[_type == 'projects']| order(project_number desc){
//     slug,
//     desktop_preview,
//     name,
//     _id
//   }`;

//   const projects = await client.fetch(query);
//   return {
//     props: {
//       projects,
//     },
//   };
// }
