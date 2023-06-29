import userReducer from "./components/user/UserSlice";
import { configureStore } from "@reduxjs/toolkit";

export default configureStore({
  reducer: {
    user: userReducer,
  },
});
