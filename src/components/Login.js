import React, { useRef, useState } from 'react'
import Header from './Header'
import { Validate } from '../utils/Validate'
import { createUserWithEmailAndPassword,signInWithEmailAndPassword ,updateProfile} from "firebase/auth";
import {auth} from "../utils/Firebase"
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { BG_IMG } from '../utils/Constants';
const Login = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const name = useRef()
  const email = useRef(null)
  const password = useRef(null)

    const [errorMessage,seterrorMessage] = useState(null)

    const handelButtonClick = ()=>{

        const message = Validate( email.current.value,password.current.value)

        seterrorMessage(message)
        
        if(message) return

        if (toggle) {
            // Sign Up
            createUserWithEmailAndPassword(
              auth,
              email.current.value,
              password.current.value
            )
              .then((userCredential) => { 
                  const user = userCredential.user
             
                  
                  updateProfile(user, {
                    displayName: name.current.value
                  }).then(() => {

                     dispatch(addUser({
                        uid: user.uid,
                        email: user.email,
                        displayName: user.displayName
                      })
                    );
                    // ...
                  }).catch((error) => {
                    // An error occurred
                    // ...
                  });
              })
              .catch((error) => {
                seterrorMessage(error.message);
              });
          } else {
            // Sign In
            signInWithEmailAndPassword(
              auth,
              email.current.value,
              password.current.value
            )
              .then((userCredential) => {
              })
              .catch((error) => {
                seterrorMessage(error.message);
              });
          }
                }



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
        src={BG_IMG}
        alt="Background"
      />
    </div>

    <form onSubmit={((e)=>{e.preventDefault(); handelButtonClick() })} 
    
        className="relative bg-black/75 w-4/12 mt-20 p-12 h-full m-auto flex gap-4 flex-col ">
        <h1 className='font-bold text-3xl'>{!toggle? "Sign In" : "Sign Up"}</h1>

    {toggle && (
      <input ref={name} className='' type="text" placeholder="Full Name" />
    )}

      <input ref={email}  className='' type="email" placeholder="Email" />
      <input  ref={password} className='' type="password" placeholder="password" />

      <p>{errorMessage}</p>

      <button className='bg-red-500' >Submit</button>

      <p className='cursor-pointer' onClick={toggleText}>{toggle ? "Already a User? Sign In": "New to Netflix? Sign Up"}</p>
    </form>
  </div>
);

  
}

export default Login
