import imageSrc from '../../assets/blog.jpg';

function Post() {
  return (
    <div className='shadow shadow-gray-300'>
        <img src={imageSrc} alt="" className='object-cover h-[200px] w-full' />
        <div className="flex flex-col justify-center gap-4 my-3 mx-4">
            <h3>
                Title
            </h3>
            <p>
                dkksdkksdksdksdksdksdksdks ...
            </p>
            <button className='bg-emerald-700 p-1 text-white rounded-full'>
                read more
            </button>
        </div>
    </div>
  )
}

export default Post