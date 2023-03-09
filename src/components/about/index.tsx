import Image from "next/image";
import heroImg from "../../../public/images/hero.png";
import SectionWrapper from "../ui/SectionWrapper";
import building from "../../../public/images/about/building.jpg";
import { ContactUs } from "../Home/sections";

const About = () => {
  return (
    <>
      <section>
        <div className="mt-[74px] md:mt-8 lg:mt-0">
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
                <h1 className="font-bold text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase shrink-0 drop-shadow-lg">
                  About Us
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

          <div className="">
            <div className="relative bg-[#041e420d]">
              <SectionWrapper>
                <div className=" md:grid grid-cols-12 gap-4 space-y-8 md:space-y-0 items-center">
                  {/*  */}
                  <div className=" col-span-5 lg:col-span-6 h-full flex flex-col space-y-5  justify-center">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl text-black capitalize font-bold leading-none xl:max-w-[60%]">
                      Providing{" "}
                      <span className="text-primary">
                        {" "}
                        Topnotch Pumping Solutions
                      </span>
                    </h2>
                    <h3 className="text-black text-lg lg:text-2xl leading-tight lg:max-w-[37ch]">
                      We are the leading Pumps and Fluid Transmission Company in
                      West Africa
                    </h3>
                    <p className="text-paragraph text-md  md:text-lg lg:text-xl lg:max-w-[45ch]">
                      With over 20 years of experience in the sales,
                      distribution, installation, and maintenance of all forms
                      of pumps and fluid transmission projects, locally and
                      Internationally.
                    </p>
                  </div>
                  {/*  */}
                  <div className="md:absolute top-0 bottom-0 right-0 md:w-1/2 h-full md:py-12">
                    <Image
                      src={building}
                      alt="about us image"
                      width={560}
                      height={400}
                      placeholder="blur"
                      className="block object-cover h-full shadow"
                    />
                  </div>
                </div>
              </SectionWrapper>
            </div>

            {/*  */}
            <div className="relative">
              <SectionWrapper className="relative">
                <div className=" flex flex-col space-y-5 ">
                  <p className="text-black text-md  md:text-base ">
                    In OVAMANN PUMPS LIMITED, we have worked and still working
                    with our team of foreign partners/manufacturers and best
                    possible hands we can get in pump business in order to
                    provide for Our Nigerian and West Africa market users, the
                    best of services, rehabilitation / construction and supply
                    of most efficient and reliable oil pumps / water engineering
                    services at the most affordable price in the West Africa
                    market.
                  </p>

                  <p className="text-black text-md  md:text-base">
                    In fact, when it comes to providing the most efficient and
                    reliable pumps and water engineering services at the most
                    affordable price in the West African market, we hold the
                    record. With constantly improving technology, we will
                    continue to work harder for higher efficiency levels in a
                    very cost effective manner
                  </p>
                  <blockquote className="text-paragraph text-md  md:text-base xl:max-w-[80%] italic border-l-4 border-primary-turquoise pl-4 py-2">
                    If you are doing everything you can to choose the pumps that
                    will work for you, your company or state, or organization,
                    why not go the distance, turn to OVAMANN PUMPS LIMITED
                    today.
                  </blockquote>
                </div>
                {/*  */}
              </SectionWrapper>
            </div>

            {/*  */}
            <ContactUs />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
