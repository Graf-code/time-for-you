import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    user: "UserLogged",
    updatedAt: new Date().toLocaleString(),
    total: 0,
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      const isProductInCart = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (!isProductInCart) {
        state.items.push(action.payload);
      } else {
        state.items = state.items.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              quantity: item.quantity + action.payload.quantity,
            };
          }
          return item;
        });
      }

      state.total = state.items.reduce(
        (acc, current) => acc + current.price * current.quantity,
        0
      );
      state.updatedAt = new Date().toLocaleString();
    },
    removeItem: (state, action) => {
      const itemIdToRemove = action.payload;
      state.items = state.items.filter((item) => item.id !== itemIdToRemove);
      state.total = state.items.reduce(
        (acc, current) => acc + current.price * current.quantity,
        0
      );
      state.updatedAt = new Date().toLocaleString();
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
