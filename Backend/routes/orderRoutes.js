const express = require("express");
const router = express.Router();
const { getAllOrders, getOrderById, createOrder, updateOrder } = require("../controllers/orderController");

// Get all orders
router.get("/", getAllOrders);

// Get single order by ID
router.get("/:id", getOrderById);

// Create new order
router.post("/", createOrder);

// Update order
router.put("/:id", updateOrder);

module.exports = router;
