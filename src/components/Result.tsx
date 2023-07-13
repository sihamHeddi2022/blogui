import React from 'react'
import Post from './sub/Post'

function Result() {
  return (
    <div className='text-center'>


            
            <h1 className='popular  font-bold text-xl  mt-4 lg:text-3xl md:text-2xl '>
                      search result
                    </h1>

                    <div className="grid  grid-cols-1  my-12 lg:gap-8  lg:grid-cols-3 md:grid-cols-2 md:gap-5   mx-8">
                        <Post/>
                        <Post/>
                        <Post/>
                        <Post/>
                    </div>



    </div>
  )
}

export default Result