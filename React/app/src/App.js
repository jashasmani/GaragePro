import Login from "./components/login/Login.jsx";
import Home from "./components/home page/Home.jsx";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SellerJobcard from "./components/seller jobcard/SellerJobcard.jsx";
import Navbar from "./components/navbar/Navbar.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/sellerjobcard" element={<SellerJobcard />} />
      </Routes>
      {/* <Login /> */}
      {/* <Home /> */}
    </BrowserRouter>
  );
}

export default App;
