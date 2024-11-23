 import { configureStore } from "@reduxjs/toolkit";
 import {loggedinstate} from './loggedin';
 import {rolestate} from './role'

 export const store = configureStore({
    reducer:{
        'loggedinstate' : loggedinstate.reducer,
        'rolestate' : rolestate.reducer
    }
 })