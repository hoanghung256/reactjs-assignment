import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import StaffList from "./StaffList";
import Navigation from "./Navigation";
import Departments from "./Departments";
import StaffDetail from "./StaffDetail";
import SalaryReport from "./SalaryReport";
import "../style/App.css";

function App() {
  const [staffDetail, setStaffDetail] = useState(null);

  const staffsAPI = "http://localhost:8080/staffs";
  const departmentsAPI = "http://localhost:8080/departments";
  const salaryAPI = "http://localhost:8080/staffsSalary";

  return (
    <div className="App">
      <header className="App-header">
        <Navigation />
      </header>

      <main className="container-fluid">
        <Routes>
          <Route
            path="/"
            element={
              <StaffList api={staffsAPI} setStaffDetail={setStaffDetail} />
            }
          />
          <Route
            path="/departments"
            element={<Departments api={departmentsAPI} />}
          />
          <Route
            path="/staffs/:staffId"
            element={<StaffDetail staff={staffDetail} />}
          />
          <Route path="/salary" element={<SalaryReport api={salaryAPI} />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
