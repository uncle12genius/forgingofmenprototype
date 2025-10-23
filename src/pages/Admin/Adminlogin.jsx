import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const navigate = useNavigate();

  // Hardcoded credentials
  const ADMIN_EMAIL = "admin@forgingofmen.org";
  const ADMIN_PASSWORD = "Forging@123";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      // Save login state
      localStorage.setItem("isAdminLoggedIn", "true");
      navigate("/AdminDashboard");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-semibold mb-6 text-center text-gray-800">
          Admin Login
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 w-full border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Enter admin email"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1 w-full border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Enter password"
            />
          </div>

          {error && <p className="text-red-600 text-sm">{error}</p>}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
