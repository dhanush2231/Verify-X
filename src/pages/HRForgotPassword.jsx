import { useState } from "react";
import "../Css/Auth.css";
import logo from "../assets/verify-logo.png";

function HRForgotPassword({ setPage }) {

  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");

  function resetPassword() {

    if (email === "" || newPassword === "") {
      alert("Please fill all fields");
      return;
    }

    const hrUsers =
      JSON.parse(localStorage.getItem("hrUsers")) || [];

    const index = hrUsers.findIndex(
      (user) => user.email === email
    );

    if (index === -1) {
      alert("HR account not found");
      return;
    }

    hrUsers[index].password = newPassword;

    localStorage.setItem(
      "hrUsers",
      JSON.stringify(hrUsers)
    );

    alert("Password Updated Successfully");

    setPage("hrlogin");
  }

  return (

    <div className="auth-page">

      <div className="auth-card">

        <img
          src={logo}
          alt="Verify-X Logo"
          className="auth-logo"
        />

        <h2>HR Forgot Password</h2>

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
          onClick={() => setPage("hrlogin")}
        >
          ← Back to Login
        </p>

      </div>

    </div>

  );

}

export default HRForgotPassword;