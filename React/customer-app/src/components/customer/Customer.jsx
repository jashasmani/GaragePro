import React, { useState } from "react";
import "./Customer.css";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

const Customer = () => {
  const [customers, setCustomers] = useState([]);
  const [formData, setFormData] = useState({
    id: "",
    customer_name: "",
    vehical_number: "",
    phone_number: "",
  });
  const [editing, setEditing] = useState(false);

  // Handle form input changes
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
      customer_name: "",
      vehical_number: "",
      phone_number: "",
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
      <div className="customer-page">
        <h1>Customer Management</h1>

        <form className="customer-form" onSubmit={handleFormSubmit}>
          <input
            type="text"
            name="customer_name"
            placeholder="Customer Name"
            value={formData.customer_name}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="vehical_number"
            placeholder="Vehicle Number"
            value={formData.vehical_number}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="phone_number"
            placeholder="Phone Number"
            value={formData.phone_number}
            onChange={handleInputChange}
            required
          />
          <button type="submit">{editing ? "Update" : "Check"} Customer</button>
        </form>

        <table className="customer-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Vehicle Number</th>
              <th>Phone Number</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr key={customer.id}>
                <td>{customer.customer_name}</td>
                <td>{customer.vehical_number}</td>
                <td>{customer.phone_number}</td>
                <td>
                  <button onClick={() => editCustomer(customer)}>Edit</button>
                  <button onClick={() => deleteCustomer(customer.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer/>
    </>
  );
};

export default Customer;
