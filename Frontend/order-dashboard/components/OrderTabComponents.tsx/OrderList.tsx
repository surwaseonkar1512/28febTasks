import React from "react";
import { FaSort, FaSyncAlt } from "react-icons/fa";

type Order = {
  status?: string;
  _id?: string;
  orderId?: string;
  orderType?: string;
  entityName?: string;
  completionDate?: string;
  state?: string;
  createdAt?: string;
};

type Props = {
  orderData: Order[];
  setSelectedOrder: any;
  selectedOrder: any;
};

const OrderList = ({
  orderData = [],
  selectedOrder,
  setSelectedOrder,
}: Props) => {
  return (
    <div className="border border-gray-400 rounded-lg m-3 shadow-md bg-white">
      <div className="flex items-start gap-6 pb-1 p-3 border-b">
        <div className="flex flex-col">
          <p className="text-[12px] font-bold">Orders</p>
          <span className="w-6 h-6 text-sm bg-blue-200 text-black px-2 py-1 rounded-full flex items-center justify-center">
            {orderData.length}
          </span>
        </div>

        <div className="flex gap-2">
          <select className="w-[130px] border border-gray-400 text-sm p-2 rounded-md">
            <option value="">Sort by...</option>
            <option value="orderType">Order Type</option>
            <option value="entityName">Entity Name</option>
            <option value="state">State</option>
          </select>

          <button className="bg-blue-600 text-white p-2 rounded-md flex items-center gap-1">
            <FaSort />
          </button>

          <button className="border p-2 rounded-md flex items-center gap-1">
            <FaSyncAlt />
          </button>
        </div>
      </div>

      {orderData.length === 0 ? (
        <p className="text-center p-4">No orders found</p>
      ) : (
        <ul className="mt-4 py-2">
          {orderData.map((order) => (
            <li
              onClick={() => setSelectedOrder(order)}
              key={order._id ?? Math.random()}
              className={`py-2 px-1 hover:shadow-lg transition border-b border-b-gray-300 flex flex-row items-start justify-between 
                ${selectedOrder?._id === order?._id ? "bg-gray-200" : ""}`}
            >
              <div>
                <p className="text-sm text-gray-600">
                  Order ID: {order._id ?? "N/A"}
                </p>
                <p className="text-sm text-gray-600">
                  Order Type:{" "}
                  <span className="font-medium">
                    {order.orderType ?? "N/A"}
                  </span>
                </p>
                <p className="text-sm text-gray-600">
                  State:{" "}
                  <span className="font-medium">{order.state ?? "N/A"}</span>
                </p>
                <p className="text-sm text-gray-600">
                  Completion Date:{" "}
                  <span className="font-medium">
                    {order.completionDate
                      ? new Date(order.completionDate).toLocaleDateString()
                      : "N/A"}
                  </span>
                </p>
                <p className="text-sm text-gray-600">
                  Created At:{" "}
                  <span className="font-medium">
                    {order.createdAt
                      ? new Date(order.createdAt).toLocaleDateString()
                      : "N/A"}
                  </span>
                </p>
              </div>

              {/* Order Status */}
              <div className="flex items-center justify-center">
                <div
                  className={`text-sm font-medium px-2 py-1 rounded-full flex items-center justify-center
                    ${
                      order?.status === "pending"
                        ? "bg-yellow-200 text-yellow-700"
                        : order?.status === "Complete"
                        ? "bg-green-200 text-green-700"
                        : order?.status === "Cancel"
                        ? "bg-red-200 text-red-700"
                        : "bg-gray-200 text-gray-700"
                    }
                  `}
                >
                  {order?.status ?? "Unknown"}
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default OrderList;
