import React, {useState} from 'react'
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
  return (
    <div className="w-full h-[80px] bg-[#EDE6DB] drop-shadow-lg z-10">
      <div className="px-2 flex justify-between md:justify-around items-center w-full h-full">
        <div className="flex items-center">
          <h1 className="text-3xl text-[#1A3C40] font-bold mx-[30px] sm:text-4xl text-text">
            DEVminik.
          </h1>
       
        </div>
        <div className="flex">
          <ul className="hidden md:flex">
            <Link className="link" to="/">
              Home
            </Link>
            <Link className="link" to="/">
              About me
            </Link>
            <Link className="link" to="/">
              Portfolio
            </Link>
            <Link className="link" to="/">
              Contact
            </Link>
            <Link className="link" to="/">
              Work
            </Link>
          </ul>
        </div>
        <div className='md:hidden' onClick={handleClick}>
            {!nav ? <MenuIcon className='w-8'/> : <XIcon className='w-8'/>}
          </div>
      </div>
        <ul className={!nav ? 'hidden' : 'absolute bg-[#1D5C63] items-center m-auto justify-center  text-[#EDE6DB] w-full px-8 py-5'}>
            <Link className="links" to="/">
              Domov
            </Link>
            <Link className="links" to="/">
              Domov
            </Link>
            <Link className="links" to="/">
              Domov
            </Link>
            <Link className="links" to="/">
              Domov
            </Link>
            <Link className="links" to="/">
              Domov
            </Link>
          
    </ul>
    </div>
  );
};

export default Navbar;
