import React,{useState} from 'react'
import { Rating, ThinStar } from '@smastrom/react-rating'
import { instance } from '../../api'

type Ids = {
  cid:string,
  pid:string,
  rating:number,
  content:string
}

function EditComment(props:Ids) {
    const [rating, setRating] = useState(props.rating)
    const [content, setcontent] = useState(props.content)
    const myStyles = {
      itemShapes: ThinStar,
      activeFillColor: '#ffb700',
      inactiveFillColor: '#fbf1a9' 
    }
    const handle = (e)=>{
      e.preventDefault()

      const token = localStorage.getItem("token")
        instance.put(`/post/${props.pid}/feedback/${props.cid}/`,{
          content:content,
          reviews : rating
       },{
        headers:{
          Authorization:"Bearer "+token
        }
      })
        .then(()=>{
          window.location.reload()
        })
        .catch(err=>console.log(err))
    }
  return (
    <div className='w-full'>

        <div className='flex gap-3 w-full'>
            
            <img src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Images.png" className='my-4 w-[60px] h-[60px]' alt="" />
            
            <div className='flex flex-col gap-2 w-full'>
                <h3 className='font-bold'>
                    Username
                </h3>
              <form action="" onSubmit={handle}>
              <Rating style={{ maxWidth: 122 }} value={rating} onChange={setRating}  itemStyles={myStyles} />
                <div className="mt-2.5">
                        <input type="text" name="comment" id="c" value={content} onChange={(e)=>setcontent(e.target.value)} className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                </div>
                <div className="mt-1">
                  <button type="submit" className="block w-full rounded-md bg-green-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">submit</button>
                </div>
              </form>

            </div>

        

        </div>
            

    </div>
  )
}

export default EditComment