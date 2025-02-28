"use client";
import React, { useEffect, useState } from "react";
import FilterTab from "./FilterTab";
import OrderList from "./OrderList";
import { getOrders } from "@/apis/orderApi";
import SingleOrderDetails from "./SingleOrderDetails";

const OrderMainTab = () => {
  const [orderData, setOrderData] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);

  const getAllOrders = async () => {
    const response = await getOrders();
    setOrderData(response);
    if (response.length > 0) {
      setSelectedOrder(response[0]);
    }
  };

  useEffect(() => {
    getAllOrders();
  }, []);

  return (
    <div>
      <FilterTab />
      <div className="grid grid-cols-12">
        <div className="col-span-4">
          <OrderList
            orderData={orderData}
            selectedOrder={selectedOrder}
            setSelectedOrder={setSelectedOrder}
          />
        </div>
        <div className="col-span-8">
          {selectedOrder ? (
            <SingleOrderDetails selectedOrder={selectedOrder} />
          ) : (
            "Select an order to view details"
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderMainTab;
