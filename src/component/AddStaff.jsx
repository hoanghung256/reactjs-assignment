import axios from "axios";
import { useState } from "react";
import { Modal, Button } from "react-bootstrap";

function AddStaff({ setStaffList }) {
  const [show, setShow] = useState(false);

  function addNew() {
    let staff = {
      name: document.getElementById("name").value,
      doB: document.getElementById("dob").value,
      startDate: document.getElementById("start-date").value,
      salaryScale: document.getElementById("salary-scale").value,
      departmentId: document.getElementById("department").value,
      annualLeave: document.getElementById("leave").value,
      overTime: document.getElementById("overTime").value,
      image:
        "https://cdn.pixabay.com/photo/2016/11/14/17/39/person-1824147_640.png",
    };

    axios
      .post('http://localhost:8080/staffs', staff)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log("Error ocurred: ", err);
      });

    // Update staffList after post to back-end
    setStaffList((prev) => [...prev, staff]);
  }

  return (
    <>
      <Button variant="primary" onClick={() => setShow(true)} centered>
        Add new staff
      </Button>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        aria-labelledby="contained-modal-title-vcenter"
        centered="true"
      >
        <Modal.Header closeButton>
          <Modal.Title>Add new staff</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-5">
              <p>Name </p>
              <p>Date of birth </p>
              <p>Start date </p>
              <p>Department </p>
              <p>Salary scale </p>
              <p>Annual leave </p>
              <p>Overtime </p>
            </div>
            <div className="col-7">
              <div style={{ padding: "5px", marginTop: "0px" }}>
                <input id="name" type="text" style={{ width: "13vw" }} />
              </div>
              <div style={{ padding: "5px", marginTop: "0px" }}>
                <input id="dob" type="date" style={{ width: "13vw" }} />
              </div>
              <div style={{ padding: "5px", marginTop: "0px" }}>
                <input id="start-date" type="date" style={{ width: "13vw" }} />
              </div>
              <div style={{ padding: "5px", marginTop: "0px" }}>
                <input id="department" type="text" style={{ width: "13vw" }} />
              </div>
              <div style={{ padding: "5px", marginTop: "0px" }}>
                <input
                  id="salary-scale"
                  type="text"
                  style={{ width: "13vw" }}
                />
              </div>
              <div style={{ padding: "5px", marginTop: "0px" }}>
                <input id="leave" type="text" style={{ width: "13vw" }} />
              </div>
              <div style={{ padding: "5px", marginTop: "0px" }}>
                <input id="overTime" type="text" style={{ width: "13vw" }} />
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            onClick={() => {
              addNew();
              setShow(false);
            }}
          >
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddStaff;
