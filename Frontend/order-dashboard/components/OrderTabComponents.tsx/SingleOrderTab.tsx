import React, { useState } from "react";
import OrderDetails from "./OrderDetails";
import ChatHistory from "./ChatHistory";
import Invoice from "./Invoice";

type Props = {
  selectedOrder: any;
};
const tabs = [
  { id: "orderDetails", label: "Order Details" },
  { id: "orderPreview", label: "Order Preview" },
  { id: "companyDetails", label: "Company Details" },
  { id: "documents", label: "Documents" },
  { id: "communicationHistory", label: "Communication History" },
  { id: "invoice", label: "Invoice" },
];

const SingleOrderTab = ({ selectedOrder }: Props) => {
  const [activeTab, setActiveTab] = useState("orderDetails");
  const tabComponents: Record<string, React.ReactNode> = {
    orderDetails: <OrderDetails />,
    orderPreview: (
      <div className="flex items-center justify-center text-[18px] m-10">
        No Data Avilable
      </div>
    ),
    companyDetails: (
      <div className="flex items-center justify-center text-[18px] m-10">
        No Data Avilable
      </div>
    ),
    documents: (
      <div className="flex items-center justify-center text-[18px] m-10">
        No Data Avilable
      </div>
    ),
    communicationHistory: <ChatHistory />,
    invoice: <Invoice selectedOrder={selectedOrder} />,
  };
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg">
      {/* Tabs */}
      <div className="border-b flex space-x-4 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`py-1 px-1 ${
              activeTab === tab.id
                ? "border-b-2 border-blue-500 text-blue-600 font-semibold"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="mt-4">{tabComponents[activeTab]}</div>
    </div>
  );
};

export default SingleOrderTab;
