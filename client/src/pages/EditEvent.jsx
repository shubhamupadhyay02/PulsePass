import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";
import API_URL from "../config/api";

function EditEvent() {
  const navigate = useNavigate();
  const { id } = useParams();

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

  useEffect(() => {
    fetchEvent();
  }, []);

  const fetchEvent = async () => {
    try {
      const res = await axios.get(
        `${API_URL}/api/events/${id}`
      );

      setFormData(res.data.event);
    } catch (error) {
      console.log(error);
      alert("Failed to load event");
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(
        `${API_URL}/api/events/${id}`,
        formData
      );

      alert("Event Updated Successfully!");

      navigate("/admin");
    } catch (error) {
      console.log(error);
      alert("Update Failed");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">

      <Navbar />

      <div className="max-w-3xl mx-auto py-10">

        <div className="bg-white rounded-2xl shadow-xl p-8">

          <h1 className="text-4xl font-bold text-center mb-8">
            Edit Event
          </h1>

          <form onSubmit={handleSubmit} className="space-y-5">

            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full border rounded-xl p-3"
              required
            />

            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="4"
              className="w-full border rounded-xl p-3"
              required
            />

            <input
              type="text"
              name="venue"
              value={formData.venue}
              onChange={handleChange}
              className="w-full border rounded-xl p-3"
              required
            />

            <div className="grid grid-cols-2 gap-4">

              <input
                type="date"
                name="date"
                value={formData.date?.substring(0, 10)}
                onChange={handleChange}
                className="border rounded-xl p-3"
                required
              />

              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="border rounded-xl p-3"
                required
              />

            </div>

            <div className="grid grid-cols-2 gap-4">

              <input
                type="number"
                name="ticketPrice"
                value={formData.ticketPrice}
                onChange={handleChange}
                className="border rounded-xl p-3"
                required
              />

              <input
                type="number"
                name="capacity"
                value={formData.capacity}
                onChange={handleChange}
                className="border rounded-xl p-3"
                required
              />

            </div>

            <input
              type="text"
              name="image"
              value={formData.image}
              onChange={handleChange}
              className="w-full border rounded-xl p-3"
              required
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
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-4 rounded-xl text-lg font-bold transition"
            >
              Update Event
            </button>

          </form>

        </div>

      </div>

    </div>
  );
}

export default EditEvent;