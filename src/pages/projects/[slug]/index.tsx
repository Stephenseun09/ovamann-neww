import ProjectDetail from "@/components/projects/ProjectDetail";
import Head from "next/head";

const Project = () => {
  return (
    <>
      {/* <Head>
        {project.name && <title>{project.name}</title>}

        <meta
          name="description"
          content={`${project.name} website by Stephen Arogundade`}
        />
      </Head> */}
      <div>
        <ProjectDetail />
      </div>
    </>
  );
};

export default Project;

///////////////////
// export async function getStaticPaths() {
//   const query = groq`*[_type == "projects" && defined(slug.current)][].slug.current`;
//   const paths = await client.fetch(query);
//   return {
//     paths: paths.map((slug: any) => ({ params: { slug } })),
//     fallback: false,
//   };
// }

////////////////////
// export async function getStaticProps({ params }: GetStaticPropsContext) {
//   const query = groq`*[_type == 'projects' && slug.current == $slug][0]{
//     name,
//     desktop_preview,
//     long_description,
//     stack,
//     libraries,
//     code,
//     live,
//     slug,
//     mobile_view1,
//     mobile_view2,
//     design_process,
//     challenges,
//     future_improvements,
//     _id

//   }`;
//   const project = await client.fetch(query, { slug: params?.slug });
//   return {
//     props: {
//       project,
//     },
//   };
// }
