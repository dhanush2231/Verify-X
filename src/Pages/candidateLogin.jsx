import { useState } from "react";
import "../css/CandidateLogin.css";
import logo from "../assets/verify-logo.png";

function CandidateLogin({ setLogin, setPage, setUserType }) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin() {

    if (email === "" || password === "") {
      alert("Please enter Email and Password");
      return;
    }

    const candidateUsers =
      JSON.parse(localStorage.getItem("candidateUsers")) || [];

    const user = candidateUsers.find(
      (candidate) =>
        candidate.email === email &&
        candidate.password === password
    );

    if (user) {

      
      localStorage.setItem(
        "loggedInCandidate",
        JSON.stringify(user)
      );

     
      localStorage.setItem(
        "currentCandidateEmail",
        email
      );

      alert("Candidate Login Successful");

     
      setUserType("candidate");

      
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

      <h2>Candidate Login</h2>

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

      <button onClick={() => setPage("candidatesignup")}>
        New Candidate? Signup
      </button>

      <br /><br />

      <button onClick={() => setPage("candidateforgot")}>
        Forgot Password
      </button>

      <br /><br />

      <button onClick={() => setPage("home")}>
        Back to Home
      </button>

    </div>

  );
}

export default CandidateLogin;