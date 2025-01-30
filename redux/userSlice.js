import { createSlice } from "@reduxjs/toolkit";
// slice = name+ action + reducer(state)


const userSlice = createSlice({
    name: 'user',     // name from which you can access the states
    initialState: {   // state
        userID: 0,
        userName: ''
    },
    reducers: {   // action
        updateUserName: (state, action) => { state.userName = action.payload }
        // addToCart: (state) => { state.product += 1 },
        // incrementAmount: (state) => { state.amount += 10 },
        // removeFromCart: (state) => { state.product -= 1 },
        // manualAmountIncrement: (state, action) => { state.amount += action.payload}
    },
})

export const { updateUserName } = userSlice.actions

export const userReducer = userSlice.reducer