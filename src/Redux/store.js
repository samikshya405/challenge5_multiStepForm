import { configureStore } from "@reduxjs/toolkit";
import infoSliceReducer from './infoSLice'

export const store = configureStore({
    reducer:{
        info:infoSliceReducer

    }
})