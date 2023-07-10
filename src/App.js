import "./App.css";

import { Register } from "./pages/login-register/Register";
import { Login } from "./pages/login-register/Login";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { Dashboard } from "./pages/dashboard/Dashboard";
import { Category } from "./pages/category/Category";
import { Product } from "./pages/product/Product";
import { Payment } from "./pages/payment-option/Payment";
import { Clients } from "./pages/clients/Clients";
import { Review } from "./pages/reviews/Review";
import { Order } from "./pages/order/Order";
import { ToastContainer } from "react-toastify";
import { PrivateRoute } from "./components/private-route/PrivateRoute";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./components/firebase_config/Firebase";
import { useDispatch } from "react-redux";
import { getUserAction } from "./components/user/UserAction";
import { NewProduct } from "./pages/product/NewProduct";

function App() {
  const dispatch = useDispatch();

  onAuthStateChanged(auth, (userData) => {
    if (userData?.uid) {
      dispatch(getUserAction(userData.uid));
    }
  });

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/category"
          element={
            <PrivateRoute>
              <Category />
            </PrivateRoute>
          }
        />
        <Route
          path="/product"
          element={
            <PrivateRoute>
              <Product />
            </PrivateRoute>
          }
        />
        <Route
          path="/product/new"
          element={
            <PrivateRoute>
              <NewProduct />
            </PrivateRoute>
          }
        />
        <Route
          path="/payment"
          element={
            <PrivateRoute>
              <Payment />
            </PrivateRoute>
          }
        />
        <Route
          path="/client"
          element={
            <PrivateRoute>
              <Clients />
            </PrivateRoute>
          }
        />
        <Route
          path="/order"
          element={
            <PrivateRoute>
              <Order />
            </PrivateRoute>
          }
        />
        <Route
          path="/review"
          element={
            <PrivateRoute>
              <Review />
            </PrivateRoute>
          }
        />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
