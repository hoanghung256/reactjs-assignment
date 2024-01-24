
import '../index.css';
import React, { useState } from 'react';
import StaffDetail from './staffDetail';
function StaffList(params) {

  const [staffInfo, setStaffInfo] = useState(0);


  let staffs = params.staffs.map(staff => {
    function onclickStaff(staff) {
      console.log(staff);
      // setStaffInfo(staff)
    }
    return (
      <div key={staff.id} onClick={onclickStaff(staff)}>
        {staff.name}
      </div>
    )
  })

  return (
    <div>
      <div className='staff-list'>
        {staffs}
      </div>
      <StaffDetail staff={staffInfo} ></StaffDetail>
    </div>
  )
}
export default StaffList;