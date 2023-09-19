
import React, { useState } from 'react';

function UpdateEmployee() {
  const [idOrName, setIdOrName] = useState('');
  const [updatedName, setUpdatedName] = useState('');

  async function updateEmployee(event) {
    event.preventDefault();

    if (!updatedName || /^\s*$/.test(updatedName) || /^\d+$/.test(updatedName)) {
      alert('Please enter a valid non-numeric name.');
      return;
    }

    try {
      const response = await fetch(`http://localhost:5000/employees/${idOrName}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: updatedName }),
      });

      if (response.ok) {
        setIdOrName('');
        setUpdatedName('');
      } else {
        alert('Error updating employee.');
      }
    } catch (error) {
      console.error('Error updating employee:', error);
    }
  }

  return (
    <div>
      <h2>Update Employee</h2>
      <form onSubmit={updateEmployee}>
        <label htmlFor="updateId">Employee ID or Name:</label>
        <input
          type="text"
          id="updateId"
          value={idOrName}
          onChange={(e) => setIdOrName(e.target.value)}
          required
        />
        <label htmlFor="updateName">New Name:</label>
        <input
          type="text"
          id="updateName"
          value={updatedName}
          onChange={(e) => setUpdatedName(e.target.value)}
        />
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default UpdateEmployee;
