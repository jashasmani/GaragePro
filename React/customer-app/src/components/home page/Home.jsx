import React from "react";
import Navbar from "../navbar/Navbar";
import "./Home.css";
import Dashboard from "../dashboard/Dashboard";
import SellerDashboard from "../seller jobcard/SellerJobcard";

const Home = () => {
  return (
    <div className="main-home">
      <Navbar />
      <div>
        <section class="hero">
          <div class="container">
            <h1>Professional Garage Services</h1>
            <p>Your trusted solution for car repairs, maintenance, and more.</p>
            <a href="#services" class="btn">
              Explore Services
            </a>
          </div>
        </section>

        <section id="about" class="about">
          <div class="container">
            <h2>About Us</h2>
            <p>
              GaragePro is a one-stop solution for all your automobile needs.
              Our expert team ensures high-quality repair, servicing, and
              customer satisfaction.
            </p>
          </div>
        </section>

        <section id="services" class="services">
          <div class="container">
            <h2>Our Services</h2>
            <div class="service-cards">
              <div class="card">
                <h3>Car Repair</h3>
                <p>Expert mechanics to fix all kinds of car issues.</p>
              </div>
              <div class="card">
                <h3>Maintenance</h3>
                <p>Regular maintenance to keep your car in top shape.</p>
              </div>
              <div class="card">
                <h3>Wheel Alignment</h3>
                <p>Precision wheel alignment for smooth driving.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="testimonials" class="testimonials">
          <div class="container">
            <h2>What Our Customers Say</h2>
            <div class="testimonial">
              <p>
                "GaragePro saved my day! Excellent service and friendly staff."
              </p>
              <span>- John Doe</span>
            </div>
            <div class="testimonial">
              <p>"Affordable and reliable. Highly recommended."</p>
              <span>- Jane Smith</span>
            </div>
          </div>
        </section>
      </div>
      
    </div>
  );
};

export default Home;
