import React from 'react';

function staffList(params) {
    let staffs = params.staffs.map(staff => {
        return (
            <div>
                staff.name
            </div>
        )
    })
    return (
        <div>
            {staffList}
        </div>
    )
}