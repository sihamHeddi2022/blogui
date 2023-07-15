import React, { useEffect,useState } from 'react'
import Post from './sub/Post'
import { instance } from '../api'

import { ShortPost } from '../types'
function Popular() {
  const [posts, setposts] = useState([])
  const [loading, setloading] = useState(true)
  useEffect(() => {
    async function getPosts() {
      const p = await instance.get("/popular")
      setposts(p.data)
      setloading(false)
      
    }
     getPosts()
  }, [])
  
  return (
    <div className=' py-24 text-center '>
     
        <h1 className='popular  font-bold text-xl lg:text-3xl md:text-2xl '>
            The Most popular Post
        </h1>
        {
         loading && (<div className="text-center">
           loading ...
         </div>)
        }
        <div className="grid  grid-cols-1  my-12 lg:gap-8  lg:grid-cols-3 md:grid-cols-2 md:gap-5   mx-8">


              {
                posts.length>0 && posts.map((post:ShortPost)=> <Post {...post} key={post._id} />)
              }
              
              
          
             
        </div>






    </div>
  )
}

export default Popular