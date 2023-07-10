import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showModal: {},
};

const ModalSlice = createSlice({
  name: "showModal",
  initialState,
  reducers: {
    setShowModal: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setShowModal } = ModalSlice.actions;
export default ModalSlice.reducer;
