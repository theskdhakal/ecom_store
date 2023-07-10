import userReducer from "./components/user/UserSlice";
import catReducer from "./pages/category/catSlice";
import modalReducer from "./components/modal/ModalSlice";
import { configureStore } from "@reduxjs/toolkit";

export default configureStore({
  reducer: {
    user: userReducer,
    category: catReducer,
    modal: modalReducer,
  },
});
