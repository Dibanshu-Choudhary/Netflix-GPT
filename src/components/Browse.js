import React from 'react'
import Header from './Header'
import { useNavigate } from 'react-router-dom'
import { auth } from "../utils/Firebase"
import { signOut } from 'firebase/auth'
import { PROFILE_IMG } from '../utils/Constants'
import useNowMoviePlaying from '../hooks/useNowMoviePlaying'
import MainContainer from './MainContainer'
import SecondContainer from './SecondContainer'
import useTopRatedMovies from '../hooks/useTopRatedMovies'
import { addtopRatedMovies } from '../utils/movieSlice'

const Browse = () => {

  useNowMoviePlaying()
  useTopRatedMovies()

  const navigate = useNavigate()

  const backTologin = async () => {
    await signOut(auth)
    navigate("/")
  }

 return (
  <div className="relative min-h-screen overflow-x-hidden overflow-y-hidden bg-black">

    <div className="absolute top-0 left-0 z-20 flex w-full justify-between items-center px-6">
      <Header />

      <div className="flex items-center gap-3 py-4 text-white">
        <img
          className="w-12 h-12"
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

    <MainContainer />
    <SecondContainer />

  </div>
)
}

export default Browse