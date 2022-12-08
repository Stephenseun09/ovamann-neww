import Left from "./Left";
import Right from "./Right";

const Footer = () => {
  return (
    <footer className="bg-primary-blue relative">
      <div className=" max-w-[86rem] mx-auto px-4 sm:px-5 md:px-7 pt-10 sm:pt-12  pb-5  sm:pb-6 ">
        <div className=" grid md:grid-cols-12 gap-12">
          {/*----------------------------------*/}
          {/*---- Left Hand Side of Footer ----*/}
          {/*----------------------------------*/}
          <div className=" w-full md:col-span-6 lg:col-5">
            <Left />
          </div>
          {/*----------------------------------*/}

          {/*----------------------------------*/}
          {/*---- Right Hand Side of Footer ----*/}
          {/*----------------------------------*/}
          <div className="flex gap-6  justify-between  md:col-start-7 md:col-end-13  flex-wrap md:flex-nowrap">
            <Right />
          </div>
          {/*----------------------------------*/}
        </div>

        <hr className="  mt-12 md:mt-14 border-slate-400" />
        <p className="text-[13px] sm:text-[14px] md:text-[15px] text-slate-200 text-center  mt-4 md:mt-7 ">
          Copyright © {new Date().getFullYear()} Ovamann. All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
