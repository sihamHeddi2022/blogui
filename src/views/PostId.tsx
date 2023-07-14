import React, { useState } from 'react'
import NavBar from '../components/NavBar'
import Hero from '../components/Hero'
import { Link } from 'react-router-dom'
import {FaEdit,FaImage,FaBox} from 'react-icons/fa'
import imageSrc from '../assets/blog.jpg';
import { Rating, ThinStar } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
import Comment from '../components/sub/Comment'
import EditComment from '../components/sub/EditComment'
function PostId() {
  const [rating, setRating] = useState(0)
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
           Title
         </h2>

         <div className='flex gap-2'>
            <Link className='flex bg-rose-700 items-center gap-1	text-white px-4 py-2 rounded-md'>
               <FaImage/> Edit Image
            </Link>
            <Link className='flex bg-rose-700 items-center gap-1	 text-white px-4 py-2 rounded-md'>
            <FaEdit/>  Edit
            </Link>
            <Link className='flex bg-indigo-500 items-center gap-1		text-white px-4 py-2 rounded-md'>
            <FaBox/> Delete
            </Link>
         </div>


      

       </div>

       <img src={imageSrc} alt="" className='w-full object-cover h-[500px] mt-4'/>
       <p className='my-6'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo vitae temporibus repellat numquam labore commodi modi alias odio, tempore facilis ratione nihil. Unde sint in earum ad quia, perspiciatis alias est, assumenda nemo cupiditate quisquam, reiciendis quidem velit sapiente maxime dolor non laboriosam doloribus deserunt soluta. Quam voluptas impedit, tenetur, iste possimus pariatur aperiam perferendis quidem quos quaerat veritatis ullam. Accusantium adipisci dolorum reiciendis quasi omnis totam, molestias laudantium corrupti eligendi. Harum, hic. Rerum culpa vero in dolorum, doloremque autem ducimus beatae quo ullam quia commodi voluptatem ipsum quod id vitae, dolor libero voluptatum saepe. Saepe dolorem, sapiente excepturi quasi omnis accusamus commodi neque odio, nostrum ut unde! Dolorem ullam impedit ipsum, eveniet exercitationem sed officiis neque, nesciunt nemo eum soluta molestias quibusdam. Magni vero quis iusto quas atque ipsum, aut nesciunt minus eveniet obcaecati a adipisci fugit ducimus possimus neque ipsa accusantium exercitationem optio!sz
       </p>
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
          <EditComment/>
          <Comment/>
          <Comment/>
       </div>
      

    </div>
  )
}

export default PostId