import React from 'react'
import Post from './sub/Post'
function Popular() {
  return (
    <div className=' py-24 text-center '>
     
        <h1 className='popular  font-bold text-3xl'>
            The Most popular Post
        </h1>

        <div className="grid my-12 gap-8  grid-cols-3 mx-8">
              <Post/>
              <Post/>
              <Post/>
              <Post/>
        </div>






    </div>
  )
}

export default Popular