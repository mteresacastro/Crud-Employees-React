import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

//Components
import Navbar from './components/Navbar/Navbar';
import EmployeeList from './components/Employees/EmployeeList';
import EmployeeForm from './components/Employees/EmployeeForm';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'sweetalert2/dist/sweetalert2.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Navbar />
    <div className="container my-1">
      <Routes>
        <Route path="/" element={<EmployeeList />} />
        <Route path="/employeeForm" element={<EmployeeForm />} />
        <Route path="/updateEmployee/:id" element={<EmployeeForm />} />
      </Routes>
    </div>
    
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
