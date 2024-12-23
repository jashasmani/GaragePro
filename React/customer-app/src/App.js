import Login from "./components/login/Login.jsx";
import Home from "./components/home page/Home.jsx";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SellerJobcard from "./components/seller jobcard/SellerJobcard.jsx";
import Navbar from "./components/navbar/Navbar.jsx";
import Dashboard from "./components/dashboard/Dashboard.jsx";
import Customer from "./components/customer/Customer.jsx";
import Feedback from "./components/feedback/Feedback.jsx";
import Market from "./components/market/Market.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/customer" element={<Customer />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/sellerjobcard" element={<SellerJobcard />} />
        <Route path="/market" element={<Market />} />
      </Routes>
      {/* <Login /> */}
      {/* <Home /> */}
    </BrowserRouter>
  );
}

export default App;
