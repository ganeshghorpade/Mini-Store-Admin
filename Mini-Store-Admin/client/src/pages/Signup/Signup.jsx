import { React,useState, } from 'react'
import { NavLink,useNavigate } from "react-router-dom"


function Signup() {

  const navigate = useNavigate();
  

  const [formdata,setformdata] =useState({
    firstname:"",
    lastname:"",
    mobnumber:"",
    email:"",
    password:""
  });


  const [error ,setError] = useState({});

  const handleChange = (e) => {
    setformdata({
      ...formdata,
      [e.target.name]: e.target.value
    });
    
    setError({
    ...error,
    [e.target.name]: ""
  });
  };

   const onSubmit = async(e)=>{

    e.preventDefault();

    let newErrors = {};

    if(!formdata.firstname){
      newErrors.firstname = "firstname is required"
      
    }
    else if(!/^[A-Za-z]+$/.test(formdata.firstname)){
      newErrors.firstname = "First name must contain only letters"
    }
    if(!formdata.lastname){
      newErrors.lastname = "lastname is required"
    }
    else if(!/^[A-Za-z]+$/.test(formdata.lastname)){
      newErrors.lastname = "lastname must contain only letters"
    }
    
    if(!formdata.mobnumber){
      newErrors.mobnumber = "mobile number is required"
    }

    else if(!/^[0-9]{10}$/.test(formdata.mobnumber)){
        newErrors.mobnumber = "Mobile number must contain exactly 10 digits"
    }

    if(!formdata.email){
      newErrors.email = "Email is required"
    }
    else if(!/^\S+@\S+\.\S+$/.test(formdata.email)){
        newErrors.email = "invalid email"
    }

    if(!formdata.password){
      newErrors.password = "password is required"
    }
    else if(formdata.password.length < 6){
       newErrors.password =  "password must be at least 6 charcter"
    }

    setError(newErrors);
    if (Object.keys(newErrors).length > 0) {
      return;
    }

    try {

    const response = await fetch("http://localhost:5000/api/auth/signup",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify(formdata)
    })

    let result = await response.json();

    if(response.ok){
      setError({});
      console.log(result)
      navigate('/login')
    }else{
      setError({api:result.message})
    }} catch (err) {
      setError({ api: "Something went wrong"});
      console.log(err);
      

    }
  } 
    
  return (
    <>
    <div className='min-h-screen flex py-3  justify-center  bg-gray-100'>
      <form onSubmit={onSubmit} className='bg-white px-5 py-6 h-full pb-8  rounded-xl shadow-md w-full max-w-sm'>
        <h1 className='text-center text-xl py-1 font-sans text-blue-600'>Sign Up</h1>
        <p className='text-center text-xs  py-3'>Already have an account?<span><NavLink className='text-blue-600 cursor-pointer' to="/login">Login Now</NavLink></span></p>
        {error.api && <p className="text-red-500 p-2  text-xs mb-2 text-center bg-red-100">{error.api}</p>}

      <div className='mb-3'>
      <input name='firstname' className= { error.firstname ? " focus:outline-none text-xs w-full px-3 py-2  rounded-lg border  border-red-300 ring-1 ring-red-300 ":" focus:outline-none text-xs w-full px-3 py-2 border rounded-lg border-blue-500 "} value ={formdata.firstname} onChange={handleChange} type="text" placeholder='First Name' />
      {error.firstname && <p className='text-red-500 text-xs'>{error.firstname}</p>}
      </div>
      <div className='mb-3'>
        <input name='lastname' className= { error.lastname ? " focus:outline-none text-xs w-full px-3 py-2  rounded-lg border  border-red-300 ring-1 ring-red-300 ":" focus:outline-none text-xs w-full px-3 py-2 border rounded-lg border-blue-500 "} value={formdata.lastname} onChange={handleChange} type="text" placeholder='Last Name' />
      {error.lastname && <p className='text-red-500 text-xs'>{error.lastname}</p>}
      </div>
      <div className='mb-3'><input name='mobnumber' className= { error.mobnumber ? " focus:outline-none text-xs w-full px-3 py-2  rounded-lg border  border-red-300 ring-1 ring-red-300 ":" focus:outline-none text-xs w-full px-3 py-2 border rounded-lg border-blue-500 "} value={formdata.mobnumber} onChange={handleChange} type="text" placeholder='Mobile Number' />
      {error.mobnumber && <p className='text-red-500 text-xs'>{error.mobnumber}</p>}

      </div>
      <div className='mb-3'><input name='email' className={ error.email ? " focus:outline-none text-xs w-full px-3 py-2  rounded-lg border  border-red-300 ring-1 ring-red-300 ":" focus:outline-none text-xs w-full px-3 py-2 border rounded-lg border-blue-500 "} value={formdata.email} onChange={handleChange} type="email" placeholder='Email address'/>
      {error.email && <p className='text-red-500 text-xs'>{error.email}</p>}

      </div>
      <div className='mb-3'><input name='password' className= { error.password ? " focus:outline-none text-xs w-full px-3 py-2  rounded-lg border  border-red-300 ring-1 ring-red-300 ":" focus:outline-none text-xs w-full px-3 py-2 border rounded-lg border-blue-500 "} value={formdata.password} onChange={handleChange} type="password" placeholder='Password'/>
      {error.password && <p className='text-red-500 text-xs'>{error.password}</p>}

      </div>
      <div className='text-center'>
        <button className='text-white  font-semibold bg-blue-500 hover:bg-blue-700 w-full px-4 py-2 border rounded-lg cursor-pointer'>Signup</button>
         <span className="mx-2 text-xs text-gray-500">OR</span>
        <button className="text-black mt-2 text-sm flex gap-2 justify-center font-semibold  w-full px-4 py-2 border rounded-lg cursor-pointer"><img width="23" height="23" src="https://img.icons8.com/color/48/google-logo.png" alt="google-logo"/>Continue With Google</button>
      </div>
      </form>
    </div>
    </>
  )
}

export default Signup