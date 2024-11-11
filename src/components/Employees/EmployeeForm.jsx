import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';


import * as EmployeeServer from './EmployeeServer';

const EmployeeForm = () => {
    const navigate = useNavigate();
    const params = useParams();
    const initialState = { id: 0, name: '', email: '', phone: '' };
    const [employee, setEmployee] = useState(initialState);
    const handleChange = (event) => {
        setEmployee({ ...employee, [event.target.name]: event.target.value })
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            let res;
            if (!params.id) {
                res = await EmployeeServer.registerEmployee(employee);
                const data = await res.json();
                if (data.message === 'Succces') {
                    setEmployee(initialState);
                }
            } else {
                res = await EmployeeServer.updateEmployee(params.id, employee);
                const data = await res.json();
                if (data.message === 'Succces') {
                    setEmployee(initialState);
                }
            }

            navigate('/');

        } catch (error) {
            console.error(error);
            alert('An error occurred while submitting the form');
        }
    };

    const getEmployee = async (employeeId) => {
        try {
            let res;
            res = await EmployeeServer.getEmployee(employeeId);
            const data = await res.json();
            const { name, email, phone } = data;
            setEmployee({ name, email, phone });

        } catch (error) {
            console.error(error);
            alert('An error occurred while fetching the employee');
        };
    };

    useEffect(() => {
        console.log("Params ID:", params.id);
        if (params.id) {
            getEmployee(params.id);
        }
        //Así desactivamos algun warning de eslint
        // eslint-disable-next-line 
    }, [])

    return (
        <div className="col-md-3 mx-auto">
            <h2 className="mb-3 text-center">Employee</h2>

            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        name="name"
                        minLength="2"
                        maxLength="50"
                        autoFocus
                        required
                        value={employee.name}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                        type="email"
                        name="email"
                        className="form-control"
                        maxLength="100"
                        required
                        value={employee.email}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">phone</label>
                    <input
                        type="text"
                        className="form-control"
                        name="phone"
                        required
                        value={employee.phone}
                        onChange={handleChange}
                    />
                </div>
                <div className="d-grid gap-2">
                    {params.id ? (
                        <button type="submit" className="btn btn-dark btn-block">
                            Update
                        </button>
                    ) : (
                        <button type="submit" className="btn btn-danger btn-block">
                            Register
                        </button>
                    )}
                </div>
            </form>
        </div>
    )
};


export default EmployeeForm;