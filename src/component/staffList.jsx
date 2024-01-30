import { React, useState } from 'react';
import { Link } from 'react-router-dom';

function StaffList({ staffs, setState }) {
  const [search, setSearch] = useState('')

  function setDetail(staff) {
    setState(staff)
  }

  return (
    <div>
      <div className='search-box d-flex justify-content-end mt-3'>
          <input placeholder='Search staffs' type="text" className='mx-3' onChange={(event) => setSearch(event.target.value)}/>
      </div>
      <hr />
      <div className='staff-list mx-3'>
        <div className='row'>
          {staffs.filter((staff) => {
            if (search.toLowerCase() === '') {  // Handle empty search box case
              return staff
            } else if (staff.name.split(' ').pop().toLowerCase() === search.toLowerCase()) {
              return staff
            }
          }).map(staff =>
              <div key={staff.id} className='wrapper col-6 col-md-4 col-lg-2'>
                <div className='staff-detail border border-dark rounded-1 mt-3'>
                  <Link to={`staffs/${staff.id}`} className='nav-link' onClick={() => setDetail(staff)}>
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