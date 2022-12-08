import SectionWrapper from "@/components/ui/SectionWrapper";
import Image from "next/image";
import Link from "next/link";
import aboutUsImg from "../../../../public/images/about/about-us.png";

const AboutUs = () => {
  return (
    <section className="relative md:py-8 lg:py-12">
      <SectionWrapper className="">
        <div className=" md:grid grid-cols-12 gap-4 space-y-8 md:space-y-0 items-center">
          {/*  */}
          <div className=" col-span-5 lg:col-span-6 h-full flex flex-col space-y-2 lg:space-y-5  justify-center">
            <h2 className="text-2xl md:text-3xl lg:text-[42px] text-black capitalize font-bold lg:leading-none xl:max-w-[70%]">
              Providing{" "}
              <span className="text-primary-blue">
                {" "}
                Topnotch Pumping Solutions
              </span>
            </h2>
            <p className="text-paragraph text-md  md:text-lg lg:text-2xl lg:max-w-[45ch]">
              With over 20 years of experience in the sales, distribution,
              installation, and maintenance of all forms of pumps and fluid
              transmission projects, locally and Internationally.
            </p>
            <div className=" md:pt-8">
              <Link
                className=" text-primary-red underline lg:text-2xl"
                href="/about"
              >
                Read more
              </Link>
            </div>
          </div>
          {/*  */}
          <div className="md:absolute top-0 bottom-0 right-0 md:w-1/2 h-full md:py-8">
            <Image
              src={aboutUsImg}
              alt="about us image"
              width={1512}
              height={723}
              placeholder="blur"
              className="block object-cover h-full "
            />
          </div>
        </div>
      </SectionWrapper>
    </section>
  );
};

export default AboutUs;
