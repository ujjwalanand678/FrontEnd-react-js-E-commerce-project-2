import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart(state, action) {
      const existingItem = state.find((item) => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.push(action.payload);
      }
    },
    addToCartHome(state, action) {
      const existingItem = state.find((item) => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.push(action.payload);
      }
    },

    removeFromCart(state, action) {
      return state.filter((prod) => prod.id !== action.payload)
    },
    increaseQuantity(state, action) {
  const item = state.find((item) => item.id === action.payload);
  if (item) item.quantity += 1;
},
decreaseQuantity(state, action) {
  const item = state.find((item) => item.id === action.payload);
  if (item && item.quantity > 1) item.quantity -= 1;
}

  },
});

export const { addToCart, removeFromCart, addToCartHome ,increaseQuantity,decreaseQuantity} = cartSlice.actions;
export default cartSlice.reducer;
