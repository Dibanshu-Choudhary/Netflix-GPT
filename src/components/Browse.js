import React from 'react'
import Header from './Header'
import { useNavigate } from 'react-router-dom'
import { auth } from "../utils/Firebase"
import { signOut } from 'firebase/auth'
import { PROFILE_IMG } from '../utils/Constants'
import useNowMoviePlaying from '../hooks/useNowMoviePlaying'
import MainContainer from './MainContainer'

const Browse = () => {

  useNowMoviePlaying()

  const navigate = useNavigate()

  const backTologin = async () => {
    await signOut(auth)
    navigate("/")
  }

  return (
    <div className=''>

      <div className="flex justify-between items-center px-6 absolute">

        <Header />

        <div className="flex items-center gap-3 py-4 z-10    ">
          <img
            className="w-12 h-12 "
            src={PROFILE_IMG}
            alt="Profile"
          />

          <button
            className="font-bold"
            onClick={backTologin}
          >
            Sign Out
          </button>
        </div>

      </div>

      {/* Main content below the header */}
      <MainContainer />

    </div>
  )
}

export default Browse