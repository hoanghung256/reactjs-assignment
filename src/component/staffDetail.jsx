import React from 'react'


function StaffDetail(s) {
  console.log(s.staff)
  return (
    <div>
      <div>
        {s.staff.name}
      </div>
      <div>
        {s.staff.doB}
      </div>
      <div>
        <img width='100px' src={s.staff.image}/>
      </div>
    </div>
  )
}
export default StaffDetail;