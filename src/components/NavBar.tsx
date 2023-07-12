import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className='navbar shadow  shadow-gray-400/70  flex justify-between items-center  lg:px-8 md:px-8 px-3 py-2 '>
        <h1 className='font-bold text-2xl lg:text-4xl md:text-4xl lg:p-2 md:p-2'>
            Blog
        </h1>
        <div className="links flex justify-start  items-end d gap-5">
            <Link to="/" className="text-xl lg:text-2xl  l hover:text-indigo-900" >Home</Link>
            <Link to="/login" className="bg-green-800 hover:bg-green-950 text-white px-6 py-1 rounded-md text-sm lg:text-lg">Login</Link>
            <Link to="/register"  className="bg-indigo-800 hover:bg-indigo-950  text-white px-6 py-1 rounded-md text-sm lg:text-lg">Register</Link>
        </div>
    </div>
  )
}
