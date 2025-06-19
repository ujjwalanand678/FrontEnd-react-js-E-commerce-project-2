import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"
const store = configureStore({
reducer:{
    cart:cartReducer // cart = [{},{},{}]
}
})
export default store