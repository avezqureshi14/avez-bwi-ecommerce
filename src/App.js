import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Footer from "./components/common/Footer";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Cart from "./pages/Cart";
import Search from "./pages/Search";
import "./assets/css/style.css";
import "./assets/css/style-prefix.css";
import { useNavigate } from "react-router-dom";
function App() {
  const navigate = useNavigate();
  useEffect(() => {
    const profile = JSON.parse(localStorage.getItem("profile"));
    if (!profile) {
      return navigate("/login");
    }
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/search" element={<Search />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
