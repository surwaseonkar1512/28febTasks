import Link from "next/link";
import React from "react";

type Props = {};

const OrderHeader = (props: Props) => {
  return (
    <div className="flex items-center justify-between p-6 bg-white shadow-md rounded-md">
      <div className="flex flex-col items-start">
        <h2 className="text-[22px] font-semibold text-gray-900">Orders</h2>
        <p className="text-gray-600">Manage your orders here</p>
      </div>

      <div className="flex items-center gap-4">
        <Link
          href={"/createOrder"}
          className="px-4 py-2 border border-gray-700 text-black rounded-md shadow transition cursor-pointer"
        >
          + Create Order
        </Link>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600 transition cursor-pointer">
          Export CSV
        </button>
        <button className="px-4 py-2 bg-red-500 text-white rounded-md shadow hover:bg-red-600 transition">
          Delete All Drafts
        </button>
      </div>
    </div>
  );
};

export default OrderHeader;
