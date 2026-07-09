import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";
import API_URL from "../config/api";

function AdminDashboard() {
  const navigate = useNavigate();

  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

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

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this event?"
    );

    if (!confirmDelete) return;

    try {
      await axios.delete(`${API_URL}/api/events/${id}`);

      alert("Event deleted successfully");

      fetchEvents();
    } catch (error) {
      console.log(error);
      alert("Delete failed");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">

      <Navbar />

      <div className="max-w-7xl mx-auto py-10 px-6">

        <div className="flex justify-between items-center mb-10">

          <h1 className="text-4xl font-bold">
            Admin Dashboard
          </h1>

          <button
            onClick={() => navigate("/admin/add")}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold"
          >
            + Add Event
          </button>

        </div>

        {loading ? (
          <h2>Loading...</h2>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {events.map((event) => (

              <div
                key={event._id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >

                <img
                  src={event.image}
                  alt={event.title}
                  className="h-52 w-full object-cover"
                />

                <div className="p-5">

                  <h2 className="text-2xl font-bold">
                    {event.title}
                  </h2>

                  <p className="text-gray-500 mt-2">
                    {event.venue}
                  </p>

                  <div className="flex gap-3 mt-6">

                    <button
                      onClick={() =>
                        navigate(`/admin/edit/${event._id}`)
                      }
                      className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded-lg"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => handleDelete(event._id)}
                      className="flex-1 bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg"
                    >
                      Delete
                    </button>

                  </div>

                </div>

              </div>

            ))}

          </div>
        )}

      </div>

    </div>
  );
}

export default AdminDashboard;