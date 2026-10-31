  import React, { useEffect } from 'react'
  import {API_OPTIONS} from "../utils/Constants"
  import { useDispatch, useSelector } from 'react-redux'
  import { addtrailer } from '../utils/movieSlice'
  
  const BackgroundVideo = () => {
    const dispatch = useDispatch()

      const Video = async()=>{
        const Trailer = await fetch('https://api.themoviedb.org/3/movie/1101412/videos?language=en-US', API_OPTIONS)
        const json = await Trailer.json()

        const Clip = json.results.filter((clip)=>clip.type==="Trailer")[0];
        console.log(Clip)
        
        dispatch(addtrailer(Clip))
      }
      useEffect(()=>{
          Video()
      },[])

      const trailer = useSelector((store)=>store.movies.trailer)
      console.log(trailer)


    return (

      <div className='w-screen overflow-hidden'> 
   

        <iframe
                className="w-screen aspect-video pointer-events-none"
                src={`https://www.youtube.com/embed/${trailer.key}?autoplay=1&mute=1&controls=0&loop=1&playlist=${trailer.key}&rel=0&playsinline=1`}
                title="Background Trailer"
                allow="autoplay; encrypted-media"
                tabIndex="-1"
              />

      </div>

    )
  }
  
  export default BackgroundVideo

  