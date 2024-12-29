import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";
import ToggleSlice from "./ToggleSlice";
import TotalCostSlice from "./TotalCostSlice";


const store=configureStore({
    reducer:{
        cart:CartSlice,
        totalPrice:TotalCostSlice,
        toggle:ToggleSlice
    }
})

export default store