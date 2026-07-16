import { useState } from "react";
import "../css/Auth.css";

function ForgotPassword({ setPage }) {

  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");

  function resetPassword() {

    const hrUsers =
      JSON.parse(localStorage.getItem("hrUsers")) || [];

    const index = hrUsers.findIndex(
      (user) => user.email === email
    );

    if (index !== -1) {

      hrUsers[index].password = newPassword;

      localStorage.setItem(
        "hrUsers",
        JSON.stringify(hrUsers)
      );

      alert("Password Updated Successfully");

      setPage("hrlogin");

    } else {

      alert("Email not found");

    }

  }

  return (

    <div className="container">

      <h2>HR Forgot Password</h2>

      <input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="New Password"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
      />

      <button onClick={resetPassword}>
        Reset Password
      </button>

      <p
        style={{ cursor: "pointer" }}
        onClick={() => setPage("hrlogin")}
      >
        Back to Login
      </p>

    </div>

  );

}

export default ForgotPassword;