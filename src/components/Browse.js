import React, { use } from 'react'
import Header from './Header'
import { useNavigate } from 'react-router-dom'
import {auth} from"../utils/Firebase"
import { signOut } from 'firebase/auth'
import { PROFILE_IMG } from '../utils/Constants'

const Browse = () => {
  const navigate = useNavigate();

  const backTologin = async()=>{
   await signOut(auth);
    (navigate("/"))
  }

  return (<div className='flex justify-between'>
    <Header />
    <div className='flex py-4'>
     <img className='w-12 h-12  ' src={PROFILE_IMG}/>
     
      <button className='flex font-bold' onClick={backTologin}>Sign Out</button>
    </div>
    </div>
  )
}

export default Browse
