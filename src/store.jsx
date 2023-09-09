import userReducer from "./components/user/UserSlice";
import catReducer from "./pages/category/catSlice";
import productReducer from "./pages/product/productSlice";
import paymentReducer from "./pages/payment-option/paymentSlice";
import modalReducer from "./components/modal/ModalSlice";
import orderReducer from "./pages/order/OrderSlice";
import { configureStore } from "@reduxjs/toolkit";

export default configureStore({
  reducer: {
    user: userReducer,
    category: catReducer,
    product: productReducer,
    modal: modalReducer,
    payment: paymentReducer,
    order: orderReducer,
  },
});
