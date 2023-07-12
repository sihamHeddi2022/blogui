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
          <h2 className='text-2xl  text-center text-white'>
               Read The feeling of other people  or Write and <br />
            express what  you feel
          </h2>
        
            <input type="text" placeholder='write something here' className='mt-12 outline-none p-3 w-[700px]' />
            <div className="w-[690px] flex justify-end gap-1 relative -top-10">
            <button className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-1 rounded-md text-sm lg:text-lg">Category </button>
            <Link to="/search"  className="bg-green-600 hover:bg-green-950  text-white px-6 py-2 rounded-md text-sm lg:text-lg"><FaSearch/></Link>
   
            </div>
    </div>
    </div>

  )
}
