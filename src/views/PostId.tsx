import React, { useState,useEffect } from 'react'
import NavBar from '../components/NavBar'
import Hero from '../components/Hero'
import { Link, useParams } from 'react-router-dom'
import {FaEdit,FaImage,FaBox} from 'react-icons/fa'
import imageSrc from '../assets/blog.jpg';
import { Rating, ThinStar } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
import Comment from '../components/sub/Comment'
import EditComment from '../components/sub/EditComment'
import { instance } from '../api'
import { Commenty, ShortPost } from '../types'

function PostId() {


  const [isAuth, setisAuth] = useState(false)
  const [rating, setRating] = useState(0)
  const {id}=useParams()
  const [post, setpost] = useState<ShortPost | null>(null)
   
   useEffect(() => {
    
    const token =localStorage.getItem("token")
    if(token) setisAuth(true)
    
    instance.get("/post/"+id).then(res=>{
      setpost(res.data)
    })



  }, [])
  


  const myStyles = {
    itemShapes: ThinStar,
    activeFillColor: '#ffb700',
    inactiveFillColor: '#fbf1a9'
  }
  return (
    <div>


      <NavBar/>
       <Hero/>
       
       <div className='mx-8 my-12'>
       <div className=' flex justify-between   '>
      
         <h2 className='text-3xl font-bold'>
           {post?.title}
         </h2>
        
        {
          isAuth && (  <div className='flex gap-2'>
                          <Link className='flex bg-rose-700 items-center gap-1	text-white px-4 py-2 rounded-md' to={"/editi/"+id}>
                            <FaImage/> Edit Image
                          </Link>
                          <Link className='flex bg-rose-700 items-center gap-1	 text-white px-4 py-2 rounded-md' to={"/edit/"+id}>
                          <FaEdit/>  Edit
                          </Link>
                          <button className='flex bg-indigo-500 items-center gap-1		text-white px-4 py-2 rounded-md' >
                          <FaBox/> Delete
                          </button>
                    </div>
          )
        }
       

      

       </div>

       <img src={post?.image} alt="" className='w-full object-cover h-[500px] mt-4'/>
       <p className='my-6'>
        {post?.description}
       </p>
        {
          isAuth && (
           <>
           
                <div>
                  <h2 className='font-bold text-2xl my-2'>
                  Comment Review :
                  </h2>
                  <Rating style={{ maxWidth: 300 }} value={rating} onChange={setRating} itemStyles={myStyles} />
                </div>
                <div className='bg-indigo-50	my-3	 w-full p-3'>
                  <input type="text" className='w-full p-2 outline-none' placeholder='Comment here ...' />
                  <button className='w-full my-2 p-2 bg-blue-700 text-white'>
                    Submit
                  </button>
                </div>
           
           </>
          )
        }
          {/* <EditComment/> */}
          <h1 className='my-5 font-bold'>
            Comments
          </h1>
          {
            post?.comments?.map((c:Commenty)=><Comment {...c} isAuth={isAuth}  />)
          }
        
       </div>
      

    </div>
  )
}

export default PostId