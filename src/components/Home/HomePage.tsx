import { AboutUs, Hero, Services, OurMission, OurProjects } from "./sections";
import ContactUs from "./sections/ContactUs";
import Counter from "./sections/CountUp";
import Partners from "./sections/Partners";
import Projects from "./sections/Projects";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Partners />
      {/* <Counter /> */}
      <AboutUs />
      <OurMission />
      <OurProjects />
      <Projects />
      <Services />
      <ContactUs />
    </>
  );
};

export default HomePage;
