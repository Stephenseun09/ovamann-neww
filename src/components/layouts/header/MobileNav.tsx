import SocialMedia from "@/components/ui/SocialMedia";
import { headerData } from "@/constants";
import { motion } from "framer-motion";
import Link from "next/link";

// framer motion animation variants
const navVariants = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      ease: "easeInOut",
    },
  },
  exit: {
    x: 100,
    opacity: 0,
    transition: {},
  },
};
const ulVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      type: "spring",
      delay: 0.1,
    },
  },
  exit: {
    opacity: 0,
    transition: { ease: "easeInOut" },
  },
};
const listVariants = {
  hidden: {
    y: 20,
    opacity: 0,
  },
  visible: (index: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: index * 0.1,
    },
  }),
  exit: (index: number) => ({
    y: -20,
    opacity: 0,
    transition: {
      delay: index * 0.1,
    },
  }),
};

const MobileNav = ({ onClose }: { onClose: () => void }) => {
  const { navItems } = headerData;
  return (
    <motion.nav
      className="fixed top-0 z-40 h-screen w-full  md:hidden bg-white"
      variants={navVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="flex h-[95%] flex-col  pt-20 pb-10 ">
        <motion.ul
          className="container flex flex-col items-center space-y-6 border-t border-slate-300 px-6  pt-16 text-xl font-bold uppercase tracking-widest h-1/2"
          variants={ulVariants}
        >
          {navItems.map((item, index) => (
            <motion.li
              key={index}
              className="list-none"
              variants={listVariants}
              initial="hidden"
              whileInView="visible"
              exit="exit"
              custom={index}
              onClick={onClose}
            >
              <Link
                href={item.link}
                className="inline-block border-transparent text-center transition-all hover:text-primary"
              >
                {item.name}
              </Link>
            </motion.li>
          ))}
        </motion.ul>
        <div className="flex grow items-end justify-center">
          <motion.div
            className="flex space-x-4 justify-center "
            variants={listVariants}
            initial="hidden"
            whileInView="visible"
            exit="exit"
            custom={3}
          >
            <SocialMedia />
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
};

export default MobileNav;
