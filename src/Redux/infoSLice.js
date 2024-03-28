import { createSlice } from "@reduxjs/toolkit";

export const infoSlice = createSlice({
    name:'info',
    initialState:{
        info:{},
        plan:{},
        services:[],
        
    },
    reducers:{
        setInfo:(state,action)=>{
            state.info =action.payload
        },
        setPlan:(state,action)=>{
            state.plan=action.payload
        },
        setServices:(state,action)=>{
            state.services=action.payload
        },
        setTime :(state,action)=>{
            state.time = action.payload

        }
    }
})

export const {setInfo,setPlan, setServices,setTime} = infoSlice.actions
export default infoSlice.reducer