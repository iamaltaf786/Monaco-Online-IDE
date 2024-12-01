import React, { useState } from "react";
import logo from "../images/logo.png";
import { Link, useNavigate } from "react-router-dom";
import image from "../images/authPageSide.png";

function Login({ onLogin }) {
  const [email, setEmail] = useState("user@example.com");
  const [pwd, setPwd] = useState("password@123");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // To navigate to home after login

  const submitForm = (e) => {
    e.preventDefault();

    // Basic hardcoded login validation (replace with actual API call later)
    if (email === "user@example.com" && pwd === "password@123") {
      onLogin(); // Mark the user as logged in in App.jsx
      navigate("/home"); // Redirect to the home page
    } else {
      setError("Invalid email or password.");
    }
  };

  return (
    <div className="container w-screen min-h-screen flex items-center justify-between px-[100px]">
      <div className="left w-[35%]">
        <img className="w-[200px]" src={logo} alt="" />
        <form onSubmit={submitForm} className="w-full mt-[60px]">
          <div className="inputBox">
            <input
              required
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              placeholder="Email"
            />
          </div>

          <div className="inputBox">
            <input
              required
              onChange={(e) => setPwd(e.target.value)}
              value={pwd}
              type="password"
              placeholder="Password"
            />
          </div>

          {error && <p className="text-red-500">{error}</p>}

          <p className="text-[gray]">
            Don't have an account{" "}
            <Link to="/signUp" className="text-[#00AEEF]">
              Sign Up
            </Link>
          </p>

          <button
            className={`btnBlue w-full mt-[20px] ${
              email && pwd
                ? "hover:bg-[#0086b3] bg-[#00aeef]"
                : "bg-gray-400 cursor-not-allowed"
            }`}
            disabled={!email || !pwd}
          >
            Login
          </button>
        </form>
      </div>

      <div className="right w-[55%]">
        <img className="h-[100vh] w-[100%] object-cover" src={image} alt="" />
      </div>
    </div>
  );
}

export default Login;
