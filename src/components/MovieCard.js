import React from 'react'
import { useSelector } from 'react-redux'
import { MOVIE_IMG } from '../utils/Constants'


const MovieCard = ({movie,title}) => {
    

  return (

    <div className="shrink-0">
      <img
        className="w-64"
        src={MOVIE_IMG + movie.poster_path}
        alt={movie.title}/>

      {movie.title}
    </div>
      )
}

export default MovieCard
