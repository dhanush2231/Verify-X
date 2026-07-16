import "../css/Home.css";
import logo from "../assets/verify-logo.png";

function Home({ setPage }) {
  return (
    <>

     

      <nav className="home-navbar">

        <div className="home-logo">
          <img src={logo} alt="Verify-X Logo" />
        </div>

        <div className="home-nav-links">

          <a
            className="hr-btn"
            onClick={() => setPage("hrlogin")}
          >
            HR Portal
          </a>

          <a
            className="candidate-btn"
            onClick={() => setPage("login")}
          >
            Candidate Login
          </a>

        </div>

      </nav>

    

      <section className="home-container">

      

        <div className="left-content">

          <div className="tag">
            <span>●</span>
            Secure Digital Offer Verification
          </div>

          <h1>
            Verify Every <br />
            Offer Letter <br />
            With Complete <br />
            <span>Trust & Security.</span>
          </h1>

          <p>
            Verify-X is a secure offer letter verification platform that
            enables organizations to validate offer letters, authenticate
            candidate information, prevent document fraud, and ensure a
            transparent hiring process through secure digital verification.
          </p>

        </div>

        
<div className="right-content">

  <div className="module-box">

    <h2>Experienced Verification Portal</h2>

    <div className="modules">

      <div className="box">
        <h3>👤 Candidate Registration</h3>
        <p>
          Register and submit employment details for experience verification.
        </p>
      </div>

      <div className="box">
        <h3>💼 Work Experience Details</h3>
        <p>
          Upload previous company, designation, department and experience information.
        </p>
      </div>

      <div className="box">
        <h3>📋 HR Verification</h3>
        <p>
          HR reviews candidate information and verifies employment records.
        </p>
      </div>

      <div className="box">
        <h3>📧 Verification Notifications</h3>
        <p>
          Receive email notifications after HR approves or rejects the verification request.
        </p>
      </div>

      <div className="box">
        <h3>📊 Reports & Analytics</h3>
        <p>
          View candidate verification reports and overall verification statistics.
        </p>
      </div>

      <div className="box">
        <h3>🔒 Secure HR Dashboard</h3>
        <p>
          Authorized HR administrators can securely manage candidate verification requests.
        </p>
      </div>

    </div>

  </div>

</div>

      </section>

    </>
  );
}

export default Home;