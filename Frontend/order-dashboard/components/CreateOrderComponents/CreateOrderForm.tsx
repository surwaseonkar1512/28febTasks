"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { createOrder } from "../../apis/orderApi";

// ✅ Validation Schema
const orderSchema = yup.object().shape({
  orderId: yup.string().required("Order ID is required"),
  orderType: yup.string().required("Order Type is required"),
  status: yup.string().required("Order Status is required"),
  entityType: yup.string().required("Entity Type is required"),
  entityName: yup.string().required("Entity Name is required"),
  completionDate: yup.date().required("Completion Date is required"),
  address: yup.string().required("Address is required"),
  state: yup.string().required("State is required"),
  orderPlacedBy: yup.string().required("Order Placed By is required"),
  accountManagerName: yup.string().required("Account Manager Name is required"),
  customerInfo: yup.object().shape({
    name: yup.string().required("Customer Name is required"),
    email: yup
      .string()
      .email("Invalid Email")
      .required("Customer Email is required"),
    phone: yup
      .string()
      .matches(/^\d{10}$/, "Invalid phone number")
      .required("Phone is required"),
  }),
  invoice: yup.object().shape({
    billingAddress: yup.string().required("Billing Address is required"),
    balanceDue: yup.number().positive().required("Balance Due is required"),
    orderTotal: yup.number().positive().required("Order Total is required"),
    transactionId: yup.string().required("Transaction ID is required"),
  }),
});

const CreateOrderForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(orderSchema),
  });

  const onSubmit = async (data: any) => {
    try {
      await createOrder(data);
      alert("✅ Order created successfully!");
    } catch (error) {
      alert("❌ Failed to create order");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-4xl border border-gray-200">
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-8">
          📦 Create New Order
        </h2>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Order ID */}
          <InputField
            label="Order ID"
            {...register("orderId")}
            error={errors.orderId?.message}
          />

          {/* Order Type */}
          <SelectField
            label="Order Type"
            {...register("orderType")}
            error={errors.orderType?.message}
          >
            <option value="">Select Order Type</option>
            <option value="Online">Online</option>
            <option value="COD">Cash on Delivery</option>
          </SelectField>

          {/* Order Status */}
          <SelectField
            label="Order Status"
            {...register("status")}
            error={errors.status?.message}
          >
            <option value="">Select Status</option>
            <option value="Pending">Pending</option>
            <option value="Complete">Complete</option>
            <option value="Rejected">Rejected</option>
          </SelectField>

          <InputField
            label="Entity Type"
            {...register("entityType")}
            error={errors.entityType?.message}
          />
          <InputField
            label="Entity Name"
            {...register("entityName")}
            error={errors.entityName?.message}
          />
          <InputField
            type="date"
            label="Completion Date"
            {...register("completionDate")}
            error={errors.completionDate?.message}
          />
          <InputField
            label="Address"
            {...register("address")}
            error={errors.address?.message}
          />
          <InputField
            label="State"
            {...register("state")}
            error={errors.state?.message}
          />
          <InputField
            label="Order Placed By"
            {...register("orderPlacedBy")}
            error={errors.orderPlacedBy?.message}
          />
          <InputField
            label="Account Manager Name"
            {...register("accountManagerName")}
            error={errors.accountManagerName?.message}
          />

          {/* Customer Information Section */}
          <h3 className="col-span-2 text-2xl font-semibold text-gray-800 mt-6">
            👤 Customer Information
          </h3>

          <InputField
            label="Customer Name"
            {...register("customerInfo.name")}
            error={errors.customerInfo?.name?.message}
          />
          <InputField
            type="email"
            label="Customer Email"
            {...register("customerInfo.email")}
            error={errors.customerInfo?.email?.message}
          />
          <InputField
            label="Customer Phone"
            {...register("customerInfo.phone")}
            error={errors.customerInfo?.phone?.message}
          />

          {/* Invoice Section */}
          <h3 className="col-span-2 text-2xl font-semibold text-gray-800 mt-6">
            🧾 Invoice Details
          </h3>

          <InputField
            label="Billing Address"
            {...register("invoice.billingAddress")}
            error={errors.invoice?.billingAddress?.message}
          />
          <InputField
            type="number"
            label="Balance Due"
            {...register("invoice.balanceDue")}
            error={errors.invoice?.balanceDue?.message}
          />
          <InputField
            type="number"
            label="Order Total"
            {...register("invoice.orderTotal")}
            error={errors.invoice?.orderTotal?.message}
          />
          <InputField
            label="Transaction ID"
            {...register("invoice.transactionId")}
            error={errors.invoice?.transactionId?.message}
          />

          {/* Submit Button */}
          <div className="col-span-2">
            <button
              type="submit"
              className="w-full py-3 px-6 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition shadow-md"
            >
              🚀 Create Order
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  type = "text",
  error,
  ...props
}) => (
  <div>
    <label className="block text-gray-700 font-medium">{label}</label>
    <input
      type={type}
      className="mt-1 w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
      {...props}
    />
    {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
  </div>
);

interface SelectFieldProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  error?: string;
  children: React.ReactNode;
}

const SelectField: React.FC<SelectFieldProps> = ({
  label,
  children,
  error,
  ...props
}) => (
  <div>
    <label className="block text-gray-700 font-medium">{label}</label>
    <select
      className="mt-1 w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
      {...props}
    >
      {children}
    </select>
    {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
  </div>
);

export default CreateOrderForm;
