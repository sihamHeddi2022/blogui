import imageSrc from '../../assets/blog.jpg';
import { Link } from "react-router-dom";

function Post() {
  return (
    <div className='shadow shadow-gray-300 mb-4'>
        <img src={imageSrc} alt="" className='object-cover h-[200px] w-full' />
        <div className="flex flex-col justify-center gap-4 my-3 mx-4">
            <h3 className='text-xl'>
                Title
            </h3>
            <p className='truncate'>
                dkksdkksdksdksdksdksdksdks 
            </p>
            <Link className='bg-emerald-700 p-1 text-white rounded-full' to="/post/22939329">
                read more
            </Link>
        </div>
    </div>
  )
}

export default Post