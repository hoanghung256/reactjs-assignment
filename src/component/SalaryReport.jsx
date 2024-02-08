import { useState, useEffect } from "react";
import axios from "axios";

function SalaryReport() {
  const [staffList, setStaffList] = useState([]);
  let formatter = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  });

  useEffect(() => {
    axios
      .get("http://localhost:8080/staffsSalary")
      .then((res) => {
        setStaffList(res.data);
      })
      .catch((err) => {
        console.log("Error occurred: ", err);
      });
  });

  return (
    <div className="row mx-3">
      {staffList &&
        staffList.length > 0 &&
        staffList.map((staff) => (
          <div className="col-sm-6 col-md-4 col-lg-3 mt-3" key={staff.id}>
            <div className=" border border-dark rounded-1">
              <h4 className="mx-1">{staff.name}</h4>
              <div className="mx-3">
                <p>ID: {staff.id}</p>
                <p>Salary scale: {staff.salaryScale}</p>
                <p>Overtime: {staff.overTime}</p>
                <hr />
                <p>Salary: {formatter.format(staff.salary)}</p>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default SalaryReport;
