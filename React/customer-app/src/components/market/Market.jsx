import React, { useState } from "react";
import "./Market.css";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

const Market = () => {
  const [cart, setCart] = useState([]);
  const [items] = useState([
    {
      id: 1,
      name: "Brake Pads",
      price: 1200,
      description: "High-quality brake pads.",
    },
    {
      id: 2,
      name: "Oil Filter",
      price: 600,
      description: "Efficient oil filter for cars.",
    },
    {
      id: 3,
      name: "Air Filter",
      price: 800,
      description: "Premium air filter for better performance.",
    },
    {
      id: 4,
      name: "Car Battery",
      price: 5500,
      description: "Long-lasting car battery.",
    },
    {
      id: 5,
      name: "Headlights",
      price: 3200,
      description: "Bright LED headlights.",
    },
    {
      id: 6,
      name: "Wiper Blades",
      price: 500,
      description: "Durable wiper blades for all weather.",
    },
    {
      id: 7,
      name: "Spark Plug",
      price: 300,
      description: "Reliable spark plugs.",
    },
    {
      id: 8,
      name: "Car Mats",
      price: 1500,
      description: "Stylish and durable car mats.",
    },
  ]);

  const addToCart = (item) => {
    if (!cart.some((cartItem) => cartItem.id === item.id)) {
      setCart([...cart, item]);
    } else {
      alert("Item already in cart.");
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <>
      <Navbar />
      <div className="market-page">
        <h1>Market</h1>
        <div className="item-grid">
          {items.map((item) => (
            <div key={item.id} className="market-item">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p>Price: ₹{item.price}</p>
              <button onClick={() => addToCart(item)}>Add to Cart</button>
            </div>
          ))}
        </div>

        <div className="cart">
          <h2>Cart</h2>
          {cart.length > 0 ? (
            <ul>
              {cart.map((item) => (
                <li key={item.id}>
                  {item.name} - ₹{item.price}
                  <button onClick={() => removeFromCart(item.id)}>
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p>Your cart is empty.</p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Market;
