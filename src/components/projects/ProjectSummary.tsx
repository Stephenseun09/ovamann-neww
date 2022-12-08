import Link from "next/link";

const summaryData = [
  {
    title: "Date",
    text: "June 30, 2017",
  },
  {
    title: "Categories",
    text: "water engineering",
  },
  {
    title: "Projects completed",
    text: "otamili",
  },
  {
    title: "Satisfied Client",
    text: "imo state",
  },
];
const ProjectSummary = ({ href = "#" }: { href?: string }) => {
  return (
    <div className="  text-white py-8 lg:py-10">
      <div className=" flex justify-between flex-col md:flex-row gap-6 md:gap-8 lg:gap-10 ">
        <div className="shrink-0 md:max-w-[50%]">
          <h2 className="font-bold text-white text-xl  md:text-3xl lg:text-[84px] lg:leading-none uppercase ">
            project <br className="hidden md:block" />
            summary
          </h2>

          <Link
            href={href}
            className={`mt-4 md:mt-10 lg:mt-20 group flex h-12 items-center justify-center px-6 md:w-4/5 bg-white text-primary-red`}
            target="_blank"
          >
            Project Brochure
          </Link>
        </div>

        <div className="grow md:max-w-[50%]">
          <div className={` space-y-4 md:space-y-6`}>
            {summaryData.map((item, index) => (
              <div
                key={index}
                className=" flex flex-col gap-2  border-b-[1px] pb-3 border-slate-400 w-[80%] md:w-[70%]"
              >
                <p className="text-sm md:text-base lg:text-xl  font-normal">
                  {item.text}
                </p>
                <p className=" font-bold text-xl md:text-2xl lg:text-[42px]">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectSummary;
