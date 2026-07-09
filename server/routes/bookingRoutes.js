const express = require("express");

const {
  bookTicket,
  getMyBookings,
} = require("../controllers/bookingController");

const router = express.Router();

// Book Ticket
router.post("/book", bookTicket);

// Get My Tickets
router.get("/user/:userId", getMyBookings);

module.exports = router;