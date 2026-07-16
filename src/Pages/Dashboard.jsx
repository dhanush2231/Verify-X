import { useState } from "react";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

import AddEmployee from "./AddEmployee";
import Documents from "./Documents";
import Reports from "./Reports";

import "../css/Dashboard.css";

function Dashboard({ setLogin }) {

  const [page, setPage] = useState("employee");

  return (

    <>

   <Navbar
  setLogin={setLogin}
  setPage={setPage}
/>

      <div className="dashboard">

        <Sidebar setPage={setPage} />

        <div className="content">

          {page === "employee" && <AddEmployee />}

          {page === "documents" && <Documents />}

          {page === "reports" && <Reports />}

        </div>

      </div>

    </>

  );

}

export default Dashboard;