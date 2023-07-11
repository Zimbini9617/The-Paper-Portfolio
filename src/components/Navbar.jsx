import React from 'react';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
const Navbar = () => {
  return (
    <>
      <nav className="bg-[#C5BEB4] w-full h-[110px] flex  justify-between items-center px-8 border-b border-[#222]">
        <h1 className="text-2xl font-NewLight w-[30%] font-thin">
          Amsterdam, NL
        </h1>
        <img
          src="https://uploads-ssl.webflow.com/5f2429f172d117fcee10e819/5f7f87c8b81a6e7a214312f0_header.svg"
          alt="logo"
          className="h-[40px] w-[30%]"
        />
        <div className="w-[30%] flex justify-end">
          <HiOutlineMenuAlt4 className="text-2xl" />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
