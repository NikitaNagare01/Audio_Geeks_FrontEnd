import { createSlice } from "@reduxjs/toolkit";

export const loggedinstate = createSlice({
    name:'loggedinstate',
    initialState:{
        islogin:false
    },
    reducers:{
        Changeloggedinstate(state, action){
            state.islogin = action.payload
        }
    }
})

export const {Changeloggedinstate} = loggedinstate.actions