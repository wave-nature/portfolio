import { motion } from "framer-motion";
import { Dispatch, SetStateAction, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MobileNav = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="md:hidden flex items-center justify-center bg-white">
      <motion.div animate={open ? "open" : "closed"} className="relative">
        <button
          className="text-gray-500 w-10 h-10 relative focus:outline-none bg-white block md:hidden"
          onClick={() => setOpen(!open)}
        >
          <div className="block w-5 absolute left-1/2 top-1/2   transform  -translate-x-1/2 -translate-y-1/2">
            <span
              aria-hidden="true"
              className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
                open ? "rotate-45" : "-translate-y-1.5"
              }`}
            />
            <span
              aria-hidden="true"
              className={`block absolute  h-0.5 w-5 bg-current   transform transition duration-500 ease-in-out ${
                open && "opacity-0"
              }`}
            />
            <span
              aria-hidden="true"
              className={`block absolute  h-0.5 w-5 bg-current transform  transition duration-500 ease-in-out ${
                open ? "-rotate-45" : "translate-y-1.5"
              }`}
            />
          </div>
        </button>

        {pathname === "/" ? (
          <motion.ul
            initial={wrapperVariants.closed}
            variants={wrapperVariants}
            style={{ originY: "top", translateX: "-50%" }}
            className={`${
              open ? "block" : "hidden"
            } flex-col gap-2 p-2 rounded-lg bg-white shadow-xl absolute top-[120%] left-[50%] w-48 overflow-hidden`}
          >
            <Option setOpen={setOpen} text="Elements" href="#elements" />
            <Option setOpen={setOpen} text="Services" href="#services" />
            <Option setOpen={setOpen} text="Work" href="#work" />
            <Option setOpen={setOpen} text="About us" href="#about" />
            <Option setOpen={setOpen} text="Connect" href="#footer" />
          </motion.ul>
        ) : (
          <motion.ul
            initial={wrapperVariants.closed}
            variants={wrapperVariants}
            style={{ originY: "top", translateX: "-50%" }}
            className="md:hidden flex-col gap-2 p-2 rounded-lg bg-white shadow-xl absolute top-[120%] left-[50%] w-48 overflow-hidden"
          >
            <Option setOpen={setOpen} text="Home" href="/" />
          </motion.ul>
        )}
      </motion.div>
    </div>
  );
};

const Option = ({
  text,
  setOpen,
  href,
}: {
  text: string;
  setOpen: Dispatch<SetStateAction<boolean>>;
  href: string;
}) => {
  return (
    <motion.li
      variants={itemVariants}
      onClick={() => setOpen(false)}
      className="flex items-center gap-2 w-full p-2 font-medium whitespace-nowrap rounded-md transition-colors cursor-pointer duration-500 text-lg text-slate-800 space-y-8 mt-8"
    >
      <Link href={href} className="w-full">
        {text}
      </Link>
    </motion.li>
  );
};

export default MobileNav;

const wrapperVariants = {
  open: {
    scaleY: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  closed: {
    scaleY: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
    },
  },
  closed: {
    opacity: 0,
    y: -15,
    transition: {
      when: "afterChildren",
    },
  },
};
