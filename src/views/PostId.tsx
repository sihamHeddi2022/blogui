import { useState,useEffect } from 'react'
import NavBar from '../components/NavBar'
import Hero from '../components/Hero'
import { Link, useNavigate, useParams } from 'react-router-dom'
import {FaEdit,FaImage,FaBox} from 'react-icons/fa'
import imageSrc from '../assets/blog.jpg';
import { Rating } from 'react-simple-star-rating'

import Comment from '../components/sub/Comment'
import { instance } from '../api'
import { Commenty, ShortPost } from '../types'

function PostId() {


  const [comment, setcomment] = useState("")

  const [isAuth, setisAuth] = useState(false)
  const [rating, setRating] = useState(1)
  const {id}=useParams()
  const [post, setpost] = useState<ShortPost | null>(null)
   
  const idu = localStorage.getItem("id")
  const token =localStorage.getItem("token")
   useEffect(() => {
    
 
    if(token) setisAuth(true)
    
    instance.get("/post/"+id).then(res=>{
      setpost(res.data)
    })



  }, [])
  


  
  const handleSubmit = ()=>{
  
     instance.post("/post/"+post?._id+"/feedback/",{
        content:comment,
        reviews : rating
     },{
      headers:{
        Authorization:"Bearer "+token
      }
    })
    .then(()=>{
         window.location.reload()
    })
    .catch((err)=>console.log(err))







  }
  const navigate=useNavigate()
  
  const deletto = ()=>{
      
    instance.delete(`/post/${id}/`,{
      headers:{
        Authorization:"Bearer "+token
      }
    })
    .then(()=>{
        navigate("/")
    })
    .catch(err=>console.log(err))
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
          isAuth && ( post?.authorId== idu && (
            <div className='flex gap-2'>
                <Link to={"/edit/"+post?._id} className='flex bg-rose-700 items-center gap-1	text-white px-4 py-2 rounded-md' >
                  <FaImage/> Edit Image
                </Link>
                <Link className='flex bg-rose-700 items-center gap-1	 text-white px-4 py-2 rounded-md' to={"/edit/"+id}>
                <FaEdit/>  Edit
                </Link>
                <button onClick={deletto} className='flex bg-indigo-500 items-center gap-1		text-white px-4 py-2 rounded-md' >
                <FaBox/> Delete
                </button>
            </div>
          ) 
          )
        }
       

      

       </div>

       <img src={post?.image?post.image:imageSrc} alt="" className='w-full object-cover h-[500px] mt-4'/>
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
                  <Rating  initialValue={rating} onClick={(e)=>setRating(e)} SVGstyle={{display:"inline"}}/>
                </div>
                <div className='bg-indigo-50	my-3	 w-full p-3'>
                 
                      <input type="text" required value={comment} onChange={(e)=>setcomment(e.target.value)} className='w-full p-2 outline-none' placeholder='Comment here ...' />
                      <button onClick={handleSubmit} className='w-full my-2 p-2 bg-blue-700 text-white' >
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
            post?.comments?.map((c:Commenty)=><Comment {...c} isAuth={isAuth} pid={post?._id}  />)
          }
        
       </div>
      

    </div>
  )
}

export default PostId