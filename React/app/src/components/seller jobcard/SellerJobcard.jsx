import React, { useState } from "react";
import "./SellerJobcard.css";
import Navbar from "../navbar/Navbar";

const SellerJobcard = () => {
  const [services, setServices] = useState([
    {
      id: 1,
      service: "Oil Change",
      price: 500,
      quantity: 1,
      progress: "Completed",
    },
    {
      id: 2,
      service: "Wheel Alignment",
      price: 1000,
      quantity: 1,
      progress: "In Progress",
    },
  ]);

  const [newService, setNewService] = useState({
    service: "",
    price: "",
    quantity: "",
    progress: "Pending",
  });

  const [customer, setCustomer] = useState({
    customer_name: "",
    vehical_number: "",
    phone_number: "",
  });

  const handleInputCustomerChange = (e) => {
    const { name, value } = e.target;
    setCustomer({ ...customer, [name]: value });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewService({ ...newService, [name]: value });
  };

  const addService = () => {
    if (newService.service && newService.price && newService.quantity) {
      setServices([
        ...services,
        {
          id: services.length + 1,
          service: newService.service,
          price: parseInt(newService.price),
          quantity: parseInt(newService.quantity),
          progress: newService.progress,
        },
      ]);
      setNewService({
        service: "",
        price: "",
        quantity: "",
        progress: "Pending",
      });
    } else {
      alert("Please fill out all fields!");
    }
  };

  const removeService = (id) => {
    setServices(services.filter((service) => service.id !== id));
  };

  return (
    <>
      <Navbar />
      <div className="seller-dashboard">
        <div className="card">
          <h2>Job Card Management</h2>
          <p>Manage services for the vehicle job card.</p>
        </div>

        <div className="add-service">
          <h3>Create Profile</h3>
          <div className="form-group">
            <input
              type="text"
              name="customer_name"
              placeholder="Customer Name"
              value={customer.customer_name}
              onChange={handleInputCustomerChange}
            />
            <input
              type="text"
              name="vehical_number"
              placeholder="Vehical Number"
              value={customer.vehical_number}
              onChange={handleInputCustomerChange}
            />
            <input
              type="number"
              name="phone_number"
              placeholder="Phone Number"
              value={customer.phone_number}
              onChange={handleInputCustomerChange}
            />

            <button onClick={addService}>Add Customer</button>
          </div>
        </div>

        <div className="add-service">
          <h3>Add New Service</h3>
          <div className="form-group">
            <input
              type="text"
              name="service"
              placeholder="Service Name"
              value={newService.service}
              onChange={handleInputChange}
            />
            <input
              type="number"
              name="price"
              placeholder="Price (₹)"
              value={newService.price}
              onChange={handleInputChange}
            />
            <input
              type="number"
              name="quantity"
              placeholder="Quantity"
              value={newService.quantity}
              onChange={handleInputChange}
            />
            <select
              name="progress"
              value={newService.progress}
              onChange={handleInputChange}
            >
              <option value="Pending">Pending</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </select>
            <button onClick={addService}>Add Service</button>
          </div>
        </div>

        <div className="service-list">
          <h3>Service Details</h3>
          <table>
            <thead>
              <tr>
                <th>Service Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Progress</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {services.map((service) => (
                <tr key={service.id}>
                  <td>{service.service}</td>
                  <td>₹{service.price}</td>
                  <td>{service.quantity}</td>
                  <td>{service.progress}</td>
                  <td>
                    <button
                      className="delete-btn"
                      onClick={() => removeService(service.id)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default SellerJobcard;
