import { createSlice } from "@reduxjs/toolkit";

      const nowPlayingMovies = createSlice({
        name:"movies",
        initialState:{
          nowPlayingMovies:[],
          addtopRatedMovies:[],
          trailer:[]

        },

        reducers:{

          addnowPlayingMovies(state,action){
             state.nowPlayingMovies = action.payload
          },
          
          addtopRatedMovies(state,action){
             state.addtopRatedMovies = action.payload
          },
          
          addtrailer(state,action){
            state.trailer = action.payload
          }
        }

      })

      
export const {addnowPlayingMovies,addtopRatedMovies,addtrailer} = nowPlayingMovies.actions
export default nowPlayingMovies.reducer;