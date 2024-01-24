import React, {useState} from 'react';
import StaffDetail from './staffDetail';

function StaffList(params) {
  const [staffDetail, setStaffDetail] = useState(null)

  function showStaffDetail(staff) {
    console.log(staff)
    setStaffDetail(staff)
  }

  function validateDetail(staffDetail, currentStaff) {
    if (staffDetail !== null && staffDetail.id === currentStaff.id) {
      return (
        <StaffDetail staff={staffDetail}/>
      )
    }
  }

  return (
      <div className='staff-list'>
        {params.staffs.map(staff => 
          <div key={staff.id} className='wrapper'>
              <div className='staff-detail' onClick={() => showStaffDetail(staff)}>
                <p>{staff.name}</p>
                
                {validateDetail(staffDetail, staff)}
              </div>
          </div>
        )}
      </div>
  )
}

export default StaffList