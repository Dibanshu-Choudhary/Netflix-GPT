import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../utils/userSlice"

const appStore = configureStore({
  reducer:{
    // userData:
    "user"  :userReducer
    
  }
})

export default appStore;