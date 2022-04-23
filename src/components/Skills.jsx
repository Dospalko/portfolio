import React from "react";
import { SiC,SiReact,SiTailwindcss,SiJavascript,SiNextdotjs } from 'react-icons/si';
const Skills = () => {
  return (
    <div className="max-w-4xl mx-auto justify-center py-12" id="tech">
      <p className="text-2xl text-[#EDE6DB] sm:text-4xl text-center font-bold">
        Tech im learning and using
      </p>
      <div className="flex flex-wrap justify-center pt-2">
        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-[#EDE6DB] shadow-2xl rounded xl sm:w-52">
            <SiJavascript color='#EAD41C' className='mx-auto text-4xl'/>
            <p className="mt-6 text-xl sm:text-2xl font-semibold text-center">Javascript</p>
        </div>
        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-[#EDE6DB] shadow-2xl rounded xl sm:w-52">
            <SiReact color='#2196f3' className='mx-auto text-4xl'/>
            <p className="mt-6 text-xl sm:text-2xl font-semibold text-center">React</p>
        </div>
        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-[#EDE6DB] shadow-2xl rounded xl sm:w-52">
            <SiTailwindcss color='#1BBDAD' className='mx-auto text-4xl'/>
            <p className="mt-6 text-xl sm:text-2xl font-semibold text-center">Tailwindcss</p>
        </div>
        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-[#EDE6DB] shadow-2xl rounded xl sm:w-52">
            <SiC color='#3642A3' className='mx-auto text-4xl'/>
            <p className="mt-6 text-xl sm:text-2xl font-semibold text-center">C language</p>
        </div>
        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-[#EDE6DB] shadow-2xl rounded xl sm:w-52">
            <SiNextdotjs color='black' className='mx-auto text-4xl'/>
            <p className="mt-6 text-xl sm:text-2xl font-semibold text-center">Next.js</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
