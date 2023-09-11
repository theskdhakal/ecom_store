import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: [],
  selectedProduct: {},
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProduct: (state, action) => {
      state.product = action.payload;
    },
    setSelectedProduct: (state, { payload }) => {
      if (payload.id === setSelectedProduct.id) {
        return;
      }
      state.selectedProduct = payload;
    },
  },
});

export const { setProduct, setSelectedProduct } = productSlice.actions;
export default productSlice.reducer;
