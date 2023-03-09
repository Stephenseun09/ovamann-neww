import heroImg from "../../../../public/images/hero-img.png";

import Image from "next/image";

const Hero = () => {
  return (
    <>
      <section className="relative pt-8 pb-8 md:pb-16  ">
        <div className="mx-auto max-w-[89rem] px-4 sm:px-5 md:px-7 pt-20 sm:pt-24 lg:pt-28">
          <div className=" flex justify-between flex-col md:flex-row gap-4 md:gap-6">
            <h1 className="font-bold text-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl uppercase shrink-0">
              Welcome <br className="hidden md:block" /> to Ovamann
            </h1>
            <p className="text-md md:text-lg lg:text-xl max-w-xl">
              Ovamann Pumps Limited is a technology-driven Organization that
              specializes in the sales, distribution, installation, and
              maintenance of all forms of pumps, electric motors, industrial &
              domestic plumbing systems and projects.
            </p>
          </div>
        </div>
      </section>
      <div className="relative  overflow-hidden bg-[#fbfbfb]">
        <div className="flex justify-center">
          <Image
            src={heroImg}
            alt="hero image"
            className="object-cover w-full  bg-gray-300"
            width={1512}
            height={723}
            placeholder="blur"
            // priority
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
