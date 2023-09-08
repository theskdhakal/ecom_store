import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  order: [],
  review: [],
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    setOrder: (state, action) => {
      state.order = action.payload;
    },

    setReview: (state, action) => {
      state.review = action.payload;
    },
  },
});

export const { setOrder } = orderSlice.actions;
export const { setReview } = orderSlice.actions;
export default orderSlice.reducer;
