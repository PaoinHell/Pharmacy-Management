// Import packages
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

// Init app
const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // parse JSON body

// Test route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Import routes (tuỳ bạn tạo)
// const productRoutes = require("./routes/productRoutes");
// const userRoutes = require("./routes/userRoutes");

// Use routes
// app.use("/api/products", productRoutes);
// app.use("/api/users", userRoutes);

// Connect MongoDB
// mongoose
//   .connect(process.env.MONGO_URI)
//   .then(() => console.log("MongoDB connected"))
//   .catch((err) => console.log(err));

// Start server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});