import React, { useEffect, useState } from "react";
import FilterTab from "./FilterTab";
import OrderList from "./OrderList";
import { getOrders } from "@/apis/orderApi";
import SingleOrderDetails from "./SingleOrderDetails";

const OrderMainTab = () => {
  const [orderData, setOrderData] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [filterState, setFilterState] = useState({
    search: "",
    state: "",
    orderType: "",
    reviewStatus: "",
    paymentStatus: "",
  });

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

  const filteredOrders = orderData.filter((order: any) => {
    return (
      (filterState.search === "" ||
        order.name?.toLowerCase().includes(filterState.search.toLowerCase())) &&
      (filterState.state === "" || order.state === filterState.state) &&
      (filterState.orderType === "" ||
        order.orderType === filterState.orderType) &&
      (filterState.reviewStatus === "" ||
        order.reviewStatus === filterState.reviewStatus) &&
      (filterState.paymentStatus === "" ||
        order.paymentStatus === filterState.paymentStatus)
    );
  });

  // Function to render active filters
  const renderActiveFilters = () => {
    const { search, state, orderType, reviewStatus, paymentStatus } =
      filterState;
    const activeFilters = [];

    if (search) activeFilters.push(`Search: "${search}"`);
    if (state) activeFilters.push(`State: ${state}`);
    if (orderType) activeFilters.push(`Order Type: ${orderType}`);
    if (reviewStatus) activeFilters.push(`Review Status: ${reviewStatus}`);
    if (paymentStatus) activeFilters.push(`Payment Status: ${paymentStatus}`);

    if (activeFilters.length === 0) {
      return <p className="text-gray-500">No active filters</p>;
    }
    return (
      <ul className="list-disc pl-5">
        {activeFilters.map((filter, index) => (
          <li key={index} className="text-gray-700">
            {filter}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div>
      <FilterTab filterState={filterState} setFilterState={setFilterState} />

      {/* Active Filters Display */}
      <div className="p-4 bg-gray-100 border-b">
        <h3 className="text-lg font-semibold mb-2">Active Filters:</h3>
        {renderActiveFilters()}
      </div>

      <div className="grid md:grid-cols-12 grid-cols-1">
        <div className="col-span-4">
          <OrderList
            orderData={filteredOrders} // Pass filtered data
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
