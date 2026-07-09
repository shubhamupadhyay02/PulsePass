import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <nav className="bg-gray-900 border-b border-gray-700 px-8 py-4 flex justify-between items-center">

      {/* Logo */}

      <h1
        onClick={() => navigate("/dashboard")}
        className="text-2xl font-bold text-blue-500 cursor-pointer"
      >
        🎫 PulsePass
      </h1>

      {/* Navigation */}

      <div className="flex items-center gap-6">

        <button
          onClick={() => navigate("/dashboard")}
          className="text-white hover:text-blue-400 transition"
        >
          Dashboard
        </button>

        <button
          onClick={() => navigate("/mytickets")}
          className="text-white hover:text-blue-400 transition"
        >
          My Tickets
        </button>

        {/* Admin Button */}

        {user?.role === "admin" && (
          <button
            onClick={() => navigate("/admin")}
            className="text-white hover:text-blue-400 transition"
          >
            Admin
          </button>
        )}

        <span className="text-white">
          Hi, <b>{user?.name}</b>
        </span>

        <button
          onClick={logout}
          className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg text-white transition"
        >
          Logout
        </button>

      </div>

    </nav>
  );
}

export default Navbar;