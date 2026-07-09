import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";
import API_URL from "../config/api";

function Dashboard() {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  // Search & Category
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const res = await axios.get(`${API_URL}/api/events`);
      setEvents(res.data.events);
    } catch (error) {
      console.log(error);
      alert("Failed to load events");
    } finally {
      setLoading(false);
    }
  };

  // Filter Events
  const filteredEvents = events.filter((event) => {
    const matchesSearch =
      event.title.toLowerCase().includes(search.toLowerCase()) ||
      event.category.toLowerCase().includes(search.toLowerCase()) ||
      event.venue.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || event.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <div className="max-w-7xl mx-auto py-10 px-6">

        <h1 className="text-4xl font-bold text-gray-800">
          Welcome, {user?.name} 👋
        </h1>

        <p className="text-gray-500 mt-2">
          Ready to book your next event?
        </p>

        {/* Dashboard Cards */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">

          <div
  onClick={() => navigate("/mytickets")}
  className="bg-white rounded-xl shadow-lg p-6 cursor-pointer hover:shadow-2xl hover:-translate-y-1 transition duration-300"
>
  <h2 className="text-xl font-semibold">🎫 My Tickets</h2>

  <p className="text-gray-500 mt-2">
    View all your booked tickets.
  </p>
</div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-semibold">🎉 Events</h2>
            <p className="text-gray-500 mt-2">
              Browse all available events.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-semibold">⚙️ Profile</h2>
            <p className="text-gray-500 mt-2">
              Manage your account settings.
            </p>
          </div>

        </div>

        {/* Search Bar */}

        <div className="mt-12 mb-6">
          <input
            type="text"
            placeholder="🔍 Search events by title, category or venue..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full md:w-96 px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Category Buttons */}

        <div className="flex flex-wrap gap-3 mb-10">

          {["All", "Concert", "Cricket", "Movie", "Comedy"].map((item) => (

            <button
              key={item}
              onClick={() => setCategory(item)}
              className={`px-5 py-2 rounded-full font-medium transition ${
                category === item
                  ? "bg-blue-600 text-white"
                  : "bg-white border hover:bg-gray-100"
              }`}
            >
              {item}
            </button>

          ))}

        </div>

        {/* Events Section */}

        <h2 className="text-3xl font-bold mb-8">
          Available Events
        </h2>

        {loading ? (
          <h2 className="text-xl text-gray-500">
            Loading Events...
          </h2>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {filteredEvents.length > 0 ? (
              filteredEvents.map((event) => (

                <div
                  key={event._id}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
                >

                  <img
                    src={event.image}
                    alt={event.title}
                    className="h-52 w-full object-cover"
                  />

                  <div className="p-5">

                    <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium mb-3">
                      {event.category}
                    </span>

                    <h2 className="text-2xl font-bold">
                      {event.title}
                    </h2>

                    <p className="text-gray-500 mt-2">
                      {event.description}
                    </p>

                    <p className="mt-4">
                      📍 <b>{event.venue}</b>
                    </p>

                    <p>
                      📅 {event.date}
                    </p>

                    <p>
                      🕒 {event.time}
                    </p>

                    <p className="mt-2 text-green-600 font-bold text-xl">
                      ₹{event.ticketPrice}
                    </p>

                    <button
                      onClick={() => navigate(`/event/${event._id}`)}
                      className="mt-5 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition"
                    >
                      Book Ticket
                    </button>

                  </div>

                </div>

              ))
            ) : (
              <div className="col-span-full text-center text-gray-500 text-xl">
                No events found.
              </div>
            )}

          </div>
        )}

      </div>
    </div>
  );
}

export default Dashboard;