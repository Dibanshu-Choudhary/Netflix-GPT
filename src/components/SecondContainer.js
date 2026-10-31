import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondContainer = () => {


  const movies = useSelector((store) => store.movies?.nowPlayingMovies)
  const topMovies = useSelector((store) => store.movies?.addtopRatedMovies)

  return (
    <div className="relative z-10 bg-black text-white p-10">

      <MovieList title="Now Playing" movies={movies} />

      <MovieList title="Top Rated Movies" movies={topMovies} />

    </div>
  )
}

export default SecondContainer