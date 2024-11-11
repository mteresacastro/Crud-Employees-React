const API_URL = 'https://stackcodelab.com/api-employees/';

export const listEmployees = async () => {
 return await fetch(API_URL);
};

export const getEmployee = async (employeeId) => {
    return await fetch(`${API_URL}${employeeId}`);
};

export const registerEmployee = async (newEmployee) => {
    return await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: String(newEmployee.name).trim(),
            email: String(newEmployee.email).trim(),
            phone: String(newEmployee.phone).trim(),

        }),
    });
};

export const updateEmployee = async (employeeId, updatedEmployee) => {
    return await fetch(`${API_URL}${employeeId}`,{
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: String(updatedEmployee.name).trim(),
            email: String(updatedEmployee.email).trim(),
            phone: String(updatedEmployee.phone).trim(),
        }),
    });
};

export const deleteEmployee = async (employeeId) => {
 return await fetch(`${API_URL}${employeeId}`, {
    method: 'DELETE',
 });
};


