import { combineReducers } from "@reduxjs/toolkit"
import { cartReducer } from "./depositSlice"

export const rootReducer = combineReducers({
    cart:cartReducer,
})