import React from 'react'

function Login() {
  return (
    <div className='min-h-screen flex  justify-center py-3 bg-gray-100'>
      <form  className='bg-white p-8 h-full rounded-lg shadow-md w-full max-w-sm'>
      <h1 className='text-center text-xl py-3 font-sans text-blue-600'>Login</h1>
      <div className='mb-4'><input className='w-full px-4 py-2 text-xs border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400' type="email" placeholder='Email address' /></div>
      <div className='mb-4'><input className='w-full px-4 py-2 text-xs border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400' type="password" placeholder='Password'/></div>
      <p className='text-blue-600 text-xs mb-2 cursor-pointer'>Forgot your password?</p>
      <div className='flex items-center mb-3 '>
        <input type="checkbox" className='mr-2 cursor-pointer' />
        <label className='text-xs' htmlFor="">Remember me</label>
      </div>
      <div className='text-center'>
        <button type='submit' className='text-white font-semibold bg-blue-600 hover:bg-blue-700 w-full px-4 py-2 border rounded-lg cursor-pointer '>Login</button>
         <span className="mx-2 text-xs text-gray-500">OR</span>
        <button className='text-black mt-2 text-sm flex gap-2 justify-center font-semibold  w-full px-4 py-2 border rounded-lg cursor-pointer '><img width="23" height="23" src="https://img.icons8.com/color/48/google-logo.png" alt="google-logo"/>Continue With Google</button>

      </div>
      </form>
    </div>
  )
}

export default Login