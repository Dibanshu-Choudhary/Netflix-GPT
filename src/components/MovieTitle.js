import React from 'react'

const MovieTitle = ({title,overview}) => {
  return (
    <div className='text-red-600 font-bold px-9 text-6xl mt-40 flex flex-col absolute'>
     {title}
      <div className='text-gray-400 text-sm px-9 pt-3 w-6/12'>
        {overview}
      </div>
      <div>
        <button className='bg-black text-white font-bold text-lg px-12 mx-5  hover:bg-white hover:text-black'>Play</button>
        <button className='bg-black text-white font-bold text-lg px-8 mx-2 hover:bg-white hover:text-black'>More Info</button>
      </div>
    </div>
  )
}

export default MovieTitle
