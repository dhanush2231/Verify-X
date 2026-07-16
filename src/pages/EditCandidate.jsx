import { useState, useEffect } from "react";
import "../css/EditCandidate.css";

function EditCandidate({ setPage }) {

const [candidate, setCandidate] = useState({
  fullName: "",
  email: "",
  mobile: "",
  dob: "",
  gender: "",

  currentCompany: "",
  employeeId: "",
  designation: "",
  department: "",
  joiningDate: "",
  employmentType: "",
  currentCTC: "",

  previousCompany: "",
  previousDesignation: "",
  totalExperience: "",
  relevantExperience: "",
  lastWorkingDay: "",

  newCompany: "",
  offerNumber: "",
  offerDate: "",
  hrEmail: "",
  hiringManager: "",
  verificationPurpose: "",

  qualification: "",
  college: "",
  passingYear: "",

  address: "",
  city: "",
  state: "",
  pincode: "",

  status: "Pending"
});

  useEffect(() => {

    const selected =
      JSON.parse(localStorage.getItem("selectedCandidate"));

    if (selected) {
      setCandidate(selected);
    }

  }, []);
const handleSave = () => {

  let candidates =
    JSON.parse(localStorage.getItem("experienceCandidates")) || [];

  const updatedCandidates = candidates.map((item) =>

    item.email.toLowerCase() === candidate.email.toLowerCase()
      ? {
          ...item,
          ...candidate,
        }
      : item

  );

  localStorage.setItem(
    "experienceCandidates",
    JSON.stringify(updatedCandidates)
  );

  localStorage.setItem(
    "selectedCandidate",
    JSON.stringify(candidate)
  );

 
  const currentEmail = localStorage.getItem("currentCandidateEmail");

  if (
    currentEmail &&
    currentEmail.toLowerCase() === candidate.email.toLowerCase()
  ) {
    localStorage.setItem(
      "currentCandidateEmail",
      candidate.email
    );
  }

  alert("Candidate Updated Successfully");

  setPage("candidatelist");

};

  return (

    <div className="edit-container">

      <div className="edit-card">
<h1>Edit Candidate</h1>

<h2>Personal Details</h2>

<input
  type="text"
  name="fullName"
  placeholder="Full Name"
  value={candidate.fullName}
  onChange={handleChange}
/>

<input
  type="email"
  name="email"
  value={candidate.email}
  readOnly
/>

<input
  type="text"
  name="mobile"
  placeholder="Mobile Number"
  value={candidate.mobile}
  onChange={handleChange}
/>

<input
  type="date"
  name="dob"
  value={candidate.dob}
  onChange={handleChange}
/>

<select
  name="gender"
  value={candidate.gender}
  onChange={handleChange}
>
  <option value="">Select Gender</option>
  <option>Male</option>
  <option>Female</option>
  <option>Other</option>
</select>
<h2>Current Employment</h2>

<input
  type="text"
  name="currentCompany"
  placeholder="Current Company"
  value={candidate.currentCompany}
  onChange={handleChange}
/>

<input
  type="text"
  name="employeeId"
  placeholder="Employee ID"
  value={candidate.employeeId}
  onChange={handleChange}
/>

<input
  type="text"
  name="designation"
  placeholder="Designation"
  value={candidate.designation}
  onChange={handleChange}
/>

<input
  type="text"
  name="department"
  placeholder="Department"
  value={candidate.department}
  onChange={handleChange}
/>

<input
  type="date"
  name="joiningDate"
  value={candidate.joiningDate}
  onChange={handleChange}
/>

<input
  type="text"
  name="employmentType"
  placeholder="Employment Type"
  value={candidate.employmentType}
  onChange={handleChange}
/>

<input
  type="text"
  name="currentCTC"
  placeholder="Current CTC"
  value={candidate.currentCTC}
  onChange={handleChange}
/>
<h2>Previous Employment</h2>

<input
  type="text"
  name="previousCompany"
  placeholder="Previous Company"
  value={candidate.previousCompany}
  onChange={handleChange}
/>

<input
  type="text"
  name="previousDesignation"
  placeholder="Previous Designation"
  value={candidate.previousDesignation}
  onChange={handleChange}
/>

<input
  type="text"
  name="totalExperience"
  placeholder="Total Experience"
  value={candidate.totalExperience}
  onChange={handleChange}
/>

<input
  type="text"
  name="relevantExperience"
  placeholder="Relevant Experience"
  value={candidate.relevantExperience}
  onChange={handleChange}
/>

<input
  type="date"
  name="lastWorkingDay"
  value={candidate.lastWorkingDay}
  onChange={handleChange}
/>
<h2>Offer Verification</h2>

<input
  type="text"
  name="newCompany"
  placeholder="New Company"
  value={candidate.newCompany}
  onChange={handleChange}
/>

<input
  type="text"
  name="offerNumber"
  placeholder="Offer Number"
  value={candidate.offerNumber}
  onChange={handleChange}
/>

<input
  type="date"
  name="offerDate"
  value={candidate.offerDate}
  onChange={handleChange}
/>

<input
  type="email"
  name="hrEmail"
  placeholder="HR Email"
  value={candidate.hrEmail}
  onChange={handleChange}
/>

<input
  type="text"
  name="hiringManager"
  placeholder="Hiring Manager"
  value={candidate.hiringManager}
  onChange={handleChange}
/>

<select
  name="verificationPurpose"
  value={candidate.verificationPurpose}
  onChange={handleChange}
>
  <option value="">Verification Purpose</option>
  <option>Employment Verification</option>
  <option>Background Verification</option>
  <option>Offer Validation</option>
</select>
<h2>Education</h2>

<input
  type="text"
  name="qualification"
  placeholder="Qualification"
  value={candidate.qualification}
  onChange={handleChange}
/>

<input
  type="text"
  name="college"
  placeholder="College"
  value={candidate.college}
  onChange={handleChange}
/>

<input
  type="text"
  name="passingYear"
  placeholder="Passing Year"
  value={candidate.passingYear}
  onChange={handleChange}
/>
<h2>Address</h2>

<textarea
  name="address"
  placeholder="Address"
  value={candidate.address}
  onChange={handleChange}
/>

<input
  type="text"
  name="city"
  placeholder="City"
  value={candidate.city}
  onChange={handleChange}
/>

<input
  type="text"
  name="state"
  placeholder="State"
  value={candidate.state}
  onChange={handleChange}
/>

<input
  type="text"
  name="pincode"
  placeholder="PIN Code"
  value={candidate.pincode}
  onChange={handleChange}
/>
<h2>Status</h2>

<select
  name="status"
  value={candidate.status}
  onChange={handleChange}
>
  <option>Pending</option>
  <option>Verified</option>
  <option>Rejected</option>
</select>

        <div className="button-group">

          <button
            className="save-btn"
            onClick={handleSave}
          >
            Save
          </button>

          <button
            className="back-btn"
            onClick={() => setPage("candidatelist")}
          >
            Back
          </button>

        </div>

      </div>

    </div>

  );

}

export default EditCandidate;