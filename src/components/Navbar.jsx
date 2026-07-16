import "../css/Navbar.css";
import logo from "../assets/verify-logo.png";

function Navbar({ setLogin, setPage }) {

function handleLogout() {

  // Remove HR Session
  localStorage.removeItem("loggedInHR");

  // Logout
  setLogin(false);

  // Go to HR Login Page
  setPage("hrlogin");

}

  return (

    <nav className="navbar">

      <div className="logo-section">

        <img src={logo} alt="logo" />

      </div>

      <button
        className="logout-btn"
        onClick={handleLogout}
      >
        Logout
      </button>

    </nav>

  );

}

export default Navbar;