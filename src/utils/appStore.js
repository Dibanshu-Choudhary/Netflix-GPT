import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../utils/userSlice"
import useNowMoviePlayingReducer from "../utils/movieSlice"

const appStore = configureStore({
  
  reducer:{
    // userData:
    "user"  :userReducer,
    "movies": useNowMoviePlayingReducer,
   
  }
})

export default appStore;