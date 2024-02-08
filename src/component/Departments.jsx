import { useState, useEffect } from "react";
import axios from "axios";

function Departments() {
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8080/departments')
      .then((res) => {
        setDepartments(res.data);
      })
      .catch((err) => {
        console.log("Error occurred: ", err);
      });
  }, []);

  return (
    <div className="row mx-3 mh-100">
      {departments.map((department) => (
        <div className="col-sm-12 col-md-6 col-lg-4 mt-3" key={department.id}>
          <div className="border border-dark rounded-1 p-3">
            <h4>{department.name}</h4>
            <p className="mx-3">Number of staff: {department.numberOfStaff}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Departments;
