import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    likedItems:[]
  },
  reducers: {
    addItem: (state, action) => {
      if (state.items.length == 0) state.items.push(action.payload);
      else {
        let temp = state.items.findIndex(
          (arr) =>
            arr.size === action.payload.size &&
            arr.id === action.payload.id &&
            arr.color === action.payload.color
        );
        if (temp != -1) {
          state.items[temp].numberOfItem += action.payload.numberOfItem;
        } else {
          state.items.push(action.payload);
        }
      }
    },
    removeItem: (state, action) => {
      state.items.splice(action.payload, 1);
    },
    updateNumberOfItem: (state, action) => {
      state.items[action.payload.index].numberOfItem =
        action.payload.numberofItems;
    },

    addLikedItem:(state,action)=>{
      state.likedItems.push(action.payload);
    },
    removeLikedItem: (state, action) => {
      state.likedItems.splice(action.payload, 1);
    },
    
  },
});

export const { addItem, updateNumberOfItem, removeItem,addLikedItem,removeLikedItem} = cartSlice.actions;
export default cartSlice.reducer;
