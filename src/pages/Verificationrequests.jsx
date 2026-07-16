import { useEffect, useState } from "react";
import "../css/VerificationRequests.css";

function VerificationRequests({ setPage }) {

  const [pendingCandidates, setPendingCandidates] = useState([]);

  useEffect(() => {

    const candidates =
      JSON.parse(localStorage.getItem("experienceCandidates")) || [];

    const pending = candidates.filter(
      (candidate) =>
        !candidate.status || candidate.status === "Pending"
    );

    setPendingCandidates(pending);

  }, []);

  const handleView = (candidate) => {

    localStorage.setItem(
      "selectedCandidate",
      JSON.stringify(candidate)
    );

    setPage("candidatedetails");

  };

  return (

    <div className="verification-container">

      <h1>Verification Requests</h1>

      <h3>
        Total Pending Requests : {pendingCandidates.length}
      </h3>

      <table>

        <thead>

          <tr>

            <th>Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Company</th>
            <th>Designation</th>
            <th>Status</th>
            <th>Action</th>

          </tr>

        </thead>

        <tbody>

          {pendingCandidates.length === 0 ? (

            <tr>

              <td colSpan="7">
                No Pending Requests
              </td>

            </tr>

          ) : (

            pendingCandidates.map((candidate, index) => (

              <tr key={index}>

                <td>{candidate.fullName}</td>

                <td>{candidate.email}</td>

                <td>{candidate.mobile}</td>

                <td>{candidate.currentCompany}</td>

                <td>{candidate.designation}</td>

                <td>
                  {candidate.status || "Pending"}
                </td>

                <td>

                  <button
                    className="view-btn"
                    onClick={() => handleView(candidate)}
                  >
                    View
                  </button>

                </td>

              </tr>

            ))

          )}

        </tbody>

      </table>

      <br />

      <button
        className="back-btn"
        onClick={() => setPage("hrdashboard")}
      >
        Back to Dashboard
      </button>

    </div>

  );

}

export default VerificationRequests;