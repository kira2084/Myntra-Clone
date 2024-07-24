import {configureStore} from "@reduxjs/toolkit";
import itemSlice from "./itemslice";
import fetchStatusSlice from "./fetchStatus";
import bagSlice from "./bagslice";




const Myntrastore=configureStore({reducer:{
   item:itemSlice.reducer,
   fetchStatus:fetchStatusSlice.reducer,
   bag:bagSlice.reducer,
}})

export default Myntrastore;