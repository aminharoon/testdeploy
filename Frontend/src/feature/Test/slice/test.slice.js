import { createSlice } from "@reduxjs/toolkit";

export const testSlice = createSlice({
    name: "test",
    initialState: {
        data: null
    },
    reducers: {
        addData: (state, action) => {
            state.data = action.payload
        }
    }

})

export const { addData } = testSlice.actions
export default testSlice.reducer