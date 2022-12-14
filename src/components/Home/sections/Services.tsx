import {
  CustomerFocusedIcon,
  PartnerIcon,
  QualityIcon,
} from "@/components/ui/custom-icons";
import SectionWrapper from "@/components/ui/SectionWrapper";

const cards = [
  {
    Icon: QualityIcon,
    title: "Water Engineering",
    description: "To champion innovative solutions for all pumping needs.",
  },
  {
    Icon: CustomerFocusedIcon,
    title: "Pipes and Fittings",
    description:
      "We provide topnotch pumping solutions to her numerous groups of clients",
  },
  {
    Icon: PartnerIcon,
    title: "Filtration Experts",
    description:
      "worldclass pump brands to deliver quality products and unmatched value.",
  },
  {
    Icon: QualityIcon,
    title: "Pumps and Motors",
    description: "To champion innovative solutions for all pumping needs.",
  },
  {
    Icon: CustomerFocusedIcon,
    title: "Starter Panels",
    description:
      "We provide topnotch pumping solutions to her numerous groups of clients",
  },
  {
    Icon: PartnerIcon,
    title: "Sales and Services",
    description:
      "worldclass pump brands to deliver quality products and unmatched value.",
  },
];

const Services = () => {
  //   const { title, description } = ourServicesData;
  return (
    <section className="relative bg-primary-red text-white " id="services">
      <SectionWrapper className="">
        <div className=" ">
          <div className=" flex justify-between flex-col md:flex-row gap-6  ">
            <h2 className="font-semibold text-white text-3xl sm:text-4xl md:text-5xl  uppercase shrink-0">
              our <br className="hidden md:block" /> services
            </h2>
            <p className="text-md md:text-lg lg:text-xl max-w-xl">
              Ovamann Pumps Limited is a technology-driven Organization that
              specializes in the sales, distribution, installation, and
              maintenance of all forms of pumps, electric motors, industrial &
              domestic plumbing systems and projects.
            </p>
          </div>

          <div className="flex flex-wrap flex-col md:flex-row gap-4 justify-center  mx-auto mt-6 md:mt-10">
            {cards.map((service, index) => (
              <div
                key={index}
                className="w-full md:w-[48%] lg:w-[32%] px-4 py-4 lg:py-6  border border-white/80"
              >
                <div className="flex flex-col gap-2">
                  <div className=" w-fit md:w-10 md:h-10  mb-2  ">
                    <service.Icon className="w-8 h-8" />
                  </div>
                  <h3 className=" md:text-xl lg:text-2xl font-semibold capitalize">
                    {service.title}
                  </h3>
                  <p className="md:text-lg text-white/90">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </section>
  );
};

export default Services;
