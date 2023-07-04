import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: [],
};

const catSlice = createSlice({
  name: "cat",
  initialState,
  reducers: {
    setCat: (state, action) => {
      state.category = action.payload;
    },
  },
});

export const { setCat } = catSlice.actions;
export default catSlice.reducer;
