// orderSlice.js

import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: "order",
  initialState: {
    orders: [], // Aquí almacenarás las órdenes
  },
  reducers: {
    addOrder: (state, action) => {
      state.orders.push(action.payload);
    },
    removeOrder: (state, action) => {
      const orderIdToRemove = action.payload;
      state.orders = state.orders.filter(order => order.id !== orderIdToRemove);
    },
  },
});

export const { addOrder, removeOrder } = orderSlice.actions;

export default orderSlice.reducer;
