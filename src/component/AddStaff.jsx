import axios from "axios";
import { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";

function AddStaff({ setStaffList }) {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    startDate: "",
  });
  const [errorMessage, setErrorMessage] = useState({
    forName: "",
    forDob: "",
    forStartDate: "",
  });

  function validateInputLength(str) {
    console.log(str);
    if (str.length === 0) {
      return "Please enter value";
    } else if (str.length > 0 && str.length <= 2) {
      return "Please enter more than 2 characters";
    } else if (str.length > 30) {
      return "Please enter less than 30 characters";
    }
  }

  function handleInputChange(e, dataField, errorField) {
    setFormData({ ...formData, [dataField]: e.target.value });
    setErrorMessage({
      ...errorMessage,
      [errorField]: validateInputLength(e.target.value),
    });
  }

  function validateFormData() {
    let message = {};
    Object.entries(formData).map(([key, value]) => {
      message = {
        ...message,
        ["for" + key.charAt(0).toUpperCase() + key.slice(1)]:
          validateInputLength(value),
      };
    });

    // Set error message if at least 1 field in error have value
    if (Object.values(message).some((value) => value)) {
      setErrorMessage(message);
      return false;
    }
    return true;
  }

  function handleAddNewStaff(e) {
    e.preventDefault(); // Prevent reload page when click Add button
    if (!validateFormData()) {
      console.log("false from handleAddNewStaff");
      return;
    }

    let staff = {
      name: e.target.name.value,
      doB: e.target.dob.value,
      startDate: e.target.startDate.value,
      salaryScale: e.target.salaryScale.value,
      departmentId: e.target.department.value,
      annualLeave: e.target.leave.value,
      overTime: e.target.overtime.value,
      image:
        "https://cdn.pixabay.com/photo/2016/11/14/17/39/person-1824147_640.png",
    };

    axios
      .post("http://localhost:8080/staffs", staff)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log("Error ocurred: ", err);
      });

    // Update staffList after post to back-end
    setStaffList((prev) => [...prev, staff]);
    setShow(false);
  }

  // Only reset 2 state below when popup is closed
  useEffect(() => {
    setFormData({
      name: "",
      dob: "",
      startDate: "",
    });
    setErrorMessage({
      forName: "",
      forDob: "",
      forStartDate: "",
    });
  }, [show]);

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
        <form onSubmit={(e) => handleAddNewStaff(e)}>
          <Modal.Header closeButton>
            <Modal.Title>Add new staff</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="container-fluid">
              <div className="row">
                <div className="col-5">
                  <p>Name </p>
                </div>
                <div
                  className="col-7"
                  style={{ padding: "5px", marginTop: "0px" }}
                >
                  <input
                    name="name"
                    type="text"
                    style={{ width: "13vw" }}
                    onChange={(e) => handleInputChange(e, "name", "forName")}
                  />
                  <p className="text-danger">{errorMessage.forName}</p>
                </div>
              </div>
              <div className="row">
                <div className="col-5">
                  <p>Date of birth </p>
                </div>
                <div
                  className="col-7"
                  style={{ padding: "5px", marginTop: "0px" }}
                >
                  <input
                    name="dob"
                    type="date"
                    style={{ width: "13vw" }}
                    onChange={(e) => handleInputChange(e, "dob", "forDob")}
                  />
                  <p className="text-danger">{errorMessage.forDob}</p>
                </div>
              </div>
              <div className="row">
                <div className="col-5">
                  <p>Start date </p>
                </div>
                <div
                  className="col-7"
                  style={{ padding: "5px", marginTop: "0px" }}
                >
                  <input
                    name="startDate"
                    type="date"
                    style={{ width: "13vw" }}
                    onChange={(e) =>
                      handleInputChange(e, "startDate", "forStartDate")
                    }
                  />
                  <p className="text-danger">{errorMessage.forStartDate}</p>
                </div>
              </div>
              <div className="row">
                <div className="col-5">
                  <p>Department </p>
                </div>
                <div
                  className="col-7"
                  style={{ padding: "5px", marginTop: "0px" }}
                >
                  <input
                    name="department"
                    type="text"
                    style={{ width: "13vw" }}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-5">
                  <p>Salary scale </p>
                </div>
                <div
                  className="col-7"
                  style={{ padding: "5px", marginTop: "0px" }}
                >
                  <input
                    name="salaryScale"
                    type="text"
                    style={{ width: "13vw" }}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-5">
                  <p>Annual leave </p>
                </div>
                <div
                  className="col-7"
                  style={{ padding: "5px", marginTop: "0px" }}
                >
                  <input name="leave" type="text" style={{ width: "13vw" }} />
                </div>
              </div>
              <div className="row">
                <div className="col-5">
                  <p>Overtime </p>
                </div>
                <div
                  className="col-7"
                  style={{ padding: "5px", marginTop: "0px" }}
                >
                  <input
                    name="overtime"
                    type="text"
                    style={{ width: "13vw" }}
                  />
                </div>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" type="submit">
              Add
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
}

export default AddStaff;
