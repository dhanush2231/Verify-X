import { useState } from "react";

import Home from "./pages/Home";

import HRLogin from "./pages/HRLogin";
import HRSignup from "./pages/HRSignup";
import HRForgotPassword from "./pages/HRForgotPassword";

import CandidateLogin from "./pages/CandidateLogin";
import CandidateSignup from "./pages/CandidateSignup";
import CandidateForgotPassword from "./pages/CandidateForgotPassword";

import ExperienceCandidate from "./pages/ExperienceCandidate";

import HRDashboard from "./pages/HRDashboard";
import CandidateList from "./pages/CandidateList";
import CandidateDetails from "./pages/CandidateDetails";
import EditCandidate from "./pages/EditCandidate";
import VerificationRequests from "./pages/Verificationrequests";
import Reports from "./pages/Reports";

function App() {
  const [login, setLogin] = useState(false);
  const [page, setPage] = useState("home");
  const [userType, setUserType] = useState("");

  return (
    <>
      {!login && page === "home" && (
        <Home setPage={setPage} />
      )}

      {!login && page === "login" && (
        <CandidateLogin
          setLogin={setLogin}
          setPage={setPage}
          setUserType={setUserType}
        />
      )}

      {!login && page === "candidatesignup" && (
        <CandidateSignup setPage={setPage} />
      )}

      {!login && page === "candidateforgot" && (
        <CandidateForgotPassword setPage={setPage} />
      )}

      {!login && page === "hrlogin" && (
        <HRLogin
          setLogin={setLogin}
          setPage={setPage}
          setUserType={setUserType}
        />
      )}

      {!login && page === "hrsignup" && (
        <HRSignup setPage={setPage} />
      )}

      {!login && page === "hrforgot" && (
        <HRForgotPassword setPage={setPage} />
      )}

      {login && userType === "candidate" && (
        <ExperienceCandidate
          setLogin={setLogin}
          setPage={setPage}
        />
      )}

      {login && userType === "hr" && page === "hrdashboard" && (
        <HRDashboard
          setLogin={setLogin}
          setPage={setPage}
        />
      )}

      {login && userType === "hr" && page === "candidatelist" && (
        <CandidateList setPage={setPage} />
      )}

      {login && userType === "hr" && page === "candidatedetails" && (
        <CandidateDetails setPage={setPage} />
      )}

      {login && userType === "hr" && page === "editcandidate" && (
        <EditCandidate setPage={setPage} />
      )}

      {login && userType === "hr" && page === "reports" && (
        <Reports setPage={setPage} />
      )}

      {login && userType === "hr" && page === "verificationrequests" && (
        <VerificationRequests setPage={setPage} />
      )}
    </>
  );
}

export default App;
