import { useEffect, useState } from "react";
import "../css/HRDashboard.css";

function HRDashboard({ setLogin, setPage }) {

  const [totalCandidates, setTotalCandidates] = useState(0);
  const [pending, setPending] = useState(0);
  const [verified, setVerified] = useState(0);
  const [rejected, setRejected] = useState(0);

  const loadDashboardData = () => {

    const candidates =
      JSON.parse(localStorage.getItem("experienceCandidates")) || [];

    setTotalCandidates(candidates.length);

    setPending(
      candidates.filter(
        (candidate) =>
          !candidate.status ||
          candidate.status === "Pending"
      ).length
    );

    setVerified(
      candidates.filter(
        (candidate) =>
          candidate.status === "Verified"
      ).length
    );

    setRejected(
      candidates.filter(
        (candidate) =>
          candidate.status === "Rejected"
      ).length
    );

  };

  useEffect(() => {

    loadDashboardData();

    const interval = setInterval(() => {
      loadDashboardData();
    }, 1000);

    return () => clearInterval(interval);

  }, []);

  const handleLogout = () => {

    localStorage.removeItem("loggedInHR");

    setLogin(false);

    setPage("home");

  };

  return (

    <div className="dashboard-container">

      <div className="dashboard-header">

        <h1>HR Admin Dashboard</h1>

        <button
          className="logout-btn"
          onClick={handleLogout}
        >
          Logout
        </button>

      </div>

      <div className="dashboard-cards">

        <div className="card">
          <h2>Total Candidates</h2>
          <h1>{totalCandidates}</h1>
        </div>

        <div className="card">
          <h2>Pending</h2>
          <h1>{pending}</h1>
        </div>

        <div className="card">
          <h2>Verified</h2>
          <h1>{verified}</h1>
        </div>

        <div className="card">
          <h2>Rejected</h2>
          <h1>{rejected}</h1>
        </div>

      </div>

      <div className="dashboard-actions">

  <button
    onClick={() => setPage("candidatelist")}
  >
    Candidate List
  </button>

  <button
    onClick={() => setPage("verificationrequests")}
  >
    Verification Requests
  </button>

  <button
    onClick={() => setPage("reports")}
  >
    Reports
  </button>



</div>
    </div>

  );

}

export default HRDashboard;