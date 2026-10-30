import { createSlice } from "@reduxjs/toolkit";

      const nowPlayingMovies = createSlice({
        name:"movies",
        initialState:{
          nowPlayingMovies:[],
          trailer:[]

        },

        reducers:{

          addnowPlayingMovies(state,action){
             state.nowPlayingMovies = action.payload
          },
          
          addtrailer(state,action){
            state.trailer = action.payload
          }
        }

      })

      
export const {addnowPlayingMovies,addtrailer} = nowPlayingMovies.actions
export default nowPlayingMovies.reducer;