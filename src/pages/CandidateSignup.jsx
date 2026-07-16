import { useState } from "react";
import "../Css/Signup.css";
import logo from "../assets/verify-logo.png";

function CandidateSignup({ setPage }) {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function signup() {

    if (name === "" || email === "" || password === "") {
      alert("Please fill all fields");
      return;
    }

    const candidateUsers =
      JSON.parse(localStorage.getItem("candidateUsers")) || [];

    const exists = candidateUsers.find(
      (user) => user.email === email
    );

    if (exists) {
      alert("Candidate already exists");
      return;
    }

    const newCandidate = {
      id: Date.now(),
      name,
      email,
      password,
    };

    candidateUsers.push(newCandidate);

    localStorage.setItem(
      "candidateUsers",
      JSON.stringify(candidateUsers)
    );

    alert("Candidate Signup Successful");

    setPage("login");

  }

  return (

    <div className="signup-page">

      <div className="signup-card">

        <img
          src={logo}
          alt="Verify-X Logo"
          className="signup-logo"
        />

        <h2>Candidate Signup</h2>

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
          onClick={() => setPage("login")}
        >
          Already have an account? Login
        </p>

      </div>

    </div>

  );

}

export default CandidateSignup;