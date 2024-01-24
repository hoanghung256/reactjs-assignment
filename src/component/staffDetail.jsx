import React from 'react'


function StaffDetail(staff) {
  console.log(staff);
  return (
    <div>
      <div>
        {staff.name}
      </div>
      <div>
        {staff.doB}
      </div>
    </div>
  )
}
export default StaffDetail;