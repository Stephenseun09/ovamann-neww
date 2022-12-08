import SectionWrapper from "@/components/ui/SectionWrapper";

const info = [
  {
    title: "Head Office",
    text1:
      "1 Shalom St., Off Apple Junction, Along Okota link road, Amuwo Odofin, Lagos",
    text2: "",
  },
  {
    title: "Phone Number",
    text1: "Office Telephone: (234) 01295 5803",
    text2: "Mobile: 0803 320 7819",
  },
  {
    title: "Email Address",
    text1: "General: info@ovamannpumps.com ",
    text2: "Sales: sales@ovamannpumps.com",
  },
];

const ContactUs = () => {
  return (
    <section className="relative bg-[url('/images/contact/contact-bg.png')] bg-cover lg:py-6">
      <SectionWrapper className="">
        <div className="bg-white py-10 md:py-14 lg:py-16 px-8 md:px-12 lg:px-20 xl:w-[77%] mx-auto  ">
          <div className=" space-y-6 md:space-y-10">
            <h2 className=" text-black text-3xl sm:text-4xl md:text-5xl lg:text-[84px] md:text-center capitalize font-bold leading-none">
              Contact Us
            </h2>
            <div className="mt-6 md:mt-10 lg:mt-28 space-y-4 md:space-y-8 lg:space-y-10 ">
              {info.map((item, index) => (
                <div
                  key={index}
                  className=" flex flex-col gap-2 md:gap-3 border-b-[1px] pb-3 border-slate-400 "
                >
                  <h5 className=" font-bold text-2xl md:text-4xl lg:text-[42px]">
                    {item.title}
                  </h5>
                  <div className="flex md:gap-4 flex-wrap">
                    <p className=" md:text-xl font-normal">{item.text1}</p>
                    <p className=" md:text-xl font-normal">{item.text2}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>
    </section>
  );
};

export default ContactUs;
