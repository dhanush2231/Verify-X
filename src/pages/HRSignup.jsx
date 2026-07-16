import { useState } from "react";
import "../css/Signup.css";
import logo from "../assets/verify-logo.png";

function HRSignup({ setPage }) {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function signup() {

    if (name === "" || email === "" || password === "") {
      alert("Please fill all fields");
      return;
    }

    const hrUsers =
      JSON.parse(localStorage.getItem("hrUsers")) || [];

    const exists = hrUsers.find(
      (user) => user.email === email
    );

    if (exists) {
      alert("HR already exists");
      return;
    }

    const newHR = {
      id: Date.now(),
      name,
      email,
      password,
    };

    hrUsers.push(newHR);

    localStorage.setItem(
      "hrUsers",
      JSON.stringify(hrUsers)
    );

    alert("HR Signup Successful");

    setPage("hrlogin");

  }

  return (

    <div className="signup-page">

      <div className="signup-card">

        <img
          src={logo}
          alt="Verify-X"
          className="signup-logo"
        />

        <h2>HR Portal Signup</h2>

        <input
          type="text"
          placeholder="Enter Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Enter Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Create Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className="signup-btn"
          onClick={signup}
        >
          Create Account
        </button>

        <p
          className="login-link"
          onClick={() => setPage("hrlogin")}
        >
          Already have an account? Login
        </p>

      </div>

    </div>

  );

}

export default HRSignup;
