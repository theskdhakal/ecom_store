import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  client: [],
  message: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },

    setClient: (state, action) => {
      state.client = action.payload;
    },

    setMessage: (state, action) => {
      state.message = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;
export const { setClient } = userSlice.actions;
export const { setMessage } = userSlice.actions;
export default userSlice.reducer;
