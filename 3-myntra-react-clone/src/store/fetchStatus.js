import { createSlice } from "@reduxjs/toolkit";


const fetchStatusSlice=createSlice({
    name:"fetchStatus",
    initialState:{
        fetchdone:false,
        currentlyfetching:false,
    },
    reducers:{
        markFetchDone:(state)=>{
            state.fetchdone=true;
        },
        markfetcingStarted:(state)=>{
           state.currentlyfetching=true;
        },
        markfetchingFinished:(state)=>{
            state.currentlyfetching=false;
        }
    }
});

export const fetchStatusAction=fetchStatusSlice.actions;

export default fetchStatusSlice;