import React, { useState } from "react";
import "./Accessories.css";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

const Accessories = () => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [items] = useState([
    {
      id: 1,
      name: "Car Battery",
      price: 5500,
      description: "Long-lasting car battery.",
      image: "car-battery.jpg",
    },
    {
      id: 2,
      name: "Headlights",
      price: 3200,
      description: "Bright LED headlights.",
      image: "headlights.jpg",
    },
    {
      id: 3,
      name: "Wiper Blades",
      price: 500,
      description: "Durable wiper blades for all weather.",
      image: "wiper-blades.jpg",
    },
    {
      id: 4,
      name: "Car Mats",
      price: 1500,
      description: "Stylish and durable car mats.",
      image: "car-mats.jpg",
    },
    {
      id: 5,
      name: "Steering Wheel Cover",
      price: 800,
      description: "Comfortable and stylish steering wheel cover.",
      image: "steering-wheel-cover.jpg",
    },
    {
      id: 6,
      name: "Seat Covers",
      price: 2500,
      description: "Premium seat covers for added comfort.",
      image: "seat-covers.jpg",
    },
    {
      id: 7,
      name: "GPS Tracker",
      price: 4500,
      description: "Advanced GPS tracking device for your car.",
      image: "gps-tracker.jpg",
    },
    {
      id: 8,
      name: "Dashboard Camera",
      price: 6500,
      description: "High-definition dashboard camera.",
      image: "dashboard-camera.jpg",
    },
    {
      id: 9,
      name: "Tire Pressure Monitor",
      price: 2000,
      description: "Monitor tire pressure for safety and efficiency.",
      image: "tire-pressure-monitor.jpg",
    },
    {
      id: 10,
      name: "Car Cover",
      price: 1800,
      description: "Weatherproof car cover for protection.",
      image: "car-cover.jpg",
    },
    {
      id: 11,
      name: "Bluetooth FM Transmitter",
      price: 1500,
      description: "Stream music and calls through FM radio.",
      image: "bluetooth-fm-transmitter.jpg",
    },
    {
      id: 12,
      name: "Mobile Holder",
      price: 700,
      description: "Convenient holder for your smartphone.",
      image: "mobile-holder.jpg",
    },
    {
      id: 13,
      name: "Car Vacuum Cleaner",
      price: 2200,
      description: "Compact and powerful car vacuum cleaner.",
      image: "car-vacuum-cleaner.jpg",
    },
    {
      id: 14,
      name: "Trunk Organizer",
      price: 1200,
      description: "Keep your trunk organized and tidy.",
      image: "trunk-organizer.jpg",
    },
    {
      id: 15,
      name: "Roof Rack",
      price: 9500,
      description: "Durable roof rack for extra storage.",
      image: "roof-rack.jpg",
    },
    {
      id: 16,
      name: "Sunshade",
      price: 600,
      description: "Protect your car interior from UV rays.",
      image: "sunshade.jpg",
    },
    {
      id: 17,
      name: "USB Car Charger",
      price: 400,
      description: "Fast USB car charger for your devices.",
      image: "usb-car-charger.jpg",
    },
    {
      id: 18,
      name: "Exhaust Tip",
      price: 1200,
      description: "Stylish exhaust tip for a sporty look.",
      image: "exhaust-tip.jpg",
    },
    {
      id: 19,
      name: "Car Air Purifier",
      price: 3500,
      description: "Remove pollutants and odors from your car.",
      image: "car-air-purifier.jpg",
    },
    {
      id: 20,
      name: "Keyless Entry System",
      price: 7000,
      description: "Upgrade your car with a keyless entry system.",
      image: "keyless-entry.jpg",
    },
  ]);

  const addToCart = (item) => {
    if (!cart.some((cartItem) => cartItem.id === item.id)) {
      setCart([...cart, item]);
      setTotal((total) => total + item.price);
    } else {
      alert("Item already in cart.Do you want to add again??");
      setCart([...cart, item]);
      setTotal((total) => total + item.price);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <>
      <Navbar />
      <div className="market-page">
        <h1>Accessories</h1>
        <div className="item-grid">
          {items.map((item) => (
            <div key={item.id} className="market-item">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p>Price: ₹{item.price}</p>
              <button className="add-to-cart" onClick={() => addToCart(item)}>
                Add to Cart
              </button>
            </div>
          ))}
        </div>

        <div className="cart">
          <h2>Cart</h2>
          {cart.length > 0 ? (
            <>
              <ul>
                {cart.map((item) => (
                  <li key={item.id}>
                    {item.name} - ₹{item.price}
                    <button
                      className="rm"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </li>
                ))}
                <li>
                  <b>Total : {total}</b>
                  <button className="done">Done</button>
                </li>
              </ul>
            </>
          ) : (
            <p>Your cart is empty.</p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Accessories;
