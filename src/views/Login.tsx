import React from 'react'
import NavBar from '../components/NavBar'

function Login() {
  return (
    <div>
    <NavBar/>
    <h3 className='text-center mt-4 text-3xl font-bold'>
        Login
    </h3>

<form action="#" method="POST" className="mx-auto mt-5 max-w-xl sm:mt-5">
    <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">

      <div className="sm:col-span-2">
        <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">Email</label>
        <div className="mt-2.5">
          <input type="email" name="email" id="email" autoComplete="email" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="password" className="block text-sm font-semibold leading-6 text-gray-900">Password</label>
        <div className="mt-2.5">
          <input type="password" name="password" id="password" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>
   
    </div>
    <div className="mt-10">
      <button type="submit" className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">submit</button>
    </div>
  </form>
    </div>
  )
}

export default Login