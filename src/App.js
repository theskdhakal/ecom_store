import "./App.css";

import { Register } from "./pages/login-register/Register";
import { Login } from "./pages/login-register/Login";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { Dashboard } from "./pages/dashboard/Dashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
