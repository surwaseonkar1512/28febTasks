import React from "react";

type Props = {};

const FilterTab = (props: Props) => {
  return (
    <div>
      <div className="border-t border-t-gray-500 w-full flex items-center justify-between gap-3 p-4 bg-white ">
        {/* Search Input */}
        <input
          type="text"
          placeholder="Search"
          className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 w-[200px]"
        />

        {/* Dropdown Filters */}
        <select className="px-4 py-2 border rounded-md bg-white w-[180px]">
          <option>Filter By State</option>
        </select>

        <select className="px-4 py-2 border rounded-md bg-white w-[180px]">
          <option>Filter By Order Type</option>
        </select>

        <select className="px-4 py-2 border rounded-md bg-white w-[180px]">
          <option>IN REVIEW</option>
        </select>

        <select className="px-4 py-2 border rounded-md bg-white w-[180px]">
          <option>Filter By Payment Status</option>
        </select>

        {/* Action Buttons */}
        <button className="px-4 py-2 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 transition">
          Filter
        </button>
        <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md shadow hover:bg-gray-300 transition">
          Clear Filter
        </button>
      </div>
    </div>
  );
};

export default FilterTab;
