const ProjectCardSkeleton = () => {
  return (
    <div className="flex flex-col  space-y-4 md:space-y-6  overflow-hidden ">
      <div className="w-[350px] h-[200px] xl:w-[400px] xl:h-[250px]  shadow bg-slate-300 rounded " />
      <div className="flex flex-col grow gap-3">
        <div className="h-6 w-4/5 bg-slate-300" />
        <div className="h-20 w-full bg-slate-300" />
        <div className="h-6 w-3/5 bg-slate-300" />
      </div>
    </div>
  );
};

export default ProjectCardSkeleton;
