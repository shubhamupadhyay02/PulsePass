import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";
import API_URL from "../config/api";

function AddEvent() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    venue: "",
    date: "",
    time: "",
    ticketPrice: "",
    capacity: "",
    image: "",
    category: "Concert",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        `${API_URL}/api/events`,
        formData
      );

      alert("Event Created Successfully!");

      navigate("/admin");

    } catch (error) {
      console.log(error);
      alert("Failed to create event");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">

      <Navbar />

      <div className="max-w-3xl mx-auto py-10">

        <div className="bg-white rounded-2xl shadow-xl p-8">

          <h1 className="text-4xl font-bold text-center mb-8">
            Add New Event
          </h1>

          <form
            onSubmit={handleSubmit}
            className="space-y-5"
          >

            <input
              type="text"
              name="title"
              placeholder="Event Title"
              value={formData.title}
              onChange={handleChange}
              required
              className="w-full border rounded-xl p-3"
            />

            <textarea
              name="description"
              placeholder="Description"
              value={formData.description}
              onChange={handleChange}
              required
              rows="4"
              className="w-full border rounded-xl p-3"
            />

            <input
              type="text"
              name="venue"
              placeholder="Venue"
              value={formData.venue}
              onChange={handleChange}
              required
              className="w-full border rounded-xl p-3"
            />

            <div className="grid grid-cols-2 gap-4">

              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                className="border rounded-xl p-3"
              />

              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
                className="border rounded-xl p-3"
              />

            </div>

            <div className="grid grid-cols-2 gap-4">

              <input
                type="number"
                name="ticketPrice"
                placeholder="Ticket Price"
                value={formData.ticketPrice}
                onChange={handleChange}
                required
                className="border rounded-xl p-3"
              />

              <input
                type="number"
                name="capacity"
                placeholder="Capacity"
                value={formData.capacity}
                onChange={handleChange}
                required
                className="border rounded-xl p-3"
              />

            </div>

            <input
              type="text"
              name="image"
              placeholder="Image URL"
              value={formData.image}
              onChange={handleChange}
              required
              className="w-full border rounded-xl p-3"
            />

            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full border rounded-xl p-3"
            >
              <option>Concert</option>
              <option>Cricket</option>
              <option>Movie</option>
              <option>Comedy</option>
            </select>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-bold text-lg transition"
            >
              Create Event
            </button>

          </form>

        </div>

      </div>

    </div>
  );
}

export default AddEvent;