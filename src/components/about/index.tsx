import Image from "next/image";
import heroImg from "../../../public/images/hero.png";
import SectionWrapper from "../ui/SectionWrapper";
import { fadeInBottom } from "@/utils/animations";
import { motion } from "framer-motion";
import aboutUsImg from "../../../public/images/about/about-us.png";
import building from "../../../public/images/about/building.jpg";

const About = () => {
  return (
    <>
      <section>
        <div className="">
          <div className="mt-[74px] md:mt-8 lg:mt-0 grid grid-cols-1 ">
            <Image
              src={heroImg}
              alt="hero image"
              width={1512}
              height={425}
              placeholder="blur"
              className="object-cover w-full col-start-1 row-start-1 "
              priority
            />
            <div className="grid place-content-center col-start-1 row-start-1 bg-black bg-opacity-20">
              <h1 className=" text-white md:text-center font-extrabold text-3xl md:text-4xl lg:text-5xl drop-shadow-lg shadow-lg">
                About Us
              </h1>
            </div>
          </div>

          <div className="">
            <div className="relative bg-[#041e420d]">
              <SectionWrapper>
                <div className=" md:grid grid-cols-12 gap-4 space-y-8 md:space-y-0 items-center">
                  {/*  */}
                  <div className=" col-span-5 lg:col-span-6 h-full flex flex-col space-y-5  justify-center">
                    <motion.h2
                      className="text-2xl md:text-3xl lg:text-4xl text-black capitalize font-bold leading-none xl:max-w-[60%]"
                      variants={fadeInBottom}
                      initial="hidden"
                      whileInView="visible"
                      custom={0}
                      viewport={{ once: true }}
                    >
                      Providing{" "}
                      <span className="text-primary-turquoise">
                        {" "}
                        Topnotch Pumping Solutions
                      </span>
                    </motion.h2>
                    <motion.h3
                      variants={fadeInBottom}
                      initial="hidden"
                      whileInView="visible"
                      custom={0.3}
                      viewport={{ once: true }}
                      className="text-black text-lg lg:text-2xl leading-tight lg:max-w-[37ch]"
                    >
                      We are the leading Pumps and Fluid Transmission Company in
                      West Africa
                    </motion.h3>
                    <motion.p
                      className="text-paragraph text-md  md:text-lg lg:text-xl lg:max-w-[45ch]"
                      variants={fadeInBottom}
                      initial="hidden"
                      whileInView="visible"
                      custom={0.4}
                      viewport={{ once: true }}
                    >
                      With over 20 years of experience in the sales,
                      distribution, installation, and maintenance of all forms
                      of pumps and fluid transmission projects, locally and
                      Internationally.
                    </motion.p>
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
                  <motion.p
                    className="text-black text-md  md:text-base "
                    variants={fadeInBottom}
                    initial="hidden"
                    whileInView="visible"
                    custom={0.5}
                    viewport={{ once: true }}
                  >
                    In OVAMANN PUMPS LIMITED, we have worked and still working
                    with our team of foreign partners/manufacturers and best
                    possible hands we can get in pump business in order to
                    provide for Our Nigerian and West Africa market users, the
                    best of services, rehabilitation / construction and supply
                    of most efficient and reliable oil pumps / water engineering
                    services at the most affordable price in the West Africa
                    market.
                  </motion.p>

                  <motion.p
                    className="text-black text-md  md:text-base"
                    variants={fadeInBottom}
                    initial="hidden"
                    whileInView="visible"
                    custom={1}
                    viewport={{ once: true }}
                  >
                    In fact, when it comes to providing the most efficient and
                    reliable pumps and water engineering services at the most
                    affordable price in the West African market, we hold the
                    record. With constantly improving technology, we will
                    continue to work harder for higher efficiency levels in a
                    very cost effective manner
                  </motion.p>
                  <motion.blockquote
                    className="text-paragraph text-md  md:text-base xl:max-w-[80%] italic border-l-4 border-primary-turquoise pl-4 py-2"
                    variants={fadeInBottom}
                    initial="hidden"
                    whileInView="visible"
                    custom={0.6}
                    viewport={{ once: true }}
                  >
                    If you are doing everything you can to choose the pumps that
                    will work for you, your company or state, or organization,
                    why not go the distance, turn to OVAMANN PUMPS LIMITED
                    today.
                  </motion.blockquote>
                </div>
                {/*  */}
              </SectionWrapper>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
