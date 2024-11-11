import React, { useState, useEffect } from 'react';

//Component
import * as EmployeeServer from './EmployeeServer';
import EmployeeItem from './EmployeeItem';

const EmployeeList = () => {
    const [employees, setEmployees] = useState([]);

    const listEmployees = async () => {
        try {
            const res = await EmployeeServer.listEmployees();
            const data = await res.json();
            setEmployees(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        listEmployees();
    }, []);

    return (
        <div className="row">
            {employees.map((employee) => (
                <EmployeeItem key={employee.id} employee={employee} listEmployees={listEmployees} />
            ))}</div>
    )

};

export default EmployeeList;


