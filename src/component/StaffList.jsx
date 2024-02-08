import axios from "axios";
import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";

function StaffList({ api, setStaffDetail }) {
  const [staffList, setStaffList] = useState([]);
  const [search, setSearch] = useState("");
  const [searchList, setSearchList] = useState([]);

  useEffect(() => {
    axios
      .get(api)
      .then((res) => {
        setStaffList(res.data);
      })
      .catch((err) => {
        console.log("Error occurred: ", err);
      });
  }, []);

  function searchStaff() {
    setSearchList(
      staffList.filter((staff) => {
        if (search.toLowerCase() === "") {
          // Handle empty search box case
          return staff;
        } else if (staff.name.toLowerCase().includes(search.toLowerCase())) {
          return staff;
        }
      })
    );
  }

  const displayList = searchList.length > 0 ? searchList : staffList;

  return (
    <div>
      <div className="search-box d-flex justify-content-end mt-3">
        <input
          placeholder="Search staffs"
          type="text"
          className="mx-3"
          onChange={(event) => setSearch(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              searchStaff();
            }
          }}
        />
        <button className="btn btn-primary" onClick={() => searchStaff()}>
          Search
        </button>
      </div>
      <hr />
      <div className="staff-list mx-3">
        <div className="row">
          {displayList &&
            displayList.length > 0 &&
            displayList.map((staff) => (
              <div key={staff.id} className="wrapper col-6 col-md-4 col-lg-2">
                <div className="staff-detail border border-dark rounded-1 mt-3">
                  <Link
                    to={`staffs/${staff.id}`}
                    className="nav-link"
                    onClick={() => setStaffDetail(staff)}
                  >
                    <img
                      className="img-fluid"
                      src={staff.image}
                      alt="Staff image"
                    />
                    <div className="text-center mt-2">
                      <p>{staff.name}</p>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default StaffList;
