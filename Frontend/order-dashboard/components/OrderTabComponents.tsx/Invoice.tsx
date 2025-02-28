import React from "react";
type Props = {
  selectedOrder: any;
};
const Invoice = ({ selectedOrder }: Props) => {
  const data = {
    company: {
      name: "vState Filings LLC",
      address: "301 Mill Road, Suite U-5, Hewett, NY 11557",
      phone: "718-569-2103",
      logo: "https://img.freepik.com/free-vector/abstract-blue-flower-design_1142-206807.jpg?ga=GA1.1.1025254158.1735661044&semt=ais_hybrid",
    },
    receipt: {
      title: "Sales Receipt",
      date: "02/07/2025",
      orderNumber: "8536022025",
      transactionId: "pLJQpqYXLmNhb7YuLOuL2Shy",
      transactionDate: "02/07/2025",
    },
    billTo: {
      name: "Saumya Patra",
      address: "Hewett, New York, Alabama, 94488",
    },
    items: [
      {
        item: "CGS-Good Standing - NY",
        description: "Apple Inc.",
        state: "NY",
        amount: "$90.00",
      },
    ],
    payments: {
      credits: "-$90.00",
      balanceDue: "$0.00",
    },
    footer:
      "SERVICE FEE TERMS ARE NET 30 DAYS. A 1.5% monthly late fee is assessed on balances greater than 30 days. We reserve the right to resign as Registered Agent if your invoice is 30 days past due.",
  };

  return (
    <div className="md:w-full w-auto relative max-w-3xl mx-auto p-6 border rounded-lg shadow-lg bg-white overflow-x-auto">
      {/* Header */}
      <div className="flex justify-between items-center border-b pb-4 mb-4">
        <div>
          <img
            className="w-[50px] h-[50px]"
            src={data.company.logo}
            alt="Logo"
          />
        </div>
        <h2 className="text-blue-600 text-lg font-semibold">
          {data.receipt.title}
        </h2>
      </div>

      {/* Invoice Details */}
      <div className="grid grid-cols-2 gap-4 pb-4 mb-4">
        <div>
          <p className="text-[18px] font-bold text-black">
            vState Fillings LCC
          </p>

          <p className="text-sm text-gray-600">{data.company.address}</p>
          <p className="text-sm text-gray-600">{data.company.phone}</p>
        </div>

        <div className="mb-4">
          <table className="w-full border-collapse border">
            <tbody>
              <tr>
                <td className="border p-2 font-semibold">Date:</td>
                <td className="border p-2">{data.receipt.date}</td>
              </tr>
              <tr>
                <td className="border p-2 font-semibold">Order #:</td>
                <td className="border p-2">{data.receipt.orderNumber}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="mb-4 w-fit">
        <table className="w-full border-collapse border">
          <tbody>
            <tr>
              <td className="border p-2 font-semibold">Bill To:</td>
            </tr>
            <tr>
              <td className="border p-2">
                {data.billTo.name}
                <br></br>
                {data.billTo.address}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="mb-4 flex items-end justify-end w-full">
        <table className="w-fit border-collapse border">
          <tbody>
            <tr>
              <td className="border p-2 font-semibold">Transaction ID:</td>
              <td className="border p-2">{data.receipt.transactionId}</td>
            </tr>
            <tr>
              <td className="border p-2 font-semibold">Transaction Date:</td>
              <td className="border p-2">{data.receipt.transactionDate}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <table className="w-full border-collapse border mb-4">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Item</th>
            <th className="border p-2">Description</th>
            <th className="border p-2">State</th>
            <th className="border p-2">Amount</th>
          </tr>
        </thead>
        <tbody>
          {data.items.map((item, index) => (
            <tr key={index}>
              <td className="border p-2">{item.item}</td>
              <td className="border p-2">{item.description}</td>
              <td className="border p-2">{item.state}</td>
              <td className="border p-2">{item.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Payments & Credits */}
      <div className="text-right mb-4">
        <p className="text-gray-700">
          <strong>Payments/Credits:</strong> {data.payments.credits}
        </p>
        <p className="text-gray-700">
          <strong>Balance Due:</strong> {data.payments.balanceDue}
        </p>
      </div>

      {/* Watermark */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-30 border border-gray-400 -rotate-45 text-[100px] font-bold text-blue-500">
        PAID
      </div>

      {/* Footer */}
      <div className="border-t pt-4 text-sm text-gray-600">{data.footer}</div>
    </div>
  );
};

export default Invoice;
