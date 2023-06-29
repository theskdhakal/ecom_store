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

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/category" element={<Category />} />
      <Route path="/product" element={<Product />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/client" element={<Clients />} />
      <Route path="/order" element={<Order />} />
      <Route path="/review" element={<Review />} />
    </Routes>
  );
}

export default App;
