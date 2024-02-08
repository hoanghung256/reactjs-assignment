import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function StaffDetail({ staff }) {
  const [department, setDepartment] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8080/departments")
      .then((res) => {
        setDepartment(
          res.data.find((dept) => dept.id === staff.departmentId).name
        );
        console.log(department);
      })
      .catch((err) => {
        console.log("Error ocurred: ", err);
      });
  }, []);

  return (
    <div className="gap-5 mx-5">
      <div className="d-flex">
        <Link to="/" className="text-dark">
          staffs
        </Link>
        <p>/ {staff.name}</p>
      </div>
      <div className="d-flex mt-3">
        <div>
          <img src={staff.image} width="200px" alt="Staff image" />
        </div>
        <div>
          <strong>Full name: {staff.name}</strong>
          <div className="mx-2">
            <p>
              Date of birth: {new Date(staff.doB).toLocaleDateString("en-US")}
            </p>
            <p>
              Start date:{" "}
              {new Date(staff.startDate).toLocaleDateString("en-US")}
            </p>
            <p>Department: {department ? department : "Not found"}</p>
            <p>Annual leave: {staff.annualLeave}</p>
            <p>Over time: {staff.overTime}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StaffDetail;
