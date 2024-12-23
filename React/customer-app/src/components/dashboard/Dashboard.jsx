import React from "react";
import "./Dashboard.css";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

const Dashboard = () => {
  const vehicleJobCard = {
    vehicle: "Honda City",
    registration: "GJ-05-RT-5636",
    owner: "Hemali Asmani",
    status: "In Progress",
    estimatedCompletion: "2024-12-20",
    serviceDetails: [
      {
        service: "Oil Change",
        price: 500,
        quantity: 1,
        progress: "Completed",
      },
      {
        service: "Wheel Alignment",
        price: 1000,
        quantity: 1,
        progress: "In Progress",
      },
      {
        service: "Brake Check",
        price: 800,
        quantity: 11,
        progress: "Pending",
      },
    ],
  };

  return (
    <>
      <Navbar />
      <div className="vehicle-dashboard">
        <div className="card">
          <h2>{vehicleJobCard.vehicle}</h2>
          <p>
            <strong>Registration:</strong> {vehicleJobCard.registration}
          </p>
          <p>
            <strong>Owner:</strong> {vehicleJobCard.owner}
          </p>
          <p className={`status ${vehicleJobCard.status.toLowerCase()}`}>
            <strong>Status:</strong> {vehicleJobCard.status}
          </p>
          <p>
            <strong>Estimated Completion:</strong>{" "}
            {vehicleJobCard.estimatedCompletion}
          </p>
        </div>

        {/* Service Details */}
        <div className="service-list">
          <h3>Service Details</h3>
          <table>
            <thead>
              <tr>
                <th>Service Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {vehicleJobCard.serviceDetails.map((service, index) => (
                <tr
                  key={index}
                  // className={`progress ${service.progress.toLowerCase()}`}
                >
                  <td>{service.service}</td>
                  <td>₹{service.price}</td>
                  <td>{service.quantity}</td>
                  <td>{service.progress}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Dashboard;
