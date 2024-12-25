import React, { useState } from "react";
import "./Profile.css";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

const CustomerProfile = () => {
  const [customers, setCustomers] = useState([]);
  const [formData, setFormData] = useState({
    id: "",
    customerName: "",
    vehicleNumber: "",
    phoneNumber: "",
    email: "",
    address: "",
    vehicleModel: "",
    serviceType: "",
  });
  const [editing, setEditing] = useState(false);

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Add or update customer
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (editing) {
      setCustomers((prev) =>
        prev.map((customer) =>
          customer.id === formData.id ? formData : customer
        )
      );
      setEditing(false);
    } else {
      setCustomers((prev) => [
        ...prev,
        { ...formData, id: Date.now().toString() },
      ]);
    }
    setFormData({
      id: "",
      customerName: "",
      vehicleNumber: "",
      phoneNumber: "",
      email: "",
      address: "",
      vehicleModel: "",
      serviceType: "",
    });
  };

  // Delete customer
  const deleteCustomer = (id) => {
    setCustomers((prev) => prev.filter((customer) => customer.id !== id));
  };

  // Edit customer
  const editCustomer = (customer) => {
    setFormData(customer);
    setEditing(true);
  };

  return (
    <>
      <Navbar />
      <div className="customer-profile">
        <h1>Customer Profile Management</h1>

        <form className="customer-form" onSubmit={handleFormSubmit}>
          <input
            type="text"
            name="customerName"
            placeholder="Customer Name"
            value={formData.customerName}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="vehicleNumber"
            placeholder="Vehicle Number"
            value={formData.vehicleNumber}
            onChange={handleInputChange}
            required
          />
          <input
            type="tel"
            name="phoneNumber"
            placeholder="Phone Number"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <textarea
            name="address"
            placeholder="Customer Address"
            value={formData.address}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="vehicleModel"
            placeholder="Vehicle Model"
            value={formData.vehicleModel}
            onChange={handleInputChange}
            required
          />
          <select
            name="serviceType"
            value={formData.serviceType}
            onChange={handleInputChange}
            required
          >
            <option value="">Select Service Type</option>
            <option value="Maintenance">Maintenance</option>
            <option value="Repair">Repair</option>
            <option value="Cleaning">Cleaning</option>
            <option value="Other">Other</option>
          </select>
          <button type="submit">
            {editing ? "Update Customer" : "Add Customer"}
          </button>
        </form>

        {customers.length > 0 && (
          <table className="customer-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Vehicle Number</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Address</th>
                <th>Vehicle Model</th>
                <th>Service Type</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((customer) => (
                <tr key={customer.id}>
                  <td>{customer.customerName}</td>
                  <td>{customer.vehicleNumber}</td>
                  <td>{customer.phoneNumber}</td>
                  <td>{customer.email}</td>
                  <td>{customer.address}</td>
                  <td>{customer.vehicleModel}</td>
                  <td>{customer.serviceType}</td>
                  <td>
                    <button
                      className="edit-btn"
                      onClick={() => editCustomer(customer)}
                    >
                      Edit
                    </button>
                    <button
                      className="delete-btn"
                      onClick={() => deleteCustomer(customer.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      <Footer />
    </>
  );
};

export default CustomerProfile;
