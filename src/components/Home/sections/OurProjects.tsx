import SectionWrapper from "@/components/ui/SectionWrapper";

const countData = [
  // {
  //   count: 2700,
  //   description: "Satisfied Customers",
  // },
  // {
  //   count: 70,
  //   description: "Satisfied Employees",
  // },
  // {
  //   count: 5,
  //   description: "Offices Nationwide",
  // },
  // {
  //   count: 4,
  //   description: "Awards & Recognitions",
  // },
  {
    count: 12000,
    description: "Projects so far",
  },
  {
    count: 10000,
    description: "Projects completed",
  },
  {
    count: 1257,
    description: "Satisfied Clients",
  },
];

const OurProjects = ({
  showDescription = true,
}: {
  showDescription?: boolean;
}) => {
  return (
    <section className="relative bg-primary-blue text-white ">
      <SectionWrapper className="">
        <div className=" flex justify-between flex-col md:flex-row gap-6 md:gap-8 lg:gap-10 ">
          <h2 className="font-semibold text-white text-3xl sm:text-4xl md:text-5xl uppercase shrink-0 md:max-w-[50%]">
            Our <br className="hidden md:block" /> Projects so far
          </h2>
          <div className={`${showDescription ? "" : "grow"} md:max-w-[50%]`}>
            {showDescription && (
              <p className=" text-md md:text-lg lg:text-xl max-w-xl">
                Ovamann Pumps Limited is a technology-driven Organization that
                specializes in the sales, distribution, installation, and
                maintenance of all forms of pumps, electric motors, industrial &
                domestic plumbing systems and projects.
              </p>
            )}

            <div
              className={`${
                showDescription ? "mt-6 md:mt-10 " : ""
              }  space-y-4 md:space-y-8`}
            >
              {countData.map((item, index) => (
                <div
                  key={index}
                  className=" flex flex-col gap-2 border-b-[1px] pb-3 border-slate-400 w-[70%]"
                >
                  <p className=" font-bold text-3xl md:text-4xl">
                    {item.count}
                    {index !== 2 ? "+" : ""}
                  </p>
                  <p className="text-xs sm:text-sm md:text-base font-normal">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>
    </section>
  );
};

export default OurProjects;
