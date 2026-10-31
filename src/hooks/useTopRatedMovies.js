import { useEffect } from "react";
import { useDispatch } from "react-redux"
import { API_OPTIONS } from "../utils/Constants";
import { addtopRatedMovies } from "../utils/movieSlice";

const useTopRatedMovies = ()=>{

  const dispatch = useDispatch()

    const topRatedMovies = async()=>{
      
      const data  =  await fetch("https://api.themoviedb.org/3/movie/top_rated",API_OPTIONS);

      const json = await data.json()
        console.log(json.results)

        dispatch(addtopRatedMovies(json.results))
    
      }

      useEffect(()=>{
        topRatedMovies()
      },[])
}

export default useTopRatedMovies;