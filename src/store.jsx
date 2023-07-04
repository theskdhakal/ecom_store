import userReducer from "./components/user/UserSlice";
import catReducer from "./pages/category/catSlice";
import { configureStore } from "@reduxjs/toolkit";

export default configureStore({
  reducer: {
    user: userReducer,
    category: catReducer,
  },
});
