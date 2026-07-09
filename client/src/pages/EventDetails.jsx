import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";
import API_URL from "../config/api";

function EventDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [event, setEvent] = useState(null);

  useEffect(() => {
    fetchEvent();
  }, []);

  const fetchEvent = async () => {
    try {
      const res = await axios.get(
        `${API_URL}/api/events/${id}`
      );

      setEvent(res.data.event);
    } catch (error) {
      console.log(error);
    }
  };

  // Book Ticket
  const handleBooking = async () => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));

      const res = await axios.post(
        `${API_URL}/api/bookings/book`,
        {
          userId: user.id,
          eventId: id,
        }
      );

      alert(res.data.message);

      navigate("/mytickets");
    } catch (error) {
      alert(error.response?.data?.message || "Booking Failed");
    }
  };

  if (!event) {
    return (
      <h1 className="text-center mt-20 text-3xl">
        Loading...
      </h1>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">

      <Navbar />

      <div className="max-w-5xl mx-auto py-10">

        <img
          src={event.image}
          alt={event.title}
          className="w-full h-[450px] object-cover rounded-2xl shadow-xl"
        />

        <div className="bg-white rounded-2xl shadow-xl p-8 mt-8">

          <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full">
            {event.category}
          </span>

          <h1 className="text-5xl font-bold mt-6">
            {event.title}
          </h1>

          <p className="text-gray-600 mt-5 text-lg">
            {event.description}
          </p>

          <div className="grid grid-cols-2 gap-6 mt-8">

            <div>
              <h3 className="font-bold text-xl">
                📍 Venue
              </h3>

              <p>{event.venue}</p>
            </div>

            <div>
              <h3 className="font-bold text-xl">
                📅 Date
              </h3>

              <p>{event.date}
              </p>
            </div>

            <div>
              <h3 className="font-bold text-xl">
                🕒 Time
              </h3>

              <p>{event.time}</p>
            </div>

            <div>
              <h3 className="font-bold text-xl">
                💰 Ticket Price
              </h3>

              <p className="text-green-600 font-bold">
                ₹{event.ticketPrice}
              </p>
            </div>

          </div>

          <button
            onClick={handleBooking}
            className="mt-10 w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl text-xl font-bold transition"
          >
            Confirm Booking
          </button>

        </div>

      </div>

    </div>
  );
}

export default EventDetails;