const express = require("express");

const {
  createEvent,
  getAllEvents,
  getEventById,
  updateEvent,
  deleteEvent,
} = require("../controllers/eventController");

const router = express.Router();

// Create Event
router.post("/", createEvent);

// Get All Events
router.get("/", getAllEvents);

// Get Single Event
router.get("/:id", getEventById);

// Update Event
router.put("/:id", updateEvent);

// Delete Event
router.delete("/:id", deleteEvent);

module.exports = router;