function SalaryReport({ staffs }) {
    const salaryPerDay = 100000
    const overTimeSalary = 200000

    // Assume that calculate salary formula is : work day * salary per day + hours of overtime * salary per overtime hour
    function calculateSalary(staff) {
        let formatter = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' });
        let salary = (30 - staff.annualLeave) * salaryPerDay + staff.overTime * overTimeSalary;
        return formatter.format(salary)
    }
    
    return (
        <div className="row mx-3">
            {staffs.map(staff =>
                <div className="col-sm-6 col-md-4 col-lg-3 mt-3" key={staff.id}>
                    <div className=" border border-dark rounded-1">
                        <h4 className="mx-1">{staff.name}</h4>
                        <div className="mx-3">
                            <p>ID: {staff.id}</p>
                            <p>Salary scale: {staff.salaryScale}</p>
                            <p>Overtime: {staff.overTime}</p>
                            <hr />
                            <p>Salary: {calculateSalary(staff)}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default SalaryReport