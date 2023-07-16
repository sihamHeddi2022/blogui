import React, { useEffect, useState } from 'react'
import Hero from '../components/Hero'
import NavBar from '../components/NavBar'
import Result from '../components/Result'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { instance } from '../api'

function Search() {

  const [searchParams] = useSearchParams();
  const [posts, setposts] = useState() 

  const navigate=useNavigate()

   useEffect(()=>{
     const keyword= searchParams.get("keyword") 
     const category = searchParams.get("category")
     console.log(keyword);
     
    if( !keyword || !category ) navigate("/")
    else {

      instance.get(`/search?keyword=${keyword}&category=${category}`)
      .then(res=>{
       
        console.log(res);
        
      
        setposts(res.data)
      
      })
    
    }
   
   
    },[])
   
  return (
    <div>
      
      <NavBar/>
       <Hero/>
        {
          posts && <Result posts={posts}/>
        }
        <h2 className='text-center  my-4'>
           Created by Siham Heddi 💘 2022 - 2023
        </h2>




    </div>
  )
}

export default Search