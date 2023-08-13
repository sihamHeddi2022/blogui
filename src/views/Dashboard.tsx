import { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import Post from '../components/sub/Post'
import { Link, useNavigate } from 'react-router-dom'
import { instance } from '../api'
import { ShortPost } from '../types'
import { FaPlus } from 'react-icons/fa'

function Dashboard() {
  const navigate=useNavigate()
  const [posts, setposts] = useState<ShortPost[]>([])

  useEffect(() => {
    const token =localStorage.getItem("token")
    if(token) {
      
      instance.get("/posts",{
        headers:{
          Authorization:"Bearer "+token
        }
      }).then((res)=>{
        console.log(res);
        
        setposts(res.data)
      })
      .catch(err=>console.log(err))
    
      
         
    }
    else {
      navigate("/")
    }

  }, [])
  
  return (
    <div>


        <NavBar/>
        
        <div className='mx-8 my-12'>
        
              <h2 className='text-3xl my-2 font-bold text-center'>
                Dashboard
              </h2>
              
              <Link className='text-emerald-600 flex gap-1 items-center my-4 ' to='/add'>
                <FaPlus/>Add Post
              </Link>

              <div className="grid  grid-cols-1  my-12 lg:gap-8  lg:grid-cols-3 md:grid-cols-2 md:gap-5 text-center  mx-8">
                     
              {
                posts.length>0 && posts.map((post:ShortPost)=> <Post {...post} key={post._id} />)
              }
              
                </div>


        </div>

    </div>
  )
}

export default Dashboard