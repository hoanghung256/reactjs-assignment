import React from 'react'
import { DEPARTMENTS } from '../data/departments'

function StaffDetail(staff) {
    staff = staff.staff

    function getStaffDepartment(departmentId) {
        return (
            DEPARTMENTS.find(dept => dept.id === departmentId).name
        )
    }

    return (
        <div>
            <p>Date of birth: {new Date(staff.doB).toLocaleDateString("en-US")}</p>
            <p>Start date: {new Date(staff.startDate).toLocaleDateString("en-US")}</p>
            <p>Department: {getStaffDepartment(staff.departmentId)}</p>
            <p>Annual leave: {staff.annualLeave}</p>
            <p>Over time: {staff.overTime}</p>
        </div>
    )
}

export default StaffDetail