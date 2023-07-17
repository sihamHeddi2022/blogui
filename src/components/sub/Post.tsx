import imageSrc from '../../assets/blog.jpg';
import { Link } from "react-router-dom";
import { ShortPost } from '../../types';

function Post(props:ShortPost) {
  return (
    <div className='shadow shadow-gray-300 mb-4'>
        <img src={props.image?props.image:imageSrc} alt="" className='object-cover h-[200px] w-full' />
        <div className="flex flex-col justify-center gap-4 my-3 mx-4">
            <h3 className='text-xl'>
                {props.title}
            </h3>
            <p className='truncate'>
                {props.description} 
            </p>
            <Link className='bg-emerald-700 p-1 text-white rounded-full' to={`/post/${props._id}`}>
                read more
            </Link>
        </div>
    </div>
  )
}

export default Post