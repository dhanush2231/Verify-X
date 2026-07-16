import { useState, useEffect } from "react";
import "../css/ExperienceCandidate.css";

function ExperienceCandidate({ setLogin, setPage }) {
const [formData, setFormData] = useState({

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

  experienceYears: "",
  experienceMonths: "",

  previousCompany: "",
  previousDesignation: "",

  offerLetter: null,
  resume: null,
  photo: null,

  agree: false

});
  const [step, setStep] = useState(1);

useEffect(() => {

  const savedEmail = localStorage.getItem("currentCandidateEmail");

  if (savedEmail) {

    const candidates =
      JSON.parse(localStorage.getItem("experienceCandidates")) || [];

    const existingCandidate = candidates.find(
      (candidate) =>
        candidate.email.toLowerCase() ===
        savedEmail.toLowerCase()
    );

 if (existingCandidate) {

      setFormData({
        ...existingCandidate,
        skills: existingCandidate.skills || [],
      });

    }

  }

}, []);
const handleNext = () => {

 
  if (step === 1) {

    if (formData.fullName.trim() === "") {
      alert("Enter Full Name");
      return;
    }

    if (formData.email.trim() === "") {
      alert("Enter Email");
      return;
    }

    if (formData.mobile.length !== 10) {
      alert("Enter Valid Mobile Number");
      return;
    }

    if (formData.dob === "") {
      alert("Select Date of Birth");
      return;
    }

    if (formData.gender === "") {
      alert("Select Gender");
      return;
    }

    if (formData.password === "") {
      alert("Enter Password");
      return;
    }

    if (formData.confirmPassword === "") {
      alert("Confirm Password");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    setStep(2);
    return;
  }

  
  if (step === 2) {

    if (formData.currentCompany.trim() === "") {
      alert("Enter Current Company");
      return;
    }

    if (formData.employeeId.trim() === "") {
      alert("Enter Employee ID");
      return;
    }

    if (formData.designation.trim() === "") {
      alert("Enter Designation");
      return;
    }

    if (formData.department.trim() === "") {
      alert("Enter Department");
      return;
    }

    if (formData.joiningDate === "") {
      alert("Select Joining Date");
      return;
    }

    if (formData.employmentType === "") {
      alert("Select Employment Type");
      return;
    }

    if (formData.currentCTC.trim() === "") {
      alert("Enter Current CTC");
      return;
    }

    setStep(3);
    return;
  }

 
  if (step === 3) {

    if (formData.previousCompany.trim() === "") {
      alert("Enter Previous Company");
      return;
    }

    if (formData.previousDesignation.trim() === "") {
      alert("Enter Previous Designation");
      return;
    }

    if (formData.totalExperience.trim() === "") {
      alert("Enter Total Experience");
      return;
    }

    if (formData.relevantExperience.trim() === "") {
      alert("Enter Relevant Experience");
      return;
    }

    if (formData.lastWorkingDay === "") {
      alert("Select Last Working Day");
      return;
    }

    setStep(4);
    return;
  }


  if (step === 4) {

    if (formData.newCompany.trim() === "") {
      alert("Enter New Company");
      return;
    }

    if (formData.offerNumber.trim() === "") {
      alert("Enter Offer Number");
      return;
    }

    if (formData.offerDate === "") {
      alert("Select Offer Date");
      return;
    }

    if (formData.hrEmail.trim() === "") {
      alert("Enter HR Email");
      return;
    }

    if (formData.hiringManager.trim() === "") {
      alert("Enter Hiring Manager");
      return;
    }

    if (formData.verificationPurpose === "") {
      alert("Select Verification Purpose");
      return;
    }

    setStep(5);
    return;
  }


if (step === 5) {

  if (formData.qualification.trim() === "") {
    alert("Enter Qualification");
    return;
  }

  if (formData.college.trim() === "") {
    alert("Enter College");
    return;
  }

  if (formData.passingYear.trim() === "") {
    alert("Enter Passing Year");
    return;
  }

  setStep(7);   
  return;
}




    

 
  if (step === 7) {

    if (!formData.offerLetter) {
      alert("Upload Offer Letter");
      return;
    }

    if (!formData.resume) {
      alert("Upload Resume");
      return;
    }

    if (!formData.governmentId) {
      alert("Upload Government ID");
      return;
    }

    if (!formData.photo) {
      alert("Upload Passport Size Photo");
      return;
    }

    setStep(8);
    return;
  }

 
  if (step === 8) {

    if (formData.address.trim() === "") {
      alert("Enter Address");
      return;
    }

    if (formData.city.trim() === "") {
      alert("Enter City");
      return;
    }

    if (formData.state.trim() === "") {
      alert("Enter State");
      return;
    }

    if (formData.pincode.trim() === "") {
      alert("Enter PIN Code");
      return;
    }

    if (!formData.agree) {
      alert("Please accept Terms & Conditions");
      return;
    }

    handleProceed();
  }

};
const handleChange = (e) => {

  const { name, value, type, checked, files } = e.target;

  let fieldValue =
    type === "checkbox"
      ? checked
      : type === "file"
      ? files[0]
      : value;

  
  if (name === "fullName") {
    fieldValue = value.replace(/[^a-zA-Z\s]/g, "");
  }

 
  if (name === "mobile") {
    fieldValue = value.replace(/\D/g, "").slice(0, 10);
  }

  
  if (name === "email" || name === "hrEmail") {
    fieldValue = value.toLowerCase();
  }

 
  if (name === "employeeId") {
    fieldValue = value.replace(/[^a-zA-Z0-9]/g, "");
  }

 
  if (
    name === "currentCompany" ||
    name === "previousCompany" ||
    name === "newCompany"
  ) {
    fieldValue = value.replace(/[^a-zA-Z0-9\s&.,()-]/g, "");
  }


  if (
    name === "designation" ||
    name === "previousDesignation"
  ) {
    fieldValue = value.replace(/[^a-zA-Z\s]/g, "");
  }

  
  if (name === "department") {
    fieldValue = value.replace(/[^a-zA-Z\s]/g, "");
  }


  if (name === "hiringManager") {
    fieldValue = value.replace(/[^a-zA-Z\s]/g, "");
  }

  
  if (name === "qualification") {
    fieldValue = value.replace(/[^a-zA-Z\s]/g, "");
  }

 
  if (name === "college") {
    fieldValue = value.replace(/[^a-zA-Z0-9\s.,&()-]/g, "");
  }


  if (name === "passingYear") {
    fieldValue = value.replace(/\D/g, "").slice(0, 4);
  }

  
  if (name === "pincode") {
    fieldValue = value.replace(/\D/g, "").slice(0, 6);
  }

 
  if (
    name === "totalExperience" ||
    name === "relevantExperience"
  ) {
    fieldValue = value.replace(/[^0-9.]/g, "");
  }


  if (name === "currentCTC") {
    fieldValue = value.replace(/[^0-9.]/g, "");
  }


  if (name === "offerNumber") {
    fieldValue = value.replace(/[^a-zA-Z0-9/-]/g, "");
  }

 
  if (name === "resume" && files && files[0]) {

    const allowed = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    ];

    if (!allowed.includes(files[0].type)) {
      alert("Upload PDF, DOC or DOCX only.");
      return;
    }

  }

 
  if (name === "offerLetter" && files && files[0]) {

    if (files[0].type !== "application/pdf") {
      alert("Only PDF allowed.");
      return;
    }

  }

  
  if (name === "governmentId" && files && files[0]) {

    const allowed = [
      "application/pdf",
      "image/jpeg",
      "image/jpg",
      "image/png"
    ];

    if (!allowed.includes(files[0].type)) {
      alert("Upload PDF, JPG or PNG only.");
      return;
    }

  }


  const updatedForm = {
    ...formData,
    [name]: fieldValue,
  };

  setFormData(updatedForm);

  if (name === "email" && fieldValue.trim() !== "") {

    const candidates =
      JSON.parse(localStorage.getItem("experienceCandidates")) || [];

    const existingCandidate = candidates.find(
      (candidate) =>
        candidate.email.toLowerCase() === fieldValue.toLowerCase()
    );

    if (existingCandidate) {
      setFormData({
        ...existingCandidate,
        skills: existingCandidate.skills || [],
      });
    }

  }

};




const handleSave = () => {

  if (!formData.email.trim()) {

    alert("Please enter Email.");
    const today = new Date();

const dob = new Date(formData.dob);

let age = today.getFullYear() - dob.getFullYear();

const month = today.getMonth() - dob.getMonth();

if (
  month < 0 ||
  (month === 0 && today.getDate() < dob.getDate())
) {
  age--;
}

if (age < 18) {
  alert("Candidate must be at least 18 years old.");
  return;
}

    return;

  }

  let candidates =
    JSON.parse(localStorage.getItem("experienceCandidates")) || [];

  const existingIndex = candidates.findIndex(
    (candidate) =>
      candidate.email.toLowerCase() ===
      formData.email.toLowerCase()
  );

  if (existingIndex !== -1) {

    
    candidates[existingIndex] = {

      ...candidates[existingIndex],

      ...formData,

      id: candidates[existingIndex].id,

      status:
        candidates[existingIndex].status || "Pending",

    };

  }

  else {

   

    const newCandidate = {

      id: Date.now(),

      status: "Pending",

      ...formData,

    };

    candidates.push(newCandidate);

  }

  localStorage.setItem(

    "experienceCandidates",

    JSON.stringify(candidates)

  );

  localStorage.setItem(

    "currentCandidateEmail",

    formData.email

  );

  alert("Data Saved Successfully");

};




const handleProceed = (e) => {

  e.preventDefault();

  handleSave();

  alert("Registration Successful");

};




const handleLogout = () => {

  if (formData.email) {

    localStorage.setItem(

      "currentCandidateEmail",

      formData.email

    );

  }

  setLogin(false);

  setPage("login");

};
const handleSkillChange = (e) => {
  const { value, checked } = e.target;

  if (checked) {
    setFormData((prev) => ({
      ...prev,
      skills: [...(prev.skills || []), value],
    }));
  } else {
    setFormData((prev) => ({
      ...prev,
      skills: (prev.skills || []).filter(
        (skill) => skill !== value
      ),
    }));
  }
};

  return (
<div className="experience-container">

  <div className="candidate-header">

    <h1>Experienced Candidate Registration</h1>

    <button
      type="button"
      className="logout-btn"
      onClick={handleLogout}
    >
      Logout
    </button>

  </div>
<form onSubmit={handleProceed}>

{step === 1 && (
<>
<h2>Personal Details</h2>

<input
  type="text"
  name="fullName"
  value={formData.fullName}
  placeholder="Full Name"
  onChange={handleChange}
/>

<input
  type="email"
  name="email"
  value={formData.email}
  placeholder="Email"
  onChange={handleChange}
/>

<input
  type="text"
  name="mobile"
  value={formData.mobile}
  placeholder="Mobile Number"
  onChange={handleChange}
/>

<input
  type="date"
  name="dob"
  value={formData.dob}
  onChange={handleChange}
/>

<select
  name="gender"
  value={formData.gender}
  onChange={handleChange}
>
  <option value="">Select Gender</option>
  <option>Male</option>
  <option>Female</option>
  <option>Other</option>
</select>

<button
  type="button"
  onClick={handleNext}
>
  Next
</button>

</>
)}


<div></div>
{step === 2 && (
<>
<h2>Current Employment</h2>

<input
  type="text"
  name="currentCompany"
  value={formData.currentCompany}
  placeholder="Current Company"
  onChange={handleChange}
/>

<input
  type="text"
  name="employeeId"
  value={formData.employeeId}
  placeholder="Employee ID"
  onChange={handleChange}
/>

<input
  type="text"
  name="designation"
  value={formData.designation}
  placeholder="Designation"
  onChange={handleChange}
/>

<input
  type="text"
  name="department"
  value={formData.department}
  placeholder="Department"
  onChange={handleChange}
/>

<input
  type="date"
  name="joiningDate"
  value={formData.joiningDate}
  onChange={handleChange}
/>

<select
  name="employmentType"
  value={formData.employmentType}
  onChange={handleChange}
>
  <option value="">Employment Type</option>
  <option>Full Time</option>
  <option>Contract</option>
  <option>Consultant</option>
</select>

<input
  type="text"
  name="currentCTC"
  value={formData.currentCTC}
  placeholder="Current CTC"
  onChange={handleChange}
/>

<h3>Technical Skills</h3>

<div className="skills-section">
  <div className="skills-grid">
    {[
      "React.js",
      "Angular",
      "Vue.js",
      "JavaScript",
      "TypeScript",
      "HTML",
      "CSS",
      "Bootstrap",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "Java",
      "Spring Boot",
      "Python",
      "Django",
      "Flask",
      "C#",
      ".NET",
      "PHP",
      "Laravel",
      "MySQL",
      "SQL",
      "Oracle",
      "PostgreSQL",
      "MongoDB",
      "AWS",
      "Azure",
      "Google Cloud",
      "Docker",
      "Kubernetes",
      "Git",
      "GitHub",
      "Selenium",
      "Manual Testing",
      "Automation Testing",
      "Power BI",
      "Tableau",
      "UI/UX",
      "Figma",
      "DevOps"
    ].map((skill) => (
      <label key={skill}>
        <input
          type="checkbox"
          value={skill}
          checked={(formData.skills || []).includes(skill)}
          onChange={handleSkillChange}
        />
        {skill}
      </label>
    ))}
  </div>
</div>

<div className="button-group">
  <button
    type="button"
    onClick={() => setStep(1)}
  >
    Back
  </button>

  <button
    type="button"
    onClick={handleNext}
  >
    Next
  </button>
</div>

</>
)}



{step === 3 && (
<>
<h2>Previous Employment</h2>

<input
  type="text"
  name="previousCompany"
  value={formData.previousCompany}
  placeholder="Previous Company"
  onChange={handleChange}
/>

<input
  type="text"
  name="previousDesignation"
  value={formData.previousDesignation}
  placeholder="Previous Designation"
  onChange={handleChange}
/>

<input
  type="text"
  name="totalExperience"
  value={formData.totalExperience}
  placeholder="Total Experience (Years)"
  onChange={handleChange}
/>

<input
  type="text"
  name="relevantExperience"
  value={formData.relevantExperience}
  placeholder="Relevant Experience (Years)"
  onChange={handleChange}
/>

<input
  type="date"
  name="lastWorkingDay"
  value={formData.lastWorkingDay}
  onChange={handleChange}
/>

<div className="button-group">

  <button
    type="button"
    onClick={() => setStep(2)}
  >
    Back
  </button>

  <button
    type="button"
    onClick={handleNext}
  >
    Next
  </button>

</div>

</>
)}

<div></div>

{step === 4 && (
<>
<h2>Offer Verification</h2>

<input
  type="text"
  name="newCompany"
  value={formData.newCompany}
  placeholder="New Company Name"
  onChange={handleChange}
/>

<input
  type="text"
  name="offerNumber"
  value={formData.offerNumber}
  placeholder="Offer Letter Number"
  onChange={handleChange}
/>

<input
  type="date"
  name="offerDate"
  value={formData.offerDate}
  onChange={handleChange}
/>

<input
  type="email"
  name="hrEmail"
  value={formData.hrEmail}
  placeholder="HR Email"
  onChange={handleChange}
/>

<input
  type="text"
  name="hiringManager"
  value={formData.hiringManager}
  placeholder="Hiring Manager"
  onChange={handleChange}
/>

<select
  name="verificationPurpose"
  value={formData.verificationPurpose}
  onChange={handleChange}
>
  <option value="">Verification Purpose</option>
  <option>Employment Verification</option>
  <option>Background Verification</option>
  <option>Offer Validation</option>
</select>

<div className="button-group">

<button
type="button"
onClick={() => setStep(3)}
>
Back
</button>

<button
type="button"
onClick={handleNext}
>
Next
</button>

</div>

</>
)}

{step === 5 && (
<>
  <h2>Education</h2>

  <input
    type="text"
    name="qualification"
    value={formData.qualification}
    placeholder="Highest Qualification"
    onChange={handleChange}
  />

  <input
    type="text"
    name="college"
    value={formData.college}
    placeholder="College / University"
    onChange={handleChange}
  />

  <input
    type="text"
    name="passingYear"
    value={formData.passingYear}
    placeholder="Year of Passing"
    onChange={handleChange}
  />

  <div className="button-group">
    <button
      type="button"
      onClick={() => setStep(4)}
    >
      Back
    </button>

    <button
      type="button"
      onClick={handleNext}
    >
      Next
    </button>
  </div>
</>
)}



{step === 7 && (
<>
  <h2>Upload Documents</h2>

  <label>Offer Letter</label>
  <input
    type="file"
    name="offerLetter"
    onChange={handleChange}
  />

  <label>Resume</label>
  <input
    type="file"
    name="resume"
    onChange={handleChange}
  />

  <label>Experience Letter</label>
  <input
    type="file"
    name="experienceLetter"
    onChange={handleChange}
  />

  <label>Relieving Letter</label>
  <input
    type="file"
    name="relievingLetter"
    onChange={handleChange}
  />

  <label>Last 3 Months Payslips</label>
  <input
    type="file"
    name="payslips"
    onChange={handleChange}
  />

  <label>Government ID</label>
  <input
    type="file"
    name="governmentId"
    onChange={handleChange}
  />

  <label>Passport Size Photo</label>
  <input
    type="file"
    name="photo"
    onChange={handleChange}
  />

  <div className="button-group">
    <button
      type="button"
      onClick={() => setStep(5)}
    >
      Back
    </button>

    <button
      type="button"
      onClick={handleNext}
    >
      Next
    </button>
  </div>
</>
)}

{step === 8 && (
<>
<h2>Address</h2>

<textarea
  name="address"
  value={formData.address}
  placeholder="Current Address"
  onChange={handleChange}
/>

<input
  type="text"
  name="city"
  value={formData.city}
  placeholder="City"
  onChange={handleChange}
/>

<input
  type="text"
  name="state"
  value={formData.state}
  placeholder="State"
  onChange={handleChange}
/>

<input
  type="text"
  name="pincode"
  value={formData.pincode}
  placeholder="PIN Code"
  maxLength={6}
  onChange={handleChange}
/>

<div className="checkbox">
  <input
    type="checkbox"
    name="agree"
    checked={formData.agree}
    onChange={handleChange}
  />

  <span>
    I certify that the information provided is true and authorize VerifyX to verify my employment details.
  </span>
</div>

<div className="button-group">

  <button
    type="button"
    onClick={() => setStep(7)}
  >
    Back
  </button>

  <button
    type="button"
    className="save-btn"
    onClick={handleSave}
  >
    Save
  </button>

  <button
    type="submit"
    className="proceed-btn"
  >
    Register
  </button>

</div>

</>
)}

</form>

</div>

);
}

export default ExperienceCandidate;