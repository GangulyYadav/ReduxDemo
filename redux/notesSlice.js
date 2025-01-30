import { createSlice } from "@reduxjs/toolkit";

const notesSlice = createSlice({
    name: 'notes',
    initialState: {
        numberOfNotes: 0,
        AllNotes: [],
    },

    reducers: {
        addNote: (state, action) => {
            console.log(action)
            state.numberOfNotes += 1;
            state.AllNotes.push(action.payload);
        }
    }

})

export const { addNote } = notesSlice.actions

export const notesReducer = notesSlice.reducer 
