import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import {auth} from"../utils/Firebase"
import { addUser,removeUser } from '../utils/userSlice';
import { signOut } from "firebase/auth";
import { LOGO_IMG } from '../utils/Constants';


const Header = () => {
  
  const navigate= useNavigate()
  const dispatch = useDispatch()
  useEffect(()=>{

          onAuthStateChanged(auth, (user) => {
          if (user) {
            
            const {uid ,email,displayName} = user;

            dispatch(addUser({uid:uid,email:email, displayName:displayName}))
            navigate("/browse")
            
            
          } else {

            // Sign-out successful.
              dispatch(removeUser())
            
          }
      });

        },[])
        
  
  return (

    <div className='relative p-1 w-full gap-11 z-10 bg-gradient-to-b from-black bg-opacity-40 justify-start'>
    <img className=' w-44 ' src={LOGO_IMG} alt='Logo'/>
    </div>



  )
}

export default Header
