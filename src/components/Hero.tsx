import React from 'react'
import imageSrc from '../assets/Rectangle 4.png';
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

export default function Hero() {
  return (
    
    <div className='relative'>
      <div className='w-full h-[500px]'>
        <img src={imageSrc} alt="" className='object-cover w-full h-full' />
      </div>

      <div className='bg-black/50 w-full h-[500px] absolute top-0 left-0'>
      </div>
       <div className='absolute top-28 font-bold w-full flex flex-col items-center justify-center   hero '>
          <h2 className='text-base lg:text-2xl md:text-2xl   text-center text-white'>
               Read The feeling of other people  or Write and <br />
            express what  you feel
          </h2>
        
            <input type="text" placeholder='write something here' className='mb-5 lg:mb-0 md:mb-0 sm:mb-0 mt-12 outline-none p-3 lg:w-[700px] md:w-[500px] sm:w-[400px]' />
            <div className="static justify-center  sm:w-[390px] lg:w-[690px] md:w-[490px] flex lg:justify-end md:justify-end sm:justify-end gap-1 lg:relative md:relative sm:relative -top-10">
           
            <select className='mx-3 outline-none'>
              <option value="">
                Category
              </option>
              <option value="">
                health
              </option>
            </select>
           
          
            <Link to="/search"  className="bg-green-600 hover:bg-green-950  text-white px-6 py-2 rounded-md text-sm lg:text-lg"><FaSearch/></Link>
   
            </div>
    </div>
    </div>

  )
}
