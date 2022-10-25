import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const initialState = {
  cartItems: localStorage.getItem("cartItem")
    ? JSON.parse(localStorage.getItem('cartItem'))
    : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
        toast.info(`increased ${state.cartItems[itemIndex].name} cart quantity`, {
          position: "bottom-left",
          textTransform: "uppercase",
        })
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(tempProduct);
        toast.success(`${action.payload.name} added to the cart`, {
          position: "bottom-left",
          textTransform: "uppercase",
        })
      }

      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    },
    removeCartItem(state, action) {
      const restCartItems = state.cartItems.filter((item) => item.id !== action.payload.id);

      state.cartItems = restCartItems;
    }
  }
})

export const { addToCart, removeCartItem } = cartSlice.actions;

export default cartSlice.reducer;
