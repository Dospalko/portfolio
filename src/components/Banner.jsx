import React from "react";
import { ArrowDownIcon } from '@heroicons/react/solid'
const Banner = () => {
  return (
    <div className=" w-full text-center mt-[80px]">
      <h2 className="text-4xl text-[#CDBE78] font-bold animate-pulse">SOMETHING FROM MY WORK</h2>
      <ArrowDownIcon className=" animate-bounce h-10 w-10 my-4 text-[#E9D5DA] text-center m-auto"/>
    </div>
  );
};

export default Banner;
