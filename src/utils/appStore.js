import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../utils/userSlice"
import useNowMoviePlayingReducer from "../utils/movieSlice"
// import trailerReducer from "../utils/movieSlice"
const appStore = configureStore({
  reducer:{
    // userData:
    "user"  :userReducer,
    "movies": useNowMoviePlayingReducer,
    // "trailer": trailerReducer
  }
})

export default appStore;