import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showModal: true,
};

const ModalSlice = createSlice({
  name: "showModal",
  initialState,
  reducers: {
    setShowModal: (state, action) => {
      state.showModal = action.payload;
    },
  },
});

export const { setShowModal } = ModalSlice.actions;
export default ModalSlice.reducer;
