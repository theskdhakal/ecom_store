import userReducer from "./components/user/UserSlice";
import catReducer from "./pages/category/catSlice";
import productReducer from "./pages/product/productSlice";
import modalReducer from "./components/modal/ModalSlice";
import { configureStore } from "@reduxjs/toolkit";

export default configureStore({
  reducer: {
    user: userReducer,
    category: catReducer,
    product: productReducer,
    modal: modalReducer,
  },
});
