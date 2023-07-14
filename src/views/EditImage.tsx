import React from 'react'
import NavBar from '../components/NavBar'
import Upload from '../components/sub/Upload'

function EditImage() {
  return (
    <div>
          <NavBar/>
        
        <div  className="mx-auto mt-5 max-w-xl sm:mt-5">
        
              <h2 className='text-3xl font-bold text-center my-5'>
               Edit image
              </h2>

           <Upload/>
           <button type="submit" className="mt-4 block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">submit</button>


          </div>
          
      </div>
  )
}

export default EditImage