import { CloseIcon, MenuIcon } from "@/components/ui/custom-icons";
import { AnimatePresence, motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const MenuButton = ({
  isOpen,
  onClick,
  ...props
}: {
  isOpen: boolean;
  onClick: () => void;
  props?: any;
}) => {
  return (
    <AnimatePresence mode="wait" initial={false}>
      {!isOpen ? (
        // {/*------------------*/}
        // {/*---- menu icon----*/}
        <motion.button
          className="text-sm"
          aria-label="open menu"
          variants={variants}
          key="open"
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ duration: 0.05 }}
          onClick={onClick}
        >
          <MenuIcon className="w-7 h-7  text-black" />
        </motion.button>
      ) : (
        // {/*-------------------*/}
        // {/*---- close icon----*/}
        <motion.button
          aria-label="close menu"
          variants={variants}
          key="close"
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ duration: 0.05 }}
          onClick={onClick}
          className=" text-sm"
        >
          <CloseIcon className="w-7 h-7 text-black" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default MenuButton;
