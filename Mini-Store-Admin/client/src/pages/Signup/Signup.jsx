import React from 'react'
import { NavLink } from "react-router-dom"
function Signup() {
  return (
    <>
    <div className='min-h-screen flex py-3  justify-center  bg-gray-100'>
      <form action="Submit" className='bg-white px-5 py-6 h-full pb-8  rounded-xl shadow-md w-full max-w-sm'>
        <h1 className='text-center text-xl py-1 font-sans text-blue-600'>Sign Up</h1>
        <p className='text-center text-xs  py-3'>Already have an account?<span><NavLink className='text-blue-600 cursor-pointer' to="/login">Login Now</NavLink></span></p>
      <div className='mb-3'><input className=' text-xs w-full px-3 py-2 border rounded-lg  focus:outline-none focus:ring-2 focus:ring-blue-400' type="text" placeholder='First Name' /></div>
      <div className='mb-3'><input className=' text-xs w-full px-3 py-2 border rounded-lg  focus:outline-none focus:ring-2 focus:ring-blue-400' type="text" placeholder='Last Name' /></div>
      <div className='mb-3'><input className=' text-xs w-full px-3 py-2 border  rounded-lg  focus:outline-none focus:ring-2 focus:ring-blue-400' type="text" placeholder='Mobile Number' /></div>
      <div className='mb-3'><input className=' text-xs w-full px-3 py-2 border rounded-lg  focus:outline-none focus:ring-2 focus:ring-blue-400' type="email" placeholder='Email address'/></div>
      <div className='mb-3'><input className=' text-xs w-full px-3 py-2 border rounded-lg  focus:outline-none focus:ring-2 focus:ring-blue-400' type="password" placeholder='Password'/></div>
      <div className='text-center'>
        <button className='text-white  font-semibold bg-blue-600 hover:bg-blue-700 w-full px-4 py-2 border rounded-lg cursor-pointer'>Signup</button>
         <span className="mx-2 text-xs text-gray-500">OR</span>
        <button className="text-black mt-2 text-sm flex gap-2 justify-center font-semibold  w-full px-4 py-2 border rounded-lg cursor-pointer"><img width="23" height="23" src="https://img.icons8.com/color/48/google-logo.png" alt="google-logo"/>Continue With Google</button>
      </div>
      </form>
    </div>
    </>
  )
}

export default Signup