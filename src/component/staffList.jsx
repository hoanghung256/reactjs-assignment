import { React } from 'react';
import { Link } from 'react-router-dom';

function StaffList({ staffs, setState }) {
  function setDetail(staff) {
    setState(staff)
  }
  
  return (
    <div className='staff-list mx-3'>
      <div className='row'>
        {staffs.map(staff =>
          <div key={staff.id} className='wrapper col-sm-6 col-md-4 col-lg-2'>
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
  );
}

export default StaffList;