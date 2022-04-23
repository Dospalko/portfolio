import React, { useEffect } from 'react'
import {FaArrowRight} from 'react-icons/fa'

import "aos/dist/aos.css"
const Contact = () => {

  

  return (
    <div className='max-w-lg w-full text-center m-auto pt-2 pb-10'>
        <h1 className='text-2xl sm:text-4xl'>Do you want to hire me?</h1>
        <a href='mailto:dominikpalo12@gmail.com'>
            <span className='mt-6 inline-block w-auto bg-black font-diplay text-white text-base md:text-xl py-4 px-7 cursor-pointer'>
                <div className="flex flex-row items-center">
                    <span className='mr-3'>Get in touch </span>
                    <FaArrowRight color='white'/>
                </div>
            </span>
        </a>
    </div>
  )
}

export default Contact