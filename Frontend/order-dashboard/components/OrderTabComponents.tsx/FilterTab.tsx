import React from "react";

type Props = {
  filterState: {
    search: string;
    state: string;
    orderType: string;
    reviewStatus: string;
    paymentStatus: string;
  };
  setFilterState: React.Dispatch<
    React.SetStateAction<{
      search: string;
      state: string;
      orderType: string;
      reviewStatus: string;
      paymentStatus: string;
    }>
  >;
};

const FilterTab = ({ filterState, setFilterState }: Props) => {
  return (
    <div>
      <div className="border-t border-t-gray-500 w-full flex md:flex-row flex-wrap items-center justify-between gap-3 p-4 bg-white ">
        {/* Search Input */}
        <input
          type="text"
          placeholder="Search"
          className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 w-[200px]"
          value={filterState.search}
          onChange={(e) =>
            setFilterState((prev) => ({ ...prev, search: e.target.value }))
          }
        />

        {/* Dropdown Filters */}
        <select
          className="px-4 py-2 border rounded-md bg-white w-[180px]"
          value={filterState.state}
          onChange={(e) =>
            setFilterState((prev) => ({ ...prev, state: e.target.value }))
          }
        >
          <option value="">Filter By State</option>
          <option value="California">California</option>
          <option value="New York">New York</option>
        </select>

        <select
          className="px-4 py-2 border rounded-md bg-white w-[180px]"
          value={filterState.orderType}
          onChange={(e) =>
            setFilterState((prev) => ({ ...prev, orderType: e.target.value }))
          }
        >
          <option value="">Filter By Order Type</option>
          <option value="Express">Express</option>
          <option value="Standard">Standard</option>
        </select>

        <select
          className="px-4 py-2 border rounded-md bg-white w-[180px]"
          value={filterState.reviewStatus}
          onChange={(e) =>
            setFilterState((prev) => ({
              ...prev,
              reviewStatus: e.target.value,
            }))
          }
        >
          <option value="">IN REVIEW</option>
          <option value="Pending">Pending</option>
          <option value="Completed">Completed</option>
        </select>

        <select
          className="px-4 py-2 border rounded-md bg-white w-[180px]"
          value={filterState.paymentStatus}
          onChange={(e) =>
            setFilterState((prev) => ({
              ...prev,
              paymentStatus: e.target.value,
            }))
          }
        >
          <option value="">Filter By Payment Status</option>
          <option value="Paid">Paid</option>
          <option value="Unpaid">Unpaid</option>
        </select>

        {/* Action Buttons */}
        <button className="px-4 py-2 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 transition">
          Apply Filter
        </button>
        <button
          className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md shadow hover:bg-gray-300 transition"
          onClick={() =>
            setFilterState({
              search: "",
              state: "",
              orderType: "",
              reviewStatus: "",
              paymentStatus: "",
            })
          }
        >
          Clear Filter
        </button>
      </div>
    </div>
  );
};

export default FilterTab;
