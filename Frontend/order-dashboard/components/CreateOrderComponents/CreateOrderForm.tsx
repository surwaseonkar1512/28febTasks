"use client";
import React, { useState } from "react";
import "./createOrder.css";
import { createOrder } from "../../apis/orderApi";

const CreateOrderForm: React.FC = () => {
  const [formData, setFormData] = useState({
    orderId: "",
    orderType: "",
    entityType: "",
    entityName: "",
    completionDate: "",
    address: "",
    state: "",
    orderPlacedBy: "",
    accountManagerName: "",
    customerInfo: { name: "", email: "", phone: "" },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNestedChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    key: string
  ) => {
    setFormData({
      ...formData,
      customerInfo: { ...formData.customerInfo, [key]: e.target.value },
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await createOrder(formData);
      alert("Order created successfully!");
      console.log("Order response:", response);
    } catch (error) {
      alert("Failed to create order");
    }
  };

  return (
    <div className="order-form-container">
      <h2>Create New Order</h2>
      <form onSubmit={handleSubmit}>
        <label>Order ID</label>
        <input
          type="text"
          name="orderId"
          value={formData.orderId}
          onChange={handleChange}
          required
        />

        <label>Order Type</label>
        <input
          type="text"
          name="orderType"
          value={formData.orderType}
          onChange={handleChange}
          required
        />

        <label>Entity Type</label>
        <input
          type="text"
          name="entityType"
          value={formData.entityType}
          onChange={handleChange}
          required
        />

        <label>Entity Name</label>
        <input
          type="text"
          name="entityName"
          value={formData.entityName}
          onChange={handleChange}
          required
        />

        <label>Completion Date</label>
        <input
          type="date"
          name="completionDate"
          value={formData.completionDate}
          onChange={handleChange}
          required
        />

        <label>Address</label>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
        />

        <label>State</label>
        <input
          type="text"
          name="state"
          value={formData.state}
          onChange={handleChange}
          required
        />

        <label>Order Placed By</label>
        <input
          type="text"
          name="orderPlacedBy"
          value={formData.orderPlacedBy}
          onChange={handleChange}
          required
        />

        <label>Account Manager Name</label>
        <input
          type="text"
          name="accountManagerName"
          value={formData.accountManagerName}
          onChange={handleChange}
          required
        />

        <h3>Customer Information</h3>
        <label>Customer Name</label>
        <input
          type="text"
          value={formData.customerInfo.name}
          onChange={(e) => handleNestedChange(e, "name")}
          required
        />

        <label>Customer Email</label>
        <input
          type="email"
          value={formData.customerInfo.email}
          onChange={(e) => handleNestedChange(e, "email")}
          required
        />

        <label>Customer Phone</label>
        <input
          type="text"
          value={formData.customerInfo.phone}
          onChange={(e) => handleNestedChange(e, "phone")}
          required
        />

        <button type="submit">Create Order</button>
      </form>
    </div>
  );
};

export default CreateOrderForm;
