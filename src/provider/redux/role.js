import { createSlice } from "@reduxjs/toolkit";

let r = null;

if(typeof window !=="undefined"){
    r=localStorage.getItem('role');
}

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