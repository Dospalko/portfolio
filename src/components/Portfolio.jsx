import React from "react";

import port from "../assets/port.png";
import a from "../assets/1.jpg";

import { SiFlutter } from "react-icons/si";

const Portfolio = () => {
  return (
    <div className="max-w-screen mx-auto justify-center py-12">
      <div className="flex flex-wrap justify-center pt-2 text-[#FAF5E4]">
        <div className="flex flex-col w-40 pb-5 bg-[#125B50]/50  m-6 overflow-hidden  shadow-xl rounded xl sm:w-[500px]">
          <img src={a} alt="" className="mx-auto w-full" />

          <p className="mt-6 text-xl sm:text-2xl font-semibold text-center">
            Blog project
          </p>
          <p className="mt-6 text-xl sm:text-2xl font-semibold text-center">
            DJANGO
          </p>
        </div>
        <div className="flex flex-col bg-[#125B50]/50 w-40 m-6 pb-5 overflow-hidden shadow-xl rounded xl sm:w-[500px]">
          <img src={a} alt="" className="mx-auto w-full" />

          <p className="mt-6 text-xl sm:text-2xl font-semibold text-center">
            Lorem ipsum dolor sit amet consectetur adipisiem. Suscipita
            molestiae voluptas, nemo iusto.
          </p>
        </div>
        <div className="flex flex-col w-40 pb-5 bg-[#125B50]/50 m-6 overflow-hidden shadow-xl rounded xl sm:w-[500px]">
          <img src={a} alt="" className="mx-auto w-full" />

          <p className="mt-6 text-xl sm:text-2xl font-semibold text-center">
            Lorem ipsum dolor sit amet consectetur adipisiem. Suscipita
            molestiae voluptas, nemo iusto.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
