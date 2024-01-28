import React from 'react'
import { Link } from 'react-router-dom'
import { DEPARTMENTS } from '../data/departments'

function StaffDetail({ staff }) {
    function getStaffDepartment(departmentId) {
        return (
            DEPARTMENTS.find(dept => dept.id === departmentId).name
        )
    }

    return (
        <div className='gap-5 mx-5'>
            <div className='d-flex'>
                <Link to="/" className='text-dark'>staffs</Link>
                <p>/ {staff.name}</p>
            </div>
            <div className='d-flex mt-3'>
                <div>
                    <img src={staff.image} width="200px" alt="Staff image" />
                </div>
                <div>
                    <strong>Full name: {staff.name}</strong>
                    <div className='mx-2'>
                        <p>Date of birth: {new Date(staff.doB).toLocaleDateString("en-US")}</p>
                        <p>Start date: {new Date(staff.startDate).toLocaleDateString("en-US")}</p>
                        <p>Department: {getStaffDepartment(staff.departmentId)}</p> 
                        <p>Annual leave: {staff.annualLeave}</p>
                        <p>Over time: {staff.overTime}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StaffDetail