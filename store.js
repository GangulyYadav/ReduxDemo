import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./redux/rootReducer";

export const store = configureStore({
    // reducer:{
    //     cart:cartReducer
    // }
    reducer:rootReducer
})

