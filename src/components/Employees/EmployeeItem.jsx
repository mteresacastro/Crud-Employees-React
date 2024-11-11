import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';


import { deleteEmployee } from './EmployeeServer';

const EmployeeItem = ({ employee, listEmployees }) => {
    const navigate = useNavigate();
    const handleDelete = async (employeeId) => {
        const result = await Swal.fire({
            title: 'Delete record?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'Cancel',
        });

        if (result.isConfirmed) {
            await deleteEmployee(employeeId);
            listEmployees();
            Swal.fire('Deleted!', 'The record has been deleted.', 'success');
        }
    };

    return (
        <div className="col-md-4 my-4">
            <div className="card card-body">
                <div className="row">
                    <div className="card-content">
                        <h3 className="card-title">
                            {employee.name}
                            <p className="card-text photo-container">
                                <img
                                    src={employee.photo}
                                    alt={employee.name}
                                    className="photo"
                                />
                            </p>
                        </h3>
                    </div>
                </div>
                <div className="row mb-4">
                    <div className="card-content mb-4">
                        <p className="card-button">
                            <button
                                className="btn btn-sm btn-dark ms-2"
                                onClick={() => navigate(`./updateEmployee/${employee.id}`)}
                            >
                                Update
                            </button>
                        </p>
                    </div>
                </div>
                <p className="card-text">
                    Phone: <strong>{employee.phone}</strong>
                </p>
                <p className="card-text mb-4">
                    Email: <strong>{employee.email}</strong>
                </p>
                <Link
                    to={`mailto:${employee.email}`}
                    target="_blank"
                    rel="noopener noreferer"
                    className="btn btn-warning"
                >
                    Send Email
                </Link>
                <button
                    onClick={() => employee.id && handleDelete(employee.id)}
                    className="btn btn-danger my-2"
                >
                    Delete record
                </button>
            </div>
        </div>
    )
}


export default EmployeeItem;