import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

  const[toggle,setToggle]  = useState(true)

  const toggleText  = ()=>{
    return(
      setToggle(!toggle)
    );
  }
  

  return (
  <div className="relative">
    <Header />

    <div className="absolute inset-0">
      <img
        className="w-full  object-cover "
        src="https://assets.nflxext.com/ffe/siteui/vlv3/5aa70728-e223-472f-9230-babd8f6ba166/web/IN-en-20261019-TRIFECTA-perspective_79fa76c2-2cb2-4d20-8de2-f696f3b6131e_large.jpg"
        alt="Background"
      />
    </div>

    <form className="relative bg-black/75 w-4/12 mt-20 p-12 h-full m-auto flex gap-4 flex-col ">
    <h1 className='font-bold text-3xl'>{!toggle? "Sign In" : "Sign Up"}</h1>

    {toggle && (
      <input className='' type="text" placeholder="Full Name" />
    )}
      <input className='' type="email" placeholder="Email" />
      <input className='' type="password" placeholder="password" />
      <button className='bg-red-500'>Submit</button>

      <p className='cursor-pointer' onClick={toggleText}>{toggle ? "Already a User? Sign In": "New to Netflix? Sign Up"}</p>
    </form>
  </div>
);

  
}

export default Login
