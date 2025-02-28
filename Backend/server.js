require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const orderRoutes = require("./routes/orderRoutes");
const errorHandler = require("./middleware/errorMiddleware");

const app = express();
connectDB();

app.use(express.json());
app.use(cors());
app.use("/api/orders", orderRoutes);

app.use(errorHandler); // Error handling middleware

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
