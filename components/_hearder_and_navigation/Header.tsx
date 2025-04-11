'use client'

import { AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { NavBar } from "./NavBar";



export const Header = () => {
  const [navActive, setNavActive] = useState(false);
  return (
    <header className='absolute top-[20px] left-0 right-0 z-[60]'>
      <div className="container mx-auto px-[20px]">
          <div className="flex items-center justify-between">
            <Link href="/" className="relative w-[100px] h-[50px] md:w-[150px] md:h-[70px] z-[60]">
              <Image src="/assets/Coffe.svg" alt="logo" width={150} height={150} />
            </Link>
            {/* nav */}
            <button
            onClick={() => setNavActive(!navActive)}
            className="w-6 h-6 relative z-[60] flex items-center justify-center text-[#c7a17a] mt-5 md:mt-9
            outline-none cursor-pointer">
              {/*1*/}
              <span className={`w-full h-[1.5px] absolute left-0 will-change-transform transition-transform duration-300 bg-[#c7a17a]
              ${navActive ? 'top-1/2 rotate-45' : 'top-0 translate-y-0'}`}
              ></span>
              {/*2*/}
              <span className={`w-full h-[1.5px] absolute left-0 transition-opacity duration-300 bg-[#c7a17a]
              ${navActive ? 'opacity-0' : 'top-1/2'}`}
              ></span>
              {/*3*/}
              <span className={`w-full h-[1.5px] absolute left-0 will-change-transform transition-transform duration-300 bg-[#c7a17a]
              ${navActive ? 'top-1/2 -rotate-45' : 'bottom-0 translate-y-0'}`}
              ></span>
            </button>
          </div>
        </div>
        {/* nav */}
        <AnimatePresence mode="wait">
          {navActive && <NavBar />}
        </AnimatePresence>
    </header>
  );
};
