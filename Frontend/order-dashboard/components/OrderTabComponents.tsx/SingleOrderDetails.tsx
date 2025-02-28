"use client";
import React from "react";
import { FaPrint, FaPhone, FaEnvelope } from "react-icons/fa";
import SingleOrderTab from "./SingleOrderTab";

type Order = {
  createdAt: string | number | Date;
  accountManagerName: string;
  orderPlacedBy: string;
  customerInfo: any;
  orderId?: string;
  orderType?: string;
  entityType?: string;
  entityName?: string;
  orderDate?: string;
  completionDate?: string;
  state?: string;
  placedBy?: string;
  accountManager?: string;
  contactEmail?: string;
  contactPhone?: string;
};

type Props = {
  selectedOrder: Order | null;
};

const SingleOrderDetails = ({ selectedOrder }: Props) => {
  if (!selectedOrder) {
    return <p className="text-center">Select an order to view details</p>;
  }

  return (
    <div className="space-y-4">
      <div className="border border-gray-300 rounded-lg shadow-md bg-white p-4">
        {/* Order Header */}
        <div className="flex flex-col md:flex-row justify-between items-center pb-3 border-b">
          <div className="text-center md:text-left">
            <h2 className="text-lg font-bold">
              ORDER-ID {selectedOrder.orderId ?? "N/A"}
            </h2>
            <p className="text-[12px] text-gray-500">
              {selectedOrder.entityName ?? "N/A"}
            </p>
          </div>
          <button className="flex items-center gap-1 bg-gray-100 px-3 py-1 rounded-md mt-2 md:mt-0">
            <FaPrint />
            Print
          </button>
        </div>

        {/* Order Information */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-3 mt-3">
          {/* Details Grid */}
          <div className="border border-gray-300 w-full md:w-[70%] grid grid-cols-1 md:grid-cols-4 gap-4 p-3">
            <div>
              <p className="text-gray-800 text-[14px] font-bold">Order Type</p>
              <p className="text-gray-600 text-[12px]">
                {selectedOrder.orderType ?? "N/A"}
              </p>
            </div>
            <div>
              <p className="text-gray-800 text-[14px] font-bold">Entity Type</p>
              <p className="text-gray-600 text-[12px]">
                {selectedOrder.entityType ?? "N/A"}
              </p>
            </div>
            <div>
              <p className="text-gray-800 text-[14px] font-bold">Entity Name</p>
              <p className="text-gray-600 text-[12px]">
                {selectedOrder.entityName ?? "N/A"}
              </p>
            </div>
            <div>
              <p className="text-gray-800 text-[14px] font-bold">Order Date</p>
              <p className="text-gray-600 text-[12px]">
                {selectedOrder.createdAt
                  ? new Date(selectedOrder.createdAt).toLocaleDateString()
                  : "N/A"}
              </p>
            </div>
            <div>
              <p className="text-gray-800 text-[14px] font-bold">
                Completion Date
              </p>
              <p className="text-gray-600 text-[12px]">
                {selectedOrder.completionDate
                  ? new Date(selectedOrder.completionDate).toLocaleDateString()
                  : "N/A"}
              </p>
            </div>
            <div>
              <p className="text-gray-800 text-[14px] font-bold">State</p>
              <p className="text-gray-600 text-[12px]">
                {selectedOrder.state ?? "N/A"}
              </p>
            </div>
            <div>
              <p className="text-gray-800 text-[14px] font-bold">
                Order Placed By
              </p>
              <p className="text-gray-600 text-[12px]">
                {selectedOrder.orderPlacedBy ?? "N/A"}
              </p>
            </div>
            <div>
              <p className="text-gray-800 text-[14px] font-bold">
                Account Manager
              </p>
              <p className="text-gray-600 text-[12px]">
                {selectedOrder.accountManagerName ?? "N/A"}
              </p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="w-full md:w-[30%] border border-gray-300 p-4 flex items-center">
            <div className="bg-purple-500 text-white w-12 h-12 flex items-center justify-center rounded-full text-lg">
              {selectedOrder.placedBy
                ? selectedOrder.placedBy[0].toUpperCase()
                : "N"}
            </div>
            <div className="ml-3">
              <p className="text-gray-600 text-[12px]">
                {selectedOrder.customerInfo?.name ?? "N/A"}
              </p>
              <p className="text-[12px] flex items-center gap-2">
                <FaPhone className="text-blue-600" />{" "}
                {selectedOrder.customerInfo?.email ?? "N/A"}
              </p>
              <p className="text-[12px] flex items-center gap-2">
                <FaEnvelope className="text-blue-600" />{" "}
                {selectedOrder.customerInfo?.phone ?? "N/A"}
              </p>
            </div>
          </div>
        </div>
      </div>

      <SingleOrderTab selectedOrder={selectedOrder} />
    </div>
  );
};

export default SingleOrderDetails;
