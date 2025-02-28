import React from "react";

const OrderDetails = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg">
      {/* Grid Layout for Order Receipt & Order History */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Order Receipt */}
        <div className="border rounded-lg p-4 shadow-sm">
          <h2 className="text-lg font-semibold border-b pb-2">Receipt</h2>
          <div className="mt-2">
            <h3 className="font-medium">Reinstatement</h3>
            <p className="text-sm text-gray-500">
              The filing fee for the application as per the state selected
            </p>
            <p className="text-gray-500">Government fee</p>
            <p className="text-lg font-semibold mt-2">$0.00</p>
          </div>
        </div>

        {/* Order History */}
        <div className="border rounded-lg p-4 shadow-sm">
          <h2 className="text-lg font-semibold border-b pb-2">Order History</h2>
          <div className="mt-2 space-y-3">
            {/* Order Created */}
            <div className="flex items-center space-x-3">
              <span className="text-green-500">✔️</span>
              <div>
                <p className="font-medium">ORDER CREATED</p>
                <p className="text-sm text-gray-500">
                  Order created successfully
                </p>
                <p className="text-sm text-blue-500">
                  Updated by Nandkumar Rawate
                </p>
              </div>
              <p className="text-gray-500 text-sm">Feb 27, 2025</p>
            </div>

            {/* Pay Later Request Raised */}
            <div className="flex items-center space-x-3">
              <span className="text-green-500">✔️</span>
              <div>
                <p className="font-medium">PAY LATER REQUEST RAISED</p>
                <p className="text-sm text-gray-500">Approval Pending</p>
                <p className="text-sm text-blue-500">
                  Updated by Nandkumar Rawate
                </p>
              </div>
              <p className="text-gray-500 text-sm">Feb 27, 2025</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
