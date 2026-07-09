const Booking = require("../models/Booking");
const Event = require("../models/Event");

// Book Ticket
const bookTicket = async (req, res) => {
  try {
    const { userId, eventId } = req.body;

    // Check if event exists
    const event = await Event.findById(eventId);

    if (!event) {
      return res.status(404).json({
        success: false,
        message: "Event not found",
      });
    }

    // Prevent duplicate booking
    const existingBooking = await Booking.findOne({
      user: userId,
      event: eventId,
    });

    if (existingBooking) {
      return res.status(400).json({
        success: false,
        message: "You have already booked this event",
      });
    }

    // Create booking
    const booking = await Booking.create({
      user: userId,
      event: eventId,
    });

    res.status(201).json({
      success: true,
      message: "Ticket booked successfully",
      booking,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// Get My Bookings
const getMyBookings = async (req, res) => {
  try {
    const { userId } = req.params;

    const bookings = await Booking.find({ user: userId })
      .populate("event")
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      bookings,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

module.exports = {
  bookTicket,
  getMyBookings,
};