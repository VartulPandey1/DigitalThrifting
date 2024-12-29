import { createSlice } from "@reduxjs/toolkit";

const toggleSlice=createSlice({
    name:"toggleSlice",
    initialState:{
        isDark:false,
    },
    reducers:{
        toggleMode:(state)=>{
            state.isDark=!state.isDark;
        }
    }
})

export const{toggleMode}=toggleSlice.actions
export default toggleSlice.reducer