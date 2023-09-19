
import React, { useState } from 'react';

function DeleteEmployee() {
  const [idOrName, setIdOrName] = useState('');

  async function deleteEmployee(event) {
    event.preventDefault();

    try {
      const response = await fetch(`http://localhost:5000/employees/${idOrName}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setIdOrName('');
      } else {
        alert('Error deleting employee.');
      }
    } catch (error) {
      console.error('Error deleting employee:', error);
    }
  }

  return (
    <div>
      <h2>Delete Employee</h2>
      <form onSubmit={deleteEmployee}>
        <label htmlFor="deleteId">Employee ID or Name:</label>
        <input
          type="text"
          id="deleteId"
          value={idOrName}
          onChange={(e) => setIdOrName(e.target.value)}
          required
        />
        <button type="submit">Delete</button>
      </form>
    </div>
  );
}

export default DeleteEmployee;
