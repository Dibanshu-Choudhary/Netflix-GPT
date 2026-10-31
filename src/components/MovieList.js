import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title,movies}) => {

    
  return (
    
    <div className='mb-10'>
      <h1>{title}</h1>
    <div className="flex gap-4 overflow-x-auto scrollbar-hide">

     {movies?.map((movie) => (
      <MovieCard key={movie.id} movie={movie}  />
  ))}

  </div>
  </div>
    )
}

export default MovieList
