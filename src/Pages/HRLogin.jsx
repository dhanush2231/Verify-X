import { useState } from "react";
import "../css/HRLogin.css";
import logo from "../assets/verify-logo.png";

function HRLogin({ setLogin, setPage, setUserType }) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin() {

    if (email === "" || password === "") {
      alert("Please enter Email and Password");
      return;
    }

    const hrUsers =
      JSON.parse(localStorage.getItem("hrUsers")) || [];

    const user = hrUsers.find(
      (hr) =>
        hr.email === email &&
        hr.password === password
    );

    if (user) {

     
localStorage.setItem(
  "loggedInHR",
  JSON.stringify(user)
);

alert("HR Login Successful");


setUserType("hr");


setPage("hrdashboard");


setLogin(true);

    } else {

      alert("Invalid Email or Password");

    }

  }

  return (

    <div className="login-page">

      <img
        src={logo}
        alt="Verify-X"
        className="login-logo"
      />

      <h2>HR Portal Login</h2>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleLogin}>
        Login
      </button>

      <br /><br />

      <button onClick={() => setPage("hrsignup")}>
        New HR? Signup
      </button>

      <br /><br />

      <button onClick={() => setPage("hrforgot")}>
        Forgot Password
      </button>

      <br /><br />

      <button onClick={() => setPage("home")}>
        Back to Home
      </button>

    </div>

  );

}

export default HRLogin;