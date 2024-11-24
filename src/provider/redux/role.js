import { createSlice } from "@reduxjs/toolkit";

let r = null;




export const rolestate = createSlice({
    name:'rolestate',
    initialState:{
        role: r
    },
    reducers:{
        changerolestate(state, action){
            state.role = action.payload
        }
    }
})

export const {changerolestate} = rolestate.actions