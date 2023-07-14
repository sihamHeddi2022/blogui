import React from 'react'
import NavBar from '../components/NavBar'

function Edit() {
  return (
    <div>
    <NavBar/>
     
        <div className='mx-8 my-12'>
        
              <h2 className='text-3xl font-bold text-center'>
                Update Post
              </h2>
   
   
<form action="#" method="POST" className="mx-auto mt-5 max-w-xl sm:mt-5">
    <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">

      <div className="sm:col-span-2">
        <label htmlFor="title" className="block text-sm font-semibold leading-6 text-gray-900">title</label>
        <div className="mt-2.5">
          <input type="text" name="title" id="title"  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>
      
      <div className="sm:col-span-2">
        <label htmlFor="description" className="block text-sm font-semibold leading-6 text-gray-900">description</label>
        <div className="mt-2.5">
          <textarea  name="description" id="description" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
        </div>
      </div>
      
   
    </div>
    <div className="mt-10">
      <button type="submit" className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">submit</button>
    </div>
  </form>

   
       </div>   
       
       
       </div>
  )
}

export default Edit