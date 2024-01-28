function SalaryReport({ staffs }) {
    const salaryPerDay = 100000
    const overTimeSalary = 200000
    return (
        <div className="row mx-3">
            {staffs.map(staff =>
                <div className="col-sm-6 col-md-4 col-lg-3 mt-3">
                    <div className=" border border-dark rounded-1">
                        <h4 className="mx-1">{staff.name}</h4>
                        <div className="mx-3">
                            <p>ID: {staff.id}</p>
                            <p>Salary scale: {staff.salaryScale}</p>
                            <p>Overtime: {staff.overTime}</p>
                            <hr />
                            <p>Salary: {(30-staff.annualLeave)*salaryPerDay+staff.overTime*overTimeSalary} VND</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default SalaryReport