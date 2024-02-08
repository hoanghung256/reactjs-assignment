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
              <StaffList setStaffDetail={setStaffDetail} />
            }
          />
          <Route
            path="/departments"
            element={<Departments />}
          />
          <Route
            path="/staffs/:staffId"
            element={<StaffDetail staff={staffDetail} />}
          />
          <Route path="/salary" element={<SalaryReport />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
