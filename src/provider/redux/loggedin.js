import { createSlice } from "@reduxjs/toolkit";

let login = null;



export const loggedinstate = createSlice({
    name:'loggedinstate',
    initialState:{
        islogin:login
    },
    reducers:{
        Changeloggedinstate(state, action){
            state.islogin = action.payload
        }
    }
})

export const {Changeloggedinstate} = loggedinstate.actions