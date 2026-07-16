import { useEffect, useState } from "react";
import "../css/Reports.css";

function Reports({ setPage }) {

  const [candidates, setCandidates] = useState([]);

  useEffect(() => {

    const data =
      JSON.parse(localStorage.getItem("experienceCandidates")) || [];

    setCandidates(data);

  }, []);

  const totalCandidates = candidates.length;

  const pending = candidates.filter(
    (candidate) =>
      !candidate.status ||
      candidate.status === "Pending"
  ).length;

  const verified = candidates.filter(
    (candidate) =>
      candidate.status === "Verified"
  ).length;

  const rejected = candidates.filter(
    (candidate) =>
      candidate.status === "Rejected"
  ).length;

  const printReport = () => {

    window.print();

  };

  return (

    <div className="reports-container">

      <h1>REPORTS</h1>

      <div className="summary-card">

        <p><strong>Total Candidates :</strong> {totalCandidates}</p>

        <p><strong>Pending :</strong> {pending}</p>

        <p><strong>Verified :</strong> {verified}</p>

        <p><strong>Rejected :</strong> {rejected}</p>

      </div>

      <h2>Candidate Status Report</h2>

      <table className="report-table">

        <thead>

          <tr>

            <th>Name</th>

            <th>Email</th>

            <th>Role</th>

            <th>Experience</th>

            <th>Status</th>

          </tr>

        </thead>

        <tbody>

          {candidates.length === 0 ? (

            <tr>

              <td colSpan="5">

                No Candidates Found

              </td>

            </tr>

          ) : (

            candidates.map((candidate, index) => (

              <tr key={index}>

                <td>{candidate.fullName}</td>

                <td>{candidate.email}</td>

                <td>{candidate.designation}</td>

                <td>{candidate.totalExperience}</td>

                <td>{candidate.status || "Pending"}</td>

              </tr>

            ))

          )}

        </tbody>

      </table>

      <div className="button-group">

        <button
          className="print-btn"
          onClick={printReport}
        >
          Print Report
        </button>

        <button
          className="back-btn"
          onClick={() => setPage("hrdashboard")}
        >
          Back
        </button>

      </div>

    </div>

  );

}

export default Reports;