import React from 'react'
import NavBar from '../components/NavBar'
import Post from '../components/sub/Post'

function Dashboard() {
  return (
    <div>


        <NavBar/>
        
        <div className='mx-8 my-12'>
        
              <h2 className='text-3xl my-2 font-bold text-center'>
                Dashboard
              </h2>


              <div className="grid  grid-cols-1  my-12 lg:gap-8  lg:grid-cols-3 md:grid-cols-2 md:gap-5 text-center  mx-8">
                            <Post/>
                            <Post/>
                            <Post/>
                            <Post/>
                </div>


        </div>

    </div>
  )
}

export default Dashboard