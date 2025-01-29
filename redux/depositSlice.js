import { createSlice } from "@reduxjs/toolkit";
// slice = name+ action + reducer(state)


const cartSlice = createSlice({
    name: 'cart',     // name from which you can access the states
    initialState: {   // state
        product: 0,
        amount: 0
    },
    reducers: {   // action
        addToCart: (state) => { state.product += 1 },
        incrementAmount: (state) => { state.amount += 10 },
        removeFromCart: (state) => { state.product -= 1 },
        manualAmountIncrement: (state, action) => { state.amount += action.payload}
    },
})

export const { addToCart, removeFromCart, incrementAmount,manualAmountIncrement } = cartSlice.actions

export const cartReducer = cartSlice.reducer