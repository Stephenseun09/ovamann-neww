import Link from "next/link";

const ProjectSummary = ({
  href = "#",
  date,
  categories,
  client,
  location,
}: {
  href?: string;
  date: string;
  categories: any;
  client: string;
  location: string;
}) => {
  return (
    <div className="  text-white py-8 lg:py-10">
      <div className=" flex justify-between flex-col md:flex-row gap-6 md:gap-8 lg:gap-10 ">
        <div className="shrink-0 md:max-w-[50%]">
          <h2 className="font-semibold text-white text-3xl sm:text-4xl md:text-5xl uppercase ">
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
            <TableRows title="Date" text={date} />
            <TableRows title="Categories" text={categories} />
            <TableRows title="Satisfied Client" text={client} />
            <TableRows title="Location" text={location} />
          </div>
        </div>
      </div>
    </div>
  );
};

const TableRows = ({ title, text }: { title: string; text: string }) => {
  return (
    <div className=" flex flex-col  border-b-[1px] pb-3 border-slate-400 w-full md:w-[70%] flex-wrap">
      <p className="text-sm md:text-base lg:text-lg  font-normal">{text}</p>
      <p className=" font-semibold text-xl md:text-2xl lg:text-3xl">{title}</p>
    </div>
  );
};

export default ProjectSummary;
