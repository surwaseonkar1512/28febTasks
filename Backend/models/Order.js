const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  orderId: { type: String, required: true, unique: true },
  orderType: { type: String, required: true },
  entityType: { type: String, required: true },
  entityName: { type: String, required: true },
  completionDate: { type: Date, required: true },
  address: { type: String, required: true },
  state: { type: String, required: true },
  orderPlacedBy: { type: String, required: true },
  accountManagerName: { type: String, required: true },

  orderDetails: [
    {
      title: { type: String, required: true },
      description: { type: String, required: true },
      price: { type: Number, required: true }
    }
  ],

  orderHistory: [
    {
      statusName: { type: String, required: true },
      date: { type: Date, required: true, default: Date.now },
      updatedBy: { type: String, required: true }
    }
  ],

  customerInfo: {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true }
  },

  invoice: {
    orderTotal: { type: Number, required: true },
    orderProducts: [
      {
        productName: { type: String, required: true },
        quantity: { type: Number, required: true }
      }
    ]
  },

  createdAt: { type: Date, default: Date.now }
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
