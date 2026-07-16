import { useState } from "react";
import "../css/Auth.css";
import logo from "../assets/verify-logo.png";

function CandidateForgotPassword({ setPage }) {

  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");

  function resetPassword() {

    if (email === "" || newPassword === "") {
      alert("Please fill all fields");
      return;
    }

    const candidateUsers =
      JSON.parse(localStorage.getItem("candidateUsers")) || [];

    const index = candidateUsers.findIndex(
      (user) => user.email === email
    );

    if (index === -1) {
      alert("Candidate account not found");
      return;
    }

    candidateUsers[index].password = newPassword;

    localStorage.setItem(
      "candidateUsers",
      JSON.stringify(candidateUsers)
    );

    alert("Password Updated Successfully");

    setPage("login");

  }

  return (

    <div className="auth-page">

      <div className="auth-card">

        <img
          src={logo}
          alt="Verify-X Logo"
          className="auth-logo"
        />

        <h2>Candidate Forgot Password</h2>

        <p>
          Enter your registered email and create a new password.
        </p>

        <input
          type="email"
          placeholder="Enter Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter New Password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />

        <button
          className="reset-btn"
          onClick={resetPassword}
        >
          Reset Password
        </button>

        <p
          className="back-link"
          onClick={() => setPage("login")}
        >
          ← Back to Login
        </p>

      </div>

    </div>

  );

}

export default CandidateForgotPassword;
