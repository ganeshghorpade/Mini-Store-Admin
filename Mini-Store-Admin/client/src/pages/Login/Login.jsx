import React from 'react'

function Login() {
  return (
    <div className='min-h-screen flex items-center justify-center p-4 bg-gray-100'>
      <form action="Submit" className='bg-white p-8 rounded-lg shadow-md w-full max-w-sm'>
      <h1 className='text-center text-2xl py-3 font-sans'>Login</h1>
      <div className='mb-4'><input className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400' type="text" placeholder='Username' /></div>
      <div className='mb-4'><input className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400' type="password" placeholder='Password'/></div>
      <div className='text-center'>
        <button className='text-white font-semibold bg-blue-600 hover:bg-blue-700 w-full px-4 py-2 border rounded-lg '>Login</button>
      </div>
      </form>
    </div>
  )
}

export default Login