import React from "react";
import { Link } from "react-router-dom";
import port from "../assets/port.png";
const Hero = () => {
  return (
    <div className="w-full flex items-center  justify-center" >
    
      <div className="flex flex-row mt-[40px]">
        <img src={port} className=" rounded-l-[40px] bg-[#1D5C63]" alt="abc" />
      </div> 
      <div className="pl-[40px]  flex flex-col tracking-wide md:text-xl">
        <p className="pt-12 md:text-xl py-3 text-[#EDE6DB] italic">Hi! I'm</p>
        <h2 className="md:text-2xl md:animate-bounce  decoration-[#1D5C63] underline decoration-wavy underline-offset-8  text-[#EDE6DB] uppercase font-bold">Dominik Palo</h2>
        <p className=" md:text-xl py-3 text-[#EDE6DB] italic">Im react web developer , designer & student based in Kosice</p>
        <div className="flex">
          <Link className=" text-sm px-4  md:py-5 md:px-8 mt-6 bg-[#417D7A] text-[#EDE6DB] md:text-xl rounded-md hover:bg-[#EDE6DB] hover:text-black  transition  duration-300 ease-in-out flex items-center " to="/">Read more!</Link>
          <Link className=" text-sm px-4 md:py-5 md:px-8 ml-4 mt-6 bg-[#417D7A]   md:text-xl rounded-md text-[#EDE6DB] hover:bg-[#EDE6DB] hover:text-black transition duration-300 ease-in-out flex items-center " to="/">Download CV </Link>
        </div>
      </div>
    </div>

 
  );
};

export default Hero;
