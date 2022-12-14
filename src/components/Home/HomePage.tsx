import { HomepageProjectData } from "@/typings/projects";
import {
  AboutUs,
  Hero,
  Services,
  OurMission,
  OurProjects,
  ContactUs,
} from "./sections";
import Partners from "./sections/Partners";
import Projects from "./sections/Projects";

const HomePage = ({ projects }: HomepageProjectData) => {
  return (
    <>
      <Hero />
      <Partners />
      <AboutUs />
      <OurMission />
      <OurProjects />
      <Projects projects={projects} />
      <Services />
      <ContactUs />
    </>
  );
};

export default HomePage;
