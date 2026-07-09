import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import API_URL from "../config/api";

function MyTickets() {
  const user = JSON.parse(localStorage.getItem("user"));

  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const res = await axios.get(
        `${API_URL}/api/bookings/user/${user.id}`
      );

      setBookings(res.data.bookings);
    } catch (error) {
      console.log(error);
      alert("Failed to load bookings");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">

      <Navbar />

      <div className="max-w-7xl mx-auto py-10 px-6">

        <h1 className="text-4xl font-bold mb-10">
          🎫 My Tickets
        </h1>

        {loading ? (
          <h2>Loading...</h2>
        ) : bookings.length === 0 ? (
          <h2 className="text-xl text-gray-500">
            No tickets booked yet.
          </h2>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {bookings.map((booking) => (

              <div
                key={booking._id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >

                <img
                  src={booking.event.image}
                  alt={booking.event.title}
                  className="h-52 w-full object-cover"
                />

                <div className="p-5">

                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                    {booking.status}
                  </span>

                  <h2 className="text-2xl font-bold mt-4">
                    {booking.event.title}
                  </h2>

                  <p className="text-gray-500 mt-2">
                    {booking.event.description}
                  </p>

                  <p className="mt-4">
                    📍 {booking.event.venue}
                  </p>

                  <p>
                    📅 {booking.event.date}
                  </p>

                  <p>
                    🕒 {booking.event.time}
                  </p>

                  <p className="mt-2 text-green-600 font-bold text-xl">
                    ₹{booking.event.ticketPrice}
                  </p>

                </div>

              </div>

            ))}

          </div>
        )}

      </div>

    </div>
  );
}

export default MyTickets;