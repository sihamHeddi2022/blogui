
import { FaBox, FaEdit } from 'react-icons/fa'
import { Rating } from 'react-simple-star-rating'
import { Commenty } from '../../types'
import EditComment from './EditComment'
import { instance } from '../../api'
import { useState } from 'react'

type C = Commenty & {
  isAuth:boolean
} & {
  pid:string
}
function Comment(props:C) {
  const [isEdited, setisEdited] = useState(false)

  const deleteMe = ()=>{
    const token = localStorage.getItem("token")
 
    instance.delete(`/post/${props.pid}/feedback/${props._id}/`,{
    headers:{
      Authorization:"Bearer "+token
    }
  })
    .then(()=>{
      window.location.reload()
    })
    .catch(err=>console.log(err))
  }

  const idu = localStorage.getItem("id")
  return (
    <>
     {
      isEdited?<EditComment cid={props._id} pid={props.pid} content={props.content} rating={props.reviews}/>:
      <div className='my-5 w-full'>
       
       <div className='flex gap-3 w-full'>
         
         <img src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Images.png" className='my-4 w-[60px] h-[60px]' alt="" />
       
         <div className='flex flex-col gap-2 w-1/2'>
            <h3 className='font-bold'>
              Username
            </h3>
           
            <Rating initialValue={props.reviews}  readonly   SVGstyle={{display:"inline"}}/>
           
            <p>
              {props.content}
            </p>
         
  
         </div>
        {
          props.isAuth && ( props.userId == idu &&(
            <div className='flex gap-2 ml-auto'>
                <button className='text-emerald-600 flex gap-1 items-center' onClick={()=>setisEdited(true)}>
                <FaEdit/>Edit
                </button>
                <button className='text-red-700 flex gap-1 items-center' onClick={deleteMe}>
                    <FaBox/> delete
                </button>
          </div>
          ) 
          
          )
        }
     
  
       </div>
       
  
  
  
      </div>
     }
      
    </>
  )
}

export default Comment