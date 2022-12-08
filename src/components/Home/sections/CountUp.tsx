import { useRef, useState } from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const countData = [
  {
    count: 2700,
    description: "Satisfied Customers",
  },
  {
    count: 70,
    description: "Satisfied Employees",
  },
  {
    count: 5,
    description: "Offices Nationwide",
  },
  {
    count: 4,
    description: "Awards & Recognitions",
  },
];

const Counter = () => {
  const [count, setCount] = useState(false);
  const ref = useRef(null);

  return (
    <>
      <section className="px-4 sm:px-6 md:px-8 max-w-[82rem] mx-auto">
        <div className="py-6 md:py-10 md:grid-cols-4 mx-auto  grid grid-cols-2 gap-4 justify-items-center items-start ">
          {countData.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center w-fit justify-center gap-2 "
              ref={ref}
            >
              <CountUp
                start={0}
                end={item.count}
                duration={2}
                separator=","
                suffix={index === 1 ? "+" : ""}
                className="leading-tight"
              >
                {({ countUpRef, start }) => (
                  <motion.span
                    ref={countUpRef}
                    className="text-black font-bold text-3xl sm:text-4xl md:text-5xl"
                    viewport={{ once: true }}
                    onViewportEnter={() => {
                      if (!count) {
                        start();
                        setCount(true);
                      }
                      return;
                    }}
                  />
                )}
              </CountUp>
              <p className="text-paragraph  text-center text-xs sm:text-sm md:text-base lg:text-lg font-normal">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Counter;
