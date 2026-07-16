import { useEffect, useState } from "react";
import "../css/CandidateList.css";

function CandidateList({ setPage }) {

  const [candidates, setCandidates] = useState([]);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  useEffect(() => {
    loadCandidates();
  }, []);

  const loadCandidates = () => {
    const data =
      JSON.parse(localStorage.getItem("experienceCandidates")) || [];
    setCandidates(data);
  };

  const handleView = (candidate) => {
    localStorage.setItem(
      "selectedCandidate",
      JSON.stringify(candidate)
    );

    setPage("candidatedetails");
  };

  const filteredCandidates = candidates.filter((candidate) => {

    const searchMatch =
      candidate.fullName?.toLowerCase().includes(search.toLowerCase()) ||
      candidate.email?.toLowerCase().includes(search.toLowerCase()) ||
      candidate.mobile?.includes(search);

    const statusMatch =
      statusFilter === "All"
        ? true
        : (candidate.status || "Pending") === statusFilter;

    return searchMatch && statusMatch;
  });

  return (

    <div className="candidate-list">

      <h1>Candidate List</h1>

      <div className="top-bar">

        <input
          type="text"
          placeholder="Search by Name, Email or Mobile"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-box"
        />

        <select
          className="filter-box"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option>All</option>
          <option>Pending</option>
          <option>Verified</option>
          <option>Rejected</option>
        </select>

      </div>

      <table>

        <thead>

          <tr>

            <th>Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Company</th>
            <th>Status</th>
            <th>Actions</th>

          </tr>

        </thead>

        <tbody>

          {filteredCandidates.length === 0 ? (

            <tr>
              <td colSpan="6">No Candidates Found</td>
            </tr>

          ) : (

            filteredCandidates.map((candidate, index) => (

              <tr key={index}>

                <td>{candidate.fullName}</td>

                <td>{candidate.email}</td>

                <td>{candidate.mobile}</td>

                <td>{candidate.currentCompany}</td>

                <td>{candidate.status || "Pending"}</td>

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
        Back
      </button>

    </div>

  );

}

export default CandidateList;