import { configureStore } from "@reduxjs/toolkit"
import testReducer from "../feature/Test/slice/test.slice.js"

export const store = configureStore({
    reducer: {
        test: testReducer
    }
})