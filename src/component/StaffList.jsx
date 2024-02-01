import { React, useState } from 'react';
import { Link } from 'react-router-dom';

function StaffList({ staffs, setStaffDetail }) {
  const [staffList, setStaffList] = useState(staffs)
  const [search, setSearch] = useState('')

  function searchStaff() {
    setStaffList(staffs.filter((staff) => {
      if (search.toLowerCase() === '') {  // Handle empty search box case
        return staff
      } else if (staff.name.toLowerCase().includes(search.toLowerCase())) {
        return staff
      }
    }))
  }

  return (
    <div>
      <div className='search-box d-flex justify-content-end mt-3'>
          <input placeholder='Search staffs' type="text" className='mx-3' onChange={(event) => setSearch(event.target.value)}/>
          <button className='btn btn-primary' onClick={() => searchStaff()}>Search</button>
      </div>
      <hr />
      <div className='staff-list mx-3'>
        <div className='row'>
          {staffList.map(staff =>
              <div key={staff.id} className='wrapper col-6 col-md-4 col-lg-2'>
                <div className='staff-detail border border-dark rounded-1 mt-3'>
                  <Link to={`staffs/${staff.id}`} className='nav-link' onClick={() => setStaffDetail(staff)}>
                    <img className='img-fluid' src={staff.image} alt="Staff image" />
                    <div className='text-center mt-2'>
                      <p>{staff.name}</p>
                    </div>
                  </Link>
                </div>
              </div>
            )}
        </div>
      </div>
    </div>
  );
}

export default StaffList;
