import { useSelector } from 'react-redux'
import BackgroundVideo from './BackgroundVideo'
import MovieTitle from './MovieTitle'


const MainContainer = () => {

  const movies = useSelector((store)=> store.movies?.nowPlayingMovies)


  if(!movies || movies.length===0) return null

  const mainMovie = movies[0]
  console.log(mainMovie)

  return (
    <div className='absolute'>
      <MovieTitle title={mainMovie.title} overview={mainMovie.overview}/>  
      <BackgroundVideo />
    </div>
   
  )
}

export default MainContainer



