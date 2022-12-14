import SectionWrapper from "@/components/ui/SectionWrapper";

const cards = [
  {
    title: "Quality Driven",
    description: "To champion innovative solutions for all pumping needs.",
  },
  {
    title: "Customer Focused",
    description:
      "We provide topnotch pumping solutions to her numerous groups of clients",
  },
  {
    title: "Global Partnership",
    description:
      "worldclass pump brands to deliver quality products and unmatched value.",
  },
];

const OurMission = () => {
  return (
    <section className="relative border-b border-slate-400 bg-primary-blue text-white ">
      <SectionWrapper className="">
        <div className=" ">
          <div className=" flex justify-between flex-col md:flex-row gap-6 ">
            <h2 className="font-semibold text-white text-3xl sm:text-4xl md:text-5xl  uppercase shrink-0">
              our <br className="hidden md:block" /> mission
            </h2>
            <p className=" text-md md:text-lg lg:text-xl max-w-xl">
              Ovamann Pumps Limited is a technology-driven Organization that
              specializes in the sales, distribution, installation, and
              maintenance of all forms of pumps, electric motors, industrial &
              domestic plumbing systems and projects.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-4 justify-center  mx-auto mt-6 md:mt-10">
            {cards.map((card, index) => (
              <div
                key={index}
                className="w-full md:w-[48%] lg:w-[32%] px-4 py-4 lg:py-6  bg-white/20 shadow-lg rounded"
              >
                <div className="flex flex-col gap-2">
                  <h4 className="text-3xl md:text-4xl lg:text-5xl mb-2 lg:mb-4 font-semibold ">
                    0{++index}
                  </h4>
                  <h3 className=" md:text-2xl font-semibold capitalize">
                    {card.title}
                  </h3>
                  <p className="md:text-lg text-white/90">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </section>
  );
};

export default OurMission;
