import React,{useState} from 'react'
import { FaBox, FaEdit } from 'react-icons/fa'
import { Rating, ThinStar } from '@smastrom/react-rating'

function Comment() {
  const [rating, setRating] = useState(3)
  const myStyles = {
    itemShapes: ThinStar,
    activeFillColor: '#ffb700',
    inactiveFillColor: '#fbf1a9' 
  }
  return (
    <div className='my-5'>
     
     <div className='flex gap-3'>
       
       <img src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Images.png" className='my-4 w-[60px] h-[60px]' alt="" />
     
       <div className='flex flex-col gap-2'>
          <h3 className='font-bold'>
            Username
          </h3>
          <Rating style={{ maxWidth: 122 }} value={rating} onChange={setRating} readOnly itemStyles={myStyles} />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate, lab
          </p>
       

       </div>

      <div className='flex gap-2 ml-auto'>
        <button className='text-emerald-600 flex gap-1 items-center'>
        <FaEdit/>Edit
        </button>
        <button className='text-red-700 flex gap-1 items-center'>
        <FaBox/> delete
        </button>
      </div>

     </div>
     



    </div>
  )
}

export default Comment