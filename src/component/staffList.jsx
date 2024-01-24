
import '../index.css';
import React, { useState } from 'react';
import StaffDetail from './staffDetail';
function StaffList(params) {

  const [staffInfo, setStaffInfo] = useState(null);

  function onclickStaff(staffName) {
    setStaffInfo(params.staffs.find(staff => staff.name === staffName))
    console.log(params.staffs.find(staff => staff.name === staffName))
  }

  return (
    <div>
      <div className='staff-list'>
        {params.staffs.map(staff => {
          return (
            <div key={staff.id} >

              <button onClick={() => onclickStaff(staff.name)}>
                {staff.name}
              </button>
            </div>
          )
        })}
        {/* Only display if staffInfo != null */}
        {staffInfo ? <StaffDetail staff={staffInfo} /> : null}
      </div>
    </div>
  )
}
export default StaffList;