import { configureStore, combineReducers } from "@reduxjs/toolkit";
import stepSlice from "./slices/stepSlice";


const rootReducer = combineReducers({
    step: stepSlice
})

export function setupStore() {
    return configureStore({
        reducer: rootReducer
    })
}


export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']