import HomePage from "@/components/Home/HomePage";

export default function Home() {
  return (
    <div>
      <HomePage />
    </div>
  );
}

// export async function getStaticProps() {
//   const data = await client.fetch(query);
//   const { skills, projects } = data.reduce(
//     (acc: any, curr: any) => {
//       if (curr.skills) {
//         acc.skills = curr.skills;
//       }
//       if (curr.projects) {
//         acc.projects = curr.projects;
//       }
//       return acc;
//     },
//     { skills: [], projects: [] }
//   );
//   return {
//     props: {
//       data: {
//         skills,
//         projects,
//       },
//     },
//   };
// }
