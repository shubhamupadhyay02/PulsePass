const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const eventRoutes = require("./routes/eventRoutes");
const bookingRoutes = require("./routes/bookingRoutes");

const app = express();

app.use(cors());
app.use(express.json());


// Auth Routes
app.use("/api", authRoutes);

// Event Routes
app.use("/api/events", eventRoutes);

// Booking Routes
app.use("/api/bookings", bookingRoutes);

app.get("/api/health", (req, res) => {
  res.json({
    status: "success",
    message: "PulsePass API is running 🚀",
  });
});

module.exports = app;