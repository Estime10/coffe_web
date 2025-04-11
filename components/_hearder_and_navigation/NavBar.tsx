import { motion } from "framer-motion";
import { NavList } from "./NavList";

const heightAnimation = {
  initial: { height: 0 },
  open: { height: "85vh", transition: { duration: 0.5, ease: [0.75,0,0.23,1] } },
  closed: { height: 0, transition: { duration: 0.5, ease: [0.75,0,0.23,1] } },
};


export const NavBar = () => {
  return (
    <motion.nav
    variants={heightAnimation}
      className="bg-[#1c1c1a] text-[#c7a17a] overflow-hidden  absolute z-[50] -top-full w-full"
      initial="initial"
      animate="open"
      exit="closed"
    >
      <div className="container mx-auto h-full flex items-center justify-center">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-y-6">
            <NavList />
          </div>
        </div>
      </div>
    </motion.nav>
  )
}
