
import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

function EmployeeDetails() {
  const [employee, setEmployees] = useState([]);
  const { idOrName } = useParams();
  const encoded = encodeURIComponent(idOrName);
  const url = `http://localhost:5000/employees/${encoded}`;

  useEffect(() => {
    async function fetchEmployees() {
      try {
        console.log('idOrName:', idOrName);
        const response = await fetch(url, {headers: {
          'Accept': 'application/json',
        },});
        if (response.ok) {
          const employeesData = await response.json();
          setEmployees(employeesData);
        }
      } catch (error) {
        console.error('Error fetching employee:', error);
      }
    }

    fetchEmployees();
  }, [idOrName]);

  return (
    <div>
      <h2>Employee Details</h2>
        <pre>{JSON.stringify(employee, null, 2)}</pre>
    </div>
  );
}

export default EmployeeDetails;
