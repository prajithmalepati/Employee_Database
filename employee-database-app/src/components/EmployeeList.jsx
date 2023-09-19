
import React, { useEffect, useState } from 'react';

function EmployeeList() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    async function fetchEmployees() {
      try {
        const response = await fetch('http://localhost:5000/employees', {headers: {
          'Accept': 'application/json',
        },});
        if (response.ok) {
          const employeesData = await response.json();
          setEmployees(employeesData);
        }
      } catch (error) {
        console.error('Error fetching employees:', error);
      }
    }

    fetchEmployees();
  }, []);

  return (
    <div>
      <h2>Employee List</h2>
      <ul>
        {employees.length === 0 ? (
          <li>No employees to display</li>
        ) : (
          employees.map((employee) => (
            <li key={employee.employee_id}>
              ID: {employee.employee_id}, Name: {employee.employee_name}
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default EmployeeList;
