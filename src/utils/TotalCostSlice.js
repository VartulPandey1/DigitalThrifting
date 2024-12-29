import { createSlice } from "@reduxjs/toolkit";

const totalPriceSlice=createSlice({
    name:"totalPrice",
    initialState:{
        totalPrice:0,
        totalItem:0,
        likedItems:0
    },
    reducers:{
        addPrice:(state,action)=>{
            state.totalPrice+=action.payload;
        },
        totalItem:(state,action)=>{
                state.totalItem+=action.payload;
        },
        totalLikedItem:(state,action)=>{
            state.likedItems+=action.payload
          }
    
    }
})

export const{addPrice,totalItem,totalLikedItem}=totalPriceSlice.actions
export default totalPriceSlice.reducer