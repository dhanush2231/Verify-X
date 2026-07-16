import { useState, useEffect } from "react";
import "../css/CandidateDetails.css";
function CandidateDetails({ setPage }) {

  const [candidate, setCandidate] = useState(null);

  useEffect(() => {

    const selectedCandidate = JSON.parse(
      localStorage.getItem("selectedCandidate")
    );

    if (selectedCandidate) {
      setCandidate(selectedCandidate);
    }

  }, []);


  const editCandidate = () => {

    if (!candidate) return;

    localStorage.setItem(
      "selectedCandidate",
      JSON.stringify(candidate)
    );

    setPage("editcandidate");

  };

  
  const updateStatus = (status) => {

    if (!candidate) return;

    const candidates =
      JSON.parse(localStorage.getItem("experienceCandidates")) || [];

    const updatedCandidates = candidates.map((item) =>

      item.id === candidate.id
        ? {
            ...item,
            status: status,
          }
        : item

    );

    localStorage.setItem(
      "experienceCandidates",
      JSON.stringify(updatedCandidates)
    );

    const updatedCandidate = {
      ...candidate,
      status: status,
    };

    localStorage.setItem(
      "selectedCandidate",
      JSON.stringify(updatedCandidate)
    );

    setCandidate(updatedCandidate);

    alert("Candidate " + status);

  };


  const openGmail = (status) => {

    if (!candidate) return;

    const subject = "Verification Status";

    const body = `Dear ${candidate.fullName},

Your verification request has been ${status} by the HR Team.

Candidate Name : ${candidate.fullName}
Candidate Email : ${candidate.email}

Thank you.

HR Team`;

    const gmailUrl =
      `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(candidate.email)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.open(gmailUrl, "_blank");

  };

  // Delete Candidate
  const deleteCandidate = () => {

    if (!candidate) return;

    if (!window.confirm("Delete this candidate?")) return;

    const candidates =
      JSON.parse(localStorage.getItem("experienceCandidates")) || [];

    const updatedCandidates = candidates.filter(
      (item) => item.id !== candidate.id
    );

    localStorage.setItem(
      "experienceCandidates",
      JSON.stringify(updatedCandidates)
    );

    localStorage.removeItem("selectedCandidate");

    alert("Candidate Deleted");

    setPage("candidatelist");

  };

 
  const goBack = () => {

    setPage("candidatelist");

  };

  if (!candidate) {

    return (
      <div className="candidate-details">
        <h2>No Candidate Selected</h2>
      </div>
    );

  }

  return (

  <div className="details-container">

  <p><strong>Full Name:</strong> {candidate.fullName}</p>

  <p><strong>Email:</strong> {candidate.email}</p>

  <p><strong>Mobile:</strong> {candidate.mobile}</p>

  <p><strong>Current Company:</strong> {candidate.currentCompany}</p>

  <p><strong>Designation:</strong> {candidate.designation}</p>
  <p><strong>Technical Skills:</strong></p>

<div className="candidate-skills">

  {candidate.skills && candidate.skills.length > 0 ? (

    candidate.skills.map((skill, index) => (

      <span key={index} className="skill-badge">
        {skill}
      </span>

    ))

  ) : (

    <span>No Skills Added</span>

  )}

</div>



        <hr />

        <h2>Current Employment</h2>

        <p><b>Company :</b> {candidate.currentCompany}</p>
        <p><b>Employee ID :</b> {candidate.employeeId}</p>
        <p><b>Designation :</b> {candidate.designation}</p>
        <p><b>Department :</b> {candidate.department}</p>
        <p><b>Joining Date :</b> {candidate.joiningDate}</p>
        <p><b>Employment Type :</b> {candidate.employmentType}</p>
        <p><b>Current CTC :</b> {candidate.currentCTC}</p>

        <hr />

        <h2>Previous Employment</h2>

        <p><b>Previous Company :</b> {candidate.previousCompany}</p>
        <p><b>Previous Designation :</b> {candidate.previousDesignation}</p>
        <p><b>Total Experience :</b> {candidate.totalExperience}</p>
        <p><b>Relevant Experience :</b> {candidate.relevantExperience}</p>
        <p><b>Last Working Day :</b> {candidate.lastWorkingDay}</p>

        <hr />

        <h2>Offer Verification</h2>

        <p><b>New Company :</b> {candidate.newCompany}</p>
        <p><b>Offer Number :</b> {candidate.offerNumber}</p>
        <p><b>Offer Date :</b> {candidate.offerDate}</p>
        <p><b>HR Email :</b> {candidate.hrEmail}</p>
        <p><b>Hiring Manager :</b> {candidate.hiringManager}</p>
        <p><b>Purpose :</b> {candidate.verificationPurpose}</p>

        <hr />

        <h2>Education</h2>

        <p><b>Qualification :</b> {candidate.qualification}</p>
        <p><b>College :</b> {candidate.college}</p>
        <p><b>Passing Year :</b> {candidate.passingYear}</p>

        <hr />

        <h2>Address</h2>

        <p><b>Address :</b> {candidate.address}</p>
        <p><b>City :</b> {candidate.city}</p>
        <p><b>State :</b> {candidate.state}</p>
        <p><b>PIN Code :</b> {candidate.pincode}</p>

        <hr />

        <h2>Verification Status</h2>

        <h3>{candidate.status || "Pending"}</h3>

        <div className="button-group">

     
<button
  className="verify-btn"
  onClick={() => {
    updateStatus("Verified");
    openGmail("Verified");
  }}
>
  Verify
</button>
<button
  className="reject-btn"
  onClick={() => {
    updateStatus("Rejected");
    openGmail("Rejected");
  }}
>
  Reject
</button>

          <button
            className="delete-btn"
            onClick={deleteCandidate}
          >
            Delete
          </button>

          <button
            className="back-btn"
            onClick={goBack}
          >
            Back
          </button>

        

      </div>

    </div>

  );

}

export default CandidateDetails;