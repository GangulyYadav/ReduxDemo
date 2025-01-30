import { combineReducers } from "@reduxjs/toolkit"
import { cartReducer } from "./depositSlice"
import { userReducer } from "./userSlice"
import { notesReducer } from "./notesSlice"

export const rootReducer = combineReducers({
    cart:cartReducer,
    user:userReducer,
    notes:notesReducer
})